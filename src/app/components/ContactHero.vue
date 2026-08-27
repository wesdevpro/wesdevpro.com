<template>
    <AccentBand>
        <div class="home-contact has-text-centered">
            <p class="eyebrow">Contact</p>
            <h2 class="title is-2">Tell me what you need built.</h2>
            <p class="subtitle is-5">One form, one reply, no sales team in between.</p>
            <NuxtLink to="/contact" class="button is-primary is-medium home-contact__cta">Start a Project -&gt;</NuxtLink>
            <p class="home-contact__secondary">
              Prefer email? <a :href="`mailto:${appConfig.contactEmail}`">{{ appConfig.contactEmail }}</a>
            </p>
        </div>
    </AccentBand>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<style scoped>
.home-contact {
  max-width: 40rem;
  margin-inline: auto;
}

/* Bulma's .is-primary now resolves to the same teal as the band background —
   a teal-on-teal button disappears, so this context overrides it to the
   on-band treatment (reversed) instead. */
.home-contact__cta {
  background: var(--color-on-accent) !important;
  color: var(--color-accent) !important;
  border-color: var(--color-on-accent) !important;
}

.home-contact :deep(a:not(.button)) {
  color: var(--color-on-accent);
  text-decoration-color: color-mix(in srgb, var(--color-on-accent) 50%, transparent);
}

.home-contact__secondary {
  margin-top: 1.1rem;
  color: color-mix(in srgb, var(--color-on-accent) 80%, transparent);
  font-size: var(--step--1);
}
</style>
