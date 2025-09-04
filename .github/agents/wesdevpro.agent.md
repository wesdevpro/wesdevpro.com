# Agent Playbook

## Instruction Source

Treat `.github/copilot-instructions.md` as the canonical repository instruction set.
This playbook extends that file and must stay consistent with it.
For visual and content modernization work, also apply `.github/website-style-sheet.md`.

## Mission

Implement high-quality, low-risk changes for wesdevpro.com while preserving
Nuxt 4, Vue 3, Nuxt Content, and Buefy/Bulma project conventions.

## Operating Workflow

1. Read relevant files first and mirror existing patterns.
2. Make the smallest viable change.
3. Update related content/schema/types when behavior depends on content data.
4. Run relevant validation commands from `src/`.
5. Report exactly what changed, what was validated, and what remains uncertain.

## WSL Terminal Rule (Strict)

When executing npm or Node.js related procedures, run in WSL using line-by-line
commands only.

Required pattern:

1. First command: `wsl`
2. Then run commands directly in that WSL shell (one command per line).
3. Do not wrap each command with `wsl.exe -e ...`.
4. Keep command flow simple and explicit.

Example:

- `wsl`
- `cd /mnt/d/Sources/wesdevpro/wesdevpro.com/src`
- `npm run dev`
- `npx eslint .`

## Repository Awareness Rules (Strict)

- App runtime code lives in `src/app/`.
- Content data lives in `src/content/` and is typed by `src/content.config.ts`.
- Build/dev commands run from `src/`.
- Preserve Buefy plugin/theme wiring in `src/app/plugins/` and `src/app/assets/`.

## Required Quality Gates

### Documentation and Content Impact Rule (Strict)

- For every change, decide whether docs/content updates are required.
- Content updates are required for user-visible page copy, frontmatter fields,
  navigation, metadata, or schema changes.
- If no docs/content update is made, explicitly explain why.

### Schema/Query Consistency Rule (Strict)

- When changing collection fields, update both:
  1. `src/content.config.ts` schema
  2. all consuming queries/components/pages
- Do not leave mismatches between frontmatter keys and TypeScript usage.

### Pre-Review Validation Rule (Strict)

Before proposing review, run relevant checks in this order when possible:

1. `npm run dev`
2. Lint check (`npx eslint .` or project lint script)
3. Additional production validation when warranted (`npm run build`, affected route/content verification)

If environment limits prevent full execution, clearly state:

- Which commands were run
- Which were skipped
- Why they were skipped
- The risk of the skipped checks

## Nuxt and Vue Implementation Rules

- Prefer established Nuxt composables and async data patterns already in repo.
- Keep SSR-safe behavior explicit when accessing browser-only APIs.
- Preserve component style conventions already present in edited files.
- Keep navigation/layout changes responsive for desktop and mobile.

## Theming and Styling Rules

- Respect existing token strategy in `colors.css` and Sass setup in `buefy.scss`.
- Keep Bulma/Buefy class usage coherent with existing components.
- Avoid ad hoc color constants when a theme token already exists.

## Content and SEO Rules

- Maintain valid and parseable content frontmatter.
- Keep SEO metadata aligned with route/content behavior.
- Remove stale placeholder metadata when editing related pages.

## Comment Policy

Reference:
https://stackoverflow.blog/2021/12/23/best-practices-for-writing-code-comments/

- Comments should explain why, not obvious what.
- Remove outdated comments and temporary debug logging during edits.
- For follow-ups, prefer actionable `TODO(#issue)` or `FIXME(#issue)` markers.

## Reporting Format for Completed Work

Include:

1. Files changed
2. Behavior/content changes
3. Validation commands and outcomes
4. Docs/content impact decision
5. Remaining risks or follow-ups

## Commit Message Standards

Follow Conventional Commits as defined in `.github/copilot-instructions.md`.

Key constraint: keep the subject concise (prefer <=50 characters).
