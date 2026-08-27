# Review checklist

Run this before calling work done, and as the audit pass when refactoring an existing surface.

## Tokens

- [ ] No hardcoded hex, rgb, font-family strings, px radii, shadow values, or ms durations outside `tokens.css`.
- [ ] `tokens.css` is linked/imported once, before component CSS.
- [ ] Light and dark both correct; cascade order is `:root` → `@media (prefers-color-scheme: dark) :root` → `[data-theme="light"]` → `[data-theme="dark"]`, so the explicit toggle wins.

## Type

- [ ] Every heading is Space Grotesk, weight 600/700, `letter-spacing: -0.02em`.
- [ ] Body, nav, buttons, inputs are Inter; body line-height 1.7, prose 1.72, `text-wrap: pretty`.
- [ ] Every eyebrow, tag, date, read-time, stack label, and code span is Inconsolata. (If a surface has no mono anywhere, it will read templated.)
- [ ] No fourth (script/serif/display) face anywhere — the emphasis word reuses Inconsolata, not a new family.
- [ ] Title Case on headings/nav/buttons; sentence case in body.
- [ ] Sizes come from the `--step-*` clamps or the editorial reading scale (`--text-*`), not one-off values.

## Signatures

- [ ] Each major section opens with an UPPERCASE mono eyebrow prefixed by a **teal** `/`.
- [ ] The 2px keyline appears on featured/interactive cards — and on a minority of cards, not all of them.
- [ ] No third signature invented (no new decorative motif, badge shape, or ornament).
- [ ] `.emphasis` (the mono-word-in-headline treatment) appears **at most once per page**. Twice is a bug.

## Color

- [ ] Paper (warm off-white) carries the bulk of surface area; ink (near-black / logo navy) carries text and structure; teal is the one accent, concentrated rather than scattered — not a diffuse decorative tint on every card.
- [ ] Text uses `--color-text` / `--color-text-strong` / `--color-text-muted`, never raw opacity on ink.
- [ ] No `color-mix()` in any border, background, or fill declaration — only in shadows, hover/overlay compositing, and the media-placeholder gradient. The known, permitted exceptions: `--color-shadow`, `--gradient-media`, and the sticky-navbar/mobile-menu translucency that pairs with `backdrop-filter: blur()` (a functional glass effect, not a decorative tint). A plain background tint with no blur pairing (e.g. the footer) does not qualify — flatten it.
- [ ] `--color-on-accent` is correct per theme: light text reversed out of teal in **light** mode, dark text reversed out of teal in **dark** mode (`#2DD2BC` is too bright to carry white).

## Surfaces & depth

- [ ] No ambient radial wash, no gradient sheen on panels or heroes, no textures or patterns.
- [ ] The only gradient present is `--gradient-media` on cover-image placeholders.
- [ ] Cards: 1px hairline border, 10px radius, flat fill, `0 1px 2px` resting.
- [ ] Hover: border tint + `0 3px 10px` + `translateY(-1px)`. No `-5px`, no scale.
- [ ] No wide soft shadows (`0 20px 45px` and friends) anywhere.

## Shape & controls

- [ ] Radii: tags/small inputs 3px, buttons/inputs 6px, cards/panels/media 10px.
- [ ] No pill buttons. Pills only on avatars and the theme toggle.
- [ ] Every interactive element shows the 2px teal focus ring at 2px offset.
- [ ] Links go blue → teal on hover; nav items grow the scaleX underline.

## Motion

- [ ] Easing `cubic-bezier(0.2, 0, 0, 1)`, durations 140–240ms.
- [ ] No bounce, no infinite loop, no parallax, no hover scale.
- [ ] `body` background-color is not transitioned.

## Content & assets

- [ ] First person, no emoji, no exclamation marks, no hype.
- [ ] Forward CTAs use the ASCII arrow `->`.
- [ ] The mark SVG is unmodified and unrecolored. `NavBrand` composes the mark alongside a live-text wordmark (Space Grotesk) rather than the flattened lockup image — fixed brand-ink hex in light mode, site ink/accent tokens in dark mode, no background chip. Icons are Font Awesome `fas`/`fab`, functional only.

## Editorial

- [ ] No body paragraph exceeds `--measure-prose`, at any breakpoint.
- [ ] Every figure has a caption and a separate alt attribute.
- [ ] No page is a centered single-column stack.
- [ ] Margin column content is present and readable on mobile, not hidden.
- [ ] No page shows more than five type sizes.
- [ ] `--text-display` appears exactly once across the whole site.
- [ ] Every section meets its density minimum (see `SKILL.md`), or carries a marked `TODO`.
- [ ] No fabricated prose, quotes, metrics, prices, or imagery.
- [ ] Section padding varies by importance rather than being uniform.
- [ ] Proof stats are asymmetric (one large tile + a differently-sized tile), never a uniform three-up row.
- [ ] `/services`' FAQ is present, not on Home; answers meet the 40–80 word range or carry a marked `TODO(wesley)` where they encode an undecided business term (pricing, maintenance).

## Build

- [ ] Builds and dev-runs with no new console errors; routes and content unchanged unless the task said otherwise.
