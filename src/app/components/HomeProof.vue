<template>
  <section v-if="bigStat" class="section home-proof">
    <div class="container is-max-desktop">
      <div class="proof">
        <ProofStat big :value="bigStat.value" :label="bigStat.label" />
        <p class="proof-caption">
          Buefy — the Vue component library I maintain<template v-if="statAsOf"> · as of {{ statAsOf }}</template>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// The one genuinely strong number (Buefy's real download count) gets the
// only tile here. A "years shipping software" stat used to render a literal
// TODO(wesley) placeholder next to it — that's a visible unfinished-content
// defect, not an honest disclosure, so it's removed rather than shown as
// pending. Add it back as a real ProofStat once Wesley supplies a verified
// figure; don't reintroduce a placeholder string in its place.
const { data: buefy } = await useAsyncData('home-proof-buefy', () => {
  return queryCollection('work').where('name', '=', 'Buefy').first()
})

const bigStat = computed(() => buefy.value?.stat)

// Wesley confirmed the stat should stay static with an "as of" date rather
// than an automated refresh — reusing the Buefy entry's own `date` field
// (already the confirmed-accurate date for that content) instead of adding
// a second date field just for this caption.
const statAsOf = computed(() => {
  if (!buefy.value?.date) return null
  return new Date(buefy.value.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' })
})
</script>

<style scoped>
.proof {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
}

.proof-caption {
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-text-muted);
}
</style>
