/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        "backgroundImage": {
          "home-hero": "url('/image/misc/hero-image.jpg')"
        }
      },
    },
    plugins: [],
};