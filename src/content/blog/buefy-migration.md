---
title: "The Migration From Buefy From Vue2 to Vue3"
tags: ["Buefy", "Software Migration", "Vue2ToVue3", "vue3"]
date: "09-07-2025"
coverImage: "https://buefy.org/static/img/buefy-banner.png"
author: "undefined"
---

# 🚀 The Migration From Buefy From Vue2 to Vue3

The transition from Vue2 to Vue3 has been one of the most anticipated upgrades in the Vue ecosystem. For developers relying on Buefy—a lightweight UI component library based on Bulma—this migration posed both exciting opportunities and technical challenges.

In this post, I’ll walk you through the key steps, lessons learned, and best practices from migrating Buefy to Vue3, based on my experience as part of the [buefy-vue3-development-team](https://github.com/buefy/buefy-vue3-development-team).

---

## 🧭 Why Migrate?

Vue3 introduced several game-changing features:
- **Composition API** for better logic reuse
- **Improved performance** and smaller bundle sizes
- **Teleport, Fragments, and Suspense** for more flexible UI rendering
- **TypeScript support** baked into the core

For Buefy, staying on Vue2 meant falling behind in compatibility and performance. Migration was inevitable to stay relevant and modern.

---

## 🔧 Migration Strategy

We approached the migration in phases:

### 1. **Audit Existing Components**
We started by identifying components that relied heavily on Vue2 options API and deprecated lifecycle hooks.

### 2. **Refactor to Composition API**
Where possible, we rewrote logic using the Composition API. This allowed for cleaner separation of concerns and better scalability.

### 3. **Update Dependencies**
Some third-party libraries used by Buefy were not Vue3-compatible. We either upgraded them or replaced them with alternatives.

### 4. **Testing & QA**
We used [Vitest](https://vitest.dev/) and [Playwright](https://playwright.dev/) to ensure components behaved consistently across versions.

---

## ⚠️ Challenges Faced

- **Bulma’s limitations**: While Bulma is great for styling, it lacks the flexibility of utility-first frameworks like Tailwind. We had to write custom CSS for some Vue3 features.
- **Breaking changes in Vue3**: Some Vue2 patterns simply didn’t translate. For example, `$listeners` and `$attrs` behavior changed, requiring rewrites.
- **Community plugins**: Many plugins built for Vue2 weren’t maintained, forcing us to fork or build our own.

---

## ✅ Key Wins

- **Improved performance**: Initial load times dropped by ~30%.
- **Better DX**: Developers now enjoy TypeScript support and cleaner APIs.
- **Future-proofing**: We’re now aligned with the Vue ecosystem’s direction.

---

## 📦 What’s Next?

We’re working on:
- Full documentation for Vue3 components
- Migration guides for users upgrading their apps
- Exploring integration with Oruga UI for extended flexibility

---

## 💬 Final Thoughts

Migrating Buefy to Vue3 wasn’t just a technical upgrade—it was a chance to rethink how we build UI components. The process was challenging but deeply rewarding, and the result is a more modern, performant, and developer-friendly library.

If you're considering migrating your own Vue2 project, start small, test often, and embrace the new paradigms Vue3 offers.

Happy coding!  
— **wesdevpro**
