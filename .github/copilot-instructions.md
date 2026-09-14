# Copilot Instructions

## Purpose

These instructions guide AI-assisted contributions (GitHub Copilot, Copilot Chat, Copilot code review, and coding agents) to the wesdevpro.com repository. They codify Vue 3 / Nuxt 4 best practices, OWASP-aligned security expectations, and this repo's Conventional Commits convention, grounded in the actual code and config in this repo — not generic advice.

Related instruction files:

- `.github/agents/wesdevpro.agent.md` — operating playbook for autonomous coding agents (WSL execution rule, workflow steps). Must stay consistent with this file; this file is the canonical source of truth on conflict.
- `.github/website-style-sheet.md` — visual/content design direction. Apply for UI, copy, and modernization tasks.
- Design/content skills consulted per-task in `.claude/skills/` (`buefy`, `nuxt`, `seo`, `wesdevpro-style`, `writing`) — human/agent-authored guidance that overlaps with this file; treat as complementary, not a substitute.

## Scope and Tech Stack

Single Nuxt app rooted at `src/` (all commands run with `src/` as the working directory / `npm` root — see `package.json` there, not at repo root).

- **Framework**: Nuxt `^4.4.2` (Vue `^3.5.32`, `vue-router` `^5.0.4`), Composition API + `<script setup>` throughout.
- **Content**: `@nuxt/content` `^3.12` with Zod schemas (`src/content.config.ts`), backed by `better-sqlite3`.
- **UI**: Bulma (via `buefy.scss` `@forward`) + Buefy `^3.0.5`, custom CSS tokens (`src/app/assets/styles/tokens.css`), Sass compiled to `buefy.css` by a separate `build:bulma` script — **not** Nuxt's own CSS pipeline.
- **Modules**: `@nuxt/eslint`, `@nuxt/content`, `@nuxtjs/color-mode`, `@nuxtjs/robots`, `@nuxtjs/sitemap`.
- **Rendering/hosting**: Fully static (`nuxt generate`), deployed to Netlify free tier via `nitro.preset: "netlify-static"` (see `netlify.toml` and the preset comment in `src/nuxt.config.ts`). **No Netlify Functions, no live Node server in production.** Anything that assumes a request-time backend (auth, sessions, cookies, form POST handlers, per-request personalization) is out of scope unless the hosting model changes — confirm with Wesley before adding one.
- **Lint**: ESLint `^10.2.0` via `@nuxt/eslint`'s flat config, generated into `src/.nuxt/eslint.config.mjs` and re-exported from `src/eslint.config.mjs`. Don't hand-edit the generated file; add custom rules in `src/eslint.config.mjs`.
- **CI**: `.github/workflows/build-test.yml` runs `npm ci` + `npm run build` from `src/` on push/PR to `main`. Lint and `nuxt generate` are **not yet gated in CI** (see the TODO in that file) — run them locally before proposing changes regardless.

## Repository Layout (Key Paths)

- `src/app/pages/` — file-based routes (`.vue`). Dynamic routes: `blog/[slug].vue`, `work/[slug].vue`.
- `src/app/components/` — flat + `blog/` subfolder; PascalCase filenames, auto-imported.
- `src/app/layouts/default.vue`, `src/app/app.vue` — shell, canonical-URL `useHead`.
- `src/app/plugins/buefy-plugin.ts` — registers Buefy and imports the compiled CSS chain (`tokens.css` → `buefy.css` → `styles.css`); order matters.
- `src/app/app.config.ts` — public runtime app config (e.g. `contactEmail`), safe to expose to the client.
- `src/content/{blog,work,services}/*.md`, `src/content/authors/**.json` — content collections.
- `src/content.config.ts` — Zod schemas for every collection; the single source of truth for frontmatter shape.
- `src/server/api/mcp/*.get.ts`, `src/server/routes/.well-known/mcp.json.ts`, `src/server/utils/mcp.ts` — read-only, agent-discovery JSON endpoints. See `src/server/README.md` for the static-hosting caveat (these serve a build-time snapshot in production; only resolve dynamically under `nuxt dev`).
- `src/nuxt.config.ts` — modules, `routeRules` (redirects + sitemap/robots opt-outs), `nitro.prerender.routes` (routes not linked anywhere and thus invisible to the link-crawler — new unlinked routes must be added here or they 404 post-deploy), Vite `manualChunks`.
- `netlify.toml` — Netlify build config (`base = "src"`, `command = "npm run generate"`, `publish = "dist"`). No `[[headers]]` block currently exists — see Security section.
- `.github/workflows/` — CI.

