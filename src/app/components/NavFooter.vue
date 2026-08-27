<template>
   <footer class="site-footer">
      <div class="level container">
         <div class="level-left">
            <NavBrand compact />
         </div>
         <div class="level-right">
            <NuxtLink to="/" class="level-item">Home</NuxtLink>
            <NuxtLink to="/services" class="level-item">Services</NuxtLink>
            <NuxtLink to="/work" class="level-item">Work</NuxtLink>
            <NuxtLink to="/about" class="level-item">About</NuxtLink>
            <NuxtLink to="/blog" class="level-item">Blog</NuxtLink>
            <NuxtLink to="/contact" class="level-item">Contact</NuxtLink>
            <a :href="`mailto:${appConfig.contactEmail}`" class="level-item"><strong>{{ appConfig.contactEmail }}</strong></a>
         </div>
      </div>
      <div class="container site-footer__legal">
         <p class="is-size-7">&copy; {{ new Date().getFullYear() }} {{ appConfig.legalName }}</p>
      </div>
   </footer>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>
