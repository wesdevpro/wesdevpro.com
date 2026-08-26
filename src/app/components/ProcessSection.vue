<template>
  <section class="section process-section">
    <div class="container is-max-desktop">
      <SectionHeader
        eyebrow="Process"
        title="How a project runs"
        subtitle="Four steps from the first call to a live site."
      />

      <ol class="process-section__list">
        <li v-for="step in steps" :key="step.step" class="process-section__step">
          <span class="process-section__number">{{ step.step }}</span>
          <div>
            <h3 class="title is-5 process-section__title">{{ step.title }}</h3>
            <p class="process-section__body">{{ step.body }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    step: 1,
    title: 'First call',
    body: 'I ask about the business and what the site needs to do, then tell you honestly whether it\'s a good fit.',
  },
  {
    step: 2,
    title: 'Scope and price',
    body: 'You get a written scope and a starting price before I start any work.',
  },
  {
    step: 3,
    title: 'Build',
    body: 'I build the site and check in along the way, so nothing surprises you at the end.',
  },
  {
    step: 4,
    title: 'Launch',
    body: 'I put the site live and walk you through how to update it yourself.',
  },
]
</script>

<style scoped>
.process-section__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
  list-style: none;
  margin: 0;
  padding: 0;
}

.process-section__step {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.process-section__number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: var(--border-hairline);
  border-radius: var(--radius-md);
  font-family: var(--font-mono);
  font-weight: var(--weight-semibold);
  color: var(--color-text-muted);
}

.process-section__title {
  margin: 0 0 0.3rem;
}

.process-section__body {
  margin: 0;
  color: var(--color-text-muted);
}

@media (max-width: 1023px) {
  .process-section__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 599px) {
  .process-section__list {
    grid-template-columns: 1fr;
  }
}
</style>
