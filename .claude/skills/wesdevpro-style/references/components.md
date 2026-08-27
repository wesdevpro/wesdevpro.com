# Component recipes

Framework-agnostic CSS against the tokens in `tokens.css`. Port the declarations into whatever the host stack uses (Vue SFC `<style>`, Bulma override, CSS module, styled component) — keep the values.

Structural defaults assumed from `tokens.css` base layer: headings are already Space Grotesk, body is Inter, `code`/`pre` are Inconsolata, links are `--color-link` → teal on hover, `:focus-visible` already draws the teal ring.

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
  color: var(--color-accent);             /* teal — the signal */
  font-weight: var(--weight-bold);
}
```

```html
<p class="eyebrow">Selected Work</p>
```

Rules: one eyebrow per section. Never sentence case. Never ink or link-blue — the slash is always teal. Don't stack an eyebrow directly above another eyebrow.

## Section header

Not a centered stack, and must be able to carry a standfirst underneath, in addition to the plain `.lede`. Reserve the true off-center 2-8 grid-column treatment for `ArticleHeader` on genuine narrow-prose case-study pages with a margin column alongside them — a plain listing-page `SectionHeader` (Home sections, Services, Work index, Blog index, About, Contact) sits above content that spans the full container width (card grids, two-column layouts), so constraining the header itself to a narrow column makes it look cramped next to what's below it, not asymmetric on purpose. Asymmetry here comes from the subtitle's own reading-width cap, not from squeezing the whole header block.

```css
.section { padding-block: var(--section-y); }
.section-header {
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

A `.standfirst` (see the recipe below) can follow the `h2`/`.lede` directly. Only center a section header when there's a specific reason to (`.section-header--centered`).

## SIGNATURE 2 — Card + keyline

Cards carry prose now, not three bullets — a 60 to 90 word body is the target (see the Density minimums in `SKILL.md`). Padding and body line-height are sized for that; the keyline, radius, flat fill, and hover lift are unchanged.

```css
.card {
  background: var(--color-surface-1);
  border: var(--border-hairline);
  border-radius: var(--radius-lg);        /* 10px — unchanged */
  box-shadow: var(--shadow-card);         /* 0 1px 2px — unchanged */
  padding: var(--space-lg);               /* was --space-md (~22px) — more room for a 60-90 word body */
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
.card p {
  margin: 0;
  color: var(--color-text-muted);
  line-height: var(--leading-body);       /* new — real prose needs a real line-height */
}

/* interactive cards only */
.card.is-interactive:hover {
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-card-hover);   /* 0 3px 10px */
  transform: translateY(var(--lift-hover));  /* -1px, never more */
}

/* the keyline: featured / interactive cards */
.card.has-keyline {
  border-top: var(--keyline-width) solid var(--keyline-accent);  /* teal: craft, OSS, featured — the signature */
  border-top-left-radius: var(--radius-sm);
  border-top-right-radius: var(--radius-sm);
}
.card.has-keyline-primary { border-top-color: var(--keyline-primary); }  /* ink: structural/core work — not a second accent color, just the non-teal variant */
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
  background: var(--color-accent);
  color: var(--color-on-accent);          /* theme-aware reversal — dark text on the bright dark-mode teal, never hardcoded white */
  border-color: var(--color-accent);
}
.btn--primary:hover {
  transform: translateY(var(--lift-hover));
  box-shadow: var(--shadow-card-hover);
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

/* outline/ghost default to ink, not accent — teal is reserved for the hover
   state so it stays a high-concentration signal rather than a default color */
.btn--outline {
  background: transparent;
  border-color: var(--color-border-strong);
  color: var(--color-text-strong);
}
.btn--outline:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.btn--ghost {
  background: transparent;
  color: var(--color-text-strong);
  padding-inline: 0.35em;
}
.btn--ghost:hover { color: var(--color-accent); }

/* on an accent band only (see AccentBand recipe below) — a button that reads
   correctly against a solid teal background rather than against paper */
.btn--onband {
  background: var(--color-on-accent);
  color: var(--color-accent);
  border-color: var(--color-on-accent);
}
.btn--onband:hover { transform: translateY(var(--lift-hover)); }
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
  color: var(--color-accent);
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
  background: var(--color-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--dur-base) var(--ease-standard);
}
.navbar__link:hover::after,
.navbar__link[aria-current="page"]::after { transform: scaleX(1); }
```

### NavBrand — mark + live text, not a flattened lockup

`wesdevpro-full-logo-no-sub.svg` was a single flattened image; it's replaced by the mark SVG plus a **live text** wordmark, not a second image. `wesdevpro-text.svg` exists but its glyphs are Illustrator-outlined paths — the source font can't be recovered from that file, so rather than guess a typeface from vector shapes, the wordmark is reproduced in Space Grotesk (the site's own display voice) as real, selectable, styleable text.

```css
.site-brand {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2xs);
}
.site-brand__mark {                       /* wesdevpro-profile-logo.svg — the diamond mark, unmodified */
  display: block;
  height: 1.6em;                          /* sized relative to the wordmark next to it */
  width: auto;
  flex: none;
}
.site-brand__word {                       /* live text — not an image */
  font-family: var(--font-family-display); /* Space Grotesk */
  font-weight: var(--weight-bold);
  letter-spacing: -0.02em;
  color: #002F5A;                          /* the logo's own fixed navy ink — a brand constant, not --color-ink-deep */
}
.site-brand__word--accent {
  color: #006089;                          /* the logo's own fixed teal ink — a brand constant, never --color-accent */
}
/* dark mode: the wordmark's fixed navy/teal ink needs a light-enough
   backdrop — pill radius + soft shadow, not a hairline border, so it reads
   as an intentional chip. Muted gray (--logo-chip-bg), not stark white.
   Re-verify contrast whenever --color-base (dark) moves; currently tuned
   against #1A1B1D. */
[data-theme="dark"] .site-brand,
.theme-dark .site-brand {
  padding: 0.3rem 0.65rem;
  border-radius: var(--radius-pill);
  background: var(--logo-chip-bg);
  box-shadow: var(--shadow-soft);
}
```

```html
<a class="navbar-item site-brand" href="/">
  <img class="site-brand__mark" src="~/assets/images/wesdevpro-profile-logo.svg" alt="">
  <span class="site-brand__word" aria-hidden="true">wesdev<span class="site-brand__word--accent">pro</span></span>
  <span class="visually-hidden">wesdevpro</span>
</a>
```

The mark SVG stays unmodified — this recomposes an existing asset with new markup, it doesn't redraw it. `wesdevpro-profile-logo.svg` also still serves standalone as an avatar/favicon. The two fixed hex values above are a deliberate, documented exception to "tokens only" — they're the logo's own brand-constant ink, not theme-variable UI color, and must never be swapped for a token.

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
.input:focus-visible, .textarea:focus-visible { border-color: var(--color-accent); }
.textarea { line-height: var(--leading-body); resize: vertical; }
```

## Layout

```css
.container { width: min(100% - 2 * var(--space-sm), var(--container-desktop)); margin-inline: auto; }   /* 60rem */
.container--wide { max-width: var(--container-widescreen); }                                            /* 92rem, blog grid */
.prose { max-width: var(--measure-prose); line-height: var(--leading-prose); }                          /* 72ch */
```

## Figure + caption

Alt text and the caption are different jobs — alt describes the image for someone who can't see it; the caption says what it shows and why it matters. Never let one stand in for the other, and never treat the caption as decorative.

```css
.figure {
  display: grid;
  gap: var(--figure-gap);
}
.figure img {
  display: block;
  width: 100%;
  border-radius: var(--figure-radius);
}
.figure figcaption {
  padding-top: var(--space-2xs);
  border-top: var(--caption-border-top) solid var(--color-border);
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  max-width: var(--measure-caption);      /* 44ch */
  color: var(--color-text-muted);
}
.figure--wide { grid-column: 2 / 13; }        /* breaks out to 2-12 */
.figure--full-bleed { grid-column: 1 / 13; }  /* full-bleed 1-12 */
```

```html
<figure class="figure">
  <img src="..." alt="What's literally in the frame">
  <figcaption>Present-tense sentence saying what the image shows and why it matters.</figcaption>
</figure>
```

## Pull quote

Reuses the eyebrow's teal `/` as the opener rather than inventing a new mark — this is editorial furniture, not a third signature. Unattributed is the default: don't add a `<cite>` until a real quote with a real name exists.

```css
.pull-quote {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-display);
  line-height: var(--leading-tight);
  color: var(--color-text-strong);
  max-width: var(--measure-lead);
}
.pull-quote::before {
  content: var(--label-marker);           /* "/" — the eyebrow marker, reused */
  color: var(--color-accent);
  margin-right: 0.25em;
}
.pull-quote cite {
  display: block;
  margin-top: var(--space-2xs);
  font-style: normal;
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-text-muted);
}
```

```html
<blockquote class="pull-quote">
  <p>Quote text.</p>
  <!-- omit <cite> entirely until there's a real testimonial — never invent an attribution -->
