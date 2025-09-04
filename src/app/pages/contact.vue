<template>
  <section class="section is-medium page-contact">
    <div class="container is-max-desktop">
      <header class="section-header">
        <p class="section-header__eyebrow">Contact</p>
        <h1 class="title section-header__title">Let&apos;s connect.</h1>
        <p class="section-header__subtitle">Reach out for collaboration, consulting discussions, or software opportunities.</p>
      </header>

      <div class="contact-panel box mt-5 surface-panel">
        <p class="mb-3">Email is the best way to reach me.</p>
        <a href="mailto:wes@wesdevpro.com" class="button is-primary is-medium is-rounded">wes@wesdevpro.com</a>
      </div>

      <div class="columns mt-5">
        <div class="column">
          <h2 class="title is-5">What to Include</h2>
          <ul class="contact-list">
            <li>Project or role context</li>
            <li>Expected timeline</li>
            <li>Relevant links and technical stack</li>
          </ul>
        </div>
        <div class="column">
          <h2 class="title is-5">Also Find Me On</h2>
          <ul class="contact-list">
            <li><a href="https://github.com/wesdevpro" target="_blank" rel="noopener">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/wesdevpro" target="_blank" rel="noopener">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contact',
  description: 'Contact Wesley Ford at wesdevpro for software engineering opportunities, collaborations, and project discussions.',
  ogTitle: 'Contact · wesdevpro',
  ogDescription: 'Get in touch with wesdevpro for consulting and collaboration.',
  ogImage: '/images/wesdevpro-banner.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<style scoped>
.contact-panel {
  border: 1px solid var(--color-border);
}

.contact-list {
  list-style: disc;
  padding-left: 1.2rem;
}

.contact-list li + li {
  margin-top: 0.4rem;
}
</style>
