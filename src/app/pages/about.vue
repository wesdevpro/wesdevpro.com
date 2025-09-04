<template>
  <section class="section is-medium page-about">
    <div class="container is-max-widescreen">
      <header class="section-header">
        <p class="section-header__eyebrow">About</p>
        <h1 class="title section-header__title">I am Wesley Ford, a Software Engineer focused on building dependable digital solutions.</h1>
        <p class="section-header__subtitle">I currently work at SouthState Bank, where I develop user-focused software with an emphasis on clarity, scalability, and long-term maintainability.</p>
      </header>

      <div class="columns is-variable is-7 mt-5">
        <div class="column is-7">
          <h2 class="title is-4">Professional Background</h2>
          <p>My interest in software started with a curiosity about how systems work and a drive to build tools that improve everyday processes.</p>
          <p class="mt-3">Before joining SouthState full time, I contributed to the open source community through Buefy, collaborating with engineers around the world to support the Vue 3 migration of a widely used component library.</p>
          <p class="mt-3">I later expanded that experience during my internship at SouthState, contributing to full-stack improvements across both frontend and backend systems.</p>
          <p class="mt-3">In my current role, I help build and maintain software across the bank&apos;s technology ecosystem, supported by my Software Architecture Foundations certification and a practical focus on efficient, reliable systems.</p>
        </div>
        <div class="column is-5">
          <figure class="about-photo-wrap mb-5">
            <img class="about-photo" :src="headshot" alt="Wesley Ford portrait">
          </figure>
          <div class="box surface-panel about-side-card">
            <h2 class="title is-5">Quick Facts</h2>
            <ul class="facts-list">
              <li>Software Engineer at SouthState Bank</li>
              <li>Former Buefy open source contributor</li>
              <li>Software Architecture Foundations certified</li>
              <li>Focused on clarity, scalability, and maintainability</li>
            </ul>
            <NuxtLink to="/projects" class="button is-primary is-outlined mt-4">Explore Projects</NuxtLink>
          </div>
        </div>
      </div>

      <section class="box surface-panel mt-6 about-values">
        <h2 class="title is-4">How I Work</h2>
        <p>My early experience as a lifeguard shaped how I collaborate: stay calm under pressure, communicate clearly, and support the team in high-responsibility environments.</p>
        <p class="mt-3">That mindset continues to guide my engineering approach and long-term goal of contributing software that strengthens SouthState&apos;s digital capabilities and customer experience.</p>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import headshot from '~/assets/images/LinkedIn Profile Picture.png'

useSeoMeta({
  title: 'About',
  description: 'Learn about Wesley Ford, Software Engineer at SouthState Bank, including open source contributions, architecture focus, and product engineering experience.',
  ogTitle: 'About · wesdevpro',
  ogDescription: 'Background, expertise, and current focus for Wesley Ford.',
  ogImage: '/images/wesdevpro-banner.jpg',
  twitterCard: 'summary_large_image'
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
  border: 1px solid var(--color-border);
  box-shadow: 0 20px 38px var(--color-shadow);
  object-fit: cover;
}

.about-side-card {
  padding: 1.25rem;
}

.facts-list {
  list-style: disc;
  padding-left: 1.2rem;
}

.facts-list li + li {
  margin-top: 0.45rem;
}

.about-values {
  max-width: 74ch;
}
</style>
