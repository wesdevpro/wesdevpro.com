<template>
  <section class="section is-medium page-about">
    <div class="container is-max-widescreen">
      <header class="section-header">
        <p class="section-header__eyebrow">About</p>
        <h1 class="title section-header__title">I'm Wesley Ford.</h1>
        <p class="section-header__subtitle">I build websites and AI-assisted automation for small businesses, and connect the systems behind them.</p>
      </header>

      <div class="columns is-variable is-7 mt-5">
        <div class="column is-7">
          <p>I work full-time as a software engineer and take on a small number of client projects alongside it. That means I'm selective about what I take on and honest about timelines before we start. I keep a small number of projects running at a time on purpose, with clear checkpoints along the way, so you always know where things stand. That includes AI-assisted automation now too — I build and ship it myself, the same way I build and maintain everything else I put my name on.</p>

          <p class="eyebrow mt-6">Buefy</p>
          <p class="mt-2">I'm the lead maintainer of Buefy, an open source component library for Vue, and I led its migration from Vue 2 to Vue 3.</p>
          <p class="mt-3">Maintaining a library other developers build on is a specific kind of discipline. You can't break someone's site with an update. You inherit decisions made years before you showed up and you have to live with them.</p>
          <PullQuote class="about-pull-quote">Every shortcut you take comes back as somebody else's bug report.</PullQuote>
          <p class="mt-3">That's the same discipline I bring to client work — nothing ships that I'm not willing to be responsible for maintaining later.</p>

          <p class="eyebrow mt-6">Background</p>
          <p class="mt-2">I got into software because I wanted to know why things worked, and I had a habit of taking them apart until I found out. That turned into writing code across the stack, frontend through backend, on internal tools at a fintech company. I hold a Software Architecture Foundations certification.</p>

          <p class="eyebrow mt-6">How I Work</p>
          <p class="mt-2">Most small business websites don't fail because someone picked the wrong technology. They fail because nobody maintained them, and eventually nobody could.</p>
          <p class="mt-3">So I build things that can be handed over. Plain structure, no exotic dependencies, documented well enough that another developer could pick it up without calling me. At handover, you get the source code and every account — full ownership, not just access.</p>
        </div>
        <div class="column is-5">
          <figure class="about-photo-wrap mb-5">
            <img class="about-photo" :src="headshot" alt="Wesley Ford portrait">
          </figure>
          <div class="box surface-panel about-side-card">
            <p class="eyebrow">Quick Facts</p>
            <ul class="facts-list mt-2">
              <li>Lead maintainer, Buefy (Vue 3)</li>
              <li>Software engineer, fintech background</li>
              <li>Software Architecture Foundations certified</li>
              <li>Full stack, not frontend only</li>
              <li>Based in South Carolina</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import headshot from '~/assets/images/LinkedIn Profile Picture.png'

useSeoMeta({
  title: 'About',
  description: "Wesley Ford builds websites and AI-assisted automation for small businesses, and connects the systems behind them. Lead maintainer of Buefy.",
  ogTitle: 'About · wesdevpro',
  ogDescription: "Wesley Ford builds websites and AI-assisted automation for small businesses, and connects the systems behind them. Lead maintainer of Buefy.",
  ogImage: '/images/wesdevpro-banner.jpg',
  twitterCard: 'summary_large_image'
})

// Person schema — only facts stated on this page itself, no invented address
// or credentials.
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Wesley Ford',
        url: 'https://wesdevpro.com/about',
        jobTitle: 'Software Engineer',
        description: 'Lead maintainer of Buefy, an open source Vue component library. Builds websites, AI-assisted automation, and system integrations for small businesses.',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'SC',
          addressCountry: 'US',
        },
        sameAs: [
          'https://github.com/wesdevpro',
          'https://www.linkedin.com/in/wesdevpro',
          'https://github.com/buefy/buefy',
        ],
      }),
    },
  ],
})
</script>

<style scoped>
.about-photo-wrap {
  margin: 0;
}

.about-photo {
  display: block;
  width: 100%;
  max-width: 24rem;
  margin: 0 auto;
  border-radius: var(--radius-lg);
  border: var(--border-hairline);
  box-shadow: var(--shadow-soft);
  object-fit: cover;
}

.about-side-card {
  padding: 1.25rem;
}

.facts-list {
  list-style: none;
  padding-left: 0;
  font-family: var(--font-mono);
  font-size: var(--step--1);
  color: var(--color-text-muted);
}

.facts-list li + li {
  margin-top: 0.45rem;
}

.about-pull-quote {
  margin: 1.5rem 0;
}
</style>
