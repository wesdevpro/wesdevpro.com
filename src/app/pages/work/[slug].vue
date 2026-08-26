<template>
  <article v-if="post" class="detail-page section is-medium">
    <header class="detail-page__header surface-panel">
      <p class="eyebrow">Project</p>
      <h1 class="detail-page__title">{{ post.name }}</h1>
      <p v-if="post.description" class="detail-page__description">{{ post.description }}</p>
      <div class="detail-page__meta">
        <span v-if="post.client || post.sector" class="detail-page__meta-item">
          {{ [post.client, post.sector].filter(Boolean).join(' · ') }}
        </span>
        <span v-if="post.date" class="detail-page__meta-item">Updated {{ formatDate(post.date) }}</span>
        <a v-if="post.repoUrl" class="detail-page__meta-item" :href="post.repoUrl" target="_blank" rel="noopener">
          Repository
        </a>
        <span v-if="post.tags?.length" class="detail-page__meta-item">Stack: {{ post.tags.join(', ') }}</span>
      </div>
    </header>

    <div v-if="post.screenshots?.length" class="detail-page__screenshots">
      <MediaFrame v-for="src in post.screenshots" :key="src" :src="src" :alt="`${post.name} screenshot`" />
    </div>

    <section class="detail-page__prose">
      <ContentRenderer :value="post" />
    </section>

    <blockquote v-if="post.testimonial" class="detail-page__testimonial surface-panel">
      <p>&ldquo;{{ post.testimonial.quote }}&rdquo;</p>
      <cite>
        {{ post.testimonial.author }}<span v-if="post.testimonial.business">, {{ post.testimonial.business }}</span>
      </cite>
    </blockquote>
  </article>
  <section v-else class="empty-page">
    <h1>Page Not Found</h1>
    <p>The project you're looking for doesn't exist.</p>
    <NuxtLink to="/work">Go back to work</NuxtLink>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData('post', () =>
  queryCollection('work')
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
  title: () => (post.value?.name ? `${post.value.name} · Work` : 'Work'),
  description: () => post.value?.description ?? 'Project details and implementation notes by wesdevpro.',
  ogTitle: () => (post.value?.name ? `${post.value.name} · Work` : 'Work · wesdevpro'),
  ogDescription: () => post.value?.description ?? 'Project details and implementation notes by wesdevpro.',
  ogImage: () => post.value?.coverImage || '/images/wesdevpro-banner.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<style scoped>
.detail-page__screenshots {
  display: grid;
  gap: var(--space-md);
  margin-bottom: 2rem;
}

.detail-page__testimonial {
  margin-top: 2rem;
  padding: var(--space-md);
}

.detail-page__testimonial p {
  font-size: var(--step-1);
  color: var(--color-text-strong);
  margin: 0 0 0.5rem;
}

.detail-page__testimonial cite {
  font-style: normal;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: var(--step--1);
}
</style>
