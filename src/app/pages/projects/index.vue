<template>
  <section class="section is-fullheight-navbar">
    <div class="container is-max-desktop">
      <header class="listing-header">
        <p class="listing-header__eyebrow">Selected Work</p>
        <h1 class="title is-1 listing-header__title">Projects</h1>
        <p class="subtitle is-5 listing-header__subtitle">
          Career projects, open source work, and product-focused builds.
        </p>
      </header>

      <div v-if="projects?.length" class="columns is-multiline is-variable is-6 mt-2 listing-grid">
        <article v-for="project in projects" :key="project.path" class="column is-half-desktop is-full-tablet">
          <div class="card content-card content-card--project is-fullheight">
            <div class="card-content content-card__body">
              <div class="content-card__meta-row">
                <p class="content-card__eyebrow">{{ formatDate(project.date) }}</p>
                <a
                  v-if="project.repoUrl"
                  :href="project.repoUrl"
                  class="content-card__secondary-link"
                  target="_blank"
                  rel="noopener"
                >
                  Repository
                </a>
              </div>

              <h2 class="title is-4 content-card__title">
                <NuxtLink :to="project.path" class="content-card__title-link">
                  {{ project.name }}
                </NuxtLink>
              </h2>

              <p class="content-card__summary">
                {{ project.description ?? 'Project write-up coming soon.' }}
              </p>

              <div v-if="project.tags?.length" class="content-card__tags" aria-label="Project technologies and topics">
                <span
                  v-for="tag in project.tags.slice(0, 3)"
                  :key="`${project.path}-${tag}`"
                  class="content-card__tag"
                >
                  {{ tag }}
                </span>
                <span v-if="project.tags.length > 3" class="content-card__tag content-card__tag--muted">
                  +{{ project.tags.length - 3 }}
                </span>
              </div>

              <div class="content-card__footer">
                <NuxtLink :to="project.path" class="content-card__cta">
                  View project ->
                </NuxtLink>
              </div>
            </div>
          </div>
        </article>
      </div>

      <p v-else>No projects found.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Projects',
  description: 'Explore software projects by wesdevpro, including technical stack, project goals, and implementation details.',
  ogTitle: 'Projects · wesdevpro',
  ogDescription: 'A portfolio of software work, case studies, and open source contributions.',
  ogImage: '/images/wesdevpro-banner.jpg',
  twitterCard: 'summary_large_image'
})

const { data: projects } = await useAsyncData('projects', async () => {
  const data = await queryCollection('projects').all()
  return data.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
})

function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>
