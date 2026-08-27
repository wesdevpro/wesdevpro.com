<template>
  <figure class="figure" :class="{ 'figure--wide': wide, 'figure--full-bleed': fullBleed }">
    <img class="figure__image" :src="src" :alt="alt">
    <figcaption class="figure__caption"><slot /></figcaption>
  </figure>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string
    alt: string
    wide?: boolean
    fullBleed?: boolean
  }>(),
  {
    wide: false,
    fullBleed: false,
  },
)
</script>

<style scoped>
/* Alt text and the caption are different jobs — alt describes the image for
   someone who can't see it; the caption says what it shows and why it
   matters. Never let one stand in for the other. */
.figure {
  display: grid;
  gap: var(--figure-gap);
  margin: 0;
}
.figure__image {
  display: block;
  width: 100%;
  border-radius: var(--figure-radius);
}
.figure__caption {
  padding-top: var(--space-2xs);
  border-top: var(--caption-border-top) solid var(--color-border);
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  max-width: var(--measure-caption);
  color: var(--color-text-muted);
}
.figure--wide {
  grid-column: 2 / 13;
}
.figure--full-bleed {
  grid-column: 1 / 13;
}
</style>