</blockquote>
```

## Sidenote

Lives in the margin column (9–12). Collapses below its anchor paragraph on mobile — it never disappears and its content is never dropped.

```css
.sidenote {
  grid-column: var(--grid-margin-start) / span var(--grid-margin-span);
  padding-left: var(--space-sm);
  border-left: var(--border-hairline);
  font-family: var(--font-ui);
  font-size: var(--text-small);
  color: var(--color-text-muted);
}
@media (max-width: 768px) {
  .sidenote {
    grid-column: 1 / -1;
    margin-top: var(--space-sm);
    border-left: none;
    border-top: var(--border-hairline);
    padding-left: 0;
    padding-top: var(--space-xs);
  }
}
```

## Standfirst / deck

Sits between the headline and the body. 30–50 words, answering "why should I keep reading" (see `voice.md`) — not a summary of the piece and not the headline restated.

```css
.standfirst {
  font-family: var(--font-body);
  font-size: var(--text-lead);
  line-height: var(--leading-lead);
  max-width: var(--measure-lead);         /* 54ch */
  color: var(--color-text-muted);
  margin: var(--space-sm) 0 var(--space-lg);
}
```

## Article header

Title and standfirst in the prose column; an Inconsolata metadata block — client, sector, year, stack, role — in the margin column.

```css
.article-header {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: var(--grid-gutter);
}
.article-header__title {
  grid-column: var(--grid-prose-start) / span var(--grid-prose-span);
  font-size: var(--text-h1);
  line-height: var(--leading-heading);
}
.article-header__standfirst {
  grid-column: var(--grid-prose-start) / span var(--grid-prose-span);
}
.article-header__meta {
  grid-column: var(--grid-margin-start) / span var(--grid-margin-span);
  display: grid;
  gap: var(--space-2xs);
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-text-muted);
}
.article-header__meta dt { text-transform: uppercase; letter-spacing: var(--tracking-label); }
.article-header__meta dd { margin: 0 0 var(--space-2xs); color: var(--color-text-strong); }
```

```html
<header class="article-header">
  <h1 class="article-header__title">...</h1>
  <p class="article-header__standfirst standfirst">...</p>
  <dl class="article-header__meta">
    <dt>Client</dt><dd>...</dd>
    <dt>Sector</dt><dd>...</dd>
    <dt>Year</dt><dd>...</dd>
    <dt>Stack</dt><dd>...</dd>
    <dt>Role</dt><dd>...</dd>
  </dl>
