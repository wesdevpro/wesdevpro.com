<template>
  <div class="services-page">
    <section class="section">
      <div class="container is-max-desktop">
        <SectionHeader
          eyebrow="Services"
          title="What I build"
          subtitle="Three kinds of work, scoped and priced before anything starts."
          level="h1"
        />

        <div class="columns is-variable is-6">
          <div v-for="service in services" :key="service.title" class="column is-one-third">
            <ServiceCard
              :title="service.title"
              :who-for="service.whoFor"
              :includes="service.includes"
              :excludes="service.excludes"
              :starting-price="service.startingPrice"
              href="/contact"
              keyline
            />
          </div>
        </div>
      </div>
    </section>

    <ProcessSection />
    <ContactHero />
  </div>
</template>

<script setup lang="ts">
const { data: services } = await useAsyncData('services', async () => {
  const data = await queryCollection('services').all()
  return data.sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity))
})

useSeoMeta({
  title: 'Services',
  description: 'Custom website design and build, cloud and systems integration, and AI tooling integration for small businesses.',
  ogTitle: 'Services · wesdevpro',
  ogDescription: 'Custom website design and build, cloud and systems integration, and AI tooling integration for small businesses.',
  ogImage: '/images/wesdevpro-banner.jpg',
  twitterCard: 'summary_large_image'
})
</script>
