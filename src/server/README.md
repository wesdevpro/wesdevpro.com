# Agent-discovery manifest

This site publishes a machine-readable manifest at
[`/.well-known/mcp.json`](.well-known/mcp.json.ts) describing its pages and a
small set of read-only actions an AI agent can call to navigate the site's
content, in a style inspired by MCP tool definitions (name, description,
JSON Schema input/output).

## How an agent should use it

1. **Fetch the manifest**: `GET https://wesdevpro.com/.well-known/mcp.json`.
   It returns `pages` (every static page, blog post, and work/case-study
   entry, each with `path`, `title`, `description`, `section`) and `actions`
   (each with an `endpoint`, `method`, `input_schema`, `output_schema`).
2. **Call an action** by making the request its schema describes:
   - `list-sections` → `GET /api/mcp/sections` — grouped counts and paths
     per section (`static`, `blog`, `work`).
   - `search-content` → `GET /api/mcp/search?query=<keyword>` — pages whose
     title/description/tags match `query`.
   - `get-page-info` → `GET /api/mcp/page-info?path=<exact path>` — metadata
     for one page.

## The static-hosting caveat

This site is prerendered to static files (`nitro.preset: "netlify-static"`
in `nuxt.config.ts`) with no serverless function or live server in
production — see the comment on that setting. A prerendered endpoint can
only ever serve the one response it was built with, so on the deployed
site `search-content` and `get-page-info` always return their **build-time
default**: the full page corpus, unfiltered, in `results` / `pages`. An
agent should fetch that corpus once and do its own matching against
`query` or `path` locally.

If you run `nuxt dev` (or ever move this site to a preset with a live
backend), the same endpoints do resolve `query`/`path` server-side and
return just the matching page(s) — the manifest's `input_schema`/
`output_schema` for each action describe that live shape.

`list-sections` has no dynamic input, so it behaves identically in both
cases.

## Keeping it in sync

`pages` is generated on every build, not hand-maintained:

- Static routes (`app/pages/**/*.vue`, skipping dynamic segments) are
  scanned for their own `useSeoMeta({ title, description })` call.
- Blog and work entries come from the `blog` and `work` `@nuxt/content`
  collections (`content.config.ts`), keyed by each entry's real route.

See `server/utils/mcp.ts` for the implementation.
