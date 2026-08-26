---
name: writing
description: Voice and prose rules for this site's blog posts, project write-ups, and page copy. Use when drafting or editing anything in content/blog, content/projects, or on-page copy (about.vue, contact.vue, hero sections) — new posts, edits to existing ones, or any prose meant to sound like Wesley wrote it.
---

# Writing for wesdevpro.com

**This overrides Claude's default writing style.** The default (declarative previews, fragment
bullet lists, tidy three-act blog-post structure, upbeat sign-offs) reads as generated, and this
site already has one real example of it —
[buefy-migration.md](../../../src/content/blog/buefy-migration.md) — which this skill exists to
stop from happening again. Follow the rules below precisely, even where they contradict habit.

## When to use

- Writing or editing a post under `content/blog/`
- Writing or editing a project write-up under `content/projects/`
- Writing on-page copy: hero text, about/contact copy, card summaries, button labels
- Editing existing site copy for tone

For frontmatter fields and how they feed SEO, see the `seo` skill — this skill is about the prose
itself.

## 1. Point of view — the one house rule

**Write in first person ("I"), always.** This is Wesley's personal site, and the on-page copy
already establishes that voice —
[about.vue](../../../src/app/pages/about.vue): *"I am Wesley Ford... I currently work in
fintech..."*, [wesdevpro.com.md](../../../src/content/projects/wesdevpro.com.md): *"wesdevpro.com
is the central platform for **my** engineering brand."*

Some existing content drifts into third person (`Wesley's interest in development began...` in
`introduction-post.md`; `Wesley helped create Analyst...` in `analyst.md`). That drift is a defect
to fix when touched, not a second acceptable style — don't extend it into new content, and prefer
converting a paragraph to first person over leaving it inconsistent when editing nearby text.

## 2. Sentence structure

**Every sentence needs a subject and a predicate. No exceptions.**

Forbidden:
- Fragment lists: "Shipped the migration. Fixed the styling. Moved on."
- Noun-phrase bullets with no verb doing anything: "Improved performance and smaller bundle
  sizes" (an actual line from `buefy-migration.md` — compare to how `analyst.md` does the same
  job: *"it provided a strong foundation in rapid product iteration, API-first architecture, and
  startup execution under constraints"* — one full sentence, not a fragment list)
- Incomplete clauses standing alone: "Because it seemed important." "While considering the
  options."

Required: name who did the thing. "I migrated the icon config to FontAwesome," not "Migrated the
icon config."

**Length:** medium sentences (15-25 words) as the baseline, varied irregularly. Not a rhythm — a
mess, the way actual thinking is a mess.

**The AI trap:** short sentence for punch. Another short one. Then a third. Impact.
That's manufactured drama. Use short sentences sparingly, only when a thought actually is that
short.

**Self-check:** find the subject and verb in every sentence. Count short sentences per
paragraph — 0-2 max. Read it aloud; does it sound like a person explaining something, or a slide
deck?

## 3. Voice

Sound like a specific engineer talking, not a press release. Wesley's existing pages lean
understated and matter-of-fact — "The project did not ship to production, but it provided a
strong foundation" (`analyst.md`), not "This project was a tremendous learning experience."

**Never sound:**
- Overly authoritative, like the piece is settling a debate
- Smug about a technical choice
- Self-congratulatory about outcomes, especially ones that didn't fully land (Analyst didn't ship —
  say that plainly, don't spin it)

**What works:**
- State a judgment without flagging that it's a judgment ("Bulma's fine for styling but you'll
  still hand-write CSS for anything Buefy doesn't cover" beats "One limitation worth noting is
  that...")
- Acknowledge uncertainty or an unfinished edge instead of smoothing it over
- Dry understatement over enthusiasm ("didn't ship" rather than "pivoted")

## 4. Content and structure

**Avoid empty signaling** — the exact failure mode in `buefy-migration.md`:
- Declarative section headers that promise an insight before delivering one: "Why Migrate?", "Key
  Wins" as standalone headers followed by a listicle
- A pronouncement in place of an argument: "Migration was inevitable to stay relevant and modern"
  — this asserts a conclusion instead of showing the reasoning that led there
- A closing paragraph that summarizes-and-uplifts without adding anything: "the result is a more
  modern, performant, and developer-friendly library... Happy coding!" — cut endings like this
  entirely; stop when the point is made

**What works instead:**
- Open with the actual point, not a preview of what's coming
- Use real connectors ("because," "which meant," "so") to show why one thing led to another,
  instead of stacking parallel bullet points that imply but never state the connection
- Let specifics carry the piece — a concrete decision, a number, a thing that broke — rather than
  a generic-sounding claim ("improved performance") sitting alone with no detail behind it
- A blog post or project write-up doesn't need every section a template suggests (Why / Strategy /
  Challenges / Wins / What's Next / Final Thoughts). Use only the sections the actual content
  needs — most of this site's project write-ups run three short sections (`analyst.md`,
  `wesdevpro.com.md`), and that's a better length target than a six-section retrospective.

## 5. Concrete fixes

| Bad (seen in this repo or its pattern) | Fix |
|---|---|
| "Improved performance and smaller bundle sizes." (fragment) | "Initial load times dropped by about 30%." (one full sentence, with a real number if you have one) |
| "Migration was inevitable to stay relevant and modern." (pronouncement) | Say what specifically would have broken or fallen behind, and let that be the argument |
| "We're working on: Full documentation... Migration guides... Exploring integration with Oruga UI" (fragment list dressed as a preview) | "I still owe this full documentation and a migration guide; I'm also weighing whether Oruga UI is worth integrating." |
| "Happy coding! — wesdevpro" (canned sign-off) | End on the last real point. No sign-off needed. |
| "Wesley's interest in development began..." (third person, on a first-person site) | "My interest in development began..." |

## 6. When unsure

If a fact, number, or specific claim isn't something you actually know (a metric, a date, a
technical detail about how something failed or shipped), write `[TODO]` in its place rather than
inventing a plausible-sounding one. Wesley fills these in — a fabricated specific is worse than an
honest gap, especially in a personal/professional-brand piece where the details are the credibility.

## Self-check before finishing

- [ ] First person throughout
- [ ] Every sentence has a subject and a verb
- [ ] No more than 0-2 short sentences per paragraph
- [ ] No section header is a preview/pronouncement with nothing under it yet
- [ ] No fragment bullet lists standing in for connected reasoning
- [ ] No canned closing line ("Happy coding!", "This changes everything.")
- [ ] Any unverified fact is `[TODO]`, not invented
