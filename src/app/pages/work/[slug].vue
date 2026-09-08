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

    <nav v-if="nextWork" class="detail-page__more" aria-label="More work">
      <NuxtLink :to="nextWork.path" class="detail-page__more-link">
        Next: {{ nextWork.name }} -&gt;
      </NuxtLink>
      <NuxtLink to="/work" class="detail-page__more-link detail-page__more-link--secondary">
        All work -&gt;
      </NuxtLink>
    </nav>
  </article>
  <section v-else class="empty-page">
    <h1>Page Not Found</h1>
    <p>The project you're looking for doesn't exist.</p>
    <NuxtLink to="/work">Go back to work</NuxtLink>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()

// Keyed by route.path (not a static 'post' string) and watching the route:
// useAsyncData's cache is global across the whole app, keyed by the string
// you give it. A static key here previously collided with blog/[slug].vue's
// own useAsyncData('post', ...) — navigating between a work case study and
// a blog post (or between two work entries, since Vue Router reuses this
// same component instance across param-only changes) could show stale
// cached data from a different page without a unique key + `watch`.
const { data: post } = await useAsyncData(`work-post:${route.path}`, () =>
  queryCollection('work')
    .path(route.path)
    .first(),
  { watch: [() => route.path] }
)

// An `offline: true` entry (e.g. a concept build that isn't actually live
// yet) is treated exactly like a missing one — same "not found" state, no
// separate messaging that would confirm the page exists but is hidden.
const visiblePost = computed(() => (post.value && !post.value.offline ? post.value : null))

// "Next work" — same sort as the Work index, offline entries excluded so
// this can never link somewhere that 404s, wrapping around to the first
// visible entry.
const { data: allWork } = await useAsyncData('all-work', async () => {
  const data = await queryCollection('work').all()
  return data
    .filter((item) => !item.offline)
    .sort((a, b) => ((a.order ?? Infinity) - (b.order ?? Infinity)) || (new Date(b.date).getTime() - new Date(a.date).getTime()))
})

const nextWork = computed(() => {
  const list = allWork.value
  if (!list || list.length < 2 || !visiblePost.value) return null
  const currentIndex = list.findIndex((item) => item.path === visiblePost.value?.path)
  if (currentIndex === -1) return null
  return list[(currentIndex + 1) % list.length]
})

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

.detail-page__more {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.75rem 1.5rem;
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: var(--border-hairline);
}

.detail-page__more-link {
  font-weight: var(--weight-bold);
  color: var(--color-link);
}

.detail-page__more-link:hover,
.detail-page__more-link:focus-visible {
  color: var(--color-accent);
}

.detail-page__more-link--secondary {
  color: var(--color-text-muted);
}
</style>
