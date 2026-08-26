<template>
  <div v-if="value !== undefined && value !== null && value !== ''" class="proof-stat">
    <p class="proof-stat__value">{{ value }}</p>
    <p class="proof-stat__label">{{ label }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string
  value?: string | number
}

defineProps<Props>()
</script>

<style scoped>
.proof-stat {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.proof-stat__value {
  margin: 0;
  font-family: var(--font-display);
  font-size: var(--step-3);
  font-weight: var(--weight-display-strong);
  color: var(--color-text-strong);
}

.proof-stat__label {
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--step--1);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-text-muted);
}
</style>
