<template>
  <article v-if="post" class="detail-page section is-medium">
    <header class="detail-page__header surface-panel">
      <p class="eyebrow">Project</p>
      <h1 class="detail-page__title">{{ post.name }}</h1>
      <p v-if="post.description" class="detail-page__description">{{ post.description }}</p>
      <div class="detail-page__meta">
        <span v-if="post.date" class="detail-page__meta-item">Updated {{ formatDate(post.date) }}</span>
        <a v-if="post.repoUrl" class="detail-page__meta-item" :href="post.repoUrl" target="_blank" rel="noopener">
          Repository
        </a>
        <span v-if="post.tags?.length" class="detail-page__meta-item">{{ post.tags.join(' · ') }}</span>
      </div>
    </header>

    <section class="detail-page__prose">
      <ContentRenderer :value="post" />
    </section>
  </article>
  <section v-else class="empty-page">
    <h1>Page Not Found</h1>
    <p>The project you're looking for doesn't exist.</p>
    <NuxtLink to="/projects">Go back to projects</NuxtLink>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData('post', () =>
  queryCollection('projects')
    .path(route.path)
    .first()
)

function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

useSeoMeta({
  title: () => (post.value?.name ? `${post.value.name} · Project` : 'Project'),
  description: () => post.value?.description ?? 'Project details and implementation notes by wesdevpro.',
  ogTitle: () => (post.value?.name ? `${post.value.name} · Project` : 'Project · wesdevpro'),
  ogDescription: () => post.value?.description ?? 'Project details and implementation notes by wesdevpro.',
  ogImage: () => post.value?.coverImage || '/images/wesdevpro-banner.jpg',
  twitterCard: 'summary_large_image'
})
</script>
