import type { H3Event } from 'h3'

export interface McpPageEntry {
  id: string
  path: string
  title: string
  description: string
  section: 'static' | 'blog' | 'work'
  tags?: string[]
}

export const mcpPageSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    path: { type: 'string' },
    title: { type: 'string' },
    description: { type: 'string' },
    section: { type: 'string', enum: ['static', 'blog', 'work'] },
    tags: { type: 'array', items: { type: 'string' } },
  },
  required: ['id', 'path', 'title', 'description', 'section'],
} as const

interface StaticPageMeta {
  path: string
  title: string
  description: string
}

/**
 * Static app-router pages have no frontmatter, so title/description are
 * pulled straight from each page's own `useSeoMeta({ title, description })`
 * call via a plain-text scan — that's what keeps this half of the manifest
 * in sync without a hand-maintained list. Only literal string values are
 * matched; pages whose title is computed (e.g. `blog/[slug].vue`) are
 * skipped here because their entries come from the content collection scan
 * in `getContentPages` instead.
 */
async function scanStaticPages(): Promise<StaticPageMeta[]> {
  const { readdir, readFile } = await import('node:fs/promises')
  const { join, relative, sep } = await import('node:path')
  const pagesDir = join(process.cwd(), 'app/pages')

  const files: string[] = []
  async function walk(dir: string) {
    const entries = await readdir(dir, { withFileTypes: true })
    for (const entry of entries) {
      const full = join(dir, entry.name)
      if (entry.isDirectory()) {
        await walk(full)
      } else if (entry.isFile() && entry.name.endsWith('.vue') && !entry.name.includes('[')) {
        files.push(full)
      }
    }
  }
  await walk(pagesDir)

  const pages: StaticPageMeta[] = []
  for (const file of files) {
    const source = await readFile(file, 'utf-8')
    const titleMatch = source.match(/useSeoMeta\(\{[^}]*?title:\s*(['"`])(.*?)\1/s)
    if (!titleMatch) continue

    const descriptionMatch = source.match(/useSeoMeta\(\{[^}]*?description:\s*(['"`])(.*?)\1/s)
    const relPath = relative(pagesDir, file).split(sep).join('/')
    pages.push({
      path: toRoutePath(relPath),
      title: titleMatch[2],
      description: descriptionMatch?.[2] ?? '',
    })
  }
  return pages
}

function toRoutePath(relFile: string): string {
  const withoutExt = relFile.replace(/\.vue$/, '')
  const withoutIndex = withoutExt.replace(/(^|\/)index$/, '')
  return withoutIndex ? `/${withoutIndex}` : '/'
}

/**
 * Blog posts and work/case-study entries each render at a real, distinct
 * route (`[slug].vue`), so they're listed individually. Services render as
 * cards on the single `/services` page rather than their own routes, and
 * authors are page metadata rather than pages, so neither collection is
 * scanned here.
 */
async function getContentPages(event: H3Event): Promise<McpPageEntry[]> {
  const [blogPosts, workItems] = await Promise.all([
    queryCollection(event, 'blog').all(),
    queryCollection(event, 'work').all(),
  ])

  const blogPages: McpPageEntry[] = blogPosts.map((post) => ({
    id: post.path,
    path: post.path,
    title: post.title,
    description: post.description ?? '',
    section: 'blog',
    tags: post.tags,
  }))

  const workPages: McpPageEntry[] = workItems.map((item) => ({
    id: item.path,
    path: item.path,
    title: item.name,
    description: item.description ?? '',
    section: 'work',
    tags: item.tags,
  }))

  return [...blogPages, ...workPages]
}

export async function getAllPages(event: H3Event): Promise<McpPageEntry[]> {
  const [staticPages, contentPages] = await Promise.all([
    scanStaticPages(),
    getContentPages(event),
  ])

  const staticEntries: McpPageEntry[] = staticPages.map((page) => ({
    id: page.path,
    path: page.path,
    title: page.title,
    description: page.description,
    section: 'static',
  }))

  return [...staticEntries, ...contentPages].sort((a, b) => a.path.localeCompare(b.path))
}

export function searchPages(pages: McpPageEntry[], query: string): McpPageEntry[] {
  const q = query.trim().toLowerCase()
  if (!q) return pages
  return pages.filter((page) => {
    const haystack = [page.title, page.description, ...(page.tags ?? [])].join(' ').toLowerCase()
    return haystack.includes(q)
  })
}

const sectionLabels: Record<McpPageEntry['section'], string> = {
  static: 'Site pages',
  blog: 'Blog posts',
  work: 'Work / case studies',
}

export function getSections(pages: McpPageEntry[]) {
  const bySection = new Map<McpPageEntry['section'], McpPageEntry[]>()
  for (const page of pages) {
    const list = bySection.get(page.section) ?? []
    list.push(page)
    bySection.set(page.section, list)
  }

  return Array.from(bySection.entries()).map(([section, items]) => ({
    id: section,
    label: sectionLabels[section],
    count: items.length,
    paths: items.map((item) => item.path),
  }))
}

export async function buildMcpManifest(event: H3Event) {
  const pages = await getAllPages(event)

  return {
    schema_version: '1.0',
    name: 'wesdevpro.com',
    description: 'Wesley Ford (wesdevpro) — websites and systems integration for small businesses. Machine-readable manifest of this site\'s pages and content-lookup actions.',
    site_url: 'https://wesdevpro.com',
    generated_at: new Date().toISOString(),
    pages,
    actions: [
      {
        name: 'list-sections',
        description: 'List the site\'s content sections (static pages, blog, work) with a count and the paths in each.',
        endpoint: '/api/mcp/sections',
        method: 'GET',
        input_schema: {
          type: 'object',
          properties: {},
          additionalProperties: false,
        },
        output_schema: {
          type: 'object',
          properties: {
            sections: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  label: { type: 'string' },
                  count: { type: 'integer' },
                  paths: { type: 'array', items: { type: 'string' } },
                },
                required: ['id', 'label', 'count', 'paths'],
              },
            },
          },
          required: ['sections'],
        },
      },
      {
        name: 'search-content',
        description: 'Search across all pages by keyword, matched against each page\'s title, description, and tags. This site is prerendered to static files with no live backend, so the deployed endpoint always serves its build-time response — an empty `query` (the prerendered default) returns the full page corpus for the agent to filter locally. Run against `nuxt dev`, `query` is matched server-side.',
        endpoint: '/api/mcp/search',
        method: 'GET',
        input_schema: {
          type: 'object',
          properties: {
            query: { type: 'string', description: 'Keyword or phrase to match against title/description/tags.' },
          },
          required: [],
        },
        output_schema: {
          type: 'object',
          properties: {
            query: { type: 'string' },
            results: { type: 'array', items: mcpPageSchema },
          },
          required: ['query', 'results'],
        },
      },
      {
        name: 'get-page-info',
        description: 'Look up a single page\'s metadata by its exact path. Like search-content, the deployed static endpoint has no request-time backend: calling it with no `path` (its prerendered default) returns the full page corpus in `pages` so the agent can match locally; run against `nuxt dev`, a `path` is resolved server-side into `page`.',
        endpoint: '/api/mcp/page-info',
        method: 'GET',
        input_schema: {
          type: 'object',
          properties: {
            path: { type: 'string', description: 'Exact site path, e.g. "/blog/my-post".' },
          },
          required: ['path'],
        },
        output_schema: {
          type: 'object',
          properties: {
            path: { type: ['string', 'null'] },
            page: { ...mcpPageSchema, nullable: true },
            pages: { type: 'array', items: mcpPageSchema, description: 'Present only when `path` did not resolve to a single page server-side.' },
          },
          required: ['path'],
        },
      },
    ],
  }
}
