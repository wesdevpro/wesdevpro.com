# Prompt: reposition wesdevpro.com to lead with AI automation

Paste everything below into a fresh Claude Code session in this repo.

---

## Task

Reposition wesdevpro.com's sales narrative from "website developer who also does AI" to "developer who builds AI-powered automation for small businesses, delivered through the web and systems work." This is a **copy and ordering change on top of a finished information architecture** — `/services`, `/work`, the design tokens, and the Contact form all already exist and work. Do not restructure routes, collections, or components beyond what's listed below.

The site currently leads with website development everywhere and mentions AI third, in a fixed 3-item list, in every place that list appears. The goal is to flip that emphasis without overclaiming anything the business hasn't actually done yet.

## Hard constraints — read before editing anything

1. **No invented case studies, metrics, testimonials, or capabilities.** If a claim would require something that doesn't exist yet (a real AI engagement, a download count, a client quote), don't write it — use the existing `TODO(wesley): ...` convention (an HTML/Vue comment in the body, never a string a template renders to visitors).
2. **Do not touch `/work` case study content** (`src/content/work/*.md`). There is currently no AI/automation case study — don't fabricate one or reframe an existing case study (Imagine Land Works, Buefy, BlueBird Theatre) as AI work it isn't. This is a known, acceptable gap — flag it back to Wesley in your final summary, don't paper over it in the copy.
3. **Read these project skills before writing any copy or touching any file they cover**, don't work from memory of this prompt: `wesdevpro-style` (tokens/components/voice/checklist), `writing` (prose rules for this site), `seo` (the six-key `useSeoMeta()` pattern), `nuxt` (directory/module conventions), `buefy` (component usage). They are installed under `.claude/skills/`.
4. **Keep the existing banned-word list** out of anything you write: "dependable," "clarity," "clear" (as a vague virtue), "reliability," "maintainability," "scalable architecture," "user-centered," "user-focused," "cutting-edge," "passionate," "leveraging," "solutions-driven," "digital solutions." Keep the existing voice mechanics: first person, sentence-case body copy, ASCII `->` arrows (already used on CTA buttons — don't switch to an icon), one idea per sentence, ownership of limitations stated plainly (the site already does this well in `about.vue` and the Contact FAQ — match that tone for AI copy too, e.g. state that outputs get human review, not full autonomy).
5. **Don't run `npm install`, `npm run dev`, or `npm run build`.** If something looks like it might be broken, say so and let Wesley run it himself — don't try to fix a dev-environment issue by running installs.
6. **Don't change `NavBar.vue` or `NavFooter.vue`.** Nav order (Services, Work, About, Contact) already puts Services first; nothing about this repositioning requires a nav change.

## Ground truth: current copy, quoted in full

### `src/app/components/HomeHero.vue`
```
eyebrow: "wesdevpro"
H1: "I build websites for small businesses, and I make sure the systems behind
     them actually work together."
subtitle: "One person handles the design, the build, and the systems it runs
           on, from the first call to launch."
CTAs: "Start a Project ->" (/contact), "See the Work ->" (/work)
```
No AI mention. This is the first thing every visitor reads.

### `src/app/components/HomeServices.vue`
Three `ServiceCard`s, in this order, each linking to `/services#<slug>`:
1. `website-design-and-build` — "Custom website design and build" / "A site that explains what you do and makes it easy to get in touch."
2. `cloud-and-systems-integration` — "Cloud and systems integration" / "Your existing tools sharing data instead of you copying it by hand."
3. `ai-tooling-integration` — "AI tooling integration" / "One specific task automated, wired into how you already work."

### `src/content/services/*.md` frontmatter (order fields control display order everywhere)
- `website-design-and-build.md` — `order: 1`. `whoFor`: "For small businesses that need a real website, not a template with a logo swapped in." `includes`: design/build of full site, a working contact path, a walkthrough of updating it yourself. `excludes`: ongoing content writing/photography.
- `cloud-and-systems-integration.md` — `order: 2`. `whoFor`: "For businesses that already run a website or software, but the pieces don't talk to each other." `includes`: connecting existing tools to share data automatically, testing with real data before going live. `excludes`: buying/licensing the third-party tools themselves.
- `ai-tooling-integration.md` — `order: 3`. `whoFor`: "For businesses that want one specific task automated, not a chatbot added for its own sake." `includes`: wiring an AI tool into an existing workflow, testing it does the specific task correctly before going live. `excludes`: training a custom model from scratch. This copy is deliberately narrow and defensive — it reads as "AI, but only reluctantly."

### `src/app/components/ProcessSection.vue`
```
title: "How a project runs"
subtitle: "Four steps from the first call to a live site."
Step 1 "First call": "I ask about the business and what the site needs to
  do, then tell you honestly whether it's a good fit."
Step 4 "Launch": "I put the site live and walk you through how to update
  it yourself."
```
The whole section is framed around shipping "a site," not a system or an automated workflow.

### `src/app/pages/about.vue`
```
H1: "I'm Wesley Ford."
subtitle: "I build websites for small businesses and connect the systems
           behind them."
```
Body sections: intro (selective client work) → "Buefy" (Vue library maintainer, migration story) → "Background" (fintech engineer, Software Architecture Foundations cert) → "How I Work" ("Most small business websites don't fail because someone picked the wrong technology. They fail because nobody maintained them..."). Quick Facts sidebar: Buefy maintainer, fintech background, cert, "Full stack, not frontend only," South Carolina. No AI mention anywhere. JSON-LD `Person.jobTitle: 'Software Engineer'`, `description`: "Lead maintainer of Buefy, an open source Vue component library. Builds websites and connects systems for small businesses."

### `src/app/pages/contact.vue`
"What to Include" sidebar: "What the business does" / "What you want the site or system to do" / "Any deadline you're working against." The `needs` textarea is open-ended (fine for AI-related inquiries already), but nothing invites someone to describe a repetitive task specifically.

### Repeated 3-item description strings (same list, AI last, duplicated across 3 files)
- `src/app/pages/index.vue` — `useSeoMeta.description`/`ogDescription`: "wesdevpro builds websites and integrates the systems behind them for small businesses." JSON-LD `ProfessionalService.description`: "Custom website design and development, cloud and systems integration, and AI tooling integration for small businesses."
- `src/app/pages/services.vue` — `useSeoMeta.description`/`ogDescription`: "Custom website design and build, cloud and systems integration, and AI tooling integration for small businesses."
- `src/app/pages/contact.vue` — `useSeoMeta.description`: "Tell wesdevpro about your business and what you need built — a website, a system integration, or AI tooling."

## What to change

1. **`src/app/components/HomeHero.vue`** — rewrite the H1 and subtitle to lead with AI-assisted automation while keeping "the systems behind them" idea (it already gestures at more than just a website). Website work becomes the delivery detail, not the headline. Keep the eyebrow, CTA structure, and the `->` arrow convention. Don't invent a stat or claim ("I build AI tools that..." is fine; "I've helped X businesses..." is not, since no count exists).

2. **`src/content/services/*.md` + `src/app/components/HomeServices.vue`** — change `order` so `ai-tooling-integration` is `1`, `cloud-and-systems-integration` is `2`, `website-design-and-build` is `3` (three files, one field each). Rewrite `ai-tooling-integration.md`'s `whoFor`/`includes`/`excludes` and `HomeServices.vue`'s matching `oneLiner` to describe concrete small-business workflows — inquiry intake, document/form processing, an internal knowledge lookup over the business's own documents, drafting follow-ups for review — instead of the current defensive "not a chatbot" framing. Keep it honest: outputs get human review before anything goes out, missing information triggers a question rather than a guess. Don't remove the `excludes` line about not training custom models — that's still true and worth keeping. Update `HomeServices.vue`'s `ctaLabel`s to match if the slug order changes their meaning.

3. **`src/app/pages/index.vue`, `services.vue`, `contact.vue`** — reorder each repeated description/JSON-LD string so AI tooling is named first, cloud/systems second, website work third. These three files currently share near-identical phrasing — keep them consistent with each other when you edit.

4. **`src/app/components/ProcessSection.vue`** — generalize "a live site" language (the subtitle and Step 4's "I put the site live") to cover both a shipped system/workflow and a website, since this section now serves AI-automation engagements too. Don't invent new steps — the four-step shape (call, scope, build, launch) still applies to automation work.

5. **`src/app/pages/about.vue`** — add one or two sentences about the AI/automation capability, grounded in what's actually true (e.g., that Wesley builds and ships the automation himself, end to end, the same way he does client sites — not a new credential, just extending the existing "I build and maintain what I ship" narrative). Don't touch the Buefy or fintech sections — they're the strongest proof points on the page and stay as-is. Update the JSON-LD `description` only if the About body copy changes what's true to say there.

6. **`src/app/pages/contact.vue`** — reword the "What to Include" second bullet ("What you want the site or system to do") to also invite describing a repetitive task or workflow, so an inbound automation lead knows to describe the actual problem (e.g., "what you want automated, or the task that's eating the most time"), not just "site or system."

## What NOT to change

- `src/app/pages/work/index.vue`, `src/app/pages/work/[slug].vue`, and every file under `src/content/work/` — no AI case study exists, don't create or imply one.
- `src/content/blog/*.md` — both posts are unrelated to this repositioning; leave them alone unless Wesley asks separately for new AI-focused blog content.
- `NavBar.vue`, `NavFooter.vue`, routing, `content.config.ts` schemas, design tokens, and every component not listed above.
- Pricing (`startingPrice`) — stays omitted everywhere, same as today.

## Known gap to flag back to Wesley, not to solve here

There is no real AI/automation engagement to point to yet — no case study, no metric, no testimonial. This prompt reorders and reframes existing honest copy; it does not create proof that doesn't exist. The actual fix for that gap is landing one paid AI-automation pilot (inquiry intake and follow-up is a reasonable first offer, per prior discussion) and writing it up as a `/work` case study once it exists.

## Verification

- Re-read every file you edited after changing it.
- Grep the repo for the banned-word list above — confirm nothing you wrote introduces one.
- Confirm the three `content/services/*.md` files have `order: 1/2/3` matching `ai-tooling-integration` / `cloud-and-systems-integration` / `website-design-and-build`, and that `HomeServices.vue`'s card order and `/services`' rendered order (which is driven by `order`, see `services.vue`'s `useAsyncData` sort) both reflect that without you needing to touch the sort logic itself.
- Do not run `npm run dev`/`build` yourself — summarize what changed and ask Wesley to run `npm run dev` to check both themes and the mobile layout before this ships.