## Vue 3 Conventions

- Use `<script setup lang="ts">` with the Composition API for all new/edited components. Don't introduce the Options API or non-`setup` `<script>` blocks.
- Type props with `defineProps<{ ... }>()` (or a named `interface`/`type`) instead of runtime prop objects, and type emits with `defineEmits<{ ... }>()`. Avoid `any` in prop/emit types.
- Never mutate a prop directly; if a local, editable copy is needed, copy it into a `ref`/`reactive` in `setup` — don't rely on implicit two-way binding outside `v-model`.
- Use `computed()` for derived state instead of duplicating state with `watch` + a plain `ref`. Reach for `watch`/`watchEffect` only for side effects (data fetching aside — see Nuxt section), not for values that can be computed.
- Preserve reactivity: destructure `props`/`reactive()` objects with `toRefs`/`toRef` rather than plain destructuring when a reactive reference must survive; don't destructure a `ref` and pass the raw value where reactivity is expected.
- Give every `v-for` a stable, unique `:key` (a content `id`/`path`/slug — never the array index unless the list is static and never reordered).
- **Never use `v-html`** with content that isn't fully static and repo-authored. This repo's Markdown content is rendered exclusively through `<ContentRenderer :value="post" />` (see `blog/[slug].vue`, `work/[slug].vue`) — keep it that way rather than introducing manual HTML interpolation of content fields.
- Keep templates declarative: push conditionals/formatting logic (e.g. `formatDate`) into `<script setup>` functions or computed values, not inline template expressions beyond simple property/ternary access.
- Scope component styles with `<style scoped>` (the existing convention throughout `src/app/components` and `src/app/pages`); use the CSS custom properties in `tokens.css` rather than new hard-coded colors/spacing.
- External anchor links that open a new tab must carry `rel="noopener"` (add `noreferrer` too for links to untrusted third-party origins) — follow the existing pattern in `contact.vue`.

## Nuxt 4 Conventions

- Let Nuxt's auto-imports do their job: don't manually import `ref`, `computed`, `useRoute`, `useAsyncData`, components under `app/components/`, etc. Only import things that aren't auto-imported (e.g. named component imports crossing subfolders like `AuthorCard` in `blog/[slug].vue`, or Node built-ins in `server/`).
- **`useAsyncData`/`useFetch` keys must be globally unique across the app**, not just within one component — its cache is app-wide and Vue Router reuses component instances across dynamic-route navigations. Use a key derived from the route (`` `blog-post:${route.path}` ``, not a bare `'post'`) and pass `{ watch: [() => route.path] }` (or a dependent ref) whenever the query depends on route/reactive state. This exact bug (`'post'` colliding between `blog/[slug].vue` and `work/[slug].vue`, and stale data across in-page navigations) was already fixed once in this repo — don't reintroduce it.
- Prefer `useSeoMeta()` over manually pushing `<meta>` tags, and prefer the function form of `useHead()` (`useHead(() => ({...}))`) whenever the content depends on async/reactive data, so it re-resolves on client-side navigation — see `app.vue`'s canonical-URL handling and `blog/[slug].vue`'s JSON-LD.
- When emitting `application/ld+json` or any script content via `useHead`, always build it with `JSON.stringify(...)` on a plain object — never string-concatenate untrusted or content-sourced values into `innerHTML`.
- Guard any browser-only API (`window`, `document`, `localStorage`) behind `onMounted()`, a `<ClientOnly>` wrapper, or `import.meta.client` — this site prerenders to static HTML, so anything that assumes a DOM at module-eval or `setup()` time breaks SSR/prerender.
- Content collection changes are schema-first: update `src/content.config.ts`'s Zod schema, then update every consuming query/component/page, then update the actual `.md`/`.json` content files. Don't let frontmatter drift from the schema silently — Nuxt Content will coerce/validate at build time, but a field renamed only in content files fails silently at read time (`undefined`, not a build error) if the schema key isn't renamed too.
- Any new route not linked from another page (a card, nav item, sitemap entry) must be added to `nitro.prerender.routes` in `src/nuxt.config.ts` or it will not exist in the generated static output — see the existing comment there for precedent (`/projects/*` redirect targets, the `.well-known`/`api/mcp` agent-discovery routes).
- New `routeRules` redirects rely on the `netlify-static` preset to emit real Netlify `_redirects` (true 301s); don't assume a generic static host without checking `netlify.toml`/the preset comment first.
- New content that should never appear in a listing/sitemap without being deleted uses the collection's own `offline`/`concept` boolean flags (see `work` schema) plus a matching `routeRules` `{ sitemap: false, robots: false }` entry (see `/work/bluebird-theatre`) — follow that pattern rather than inventing a new suppression mechanism.
- Server routes (`server/api/**`, `server/routes/**`) run under Nitro/H3. Type handlers with `H3Event` from `h3`. Remember production is prerendered — a server route here only ever returns its **build-time** response in production (no request-time computation), so don't add logic that assumes per-request behavior without re-reading `src/server/README.md`'s static-hosting caveat first.

