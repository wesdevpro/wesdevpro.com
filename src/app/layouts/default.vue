<template>
   <a href="#main-content" class="skip-link">Skip to content</a>
   <NavBar />
   <main id="main-content" class="container is-fluid site-main" tabindex="-1">
      <slot />
   </main>
   <NavFooter />
</template>

<style scoped>
.skip-link {
  position: absolute;
  top: -3rem;
  left: var(--space-md, 1rem);
  z-index: 100;
  padding: 0.6em 1em;
  background: var(--surface-card);
  color: var(--color-text-strong);
  border: var(--border-hairline);
  border-radius: var(--radius-sm);
  transition: top var(--dur-fast, 140ms) var(--ease-standard, ease);
}

.skip-link:focus {
  top: var(--space-md, 1rem);
  outline: var(--focus-ring);
  outline-offset: var(--focus-offset);
}
</style>
