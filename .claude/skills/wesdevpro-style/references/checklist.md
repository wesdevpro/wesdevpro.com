# Review checklist

Run this before calling work done, and as the audit pass when refactoring an existing surface.

## Tokens

- [ ] No hardcoded hex, rgb, font-family strings, px radii, shadow values, or ms durations outside `tokens.css`.
- [ ] `tokens.css` is linked/imported once, before component CSS.
- [ ] Light and dark both correct; cascade order is `:root` → `@media (prefers-color-scheme: dark) :root` → `[data-theme="light"]` → `[data-theme="dark"]`, so the explicit toggle wins.

## Type

- [ ] Every heading is Space Grotesk, weight 600/700, `letter-spacing: -0.02em`.
- [ ] Body, nav, buttons, inputs are Inter; body line-height 1.68, prose 1.72, `text-wrap: pretty`.
- [ ] Every eyebrow, tag, date, read-time, stack label, and code span is Inconsolata. (If a surface has no mono anywhere, it will read templated.)
- [ ] Title Case on headings/nav/buttons; sentence case in body.
- [ ] Sizes come from the `--step-*` clamps.

## Signatures

- [ ] Each major section opens with an UPPERCASE mono eyebrow prefixed by a **teal** `/`.
- [ ] The 2px keyline appears on featured/interactive cards — and on a minority of cards, not all of them.
- [ ] No third signature invented (no new decorative motif, badge shape, or ornament).

## Color

- [ ] Blue carries the bulk; teal appears only in signatures, OSS/craft callouts, and hover emphasis.
- [ ] Text uses `--color-text` / `--color-text-strong` / `--color-text-muted`, never raw opacity on ink.

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
- [ ] Logos are the SVG assets, unmodified, on light surfaces; icons are Font Awesome `fas`/`fab`, functional only.

## Build

- [ ] Builds and dev-runs with no new console errors; routes and content unchanged unless the task said otherwise.
