// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  modules: [
    "@nuxt/eslint",
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],
  sourcemap: {
    client: false,
    server: true,
  },
  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "",
    dataValue: "theme",
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes("node_modules")) {
              return;
            }

            if (id.includes("@fortawesome")) {
              return "fontawesome";
            }

            if (id.includes("buefy") || id.includes("bulma")) {
              return "ui-vendor";
            }

            if (id.includes("@nuxt/content")) {
              return "content-vendor";
            }

            if (id.includes("vue") || id.includes("vue-router")) {
              return "vue-vendor";
            }

            if (id.includes("kute.js")) {
              return "motion-vendor";
            }

            return "vendor";
          },
        },
      },
    },
  },
});
