<template>
    <section class="section is-medium home-contact">
        <div class="container is-max-desktop has-text-centered surface-panel p-6">
            <p class="eyebrow">Contact</p>
            <h2 class="title is-2">Tell me what you need built.</h2>
            <p class="subtitle is-5">One form, one reply, no sales team in between.</p>
            <NuxtLink to="/contact" class="button is-primary is-medium">Start a Project -&gt;</NuxtLink>
            <p class="home-contact__secondary">
              Prefer email? <a :href="`mailto:${appConfig.contactEmail}`">{{ appConfig.contactEmail }}</a>
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<style scoped>
.home-contact__secondary {
  margin-top: 1.1rem;
  color: var(--color-text-muted);
  font-size: var(--step--1);
}
</style>
