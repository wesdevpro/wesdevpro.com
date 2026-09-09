<template>
  <article class="card service-card" :class="{ 'has-keyline': keyline }">
    <component :is="titleTag" class="title is-4 service-card__title">{{ title }}</component>
    <p v-if="whoFor" class="service-card__who-for">{{ whoFor }}</p>

    <div v-if="includes?.length" class="service-card__group">
      <p class="service-card__group-label">Includes</p>
      <ul class="service-card__list service-card__list--includes">
        <li v-for="item in includes" :key="item">{{ item }}</li>
      </ul>
    </div>

    <div v-if="excludes?.length" class="service-card__group">
      <p class="service-card__group-label">Scoped separately</p>
      <ul class="service-card__list service-card__list--excludes">
        <li v-for="item in excludes" :key="item">{{ item }}</li>
      </ul>
    </div>

    <p v-if="startingPrice" class="service-card__price">Starting at {{ startingPrice }}</p>

    <NuxtLink :to="href" class="button is-primary service-card__cta">
      {{ ctaLabel }} <span aria-hidden="true">-&gt;</span>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
interface Props {
  title: string
  whoFor?: string
  includes?: string[]
  excludes?: string[]
  startingPrice?: string
  href: string
  keyline?: boolean
  /** Rendered tag for the card title — lets callers keep document heading order
      correct (e.g. h2 on a page whose own title is h1) without changing the
      visual size, which stays fixed via the `title is-4` classes above. */
  titleTag?: 'h2' | 'h3'
  ctaLabel?: string
}

withDefaults(defineProps<Props>(), {
  keyline: false,
  titleTag: 'h3',
  ctaLabel: 'Discuss this service',
})
</script>

<style scoped>
.service-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 100%;
  padding: var(--space-md);
}

.service-card__title {
  margin: 0;
}

.service-card__who-for {
  margin: 0;
  color: var(--color-text-muted);
}

.service-card__group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.service-card__group-label {
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.service-card__list {
  margin: 0;
  padding-left: 1.1rem;
  color: var(--color-text);
  font-size: var(--step--1);
}

.service-card__list--excludes {
  color: var(--color-text-muted);
}

.service-card__price {
  margin: 0.25rem 0 0;
  font-family: var(--font-mono);
  font-size: var(--step--1);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-text-strong);
}

.service-card__cta {
  margin-top: auto;
  align-self: flex-start;
}
</style>
