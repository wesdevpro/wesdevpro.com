<template>
  <span class="emphasis"><slot /></span>
</template>

<style scoped>
/* Use at most once per page — twice is a bug, not a stronger effect. */
.emphasis {
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 1.08em; /* optical size-match — Inconsolata runs smaller than Space Grotesk at the same nominal size */
  color: var(--color-accent);
  letter-spacing: -0.01em;
}
</style>
