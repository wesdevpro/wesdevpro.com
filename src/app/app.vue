<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()

// Function form (not a plain object) so the canonical href re-resolves on
// client-side route changes, not just on first render.
useHead(() => ({
  titleTemplate: '%s · wesdevpro',
  link: [
    {
      // Single source of truth for canonical URLs — no per-page tags to
      // drift out of sync, and this also fixes the trailing-slash question:
      // route.path never carries one, so canonical URLs never do either.
      rel: 'canonical',
      href: `https://wesdevpro.com${route.path}`,
    },
  ],
}))
</script>

