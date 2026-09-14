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
  title: 'AI Tools and Automation for Small Businesses',
  description: 'wesdevpro builds AI tooling and automation, connects the systems behind it, and builds the websites around it for small businesses.',
  ogTitle: 'wesdevpro · AI Tools and Automation for Small Businesses',
  ogDescription: 'wesdevpro builds AI tooling and automation, connects the systems behind it, and builds the websites around it for small businesses.',
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
        description: 'AI tooling integration, cloud and systems integration, and custom website design and development for small businesses.',
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
