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
      <ContentRenderer :value="post" />
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
  twitterCard: 'summary_large_image'
})
</script>
