<template>
  <div class="home-page">
    <HomeHero />
    <HomeProof />
    <HomeFeaturedWork />
    <HomeServices />
    <HomeOpenSource />
    <ProcessSection />
    <ContactHero />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Websites and Systems for Small Businesses',
  description: 'wesdevpro builds websites and integrates the systems behind them for small businesses.',
  ogTitle: 'wesdevpro · Websites and Systems for Small Businesses',
  ogDescription: 'wesdevpro builds websites and integrates the systems behind them for small businesses.',
  ogImage: '/images/wesdevpro-banner.jpg',
  twitterCard: 'summary_large_image'
})

// No street address or specific city — "based in South Carolina" is the
// only geographic claim made anywhere on the site, and this mirrors that
// exactly rather than implying a storefront or a specific service area.
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'wesdevpro',
        url: 'https://wesdevpro.com',
        founder: {
          '@type': 'Person',
          name: 'Wesley Ford',
        },
        description: 'Custom website design and development, cloud and systems integration, and AI tooling integration for small businesses.',
        areaServed: 'South Carolina',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'SC',
          addressCountry: 'US',
        },
      }),
    },
  ],
})
</script>
