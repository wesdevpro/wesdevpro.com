---
name: wesdevpro-style
description: Apply the wesdevpro visual style (Wesley Ford's personal brand — fintech engineer, custom integrations + web design) to any UI, page, component, or asset. Use whenever building or restyling wesdevpro.com, portfolio/blog surfaces, prototypes, mocks, or marketing assets that must look on-brand. Covers design tokens (color, three-voice type, spacing, radii, effects), component recipes, copy voice, and a review checklist.
---

# wesdevpro style

Paper, ink, and teal — reading-first, **editorial and engineered**. Magazine structure on a component-spec chassis: strong typographic hierarchy, real body copy at measure, captioned photography, flat surfaces, hairline borders, tight radii, three type voices, exactly two signatures.

> Positioning: *make the parts work together so cleanly you stop noticing the seams.*
> Brand: wesdevpro / Wesley Ford — custom integrations and web design across the stack.

## The one rule

The brand's enemy is looking **templated / default** (stock Bulma + Inter SaaS page). The entire "stand out" budget is spent on two authored signatures; everything else stays quiet and exact.

The second enemy is looking **empty**. An editorial layout promises content. A magazine grid running thin prose reads worse than a minimal layout running thin prose, because the structure visibly advertises what is missing. If a section does not have the content to fill an editorial treatment, the fix is content, never padding, never a fallback to three-bullet cards.

1. **Teal `/` eyebrow** — every section label is UPPERCASE Inconsolata, `letter-spacing: 0.14em`, opened by a teal `/`. E.g. `/ SELECTED WORK`, `/ WRITING`, `/ CONTACT`.
2. **Spec-sheet keyline** — a **2px** top rule (teal for craft/featured, ink for structural/core) turns a card into a component spec. This is the depth signal; heavy shadows are not.

Never add a third signature. If a design needs more interest, tighten structure instead. Figures, captions, pull quotes, sidenotes, and the margin column are editorial furniture, not additional signatures — don't count them toward a third, and don't treat the new furniture as license to invent one. The emphasis-word treatment (below, under type voices) is not a third signature either — it's the existing mono voice doing a new job, not a new mark.

## Non-negotiables

- **Tokens only.** No hardcoded hex, font names, radii, shadows, or durations. Everything references the custom properties in `references/tokens.css` — copy that file in and link it once, before component CSS.
- **Three type voices — no fourth.** Space Grotesk = all headings (600/700, tracking `-0.02em`). Inter = body, nav, buttons, controls (line-height 1.7, prose 1.72, `text-wrap: pretty`). Inconsolata = eyebrows, labels, tags, metadata, code — **and emphasis**: a single word inside a Space Grotesk headline can be set in Inconsolata 600 at `var(--color-accent)`, sized up slightly to optically match the surrounding display type (see `.emphasis` in `references/components.md`). At most once per page. A fourth (script/serif/display) face was considered and rejected: monospace-inside-sans is a more truthful signal for a library maintainer's brand than a script face, and the one-word-in-script gesture is a design cliché. All-Inter is the #1 default tell — never ship it.
- **Paper / ink / accent — the three-role color model.** Paper (warm off-white base, ~75% of any view) is what everything sits on. Ink (near-black text, logic navy for deep headings and the structural keyline, ~20%) carries all reading and structure — it is not an accent and never was interchangeable with one. Teal is the **one** accent (~5% of area, but concentrated: fewer, larger, bolder placements — a full-bleed band with reversed type, a primary CTA, a keyline, a bullet marker — rather than diffuse small touches on every card). A teal hover state on a link is correct; teal as a third-tier decorative tint on eight small elements per page is not. **Documented exception:** `/buefy` runs denser and more mono-forward than any other page — code samples, data tables, a teal-forward reading of the same one accent — because that page is entirely the craft signal. It is not a color-rule exception anymore (teal is site-wide now); it's a density and register exception. No other page matches its density.
- **Flat and border-led.** Solid fills; hairline `1px` borders; `--shadow-card` (`0 1px 2px`) resting, `--shadow-card-hover` (`0 3px 10px`) on hover; hover lift **-1px**. No ambient radial washes, no gradient sheen, no `0 20px 45px` floats, no textures, no patterns. The only allowed gradient is `--gradient-media` (the logo's own navy→teal) for cover-image placeholders.
- **Tight radii.** Tags/small inputs 3px, buttons/inputs 6px, cards/panels/media 10px. Pills are for avatars and the theme toggle **only** — never buttons.
- **Precise motion.** `cubic-bezier(0.2, 0, 0, 1)`, 140–240ms. No bounces, no infinite loops, no parallax, no hover scale. Motion confirms interaction; it never decorates.
- **Both themes.** Light + dark from one recipe: `:root` → `@media (prefers-color-scheme: dark) :root` → `[data-theme="light"]` → `[data-theme="dark"]`, in that cascade order, so an explicit toggle beats the OS. Dark theme reverses **dark** type out of the accent band (`--color-on-accent`), not white — `#2DD2BC` is too bright to carry white text. Never swap that reversal.
- **Focus always.** 2px teal-tinted outline (`--color-focus`) at 2px offset on every interactive element.
- **Icons:** Font Awesome 6.5.1 from CDN — `fas` solid, `fab` for GitHub/LinkedIn. Small and functional only. No emoji, ever.
- **Logos:** use the diamond mark SVG (`wesdevpro-profile-logo.svg`) in `assets/` unmodified — never redraw it. `NavBrand` composes that mark alongside a **live-text** wordmark (Space Grotesk, not an image) rather than the single flattened `wesdevpro-full-logo-no-sub.svg` lockup: `wesdevpro-text.svg` exists but its glyphs are Illustrator-outlined paths with no recoverable font, so the wordmark is reproduced in the site's own display voice instead of guessed at from vector shapes. In light mode the wordmark keeps the logo's fixed brand ink (`#002F5A` navy, `#006089` logo-teal) as literal hex — a deliberate, documented exception to "tokens only," since these are brand constants, never substituted for `--color-ink-deep` or `--color-accent`. In dark mode it switches to those same site tokens (`--color-ink` / `--color-accent`) instead — no background chip behind the logo; a pill/chip treatment was tried and rejected as a distracting light blob around the brand.

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
- Any FAQ answer (`/services` only — see `components.md`'s FAQ recipe): 40–80 words

Below the minimum, the section is not ready. Mark it `TODO` rather than shipping it thin or restyling it smaller to hide the gap. The same discipline applies to proof numbers: one genuinely strong number at large display size beats padding it out to a three-up row that advertises how few strong numbers exist.

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
