<template>
  <section class="section home-services">
    <div class="container is-max-desktop">
      <SectionHeader
        eyebrow="Services"
        title="What I build"
        subtitle="Three kinds of work, each scoped and priced before anything starts."
      />

      <div class="columns is-variable is-6">
        <div v-for="service in services" :key="service.title" class="column is-one-third">
          <ServiceCard
            :title="service.title"
            :who-for="service.oneLiner"
            href="/services"
            keyline
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Custom website design and build',
    oneLiner: 'A site that explains what you do and makes it easy to get in touch.',
  },
  {
    title: 'Cloud and systems integration',
    oneLiner: 'Your existing tools sharing data instead of you copying it by hand.',
  },
  {
    title: 'AI tooling integration',
    oneLiner: 'One specific task automated, wired into how you already work.',
  },
]
</script>
