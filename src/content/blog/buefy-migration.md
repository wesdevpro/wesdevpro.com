---
title: "Migrating Buefy from Vue 2 to Vue 3"
description: "Lessons learned, migration strategy, and key technical wins from moving Buefy from Vue 2 to Vue 3."
tags:
	- "Buefy"
	- "Software Migration"
	- "Vue2ToVue3"
	- "vue3"
date: "09-07-2025"
coverImage: "/images/buefy-banner.png"
author: "wesdevpro"
---

# Migrating Buefy from Vue 2 to Vue 3

The transition from Vue 2 to Vue 3 has been one of the most anticipated upgrades in the Vue ecosystem. For developers relying on Buefy — a lightweight UI component library based on Bulma — this migration meant real technical work, not just a version bump.

In this post, I'll walk through the key steps, lessons, and practices from migrating Buefy to Vue 3, based on my work as part of the [buefy-vue3-development-team](https://github.com/buefy/buefy-vue3-development-team).

## Why the Migration Mattered

Vue 3 brought the Composition API for better logic reuse, smaller bundle sizes and improved performance, Teleport, Fragments, and Suspense for more flexible rendering, and TypeScript support built into the core. Staying on Vue 2 meant Buefy would keep falling behind on compatibility and performance, so the migration wasn't optional.

## Migration Strategy

I approached the migration in phases. First, I audited the existing components, identifying the ones that relied heavily on the Options API and deprecated lifecycle hooks. Next, I refactored what I could to the Composition API, which cleaned up the separation of concerns and made the codebase easier to extend. Some third-party libraries Buefy depended on weren't Vue 3-compatible, so I either upgraded them or replaced them. Throughout, I used [Vitest](https://vitest.dev/) and [Playwright](https://playwright.dev/) to keep components behaving consistently across versions.

## Challenges

Bulma is good for styling, but it doesn't have the flexibility of a utility-first framework like Tailwind, so some Vue 3 features needed custom CSS. Vue 3 also changed how `$listeners` and `$attrs` behave, which meant rewriting patterns that simply didn't translate from Vue 2. A lot of the community plugins built for Vue 2 weren't maintained anymore, so I had to fork some and build replacements for others.

## What Improved

Initial load times dropped by about 30%. TypeScript support and cleaner APIs made the codebase easier to work in. And the library is now aligned with where the Vue ecosystem is heading, instead of trailing behind it.

## What's Next

I'm still working on full documentation for the Vue 3 components and migration guides for people upgrading their own apps. I'm also looking at whether integrating with Oruga UI makes sense for more flexibility down the line.

Migrating Buefy to Vue 3 wasn't just a technical upgrade — it was a chance to rethink how the components are built. The process took longer than expected, but the result is a more modern, better-performing library. If you're migrating your own Vue 2 project, my advice is the same as anyone's: start small, test constantly, and don't fight the new patterns.
