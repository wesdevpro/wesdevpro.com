<template>
  <section v-if="bigStat" class="section home-proof">
    <div class="container is-max-desktop">
      <div class="proof">
        <ProofStat big :value="bigStat.value" :label="bigStat.label" />
        <ProofStat value="TODO(wesley)" pending label="Years shipping software" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// The one genuinely strong number (Buefy's real download count) gets the
// large tile; padding it out to a three-up row would advertise how few
// strong numbers exist. The second tile renders a visible, honest TODO
// marker rather than a fabricated figure or an empty gap — replace the
// literal string once Wesley supplies a real number.
const { data: buefy } = await useAsyncData('home-proof-buefy', () => {
  return queryCollection('work').where('name', '=', 'Buefy').first()
})

const bigStat = computed(() => buefy.value?.stat)
</script>

<style scoped>
.proof {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: var(--space-lg);
  align-items: stretch;
}

@media (max-width: 700px) {
  .proof {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
}
</style>
