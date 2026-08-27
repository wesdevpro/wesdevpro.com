<template>
  <pre class="code-sample"><code><slot /></code></pre>
</template>

<style scoped>
/* Primarily for /buefy. Treated as a figure — captionable via the same
   Figure/figcaption pattern if needed. */
.code-sample {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  border: var(--border-hairline);
  border-radius: var(--radius-lg);
  background: var(--color-surface-1);
  overflow-x: auto;
  padding: var(--space-sm);
  margin: 0;
}
</style>
