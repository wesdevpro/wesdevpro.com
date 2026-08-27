<template>
  <section class="hero is-fullheight-with-navbar home-hero">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <div class="columns is-vcentered is-variable is-8">
          <div class="column is-half media-column">
            <MediaFrame framed alt="Imagine Land Works site preview" />
          </div>
          <div class="column is-half">
            <p class="eyebrow">wesdevpro</p>
            <h1 class="title">I build websites for small businesses, and I make sure the systems behind them actually work <EmphasisWord>together</EmphasisWord>.</h1>
            <p class="subtitle is-4">One person handles the design, the build, and the systems it runs on, from the first call to launch.</p>
            <div class="hero-actions">
              <NuxtLink to="/contact" class="button is-primary is-medium">Start a Project -&gt;</NuxtLink>
              <NuxtLink to="/work" class="button is-light is-medium">See the Work -&gt;</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 1023px) {
  .home-hero .column:last-child {
    margin-top: 1.75rem;
  }
}
</style>
