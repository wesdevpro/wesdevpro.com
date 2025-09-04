<script lang="ts" setup>
import brandLogo from '~/assets/images/wesdevpro-full-logo-no-sub.svg'

withDefaults(
   defineProps<{
      compact?: boolean
   }>(),
   {
      compact: false,
   },
)
</script>

<template>
   <NuxtLink class="navbar-item site-brand" :class="{ 'site-brand--compact': compact }" to="/">
      <img
         class="site-brand__lockup"
         :src="brandLogo"
         width="218"
         height="72"
         alt="wesdevpro"
      />
   </NuxtLink>
</template>