</header>
```

## Code sample block

Primarily for `/buefy`. Treated as a figure — captionable via the same `.figure`/`figcaption` pattern above.

```css
.code-sample {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  border: var(--border-hairline);
  border-radius: var(--radius-lg);
  background: var(--color-surface-1);
  overflow-x: auto;
  padding: var(--space-sm);
}
```

## Data table

Primarily for `/buefy`. Replaces stat cards — bordered, dense, Inconsolata numerics read like a spec sheet rather than a marketing tile.

```css
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-mono);
  font-size: var(--text-small);
}
.data-table th, .data-table td {
  padding: var(--space-2xs) var(--space-sm);
  border-bottom: var(--border-hairline);
  text-align: left;
}
.data-table th {
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--tracking-label);
  font-weight: var(--weight-medium);
}
.data-table td { color: var(--color-text-strong); }
.data-table tbody tr:last-child th,
.data-table tbody tr:last-child td { border-bottom: none; }
```

## Media placeholder (the one allowed gradient)

```css
.media {
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-lg);
  background: var(--gradient-media);      /* the logo's own navy → teal wash */
}
```

Use only for cover/blog imagery that has no real asset yet. Never as a hero, section, or page background.

## EmphasisWord

A single word inside a Space Grotesk headline, set in Inconsolata to make the mono voice do one more job instead of reaching for a fourth (script/serif) display face. Use it **at most once per page** — twice is a bug, not a stronger effect.

```css
.emphasis {
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 1.08em;      /* optical size-match — Inconsolata runs smaller than Space Grotesk at the same nominal size; verify by rendering, don't assume the multiplier */
  color: var(--color-accent);
  letter-spacing: -0.01em;
  /* no underline, no background, no italic */
}
```

```html
<h1>Websites that <span class="emphasis">outlast</span> the developer who built them.</h1>
```

## AccentBand — full-bleed teal section

The concentrated end of the accent budget: a full-bleed section reversed out of solid teal. Use sparingly — at least one on Home and Services (per the page-reassembly pass), never on every section.

```css
.band {
  background: var(--color-accent);
  color: var(--color-on-accent);          /* dark text in dark mode — #2DD2BC is too bright for reversed white */
}
.band h2, .band h3 { color: var(--color-on-accent); }
.band .eyebrow { color: color-mix(in srgb, var(--color-on-accent) 75%, transparent); }
.band .eyebrow::before { color: var(--color-on-accent); }  /* the slash reverses too — it can't stay teal on a teal band */
.band p { color: color-mix(in srgb, var(--color-on-accent) 88%, transparent); }
```

Buttons on a band use `.btn--onband` (see Buttons above), not `.btn--primary` — a teal-on-teal primary button disappears.

## FAQ accordion

`/services` only, not Home — see the Density minimums for answer length (40–80 words). Plain disclosure semantics; no third signature, no new iconography beyond a rotate on the existing marker.

```css
.faq-item {
  border-bottom: var(--border-hairline);
}
.faq-item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
  padding-block: var(--space-sm);
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-display);
  color: var(--color-text-strong);
  cursor: pointer;
  list-style: none;
}
.faq-item summary::-webkit-details-marker { display: none; }
.faq-item summary::after {                /* reuse the eyebrow slash, rotated as a disclosure marker */
  content: var(--label-marker);
  color: var(--color-accent);
  font-family: var(--font-mono);
  transform: rotate(90deg);
  transition: transform var(--dur-fast) var(--ease-standard);
}
.faq-item[open] summary::after { transform: rotate(0deg); }
.faq-item p {
  padding-bottom: var(--space-md);
  max-width: var(--measure-prose);
  color: var(--color-text-muted);
}
```

```html
<details class="faq-item">
  <summary>How does pricing work?</summary>
  <p>Answer, 40–80 words.</p>
