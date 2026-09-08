<template>
  <section class="hero home-hero">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <div class="columns">
          <div class="column is-8-desktop is-full-tablet">
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
/*
  No `is-fullheight-with-navbar` here on purpose: forcing the hero to fill
  the viewport pushed proof/work content below the fold regardless of how
  short the headline was. There's also no media frame — no Imagine Land
  Works screenshot exists in the repo yet (see MediaFrame.vue's no-`src`
  fallback, an empty placeholder rectangle, which read as unfinished). Add a
  framed <MediaFrame :src="..."> column back once a real screenshot lands.
*/
.home-hero .hero-body {
  padding-top: clamp(2.5rem, 6vw, 4rem);
  padding-bottom: clamp(2rem, 5vw, 3.5rem);
}
</style>
