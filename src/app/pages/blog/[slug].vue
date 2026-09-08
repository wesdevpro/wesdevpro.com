<template>
  <article v-if="post" class="detail-page section is-medium">
    <header class="detail-page__header surface-panel">
      <p class="eyebrow">Blog</p>
      <h1 class="detail-page__title">{{ post.title }}</h1>
      <p v-if="post.description" class="detail-page__description">{{ post.description }}</p>
      <div class="detail-page__meta">
        <span v-if="post.date" class="detail-page__meta-item">Published {{ formatDate(post.date) }}</span>
        <span v-if="post.tags?.length" class="detail-page__meta-item">{{ post.tags.length }} topic{{ post.tags.length === 1 ? '' : 's' }}</span>
      </div>
      <AuthorCard
        v-if="author?.name && author?.github"
        :name="author.name"
        :github="author.github"
        :avatar="author.avatar"
        :url="author.url"
      />
    </header>

    <section class="detail-page__prose">
      <div class="content">
        <ContentRenderer :value="post" />
      </div>
    </section>
  </article>
  <section v-else class="empty-page">
    <h1>Page Not Found</h1>
    <p>The post you're looking for doesn't exist.</p>
    <NuxtLink to="/blog">Go back to blog</NuxtLink>
  </section>
</template>

<script setup lang="ts">
import AuthorCard from '~/components/blog/AuthorCard.vue'

const route = useRoute()

const { data: post } = await useAsyncData('post', () =>
  queryCollection('blog')
    .path(route.path)
    .first()
)

const fallbackAuthor = 'undefined'

const { data: author } = await useAsyncData('author', () =>
  queryCollection('authors')
    .where('github', '=', post.value?.author || fallbackAuthor)
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
  title: () => post.value?.title || 'Blog Post',
  description: () => post.value?.description || 'Technical writing and engineering insights by wesdevpro.',
  ogTitle: () => post.value?.title || 'Blog Post · wesdevpro',
  ogDescription: () => post.value?.description || 'Technical writing and engineering insights by wesdevpro.',
  ogImage: () => post.value?.coverImage || '/images/wesdevpro-banner.jpg',
  ogType: 'article',
  articlePublishedTime: () => post.value?.date ? new Date(post.value.date).toISOString() : undefined,
  twitterCard: 'summary_large_image'
})

useHead(() => {
  if (!post.value) return {}
  const url = `https://wesdevpro.com${route.path}`
  return {
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.value.title,
          description: post.value.description,
          datePublished: post.value.date ? new Date(post.value.date).toISOString() : undefined,
          image: post.value.coverImage,
          author: author.value?.name ? { '@type': 'Person', name: author.value.name } : undefined,
          mainEntityOfPage: url,
        }),
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Blog', item: 'https://wesdevpro.com/blog' },
            { '@type': 'ListItem', position: 2, name: post.value.title, item: url },
          ],
        }),
      },
    ],
  }
})
</script>
