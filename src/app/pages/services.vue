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
    <FaqSection :items="faqItems" />
    <ContactHero />
  </div>
</template>

<script setup lang="ts">
const { data: services } = await useAsyncData('services', async () => {
  const data = await queryCollection('services').all()
  return data.sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity))
})

const faqItems = [
  {
    question: 'How does pricing work?',
    answer: 'TODO(wesley)',
  },
  {
    question: 'What\'s the typical timeline?',
    answer: 'Most sites take three to five weeks from the first call to launch, depending on how much content you have ready and how many rounds of feedback we go through. Systems integration work is usually faster — a few days to two weeks. You get a specific estimate in the written scope before anything starts, not a vague range.',
  },
  {
    question: 'What happens if I\'m unavailable during the project?',
    answer: 'I build in checkpoints, not one long silent stretch, so a slow week on your end doesn\'t stall things — I keep working on what I can and flag anything that\'s genuinely blocked. If you go quiet for an extended period, I pause the engagement rather than let it drift, and pick back up whenever you\'re ready.',
  },
  {
    question: 'Who owns the code and content?',
    answer: 'You do. At handover you get the source code, every account, and the content itself — nothing stays locked to me or to a platform you\'d need my help to leave. If you want another developer to take over later, they can, without calling me first.',
  },
  {
    question: 'What about hosting and ongoing maintenance?',
    answer: 'TODO(wesley)',
  },
  {
    question: 'Is accessibility part of the build?',
    answer: 'Yes, as a baseline, not an add-on: semantic HTML, keyboard navigation, sufficient color contrast in both light and dark themes, and alt text on every image. I test with a keyboard and a screen reader before calling a page done, not just by eye.',
  },
]

useSeoMeta({
  title: 'Services',
  description: 'Custom website design and build, cloud and systems integration, and AI tooling integration for small businesses.',
  ogTitle: 'Services · wesdevpro',
  ogDescription: 'Custom website design and build, cloud and systems integration, and AI tooling integration for small businesses.',
  ogImage: '/images/wesdevpro-banner.jpg',
  twitterCard: 'summary_large_image'
})
</script>
