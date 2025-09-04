<template>
    <section class="blog-index section is-fullheight-navbar">
        <div class="container is-fluid">
            <h1 class="title is-1">Blog Posts</h1>

            <ul v-if="posts?.length" class="columns is-multiline is-7">
                <li v-for="post in posts" :key="post.path" class="column is-full">
                    <BlogCard 
                    :title="post.title"
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
  description: '',
  ogTitle: 'Blog · wesdevpro',
  ogDescription: '',
  ogImage: '',
  twitterCard: ''
})

const { data: posts } = await useAsyncData('posts', async () => {
  var data = await queryCollection('blog').all();
  return data;
})
</script>
