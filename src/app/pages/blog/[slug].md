<template>
    <article v-if="post"> <section v-if="author"> <h2>About the Author</h2>
            <p>
            <strong>
                <a :href="`https://github.com/${author.github}`" target="_blank" rel="noopener">
                    {{ author.name }}
                </a>
            </strong>
            </p>
        </section>

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
    .path(route.path)
    .first()
)

const fallbackAuthor = 'undefined'

const { data: author } = await useAsyncData('author', () =>
  queryContent('authors')
    .where({ github: post.value?.author || fallbackAuthor })
    .findOne()
)

watchEffect(() => {
  if (author.value) {
    console.log('Author data:', author.value)
  }
})

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
