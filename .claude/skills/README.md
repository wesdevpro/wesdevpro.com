# Project Skills

Project-scoped Claude Code skills for wesdevpro.com live here, under `.claude/skills/<skill-name>/`.
They're checked into the repo so they apply for anyone working in this codebase, not just one machine.

## Layout convention

```
.claude/skills/
├── README.md              this file — index + conventions + template
└── <skill-name>/
    ├── SKILL.md            required — frontmatter + instructions
    └── references/         optional — details pulled in on demand, keeps SKILL.md short
```

Only `.claude/skills/<name>/SKILL.md` files are auto-discovered as invokable skills — anything
else in this directory (this README included) is inert documentation. That's deliberate: a
`_template/SKILL.md` was tried here and it got picked up as a real (broken) skill, so the template
lives below as a code block instead of a live file.

- `<skill-name>` is lowercase, hyphenated, matches the `name:` frontmatter field exactly.
- `SKILL.md` frontmatter is just `name` and `description`. The description is what Claude matches
  against a request to decide whether to load the skill, so state **what it covers and when to use
  it**, not just a category label.
- Keep SKILL.md itself short and actionable (steps, gotchas, conventions). Move long reference
  material (full API/prop tables, migration notes) into `references/` and link to it — that content
  only gets pulled into context when actually needed.
- Document what isn't derivable by reading the code: conventions the team has settled on, gotchas
  that cost someone real time, decisions with a non-obvious "why." Don't restate things Claude can
  just discover by grepping the repo.
- When a skill goes stale (library upgraded, convention changed), edit it in place rather than
  leaving it to drift — a wrong skill is worse than no skill.

## Current skills

| Skill | Covers |
|---|---|
| [buefy](buefy/SKILL.md) | Using the Buefy (Vue 3) component library and Bulma theming in this repo |
| [seo](seo/SKILL.md) | Per-page meta tags, sitemap/robots, and how content frontmatter feeds SEO |
| [nuxt](nuxt/SKILL.md) | Project structure, modules, plugin registration, and vendor chunking conventions |
| [writing](writing/SKILL.md) | Voice and prose rules for blog posts, project write-ups, and page copy |

## Planned

- A skill for the brand/design-system framework once that work starts (visual identity, tokens,
  component usage rules beyond Buefy's own defaults).

## Adding a new skill

Create `.claude/skills/<name>/SKILL.md` from this template, fill it in, and add a row to the table
above:

```markdown
---
name: <skill-name>
description: <What this skill covers and when Claude should reach for it. Be specific — this is the only text used to decide whether to load the skill for a given request.>
---

# <Skill Title>

<One paragraph: what this skill helps with in this repo, and why it exists — usually because the
default/generic approach would miss something specific to this project.>

## When to use

- <Concrete trigger 1>
- <Concrete trigger 2>

## Conventions

<The actual project-specific rules, patterns, and gotchas. Prefer short, concrete statements over
prose. Link to real files in the repo (`path/to/file.ts`) instead of re-describing their contents.>

## Common pitfalls

| Pitfall | Fix |
|---|---|
| <Something that has actually gone wrong or is non-obvious> | <How to avoid/fix it> |

## References

<Optional — link to references/*.md for anything long: full prop tables, migration notes, etc.>
```
