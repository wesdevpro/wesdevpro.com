# Component recipes

Framework-agnostic CSS against the tokens in `tokens.css`. Port the declarations into whatever the host stack uses (Vue SFC `<style>`, Bulma override, CSS module, styled component) — keep the values.

Structural defaults assumed from `tokens.css` base layer: headings are already Space Grotesk, body is Inter, `code`/`pre` are Inconsolata, links are blue → teal on hover, `:focus-visible` already draws the teal ring.

---

## SIGNATURE 1 — Eyebrow (`/ SELECTED WORK`)

Every section, and featured cards, open with this. It is the brand's label voice.

```css
.eyebrow {
  display: inline-flex;
  align-items: baseline;
  gap: 0.45em;
  font-family: var(--font-mono);
  font-size: var(--step--1);
  font-weight: var(--weight-eyebrow);
  letter-spacing: var(--tracking-eyebrow);
  text-transform: uppercase;
  color: var(--color-text-muted);
}
.eyebrow::before {
  content: var(--label-marker);           /* "/" */
  color: var(--bulma-accent);             /* teal — the signal */
  font-weight: var(--weight-bold);
}
```

```html
<p class="eyebrow">Selected Work</p>
```

Rules: one eyebrow per section. Never sentence case. Never blue or ink — the slash is always teal. Don't stack an eyebrow directly above another eyebrow.

## Section header

```css
.section { padding-block: var(--section-y); }
.section-header {
  display: grid;
  gap: var(--space-2xs);
  margin-bottom: var(--section-header-gap);
}
.section-header h2 {
  margin: 0;
  font-size: var(--step-4);
  font-weight: var(--weight-display);
  letter-spacing: var(--tracking-display);
  line-height: var(--leading-snug);
}
.section-header .lede {
  max-width: var(--measure-lede);         /* 58ch */
  margin: 0;
  font-size: var(--step-1);
  color: var(--color-text-muted);
  line-height: var(--leading-prose);
}
```

## SIGNATURE 2 — Card + keyline

```css
.card {
  background: var(--color-surface-1);
  border: var(--border-hairline);
  border-radius: var(--radius-lg);        /* 10px */
  box-shadow: var(--shadow-card);         /* 0 1px 2px */
  padding: var(--space-md);               /* ~22px */
  transition:
    border-color var(--dur-base) var(--ease-standard),
    box-shadow var(--dur-base) var(--ease-standard),
    transform var(--dur-base) var(--ease-standard);
}
.card h3 {
  margin: 0 0 var(--space-2xs);
  font-size: var(--step-2);
  letter-spacing: var(--tracking-title);
}
.card p { margin: 0; color: var(--color-text-muted); }

/* interactive cards only */
.card.is-interactive:hover {
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-card-hover);   /* 0 3px 10px */
  transform: translateY(var(--lift-hover));  /* -1px, never more */
}

/* the keyline: featured / interactive cards */
.card.has-keyline {
  border-top: var(--keyline-width) solid var(--keyline-accent);  /* teal: craft, OSS, featured */
  border-top-left-radius: var(--radius-sm);
  border-top-right-radius: var(--radius-sm);
}
.card.has-keyline-primary { border-top-color: var(--keyline-primary); }  /* blue: core work */
```

Use the keyline on a **minority** of cards in any view — if every card has one, it stops being a spec sheet.

## Buttons

Tight radius, Inter labels, Title Case, ASCII arrow `->` for forward CTAs. No pills, no scale on hover.

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  font-family: var(--font-ui);
  font-size: var(--step-0);
  font-weight: var(--weight-semibold);
  line-height: 1;
  padding: 0.72em 1.15em;
  border-radius: var(--radius-md);        /* 6px */
  border: 1px solid transparent;
  cursor: pointer;
  transition:
    background-color var(--dur-fast) var(--ease-standard),
    color var(--dur-fast) var(--ease-standard),
    border-color var(--dur-fast) var(--ease-standard),
    transform var(--dur-fast) var(--ease-standard);
}
.btn:active { transform: translateY(1px); }

.btn--primary {
  background: var(--bulma-primary);
  color: var(--text-on-primary);
}
.btn--primary:hover {
  background: color-mix(in srgb, var(--bulma-primary) 88%, var(--bulma-accent));
}

.btn--light {
  background: var(--color-surface-1);
  border-color: var(--color-border);
  color: var(--color-text-strong);
}
.btn--light:hover {
  border-color: var(--color-border-strong);
  transform: translateY(var(--lift-hover));
}

