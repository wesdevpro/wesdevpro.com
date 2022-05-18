export default {
   // Global page headers: https://go.nuxtjs.dev/config-head
   head: {
      title: 'wesdevpro',
      htmlAttrs: {
         lang: 'en',
      },
      meta: [
         { charset: 'utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         { hid: 'description', name: 'description', content: '' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
   },

   // Global CSS: https://go.nuxtjs.dev/config-css
   css: ['~/assets/style.scss'],

   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
   plugins: [],

   // Auto import components: https://go.nuxtjs.dev/config-components
   components: true,

   // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
   buildModules: [
      // https://go.nuxtjs.dev/eslint
      '@nuxtjs/eslint-module',
      '@nuxtjs/fontawesome',
   ],

   // Modules: https://go.nuxtjs.dev/config-modules
   modules: [
      // https://go.nuxtjs.dev/buefy
      'nuxt-buefy',
      '@nuxt/content',
   ],

   buefy: {
      defaultIconPack: 'fas',
      defaultIconComponent: 'FontAwesomeIcon',
      materialDesignIcons: false,
   },

   fontawesome: {
      icons: {
         solid: [
            'faNewspaper',
            'faGraduationCap',
            'faHistory',
            'faAngleLeft',
            'faAngleRight',
         ],
         brands: [
            'faGithubSquare',
            'faLinkedin',
            'faJs',
            'faPython',
            'faJava',
            'faNodeJs',
         ],
      },
   },
   server: {
      port: 4000,
   },
   build: {},
   target: 'static'
}
