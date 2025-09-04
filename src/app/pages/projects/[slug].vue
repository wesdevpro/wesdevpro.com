<template>
  <article v-if="post">
    <ContentRenderer :value="post" />
  </article>
  <section v-else class="empty-page">
    <h1>Page Not Found</h1>
    <p>The post you're looking for doesn't exist.</p>
    <NuxtLink to="/">Go back home</NuxtLink>
  </section>
   <!-- Add Navigation -->
</template>

<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData('post', () =>
  queryCollection('blog')
    .path(route.path) // Uses full path like /posts/yyyy-mm-dd-title
    .first()
)

// BUG: Title is undefined here...
useSeoMeta({
  title: post.title ?? 'no title',
  description: '',
  ogTitle: post.title ?? 'no title',
  ogDescription: '',
  ogImage: '',
  twitterCard: ''
})
</script>
