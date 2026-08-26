<template>
  <header class="section-header">
    <p class="section-header__eyebrow">{{ eyebrow }}</p>
    <component :is="level" class="title section-header__title">{{ title }}</component>
    <p v-if="subtitle" class="section-header__subtitle">{{ subtitle }}</p>
  </header>
</template>

<script setup lang="ts">
interface Props {
  eyebrow: string
  title: string
  subtitle?: string
  level?: 'h1' | 'h2'
}

withDefaults(defineProps<Props>(), {
  level: 'h2',
})
</script>
