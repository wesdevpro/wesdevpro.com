<template>
  <section class="section home-open-source">
    <div class="container is-max-desktop">
      <SectionHeader eyebrow="Open Source" title="I maintain Buefy" />

      <div class="card has-keyline home-open-source__card">
        <p>
          I maintain <a href="https://github.com/buefy/buefy" target="_blank" rel="noopener">Buefy</a>,
          a Vue component library built on Bulma, and led its migration from Vue 2 to Vue 3.
        </p>
        <!-- TODO(wesley): add a real download/usage figure here once you have one -->
        <a href="https://github.com/buefy/buefy" target="_blank" rel="noopener" class="content-card__cta">
          View the repository -&gt;
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-open-source__card {
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-start;
}
</style>
