<template>
  <article class="card service-card" :class="{ 'has-keyline': keyline }">
    <h3 class="title is-4 service-card__title">{{ title }}</h3>
    <p v-if="whoFor" class="service-card__who-for">{{ whoFor }}</p>

    <ul v-if="includes?.length" class="service-card__list service-card__list--includes">
      <li v-for="item in includes" :key="item">{{ item }}</li>
    </ul>

    <ul v-if="excludes?.length" class="service-card__list service-card__list--excludes">
      <li v-for="item in excludes" :key="item">{{ item }}</li>
    </ul>

    <p v-if="startingPrice" class="service-card__price">Starting at {{ startingPrice }}</p>

    <NuxtLink :to="href" class="button is-primary service-card__cta">
      Learn more ->
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
}

withDefaults(defineProps<Props>(), {
  keyline: false,
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
