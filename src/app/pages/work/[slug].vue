<template>
  <article v-if="visiblePost" class="detail-page section is-medium">
    <ArticleHeader
      :title="visiblePost.name"
      :standfirst="visiblePost.description"
      :meta="articleMeta"
    />

    <div v-if="visiblePost.screenshots?.length" class="detail-page__screenshots">
      <MediaFrame v-for="src in visiblePost.screenshots" :key="src" :src="src" :alt="`${visiblePost.name} screenshot`" />
    </div>

    <section class="detail-page__prose">
      <div class="content">
        <ContentRenderer :value="visiblePost" />
      </div>
    </section>

    <PullQuote
      v-if="visiblePost.testimonial"
      class="detail-page__testimonial"
      :attribution="[visiblePost.testimonial.author, visiblePost.testimonial.business].filter(Boolean).join(', ')"
    >
      {{ visiblePost.testimonial.quote }}
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

// An `offline: true` entry (e.g. a concept build that isn't actually live
// yet) is treated exactly like a missing one — same "not found" state, no
// separate messaging that would confirm the page exists but is hidden.
const visiblePost = computed(() => (post.value && !post.value.offline ? post.value : null))

function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const articleMeta = computed(() => {
  if (!visiblePost.value) return []
  const items: { label: string; value: string; href?: string }[] = []
  if (visiblePost.value.concept) {
    items.push({ label: 'Status', value: 'Concept — not a delivered engagement' })
  } else if (visiblePost.value.client) {
    items.push({ label: 'Status', value: 'Client Project' })
  } else if (visiblePost.value.repoUrl) {
    items.push({ label: 'Status', value: 'Open Source' })
  }
  if (visiblePost.value.client || visiblePost.value.sector) {
    items.push({ label: 'Client', value: [visiblePost.value.client, visiblePost.value.sector].filter(Boolean).join(' · ') })
  }
  // A handful of entries carry a known-placeholder date (dateVerified: false)
  // until a real one is confirmed — don't render it as if it were real.
  if (visiblePost.value.date && visiblePost.value.dateVerified !== false) {
    items.push({ label: 'Updated', value: formatDate(visiblePost.value.date) })
  }
  if (visiblePost.value.liveUrl) items.push({ label: 'Live Site', value: visiblePost.value.liveUrl.replace(/^https?:\/\//, ''), href: visiblePost.value.liveUrl })
  if (visiblePost.value.repoUrl) items.push({ label: 'Repository', value: 'View source', href: visiblePost.value.repoUrl })
  if (visiblePost.value.tags?.length) items.push({ label: 'Stack', value: visiblePost.value.tags.join(', ') })
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
  title: () => seoTitle(visiblePost.value?.name, visiblePost.value?.concept),
  description: () => seoDescription(visiblePost.value?.description, visiblePost.value?.concept),
  ogTitle: () => (visiblePost.value?.name ? seoTitle(visiblePost.value.name, visiblePost.value.concept) : 'Work · wesdevpro'),
  ogDescription: () => seoDescription(visiblePost.value?.description, visiblePost.value?.concept),
  ogImage: () => visiblePost.value?.coverImage || '/images/wesdevpro-banner.jpg',
  twitterCard: 'summary_large_image'
})

useHead(() => {
  if (!visiblePost.value) return {}
  return {
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Work', item: 'https://wesdevpro.com/work' },
            { '@type': 'ListItem', position: 2, name: visiblePost.value.name, item: `https://wesdevpro.com${route.path}` },
          ],
        }),
      },
    ],
  }
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
