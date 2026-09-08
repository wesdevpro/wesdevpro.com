<template>
  <NuxtLayout name="default">
    <section class="empty-page">
      <p class="eyebrow">{{ error?.statusCode === 404 ? '404' : 'Error' }}</p>
      <h1>{{ error?.statusCode === 404 ? 'Page not found' : 'Something went wrong' }}</h1>
      <p>
        {{ error?.statusCode === 404
          ? "The page you're looking for doesn't exist, or the link is out of date."
          : "Sorry — something broke on this end." }}
      </p>
      <div class="empty-page__actions">
        <NuxtLink to="/work" class="button is-primary is-medium" @click="handleClick">See the Work -&gt;</NuxtLink>
        <NuxtLink to="/contact" class="button is-light is-medium" @click="handleClick">Contact -&gt;</NuxtLink>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

useSeoMeta({
  title: 'Page Not Found',
  description: "The page you're looking for doesn't exist, or the link is out of date.",
})

function handleClick() {
  clearError()
}
</script>

<style scoped>
.empty-page__actions {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}
</style>
