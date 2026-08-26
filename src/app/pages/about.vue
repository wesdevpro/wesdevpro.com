<template>
  <section class="section is-medium page-about">
    <div class="container is-max-widescreen">
      <header class="section-header">
        <p class="section-header__eyebrow">About</p>
        <h1 class="title section-header__title">I'm Wesley Ford.</h1>
        <p class="section-header__subtitle">I build websites and connect the systems behind them, after several years working in fintech.</p>
      </header>

      <div class="columns is-variable is-7 mt-5">
        <div class="column is-7">
          <h2 class="title is-4">Professional Background</h2>
          <p>My interest in software started with a curiosity about how systems fit together, and a habit of poking at things until I understood why they worked.</p>
          <p class="mt-3">Before my current job, I got involved with Buefy, an open source Vue component library, and ended up leading its migration from Vue 2 to Vue 3.</p>
          <p class="mt-3">I later worked as a fintech intern, writing code on both the frontend and backend of the company's internal tools.</p>
          <p class="mt-3">In my current role, I write and maintain software across a few different systems, and I hold a Software Architecture Foundations certification.</p>
        </div>
        <div class="column is-5">
          <figure class="about-photo-wrap mb-5">
            <img class="about-photo" :src="headshot" alt="Wesley Ford portrait">
          </figure>
          <div class="box surface-panel about-side-card">
            <h2 class="title is-5">Quick Facts</h2>
            <ul class="facts-list">
              <li>Software engineer, fintech background</li>
              <li>Buefy maintainer</li>
              <li>Software Architecture Foundations certified</li>
              <li>Works across the stack, not just the frontend</li>
            </ul>
            <NuxtLink to="/work" class="button is-primary is-outlined mt-4">See the Work -&gt;</NuxtLink>
          </div>
        </div>
      </div>

      <section class="box surface-panel mt-6 about-values">
        <h2 class="title is-4">How I Work</h2>
        <p>Before I worked in software, I was a lifeguard, and that job taught me to stay calm when something goes wrong instead of panicking.</p>
        <p class="mt-3">That's still how I handle a broken build or a client problem: deal with the immediate issue first, then explain what happened.</p>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import headshot from '~/assets/images/LinkedIn Profile Picture.png'

useSeoMeta({
  title: 'About',
  description: "Wesley Ford's background: a fintech career, Buefy maintainership, and building software end to end.",
  ogTitle: 'About · wesdevpro',
  ogDescription: "Wesley Ford's background: a fintech career, Buefy maintainership, and building software end to end.",
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
  border: var(--border-hairline);
  box-shadow: var(--shadow-soft);
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
