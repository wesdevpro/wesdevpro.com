---
name: nuxt
description: How this Nuxt 4 site is structured — directory layout, module list, content collections, vendor chunking, and plugin registration conventions. Use when adding pages/components/plugins, wiring up a new module, or touching nuxt.config.ts / content.config.ts.
---

# Nuxt conventions in this repo

This is a Nuxt 4 project (`srcDir` layout: everything app-level lives under `src/app/`, config
files live at `src/`). Vue 3.5 + `vue-router` 5, no Pinia/state library, no `server/` API routes —
content is served entirely through `@nuxt/content` collections, not a custom backend.

## When to use

- Adding a new page, component, layout, or plugin
- Adding/editing a `@nuxt/content` collection
- Changing `nuxt.config.ts` (modules, build, chunking) or `content.config.ts`
- Wiring up a new Nuxt module

## Directory layout

```
src/
├── nuxt.config.ts
├── content.config.ts        Zod schemas for content collections
├── content/                 blog/*.md, projects/*.md, authors/**.json
├── public/                  static assets served as-is (note: _robots.txt → /robots.txt)
└── app/
    ├── app.vue               root: NuxtLayout + NuxtPage + global titleTemplate
    ├── layouts/default.vue    NavBar + <slot> + NavFooter, only layout in the project
    ├── pages/                 file-based routing; dynamic content routes are [slug].vue
    ├── components/            + components/blog, components/buefy, components/tools subfolders
    ├── plugins/               e.g. buefy-plugin.ts — see registration pattern below
    └── assets/                sass/ (compiled separately, see the buefy skill) and images/
```

There is no `composables/`, `utils/`, or `server/` directory yet — if you add one, it's a new
convention, not an existing one to blindly follow.

## Modules registered

From [nuxt.config.ts](../../../src/nuxt.config.ts):

- `@nuxt/eslint`
- `@nuxt/content` — collections defined in `content.config.ts` (see the `seo` skill for the SEO
  angle on this)
- `@nuxtjs/color-mode` — `preference: "system"`, `fallback: "light"`, `dataValue: "theme"`
  (drives `[data-theme]` selectors, see `colors.css` in the buefy skill)
- `@nuxtjs/robots`, `@nuxtjs/sitemap` — both on defaults, no explicit `site.url` configured (see
  the `seo` skill's Common Pitfalls)

Buefy is **not** a Nuxt module — it's registered manually as a plugin (see below), because it's a
plain Vue 3 plugin, not a Nuxt-aware one.

## Plugin registration pattern

[buefy-plugin.ts](../../../src/app/plugins/buefy-plugin.ts) is the only plugin currently in the
project and is the template for adding another Vue-level plugin:

```ts
import Buefy from 'buefy'
import '/assets/styles/buefy.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Buefy, {})
})
```

Anything auto-imported/registered app-wide (a Vue plugin, a directive, a third-party library that
needs `app.use()`) goes in `app/plugins/` as a `defineNuxtPlugin` — don't call `app.use()` from
`app.vue` or a component.

## Vendor chunking

The `vite.build.rollupOptions.output.manualChunks` function in `nuxt.config.ts` hand-splits
vendor code into named chunks (`fontawesome`, `ui-vendor` for buefy/bulma, `content-vendor`,
`vue-vendor`, `motion-vendor` for kute.js, and a catch-all `vendor`). **If you add a new
substantial dependency**, add a matching `id.includes("your-package")` branch here — otherwise it
silently falls into the generic `vendor` chunk instead of its own cacheable chunk. This only
matters for larger libraries; small utility packages are fine falling through to `vendor`.

## Common pitfalls

| Pitfall | Fix |
|---|---|
| New Vue plugin registered inside a component or `app.vue` | Put it in `app/plugins/` as `defineNuxtPlugin`, matching `buefy-plugin.ts` |
| New content collection added without updating `content.config.ts` | Every collection needs a Zod schema there — content won't be queryable via `queryCollection()` otherwise |
| Large new dependency bloats the default `vendor` chunk | Add an `id.includes(...)` branch in `nuxt.config.ts`'s `manualChunks` |
| Assuming a `server/` API route exists for something | It doesn't — this site has no custom backend; data comes from `@nuxt/content` collections only |
