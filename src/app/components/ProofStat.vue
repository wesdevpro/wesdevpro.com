<template>
  <div v-if="value !== undefined && value !== null && value !== ''" class="proof-stat" :class="{ 'proof-stat--big': big }">
    <p class="proof-stat__value" :class="{ 'is-pending': pending }">{{ value }}</p>
    <p class="proof-stat__label">{{ label }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string
  value?: string | number
  big?: boolean
  pending?: boolean
}

withDefaults(defineProps<Props>(), {
  big: false,
  pending: false,
})
</script>

<style scoped>
.proof-stat {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.proof-stat__value {
  margin: 0;
  font-family: var(--font-display);
  font-size: var(--step-3);
  font-weight: var(--weight-display-strong);
  color: var(--color-text-strong);
}

/* the large tile — deliberately not --text-display, which is reserved for
   the homepage hero headline (once per site, see checklist.md) */
.proof-stat--big .proof-stat__value {
  font-size: var(--text-h1);
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--color-ink);
}

.proof-stat__value.is-pending {
  font-family: var(--font-mono);
  font-size: var(--text-h2);
  font-weight: var(--weight-semibold);
  color: var(--color-text-muted);
  border: 1px dashed var(--color-border-strong);
  border-radius: var(--radius-sm);
  padding: 0.35em 0.6em;
  display: inline-block;
  letter-spacing: 0;
}

.proof-stat__label {
  margin: 0.2rem 0 0;
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-text-muted);
}
</style>