</details>
```

## Asymmetric proof tile

Not a three-up stat row — that pattern advertises how few strong numbers exist. One genuinely strong number gets the large tile; a second, differently-sized tile can carry a supporting figure or an honest `TODO`.

```css
.proof {
  display: grid;
  grid-template-columns: 1.6fr 1fr;       /* asymmetric on purpose — never 1fr 1fr 1fr */
  gap: var(--grid-gutter);
  align-items: stretch;
}
.proof-stat--big .proof-stat__value {
  font-family: var(--font-display);
  font-size: var(--text-display);
  font-weight: var(--weight-display-strong);
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--color-ink);
}
.proof-stat__value.is-pending {           /* honest placeholder, never a fabricated number */
  font-family: var(--font-mono);
  font-size: var(--text-h2);
  font-weight: var(--weight-semibold);
  color: var(--color-text-muted);
  border: 1px dashed var(--color-border-strong);
  border-radius: var(--radius-sm);
  padding: var(--space-2xs) var(--space-xs);
  display: inline-block;
  letter-spacing: 0;
}
.proof-stat__label {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  text-transform: uppercase;
  letter-spacing: var(--tracking-label);
  color: var(--color-text-muted);
  margin-top: var(--space-xs);
}
@media (max-width: 900px) {
  .proof { grid-template-columns: 1fr; }
}
```

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
