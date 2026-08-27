---
name: wesdevpro-style
description: Apply the wesdevpro visual style (Wesley Ford's personal brand — fintech engineer, custom integrations + web design) to any UI, page, component, or asset. Use whenever building or restyling wesdevpro.com, portfolio/blog surfaces, prototypes, mocks, or marketing assets that must look on-brand. Covers design tokens (color, three-voice type, spacing, radii, effects), component recipes, copy voice, and a review checklist.
---

# wesdevpro style

Blue-and-teal, reading-first, **editorial and engineered**. Magazine structure on a component-spec chassis: strong typographic hierarchy, real body copy at measure, captioned photography, flat surfaces, hairline borders, tight radii, three type voices, exactly two signatures.

> Positioning: *make the parts work together so cleanly you stop noticing the seams.*
> Brand: wesdevpro / Wesley Ford — custom integrations and web design across the stack.

## The one rule

The brand's enemy is looking **templated / default** (stock Bulma + Inter SaaS page). The entire "stand out" budget is spent on two authored signatures; everything else stays quiet and exact.

The second enemy is looking **empty**. An editorial layout promises content. A magazine grid running thin prose reads worse than a minimal layout running thin prose, because the structure visibly advertises what is missing. If a section does not have the content to fill an editorial treatment, the fix is content, never padding, never a fallback to three-bullet cards.

1. **Teal `/` eyebrow** — every section label is UPPERCASE Inconsolata, `letter-spacing: 0.14em`, opened by a teal `/`. E.g. `/ SELECTED WORK`, `/ WRITING`, `/ CONTACT`.
2. **Spec-sheet keyline** — a **2px** top rule (teal for craft/featured, blue for core) turns a card into a component spec. This is the depth signal; heavy shadows are not.

Never add a third signature. If a design needs more interest, tighten structure instead. Figures, captions, pull quotes, sidenotes, and the margin column are editorial furniture, not additional signatures — don't count them toward a third, and don't treat the new furniture as license to invent one.

## Non-negotiables

- **Tokens only.** No hardcoded hex, font names, radii, shadows, or durations. Everything references the custom properties in `references/tokens.css` — copy that file in and link it once, before component CSS.
- **Three type voices.** Space Grotesk = all headings (600/700, tracking `-0.02em`). Inter = body, nav, buttons, controls (line-height 1.7, prose 1.72, `text-wrap: pretty`). Inconsolata = eyebrows, labels, tags, metadata, code. All-Inter is the #1 default tell — never ship it.
- **80/20 color.** Blue carries ~80% (the core: integrations + web). Teal is the ~20% craft signal — signatures, OSS callouts, hover emphasis only. General-purpose teal kills the signal. **Documented exception:** the `/buefy` page is teal-forward and is the one permitted exception to this rule, because that page is entirely the craft signal. No other page may claim it.
- **Flat and border-led.** Solid fills; hairline `1px` borders; `--shadow-card` (`0 1px 2px`) resting, `--shadow-card-hover` (`0 3px 10px`) on hover; hover lift **-1px**. No ambient radial washes, no gradient sheen, no `0 20px 45px` floats, no textures, no patterns. The only allowed gradient is `--gradient-media` (blue→teal) for cover-image placeholders.
- **Tight radii.** Tags/small inputs 3px, buttons/inputs 6px, cards/panels/media 10px. Pills are for avatars and the theme toggle **only** — never buttons.
- **Precise motion.** `cubic-bezier(0.2, 0, 0, 1)`, 140–240ms. No bounces, no infinite loops, no parallax, no hover scale. Motion confirms interaction; it never decorates.
- **Both themes.** Light + dark from one recipe: `:root` → `@media (prefers-color-scheme: dark) :root` → `[data-theme="light"]` → `[data-theme="dark"]`, in that cascade order, so an explicit toggle beats the OS.
- **Focus always.** 2px teal-tinted outline at 2px offset on every interactive element.
- **Icons:** Font Awesome 6.5.1 from CDN — `fas` solid, `fab` for GitHub/LinkedIn. Small and functional only. No emoji, ever.
- **Logos:** use the SVGs in `assets/`. Never redraw the wordmark or diamond mark; place the wordmark on light surfaces.

## Layout

12-column grid, container max ~1280px (`--grid-max`). Prose lives in columns 2–8 (`--grid-prose-start` / `--grid-prose-span`). The margin column, 9–12 (`--grid-margin-start` / `--grid-margin-span`), carries sidenotes, metadata, and pull quotes. Figures break out to 2–12 or full-bleed 1–12.

Asymmetry is the default. Nothing is centered unless there's a reason. Section padding varies by importance rather than being uniform.

On mobile the margin column collapses below its anchor paragraph. It never disappears and its content is never dropped.

## Density

Sections carry prose, not bullet triplets. Minimums, so this is checkable rather than aspirational:

- Any card carrying an offer or a service: 60 words minimum
- Any process step: 40 words minimum
- Any index entry: a 25-word standfirst minimum
- Any case study: 600 words minimum

Below the minimum, the section is not ready. Mark it `TODO` rather than shipping it thin or restyling it smaller to hide the gap.

## Files in this skill

| File | Read it when |
|---|---|
| `references/tokens.css` | Always. The complete token layer — copy into the project as the global stylesheet base. |
| `references/components.md` | Building any UI: eyebrow, section header, card + keyline, buttons, tags, nav, inputs, footer, media placeholder. Copy-paste CSS. |
| `references/voice.md` | Writing any copy — headings, subtitles, CTAs, microcopy. |
| `references/checklist.md` | Before declaring work done, and when auditing/refactoring an existing surface. |
| `assets/*.svg` | Any lockup, favicon, avatar, or nav logo. |

## Working method

1. **Recon before edits.** Find the global stylesheet entry, the existing theme-toggle logic, and where component styles live. Report the plan before large changes.
2. **Tokens first.** Land `tokens.css` + the Google Fonts link, verify both themes resolve, then migrate components to reference tokens — don't restyle components while values are still hardcoded.
3. **Stay in the host stack.** The production site is Nuxt 3 (Vue 3) + Bulma via Buefy; the tokens deliberately mirror `--bulma-*` channel names so Buefy components inherit them. Do not introduce Tailwind, another CSS framework, or a component-library swap to satisfy this style. In other stacks, express the same tokens natively (CSS vars, theme object, `@theme`) — the values are what matter.
4. **Small reviewable commits**, one concern each: `tokens: color channels`, `type: three-voice system`, `cards: keyline + flat elevation`, `buttons: tight radius`.
5. **Verify both themes** and run the checklist. No new console errors.

**Out of scope unless asked:** new pages or sections, new dependencies, wholesale content rewrites, framework/build changes. Do not generate prose to fill an editorial slot — missing copy is reported, not written. Fix obviously off-brand microcopy in passing; suggest anything bigger rather than doing it.

## Fonts

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;650;700;750;800&family=Inconsolata:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```

`references/tokens.css` already `@import`s the Google Fonts CSS; the explicit `<link>` is faster and preferred in HTML. Self-host all three families for offline builds.
