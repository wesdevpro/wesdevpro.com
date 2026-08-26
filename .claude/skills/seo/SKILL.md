---
name: seo
description: SEO conventions for this Nuxt 4 site — per-page meta tags, sitemap/robots modules, and how @nuxt/content frontmatter feeds SEO. Use when adding a new page or content collection, editing titles/descriptions/og:image, or touching sitemap/robots behavior.
---

# SEO in this repo

Every route-level page sets its own meta explicitly with `useSeoMeta()` — there's no generic
fallback beyond the title template in `app.vue`. Follow the existing pattern rather than inventing
a new one.

## When to use

- Adding a new page under `app/pages/`
- Adding a new `@nuxt/content` collection or changing its frontmatter schema
- Anything touching `<meta>`/OG/Twitter tags, `@nuxtjs/sitemap`, or `@nuxtjs/robots`

## The per-page pattern

Every page in `app/pages/` calls `useSeoMeta()` in `<script setup>` with the same six keys, e.g.
[about.vue](../../../src/app/pages/about.vue):

```ts
useSeoMeta({
  title: 'About',
  description: '...',
  ogTitle: 'About · wesdevpro',
  ogDescription: '...',
  ogImage: '/images/wesdevpro-banner.jpg',
  twitterCard: 'summary_large_image'
})
```

- `title` is plain (no site name) — [app.vue](../../../src/app/app.vue) sets
  `useHead({ titleTemplate: '%s · wesdevpro' })` globally, so every page's `<title>` gets the
  suffix automatically. Never hardcode "· wesdevpro" into a page's `title`, only into `ogTitle`
  (OG doesn't use the title template).
- `ogImage` falls back to the site-wide `/images/wesdevpro-banner.jpg`
  (`public/images/wesdevpro-banner.jpg`) on every page that doesn't have its own cover image.
- `twitterCard: 'summary_large_image'` is used everywhere — keep it consistent unless a page has a
  specific reason not to (e.g. no image).
- On dynamic/content-backed pages ([blog/[slug].vue](../../../src/app/pages/blog/[slug].vue)),
  every field is a getter (`title: () => post.value?.title || 'Blog Post'`) with a static fallback
  string, not a plain value — required so meta updates reactively once `useAsyncData` resolves, and
  so the tags aren't empty during the loading/not-found state. Copy this pattern for any new
  content-backed dynamic route (e.g. a `projects/[slug].vue` equivalent already does this too).

## Content frontmatter → SEO

[content.config.ts](../../../src/content.config.ts) defines the schema per collection with Zod.
SEO-relevant fields:

- `blog`: `title` (required), `description` (optional — pages fall back to a canned description
  when absent, don't rely on it being there), `coverImage` (optional, falls back to the banner),
  `author` (required, must match a `github` key in the `authors` collection — see
  `blog/[slug].vue`'s `queryCollection('authors').where('github', '=', post.value?.author)`).
- `projects`: `name` (not `title`), `description` (optional), `coverImage` (optional).

When adding a new markdown file under `content/blog/` or `content/projects/`, fill in
`description` and `coverImage` even though the schema allows omitting them — omitting them is
what triggers the generic fallback copy/image, which is worse for SEO/social sharing than a
specific one.

## Sitemap & robots

`@nuxtjs/sitemap` and `@nuxtjs/robots` are registered in
[nuxt.config.ts](../../../src/nuxt.config.ts) with **no explicit options** — both modules run on
their auto-detected defaults (page routes + content collections for the sitemap; permissive robots
via `public/_robots.txt`, which is served as `/robots.txt` — the leading underscore is a Nuxt
public-asset convention, not a typo).

**No `site.url` is configured anywhere** (no `site:` key in `nuxt.config.ts`, no `app.config.ts`,
no env file). Both modules need a canonical site URL to emit fully-qualified `<loc>`/canonical
URLs; without an explicit one they rely on deploy-platform auto-detection (Vercel/Netlify/CI env
vars) at build time. If sitemap entries, canonical tags, or `ogUrl` ever show the wrong domain or
`localhost`, this is the first thing to check — consider adding an explicit
`site: { url: 'https://wesdevpro.com' }` to `nuxt.config.ts` rather than continuing to depend on
auto-detection.

## Common pitfalls

| Pitfall | Fix |
|---|---|
| New page has no `useSeoMeta()` call | Every page needs one — copy the six-key shape from an existing page |
| `title` includes "· wesdevpro" | Don't — `app.vue`'s `titleTemplate` already appends it; only `ogTitle` needs it written out |
| Content-backed page's SEO tags are empty on first render | Use getter functions (`() => post.value?.x || fallback`), not plain values, so meta reacts to `useAsyncData` resolving |
| New content markdown file omits `description`/`coverImage` | Fill them in — omission silently falls back to generic site-wide copy/image |
| Sitemap/canonical URLs look wrong | Check for a missing/incorrect site URL — none is explicitly configured; see the Sitemap & robots section above |
