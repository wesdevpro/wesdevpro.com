<template>
  <section class="section is-medium page-about">
    <div class="container is-max-widescreen">
      <header class="section-header">
        <p class="section-header__eyebrow">About</p>
        <h1 class="title section-header__title">I'm Wesley Ford.</h1>
        <p class="section-header__subtitle">I build websites for small businesses and connect the systems behind them.</p>
      </header>

      <div class="columns is-variable is-7 mt-5">
        <div class="column is-7">
          <p>I work full-time as a software engineer and take on a small number of client projects alongside it. That means I'm selective about what I take on and honest about timelines before we start. It also means I'm not going to vanish mid-project to chase something bigger.</p>

          <p class="eyebrow mt-6">Buefy</p>
          <p class="mt-2">I'm the lead maintainer of Buefy, an open source component library for Vue, and I led its migration from Vue 2 to Vue 3.</p>
          <p class="mt-3">Maintaining a library other developers build on is a specific kind of discipline. You can't break someone's site with an update. You inherit decisions made years before you showed up and you have to live with them. Every shortcut you take comes back as somebody else's bug report.</p>
          <p class="mt-3">That changed how I build everything else, including client work.</p>

          <p class="eyebrow mt-6">Background</p>
          <p class="mt-2">I got into software because I wanted to know why things worked, and I had a habit of taking them apart until I found out. That turned into writing code across the stack, frontend through backend, on internal tools at a fintech company. I hold a Software Architecture Foundations certification.</p>

          <p class="eyebrow mt-6">How I Work</p>
          <p class="mt-2">Most small business websites don't fail because someone picked the wrong technology. They fail because nobody maintained them, and eventually nobody could.</p>
          <p class="mt-3">So I build things that can be handed over. Plain structure, no exotic dependencies, documented well enough that another developer could pick it up without calling me. If you ever stop working with me, you should still own a site that works.</p>
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
  description: "Wesley Ford builds websites for small businesses and connects the systems behind them. Lead maintainer of Buefy.",
  ogTitle: 'About · wesdevpro',
  ogDescription: "Wesley Ford builds websites for small businesses and connects the systems behind them. Lead maintainer of Buefy.",
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
  list-style: none;
  padding-left: 0;
  font-family: var(--font-mono);
  font-size: var(--step--1);
  color: var(--color-text-muted);
}

.facts-list li + li {
  margin-top: 0.45rem;
}
</style>
