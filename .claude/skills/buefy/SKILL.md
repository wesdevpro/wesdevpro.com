---
name: buefy
description: Using the Buefy component library and Bulma theming in this Nuxt 4 / Vue 3 site. Use when adding or editing any UI that uses Buefy components (b-navbar, b-icon, b-field, b-input, etc.), Bulma utility classes, or touching the SCSS/theme build for buefy.scss/colors.css.
---

# Buefy in this repo

This project uses `buefy@3.0.5` — the **Vue 3-native** rewrite of Buefy, not the older Vue 2
library most docs/examples online still describe. Wesley co-maintains that fork upstream
(`github.com/buefy/buefy`), so treat any Vue-2-flavored Buefy advice found online (options-API
mixins, `Vue.use(Buefy)` on a Vue 2 root, old `$buefy` global toasts) as **not applicable here**.

## When to use

- Adding/editing a component that uses a `b-*` Buefy element (navbar, icon, field, input, modal,
  table, etc.)
- Styling with Bulma classes (`button`, `box`, `hero`, `columns`, `is-primary`, …)
- Touching `app/assets/sass/buefy.scss`, `app/assets/styles/colors.css`, or the Buefy Nuxt plugin
- Adding a new color, icon, or theme token

## How components are registered

- Global registration happens once in [buefy-plugin.ts](../../../src/app/plugins/buefy-plugin.ts)
  via `nuxtApp.vueApp.use(Buefy, {})` — every `b-*` tag is usable in any template with no per-file
  import.
- Some files (e.g. `NavBar.vue`) additionally import components explicitly
  (`import { BNavbar, BNavbarItem } from "buefy"`) purely for template type-checking/IDE support.
  This is redundant with the global registration but harmless — do it for new components too if
  the file already leans on explicit imports, otherwise don't bother; global registration alone is
  enough.
- Not every Bulma-styled element needs a Buefy component. Plain Bulma classes (`button`, `hero`,
  `column`, `box`, `title`) are used directly on native HTML tags throughout (see `HomeHero.vue`,
  `contact.vue`) — reach for a `b-*` component only when you need its JS behavior (state, a11y,
  keyboard handling), not just its look.

## Icon pack gotcha — always set `pack="fas"`

Buefy's `defaultIconPack` is `"mdi"` (Material Design Icons), but **this project only ships
FontAwesome Free** (`@fortawesome/fontawesome-free`, bundled in `buefy.scss`) — no MDI font is
installed. Any `<b-icon>` left on the default pack silently renders nothing.

Always pass `pack="fas"` (or `"far"`/`"fab"` as appropriate) explicitly:

```vue
<b-icon pack="fas" icon="moon" size="is-small" />
```

See `ThemeToggle.vue` for the existing pattern. If a component takes many icons, prefer setting
`iconPack: 'fas'` at the `.use(Buefy, { ... })` call in `buefy-plugin.ts` over repeating `pack=` —
but that changes the default project-wide, so do it deliberately, not inside a single-component fix.

## Styling & theming — two separate layers

1. **Build-time (SCSS, sets the palette Bulma/Buefy compile against)**
   [buefy.scss](../../../src/app/assets/sass/buefy.scss) sets Bulma's base colors (`$primary`,
   `$background`, `$text`, `$link`) and a `$buefy-custom-colors` map (`secondary`, `accent`) via
   `@forward "bulma/sass" with (...)`, then pulls in FontAwesome and `buefy/src/scss/buefy`.
   - This file is compiled by `npm run build:bulma`
     (`sass ... buefy.scss ./app/assets/styles/buefy.css`), **not** by `nuxt dev`/`nuxt build`
     directly. If you change `buefy.scss` and don't see the effect, you forgot to rerun the sass
     build (`npm run build:bulma`, or use `npm run build:dev` / `npm run start` which watch it).
   - The compiled `buefy.css` is what `buefy-plugin.ts` actually imports at runtime.

2. **Runtime (CSS custom properties, drives light/dark mode)**
   [colors.css](../../../src/app/assets/styles/colors.css) overrides Bulma's HSL custom properties
   (`--bulma-primary-h/s/l`, `--bulma-secondary-*`, `--bulma-accent-*`, `--bulma-text-*`,
   `--bulma-background-*`) per `[data-theme]`, driven by `@nuxtjs/color-mode`
   (`dataValue: "theme"` in `nuxt.config.ts`). Derived tokens like `--color-surface-1/2/3`,
   `--color-primary-soft` are computed from those with `color-mix()`.
   - **To add/change a themed color, edit `colors.css`, not `buefy.scss`.** The SCSS file only
     sets the *initial* default value baked into the CSS; the actual light/dark values Buefy
     renders come from the runtime custom properties.
   - To use a theme color in component `<style>`, prefer the CSS vars (`var(--bulma-accent)`,
     `var(--color-surface-1)`) over hardcoding a Bulma SCSS color name — see `#blob-start` in
     `HomeHero.vue`.

## Common pitfalls

| Pitfall | Fix |
|---|---|
| `<b-icon>` renders blank | Add `pack="fas"` (default pack `mdi` isn't installed) |
| SCSS palette edit has no visible effect | Rerun `npm run build:bulma` (or use `build:dev`/`start`, which watch it) — `nuxt dev` alone doesn't recompile it |
| New theme color only shows in light mode | Add it to both the `:root` and the dark-mode block in `colors.css`, not just `buefy.scss`'s defaults |
| Following Buefy docs/StackOverflow examples that use Options API mixins or Vue 2 global config | This is the Vue 3 fork — use Composition API (`<script setup>`) and standard Vue 3 plugin registration, per `buefy-plugin.ts` |

## Full component list

See [references/components.md](references/components.md) for every `b-*` component this version
of Buefy ships (from the installed `buefy/src/components` source).
