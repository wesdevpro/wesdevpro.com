<template>
  <article v-if="post" class="detail-page section is-medium">
    <ArticleHeader
      :title="post.name"
      :standfirst="post.description"
      :meta="articleMeta"
    />

    <div v-if="post.screenshots?.length" class="detail-page__screenshots">
      <MediaFrame v-for="src in post.screenshots" :key="src" :src="src" :alt="`${post.name} screenshot`" />
    </div>

    <section class="detail-page__prose">
      <div class="content">
        <ContentRenderer :value="post" />
      </div>
    </section>

    <PullQuote
      v-if="post.testimonial"
      class="detail-page__testimonial"
      :attribution="[post.testimonial.author, post.testimonial.business].filter(Boolean).join(', ')"
    >
      {{ post.testimonial.quote }}
    </PullQuote>
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

const articleMeta = computed(() => {
  if (!post.value) return []
  const items: { label: string; value: string }[] = []
  if (post.value.concept) items.push({ label: 'Status', value: 'Concept — not a delivered engagement' })
  if (post.value.client || post.value.sector) {
    items.push({ label: 'Client', value: [post.value.client, post.value.sector].filter(Boolean).join(' · ') })
  }
  if (post.value.date) items.push({ label: 'Updated', value: formatDate(post.value.date) })
  if (post.value.repoUrl) items.push({ label: 'Repository', value: 'View source', href: post.value.repoUrl })
  if (post.value.tags?.length) items.push({ label: 'Stack', value: post.value.tags.join(', ') })
  return items
})

function seoTitle(name?: string, concept?: boolean) {
  if (!name) return 'Work'
  return concept ? `${name} (Concept) · Work` : `${name} · Work`
}

function seoDescription(description?: string, concept?: boolean) {
  const fallback = 'Project details and implementation notes by wesdevpro.'
  const text = description ?? fallback
  return concept ? `Concept site — ${text}` : text
}

useSeoMeta({
  title: () => seoTitle(post.value?.name, post.value?.concept),
  description: () => seoDescription(post.value?.description, post.value?.concept),
  ogTitle: () => (post.value?.name ? seoTitle(post.value.name, post.value.concept) : 'Work · wesdevpro'),
  ogDescription: () => seoDescription(post.value?.description, post.value?.concept),
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
}
</style>