## Security (OWASP-Aligned)

Apply these when touching any code that renders untrusted/external data, handles user input, adds a dependency, or changes deployment/build config. This is a low-attack-surface static site (no auth, no database writes, no user accounts) — most residual risk is XSS-by-content, dependency supply chain, and missing security headers.

- **A03 Injection / XSS**
  - No `v-html`, no `innerHTML` assignment, and no manually-built `<script>`/`<style>` tags from anything other than `JSON.stringify()`'d plain data (see Vue/Nuxt sections above).
  - Content rendering stays exclusively through `<ContentRenderer>`/`@nuxt/content`'s own markdown pipeline (remark/rehype, already sandboxed) — don't add a second, hand-rolled markdown-to-HTML path.
  - Content collection queries go through `queryCollection(...)`'s typed builder (`.path()`, `.where()`, etc.) — never construct or execute raw SQL against the underlying `better-sqlite3` file, and never interpolate request input into a query string.
  - Any future `server/api` route that accepts user input (query params, POST body) must validate/parse it (Zod, matching the pattern already used for content schemas) before using it — don't trust `getQuery()`/`readBody()` values as pre-validated, even for read-only endpoints.
- **A05 Security Misconfiguration**
  - `netlify.toml` currently has no `[[headers]]` block. When adding one (or touching deploy config), include baseline hardening headers — `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` trimmed to what's actually used, and a `Content-Security-Policy` scoped to this site's real origins (self + `fonts.googleapis.com`/`fonts.gstatic.com` for the Google Fonts links in `nuxt.config.ts`, plus Netlify's own asset origin). Treat this as a known gap to close opportunistically, not something to silently work around.
  - Don't add new third-party script/style/font origins without also considering the CSP implication once one exists; keep the external-origin list in `app.head.link` (`nuxt.config.ts`) as the inventory of what's actually allowed to load.
  - Keep `sourcemap.client: false` (already set) — don't flip client sourcemaps on for production builds; that ships app source structure to end users unnecessarily.
- **A08 Software and Data Integrity**
  - `package-lock.json` (in `src/`) is committed and CI uses `npm ci` — never hand-edit the lockfile; regenerate it via `npm install`/`npm update` and let the user run that (see project memory: the user runs `npm install`/build commands themselves, not Claude/Copilot, due to a prior WSL vs. native-Windows `better-sqlite3` native-module mismatch).
  - Pin new dependency versions the way existing ones are pinned (caret ranges in `package.json`); don't add a dependency with a `latest`/unpinned tag.
  - Prefer zero new dependencies for problems solvable with existing stack primitives (Nuxt/Vue built-ins, Bulma/Buefy, `@nuxt/content`) — this repo deliberately avoids stack swaps (locked decision: no Tailwind, no component-library swap, no new build system).
- **A02 Cryptographic Failures / Secrets**
  - `.env`/`.env.*` are already gitignored (`!.env.example` allowed) — never commit real secrets, tokens, or API keys, and never hardcode them in `nuxt.config.ts`, `app.config.ts`, or any client-bundled file. If a future feature needs a secret (e.g. the mooted Cloudflare Worker form backend), it belongs server-side/in the external worker, never in `runtimeConfig.public` or `app.config.ts` (both ship to the client).
  - The contact form (`contact.vue`) is currently a client-only stub with **no network call** by design — do not wire it to a real endpoint without also adding server-side validation/rate-limiting at that endpoint; client-side validation alone (current `fieldErrors` checks) is a UX nicety, never a security boundary.
- **A01 Broken Access Control**
  - All current `server/api` routes are unauthenticated, read-only `GET` endpoints serving public content (`sections`, `search`, `page-info`) — keep any new endpoint in that category unless there's an explicit reason (and a design discussion) to add mutation or authenticated behavior.
- **Dependency/asset hygiene**
  - Images/assets committed under `src/app/assets/images/` should be repo-owned or explicitly licensed; don't script-fetch remote assets into the repo without checking provenance.
  - Keep `target="_blank"` links paired with `rel="noopener"` (`noreferrer` for third-party/untrusted destinations) everywhere, not just in files already following it.

## Nuxt Content Rules

- Keep collection schema (`src/content.config.ts`) and content files synchronized; a schema change and its content-file migration land together, not as separate follow-ups.
- Validate collection usage in pages/components whenever renaming or removing a field — search for every `queryCollection(...)` call and template reference before considering a rename complete.
- Prefer consistent author (`authors` collection, keyed by GitHub handle) and taxonomy (`tags`) references across content files.
- Respect field-level intent already encoded in schema comments in `content.config.ts` (e.g. never author a placeholder `testimonial`/`stat`, omit `startingPrice` rather than write a placeholder string, `client` omitted for non-client work) — these are content-integrity rules, not just types.

## Accessibility

- Every interactive control needs an accessible name (`label-for`/matching `id`, or `aria-label`) — follow the `b-field`/`b-input` `id` + `label-for` pairing already used in `contact.vue`.
- Wire validation errors with `aria-invalid` + `aria-describedby` pointing at the visible error message's `id`, and give error/success regions `role="alert"`/`role="status"` with a focus target (`tabindex="-1"` + `.focus()` on state change) — mirror the existing `contact.vue` pattern rather than a new one.
- Preserve desktop and mobile behavior for any navigation/layout change; check both breakpoints before proposing a change complete.
- Maintain visible focus states (`outline: var(--focus-ring)` tokens already defined) — don't suppress `:focus`/`:focus-visible` outlines.

## Styling and Theming

- For any UI, theming, or Buefy/Bulma work, load and follow the `.claude/skills/buefy` skill and `.github/website-style-sheet.md` before editing SCSS/tokens.
- Update color/spacing/type tokens in `src/app/assets/styles/tokens.css` first; component-level overrides come only after the token doesn't cover the case.
- Never hand-edit `src/app/assets/styles/buefy.css` or `buefy.css.map` — they're generated by `npm run build:bulma` from `src/app/assets/sass/buefy.scss`. Edit the `.scss` source and regenerate.
- Keep `cssMinify: "esbuild"` in `nuxt.config.ts`'s Vite config unless the underlying Bulma CSS-custom-property-in-media-query issue (see the inline comment) is independently fixed upstream — don't "clean up" that pin without understanding why it's there.

## Typing and Safety

- Avoid introducing new `any`; prefer precise types derived from content collection schemas (`z.infer<typeof schema>` shape, or the types Nuxt Content generates) and component prop/emit types.
- Keep TypeScript types close to data boundaries (props, content query results, server route responses) rather than re-declaring ad hoc shapes deep in a component.
- Minimize `@ts-expect-error`/`eslint-disable` suppressions; when one is necessary, keep it on the narrowest possible line with a one-line reason.

## Linting and Validation (Mandatory Before Proposing Changes)

Run from `src/`:

1. `npm run dev` — runtime smoke check.
2. `npm run lint` (`eslint .`, flat config via `@nuxt/eslint`) — must be clean, or any pre-existing failures explicitly called out as pre-existing.
3. `npm run build` (runs `build:bulma` then `nuxt build`) and/or `npm run generate` when the change affects prerendering, routing, or anything CI's `build-test.yml` gate would catch.

If full validation isn't possible in the current environment, state explicitly: which commands ran, which didn't, why, and the risk of what wasn't checked. Do not run `npm install`/lockfile-mutating commands or cross-environment (WSL/native) reinstalls on the user's behalf — surface the diagnosis and let them run it.

## Documentation Impact Assessment (Mandatory)

For every change, decide whether docs/content need updating. Required when the change is user-visible:

- Navigation/menu/page structure changes.
- SEO metadata behavior changes (`useSeoMeta`, JSON-LD, sitemap/robots rules).
- Theme/token/styling contract changes.
- Content model changes (frontmatter/schema/author metadata).
- Setup/build/dependency workflow changes.

If no doc/content update is needed, state why in the final report.

## Commenting Standards

Reference: https://stackoverflow.blog/2021/12/23/best-practices-for-writing-code-comments/

- Comment to explain rationale or a non-obvious trade-off/workaround (this repo already does this well — see the `nuxt.config.ts` and `content.config.ts` inline comments as the house style to match), not to restate what the code already says.
- Remove stale comments and debug logs while editing nearby code.
- Use `TODO(name)`/`FIXME(name)` for tracked follow-up work, matching the existing `TODO(wesley): ...` convention.

## Change Hygiene

- Keep unrelated files untouched; don't reformat code you didn't need to touch.
- Keep import paths and naming consistent with local patterns (`~/components/...` alias usage, PascalCase component files, kebab-case content slugs).
- Report known pre-existing issues discovered during implementation rather than silently fixing or silently ignoring them.

## Commit Message Standards

This repo uses Conventional Commits (https://www.conventionalcommits.org/), scope optional — match the actual history (`git log`), which is mostly scopeless (`chore: ...`, `fix: ...`) with scope used only when it disambiguates a specific area (`feat(work): ...`, `fix(build): ...`):

```
<type>(<optional-scope>): <subject>

<body>

<footer>
```

Subject rules:

- Imperative mood ("add", not "added"/"adds").
- Lowercase first word.
- No trailing period.
- Prefer <= 50 characters; the subject line describes the *why*/outcome, not a file listing.
- Common types in this repo: `feat`, `fix`, `chore`, `docs`, `refactor`, `style`, `build`, `ci`, `test`.
- Useful scopes when needed: `work`, `blog`, `services`, `content`, `theme`, `seo`, `build`, `ci`, `server`.
- Body/footer explain motivation and effects, not a mechanical diff summary; reference issues in the footer when applicable.

## External References

- Nuxt docs: https://nuxt.com/docs
- Nuxt Content docs: https://content.nuxt.com
- Vue 3 docs: https://vuejs.org/guide/
- Bulma docs: https://bulma.io/documentation/
- Buefy docs: https://buefy.org
- OWASP Top 10: https://owasp.org/www-project-top-ten/
- OWASP Cheat Sheet Series (Vue/SPA-relevant): https://cheatsheetseries.owasp.org/
- Conventional Commits: https://www.conventionalcommits.org/

## Reporting Format for Completed Work

When done, include:

1. Files changed.
2. Behavior/content changes.
3. Validation commands run and outcomes.
4. Docs/content impact decision.
5. Security-relevant considerations touched (or "none applicable") for changes that render external/user-derived data, add a dependency, or touch deploy config.
6. Remaining risks or follow-ups.
