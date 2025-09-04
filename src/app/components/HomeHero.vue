<script lang="ts" setup>
import heroDesk from '~/assets/images/hero-desk.svg?raw'
</script>

<template>
  <section class="hero is-fullheight-with-navbar home-hero">
        <div class="hero-body">
      <div class="container is-max-desktop">
        <div class="columns is-vcentered is-variable is-8">
                    <div class="column is-half svg-column">
                        <div class="svg-wrapper" v-html="heroDesk">
                        </div>
                    </div>
                    <div class="column is-half">
                  <p class="eyebrow">Software Engineer at SouthState Bank</p>
                <h1 class="title">Building clear, dependable, user-focused software.</h1>
                <p class="subtitle is-4">I am Wesley Ford. I work across frontend and full-stack systems, and I share practical lessons from product development and open source work.</p>
            <div class="hero-actions">
              <NuxtLink to="/projects" class="button is-primary is-medium">View Projects</NuxtLink>
              <NuxtLink to="/blog" class="button is-light is-medium">Read the Blog</NuxtLink>
            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.svg-wrapper svg {
    height: 100%;
    width: 100%;
}

.svg-wrapper {
    padding: 0.75rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    background: linear-gradient(160deg, var(--color-surface-1), var(--color-surface-2));
}

#blob-start {
    fill: var(--bulma-accent);
}

@media (max-width: 1023px) {
  .home-hero .column:last-child {
    margin-top: 1.75rem;
  }
}
</style>
