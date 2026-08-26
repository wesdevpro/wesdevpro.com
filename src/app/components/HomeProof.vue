<template>
  <section v-if="hasAnyStat" class="section home-proof">
    <div class="container is-max-desktop">
      <div class="home-proof__row">
        <ProofStat v-for="stat in stats" :key="stat.label" :label="stat.label" :value="stat.value" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// TODO(wesley): fill in real figures — none of these are invented placeholders,
// they're left undefined on purpose until you supply them. ProofStat renders
// nothing per-stat when value is absent, and this whole strip collapses if
// every stat is empty.
const stats: { label: string; value?: string | number }[] = [
  { label: 'Years shipping software', value: undefined }, // TODO(wesley): years shipping
  { label: 'Buefy downloads', value: undefined }, // TODO(wesley): Buefy npm download/usage figure
  { label: 'Stacks worked in', value: undefined }, // TODO(wesley): e.g. "Vue, Nuxt, .NET" if you want this as a stat rather than prose
]

const hasAnyStat = computed(() => stats.some((stat) => stat.value !== undefined && stat.value !== null && stat.value !== ''))
</script>

<style scoped>
.home-proof__row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xl);
  justify-content: center;
  text-align: center;
}
</style>