.btn--outline {
  background: transparent;
  border-color: var(--bulma-primary);
  color: var(--bulma-primary);
}
.btn--outline:hover {
  border-color: var(--bulma-accent);
  color: var(--bulma-accent);
}

.btn--ghost {
  background: transparent;
  color: var(--bulma-primary);
  padding-inline: 0.35em;
}
.btn--ghost:hover { color: var(--bulma-accent); }
```

## Tag / metadata chip

Mono voice, 3px radius, quiet fill.

```css
.tag {
  font-family: var(--font-mono);
  font-size: var(--step--1);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-text-muted);
  background: var(--color-surface-1);
  border: var(--border-hairline);
  border-radius: var(--radius-sm);        /* 3px */
  padding: 0.2em 0.5em;
}
.tag--accent {
  color: var(--bulma-accent);
  background: var(--color-accent-soft);
  border-color: transparent;
}
```

Dates, read times, stack labels, and file paths all use the mono voice — not Inter.

## Nav bar

Sticky, translucent, hairline-bottom. Blur is chrome only.

```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 30;
  height: var(--navbar-height);           /* 4.75rem */
  display: flex;
  align-items: center;
  background: color-mix(in srgb, var(--color-base) 80%, transparent);
  backdrop-filter: blur(12px);
  border-bottom: var(--border-hairline);
}
.navbar__inner {
  width: min(100% - 2 * var(--space-sm), var(--container-desktop));
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
}
.navbar__link {
  position: relative;
  font-family: var(--font-ui);
  font-weight: var(--weight-nav);         /* 650 */
  letter-spacing: var(--tracking-nav);
  color: var(--color-text);
  text-decoration: none;
}
.navbar__link::after {                    /* animated underline, scaleX from left */
  content: "";
  position: absolute;
  inset-inline: 0;
  bottom: -0.35em;
  height: 2px;
  background: var(--bulma-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--dur-base) var(--ease-standard);
}
.navbar__link:hover::after,
.navbar__link[aria-current="page"]::after { transform: scaleX(1); }
```

Logo lockup: `assets/wesdevpro-full-logo-no-sub.svg` at ~28–32px tall; `wesdevpro-profile-logo.svg` for avatars/favicons.

## Inputs

```css
.field label {
  display: block;
  margin-bottom: var(--space-3xs);
  font-family: var(--font-mono);
  font-size: var(--step--1);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-text-muted);
}
.input, .textarea {
  width: 100%;
  font-family: var(--font-ui);
  font-size: var(--step-0);
  color: var(--color-text-strong);
  background: var(--color-base);
  border: var(--border-hairline);
  border-radius: var(--radius-md);        /* 6px */
  padding: 0.7em 0.85em;
  transition: border-color var(--dur-fast) var(--ease-standard);
}
.input:hover, .textarea:hover { border-color: var(--color-border-strong); }
.input:focus-visible, .textarea:focus-visible { border-color: var(--bulma-accent); }
.textarea { line-height: var(--leading-body); resize: vertical; }
```

## Layout

```css
.container { width: min(100% - 2 * var(--space-sm), var(--container-desktop)); margin-inline: auto; }   /* 60rem */
.container--wide { max-width: var(--container-widescreen); }                                            /* 92rem, blog grid */
.prose { max-width: var(--measure-prose); line-height: var(--leading-prose); }                          /* 72ch */
```

## Media placeholder (the one allowed gradient)

```css
.media {
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-lg);
  background: var(--gradient-media);      /* blue → teal, mirrors the 80/20 */
}
```

Use only for cover/blog imagery that has no real asset yet. Never as a hero, section, or page background.

## Footer

```css
.footer {
  border-top: var(--border-hairline);
  padding-block: var(--space-lg);
  color: var(--color-text-muted);
  font-size: var(--step--1);
}
```

## Theme toggle

Pill is allowed here (and on avatars) only. `fas fa-sun` / `fas fa-moon`. Write `data-theme="light|dark"` on `<html>`, persist the choice, and fall back to `prefers-color-scheme` when unset. Do not transition `body` background-color — Chromium can leave the canvas stuck on the old theme.

## Design system components

If the project already loads the packaged design system (`_ds_bundle.js`), prefer its components — `Button`, `IconButton`, `Tag`, `Eyebrow`, `Card` (with the `keyline` prop), `ContentCard`, `Avatar`, `AuthorCard`, `NavBar`, `SiteFooter`, `ThemeToggle`, `Input`, `Textarea`, `SectionHeader` — from `window.WesdevproDesignSystem_72c906`, instead of re-implementing the CSS above.
