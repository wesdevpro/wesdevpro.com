<template>
  <section class="section home-services">
    <div class="container is-max-desktop">
      <SectionHeader
        eyebrow="Services"
        title="What I build"
        subtitle="Three kinds of work, each scoped and priced before anything starts."
      />

      <div class="columns is-variable is-6">
        <div v-for="service in services" :key="service.slug" class="column is-one-third">
          <ServiceCard
            :title="service.title"
            :who-for="service.oneLiner"
            :href="`/services#${service.slug}`"
            :cta-label="service.ctaLabel"
            keyline
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Slugs match the content filenames in content/services/ — also used as the
// section `id`s on the Services page (see services.vue) so these links land
// on the right section instead of all three pointing at the bare page.
const services = [
  {
    slug: 'website-design-and-build',
    title: 'Custom website design and build',
    oneLiner: 'A site that explains what you do and makes it easy to get in touch.',
    ctaLabel: 'Discuss website design',
  },
  {
    slug: 'cloud-and-systems-integration',
    title: 'Cloud and systems integration',
    oneLiner: 'Your existing tools sharing data instead of you copying it by hand.',
    ctaLabel: 'Discuss systems integration',
  },
  {
    slug: 'ai-tooling-integration',
    title: 'AI tooling integration',
    oneLiner: 'One specific task automated, wired into how you already work.',
    ctaLabel: 'Discuss AI tooling',
  },
]
</script>
