<template>
  <p class="standfirst">
    <slot />
  </p>
</template>

<style scoped>
/* Sits between the headline and the body. 30-50 words, answering "why
   should I keep reading" — not a summary of the piece, not the headline restated. */
.standfirst {
  font-family: var(--font-body);
  font-size: var(--text-lead);
  line-height: var(--leading-lead);
  max-width: var(--measure-lead);
  color: var(--color-text-muted);
  margin: var(--space-sm) 0 var(--space-lg);
}
</style>
