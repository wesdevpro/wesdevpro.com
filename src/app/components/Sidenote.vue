<template>
  <aside class="sidenote">
    <slot />
  </aside>
</template>

<style scoped>
/* Lives in the margin column (9-12). Collapses below its anchor paragraph
   on mobile — it never disappears and its content is never dropped. */
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
</style>
