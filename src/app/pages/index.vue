<template>
  <div class="home-page">
    <HomeHero />
    <AboutMe />
    <ContactHero />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Software Engineer and Builder',
  description: 'wesdevpro personal website featuring software engineering projects, technical writing, and career updates.',
  ogTitle: 'wesdevpro · Software Engineer and Builder',
  ogDescription: 'Explore projects, blog posts, and the work behind the wesdevpro brand.',
  ogImage: '/images/wesdevpro-banner.jpg',
  twitterCard: 'summary_large_image'
})
</script>
