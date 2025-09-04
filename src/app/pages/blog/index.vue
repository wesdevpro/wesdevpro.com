<template>
  <section class="blog-index section is-fullheight-navbar">
    <div class="container is-max-widescreen">
      <header class="listing-header">
        <p class="listing-header__eyebrow">Writing</p>
        <h1 class="title is-1 listing-header__title">Blog Posts</h1>
        <p class="subtitle is-5 listing-header__subtitle">
          Technical notes, product lessons, and practical implementation write-ups.
        </p>
      </header>

      <ul v-if="posts?.length" class="columns is-multiline is-variable is-6 listing-grid">
        <li v-for="post in posts" :key="post.path" class="column is-half-desktop is-full-tablet">
          <BlogCard
            :title="post.title"
            :description="post.description"
            :imgSrc="post.coverImage"
            :path="post.path"
            :date="post.date"
            :tags="post.tags"
            :author="post.author"
          />
        </li>
      </ul>

      <p v-else>No posts found.</p>
    </div>
  </section>
</template>

<script setup async lang="ts">
useSeoMeta({
  title: 'Blog · wesdevpro',
  description: 'Technical articles by wesdevpro on software engineering, Vue, Nuxt, and product development.',
  ogTitle: 'Blog · wesdevpro',
  ogDescription: 'Technical articles by wesdevpro on software engineering, Vue, Nuxt, and product development.',
  ogImage: '/images/wesdevpro-banner.jpg',
  twitterCard: 'summary_large_image'
})

const { data: posts } = await useAsyncData('posts', async () => {
  const data = await queryCollection('blog').all()
  return data.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
})
</script>
