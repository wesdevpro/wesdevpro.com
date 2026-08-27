<template>
  <blockquote class="pull-quote">
    <p><slot /></p>
    <!-- omit <cite> entirely until there's a real testimonial — never invent an attribution -->
    <cite v-if="attribution">{{ attribution }}</cite>
  </blockquote>
</template>

<script setup lang="ts">
defineProps<{ attribution?: string }>()
</script>

<style scoped>
/* Reuses the eyebrow's teal "/" as the opener rather than inventing a new
   mark — this is editorial furniture, not a third signature. */
.pull-quote {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-display);
  line-height: var(--leading-tight);
  color: var(--color-text-strong);
  max-width: var(--measure-lead);
  margin: 0;
}
.pull-quote p {
  margin: 0;
}
.pull-quote p::before {
  content: var(--label-marker);
  color: var(--color-accent);
  margin-right: 0.25em;
}
.pull-quote cite {
  display: block;
  margin-top: var(--space-2xs);
  font-style: normal;
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-text-muted);
}
</style>
