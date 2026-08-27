<template>
  <section class="section band" :class="{ 'band--tight': tight }">
    <div class="container is-max-desktop">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ tight?: boolean }>(), { tight: false })
</script>

<style scoped>
/* Full-bleed teal, the concentrated end of the accent budget. At least one
   per page on Home and Services; never on every section. */
.band {
  background: var(--color-accent);
  color: var(--color-on-accent); /* dark text in dark mode — #2DD2BC is too bright for reversed white */
}
.band :deep(h2),
.band :deep(h3) {
  color: var(--color-on-accent);
}
.band :deep(.eyebrow) {
  color: color-mix(in srgb, var(--color-on-accent) 75%, transparent);
}
.band :deep(.eyebrow::before) {
  color: var(--color-on-accent); /* the slash reverses too — it can't stay teal on a teal band */
}
.band :deep(p) {
  color: color-mix(in srgb, var(--color-on-accent) 88%, transparent);
}
.band--tight {
  padding-block: var(--space-xl);
}
</style>
