<template>
  <section class="section is-fullheight-navbar">
    <div class="container is-max-desktop">
      <SectionHeader
        eyebrow="Selected Work"
        title="Work"
        subtitle="Client work, open source, and product-focused builds."
        level="h1"
      />

      <div v-if="projects?.length" class="columns is-multiline is-variable is-6 mt-2 listing-grid">
        <div v-for="project in projects" :key="project.path" class="column is-half-desktop is-full-tablet">
          <CaseStudyCard
            :name="project.name"
            :description="project.description"
            :cover-image="project.coverImage"
            :path="project.path"
            :date="project.date"
            :tags="project.tags"
            :repo-url="project.repoUrl"
            :keyline="!!project.featured"
            :concept="!!project.concept"
          />
        </div>
      </div>

      <p v-else>No work found.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Work',
  description: 'Client work, open source contributions, and product-focused builds by wesdevpro.',
  ogTitle: 'Work · wesdevpro',
  ogDescription: 'Client work, open source contributions, and product-focused builds by wesdevpro.',
  ogImage: '/images/wesdevpro-banner.jpg',
  twitterCard: 'summary_large_image'
})

const { data: projects } = await useAsyncData('work', async () => {
  const data = await queryCollection('work').all()
  return data.sort((a, b) => {
    return ((a.order ?? Infinity) - (b.order ?? Infinity)) || (new Date(b.date).getTime() - new Date(a.date).getTime())
  })
})
</script>
