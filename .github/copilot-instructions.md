# Copilot Instructions

## Purpose

These instructions guide AI-assisted contributions for the wesdevpro.com repository.

Shared visual/content style baseline: `.github/website-style-sheet.md`.

## Scope and Context

- Single Nuxt 4 project rooted in `src/`.
- Primary stack: Nuxt 4, Vue 3, TypeScript, Nuxt Content 3.
- UI system: Bulma + Buefy 3 + custom Sass and CSS theme tokens.
- Content-driven pages live in Markdown and JSON under `src/content/`.

## Core Principles

- Preserve existing behavior and content structure unless the task explicitly requests changes.
- Prefer small, targeted edits over broad refactors.
- Follow existing repo patterns before introducing new abstractions.
- Keep accessibility, readability, and maintainability ahead of cleverness.
- For UI, content presentation, and modernization tasks, apply `.github/website-style-sheet.md`.

## External References

- Nuxt docs: https://nuxt.com/docs
- Nuxt Content docs: https://content.nuxt.com
- Bulma docs: https://bulma.io/documentation/
- Buefy docs: https://buefy.org
- Conventional Commits: https://www.conventionalcommits.org/

## Repository Layout (Key Paths)

- `src/app/` - Nuxt app source (components, pages, layouts, plugins, assets).
- `src/content/` - Content collections (`blog/`, `projects/`, `authors/`).
- `src/content.config.ts` - Collection schemas and validation.
- `src/nuxt.config.ts` - Nuxt modules/runtime settings.
- `src/package.json` - project scripts and dependencies.
- `.github/workflows/` - CI workflows.

## Vue, Nuxt, and UI Development

- Use existing Single File Component conventions in this repo (`<template>` + `script setup` and occasional classic `script` blocks).
- Keep plugin wiring patterns stable (`src/app/plugins/buefy-plugin.ts`).
- Favor Nuxt composables and server-safe APIs when possible.
- Preserve existing Bulma/Buefy class conventions unless a redesign is explicitly requested.
- For theme work, keep `src/app/assets/styles/colors.css`, `src/app/assets/sass/buefy.scss`, and app usage aligned.
- Keep desktop and mobile behavior intact for layout or navigation changes.

## Nuxt Content Rules

- Keep collection schema and content files synchronized.
- Update `src/content.config.ts` whenever frontmatter/data shape changes.
- Validate collection usage in pages/components when renaming fields.
- Prefer consistent author and taxonomy references across content files.

## Validation Requirements (Mandatory)

Before proposing code for review, run relevant checks from `src/`.

1. Runtime smoke check: `npm run dev`
2. Lint (if configured): `npx eslint .` or repo-defined lint script
3. Additional production validation as needed: `npm run build`, route/content query verification

If full validation is not possible, explicitly report:

- Commands that were run
- Commands that were not run
- The blocker and expected impact

## Documentation Impact Assessment (Mandatory)

For each change, determine whether docs/content updates are required.

Update repository docs/content when any of these are user-visible:

- Navigation/menu/page structure changes
- SEO metadata behavior changes
- Theme/token/styling contract changes
- Content model changes (frontmatter/schema/author metadata)
- Setup/build/dependency workflow changes

If no docs/content update is needed, state why in the final report.

## Content and SEO Standards

- Preserve valid frontmatter fields for content collections.
- Keep date formats parseable by schema coercion.
- Ensure page-level SEO metadata remains coherent after route/content changes.
- Avoid placeholder metadata in new pages unless requested.

## Commenting Standards

Reference: https://stackoverflow.blog/2021/12/23/best-practices-for-writing-code-comments/

- Comment to explain rationale or non-obvious trade-offs.
- Avoid comments that restate obvious code.
- Remove stale comments and debug logs while editing.
- Use `TODO(#issue)` / `FIXME(#issue)` for tracked follow-up work.

## Typing and Safety

- Avoid broad new `any` usage unless justified.
- Keep TypeScript types close to data boundaries (props/content/query responses).
- Minimize suppression comments and keep them local with a reason.

## Change Hygiene

- Keep unrelated files untouched.
- Do not reformat unrelated code.
- Keep import paths and naming consistent with local patterns.
- Report known pre-existing issues discovered during implementation.

## Commit Message Standards

Use Conventional Commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Subject rules:

- Imperative mood.
- Lowercase first word.
- No trailing period.
- Prefer <= 50 characters.
- Common types: `feat`, `fix`, `docs`, `refactor`, `style`, `test`, `build`, `ci`, `chore`.

## Reporting Format for Completed Work

When done, include:

1. Files changed
2. Behavior/content changes
3. Validation commands run and outcomes
4. Docs/content impact decision
5. Remaining risks or follow-ups
