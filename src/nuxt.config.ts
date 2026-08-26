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
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;650;700;750;800&family=Inconsolata:wght@400;500;600;700&display=swap",
        },
      ],
    },
  },
  nitro: {
    // Static prerender output (matches `nuxt generate`), but shaped for Netlify's
    // free-tier static hosting: routeRules redirects get emitted as a real Netlify
    // `_redirects` file (true 301s) instead of prerendered meta-refresh stub pages.
    // No Netlify Functions are used anywhere in this config, so this stays within
    // the free tier regardless of traffic.
    preset: "netlify-static",
    prerender: {
      // /projects and its old slugs are no longer linked from anywhere (the
      // projects/ route directory was removed), so nuxt generate's link-crawler
      // will never discover them on its own — they must be listed explicitly or
      // the redirect rules below produce dead 404s instead of redirecting.
      routes: [
        "/projects",
        "/projects/wesdevpro.com",
        "/projects/buefy",
        "/projects/analyst",
      ],
    },
  },
  site: {
    // No canonical site URL was configured anywhere before this — sitemap/canonical
    // tags were relying on deploy-platform auto-detection that never had a deploy
    // config to detect. Needed for @nuxtjs/sitemap and canonical tags to resolve to
    // the real domain instead of a fallback/localhost value.
    url: "https://wesdevpro.com",
  },
  routeRules: {
    // Old /projects IA -> new /work IA. True 301s on Netlify via the netlify-static
    // preset above; falls back to a prerendered redirect stub on other static hosts.
    "/projects": { redirect: { to: "/work", statusCode: 301 } },
    "/projects/wesdevpro.com": { redirect: { to: "/work", statusCode: 301 } },
    "/projects/buefy": { redirect: { to: "/work/buefy", statusCode: 301 } },
    "/projects/analyst": { redirect: { to: "/work/analyst", statusCode: 301 } },
  },
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

            return "vendor";
          },
        },
      },
    },
  },
});
