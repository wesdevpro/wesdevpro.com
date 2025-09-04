// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: '2025-07-15',
   modules: [
     '@nuxt/eslint',
     '@nuxt/content',
     '@nuxtjs/color-mode',
     '@nuxtjs/robots',
     '@nuxtjs/sitemap'
   ],
   colorMode: {
      preference: 'system',
      fallback: 'light',
      classSuffix: '',
      dataValue: 'theme',
   }
})