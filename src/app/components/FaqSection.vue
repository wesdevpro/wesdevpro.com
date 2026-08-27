<template>
  <section class="section faq-section">
    <div class="container is-max-desktop">
      <SectionHeader eyebrow="Common Questions" title="Frequently Asked Questions" />
      <div class="faq-list">
        <details v-for="item in items" :key="item.question" class="faq-item">
          <summary>{{ item.question }}</summary>
          <p>{{ item.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}

defineProps<{ items: FaqItem[] }>()
</script>

<style scoped>
/* /services only, not Home — see the Density minimums for answer length (40-80 words). */
.faq-item {
  border-bottom: var(--border-hairline);
}
.faq-item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
  padding-block: var(--space-sm);
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-display);
  color: var(--color-text-strong);
  cursor: pointer;
  list-style: none;
}
.faq-item summary::-webkit-details-marker {
  display: none;
}
.faq-item summary::after { /* reuse the eyebrow slash, rotated as a disclosure marker */
  content: var(--label-marker);
  color: var(--color-accent);
  font-family: var(--font-mono);
  transform: rotate(90deg);
  transition: transform var(--dur-fast) var(--ease-standard);
}
.faq-item[open] summary::after {
  transform: rotate(0deg);
}
.faq-item p {
  padding-bottom: var(--space-md);
  max-width: var(--measure-prose);
  color: var(--color-text-muted);
}
</style>
