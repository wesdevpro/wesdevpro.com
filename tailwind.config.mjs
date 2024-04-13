import daisyui from 'daisyui'
import themes from 'daisyui/src/theming/themes'

/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   theme: {
      extend: {},
   },
   plugins: [daisyui],
   daisyui: {
      themes: [
         {
            light: {
               ...themes["[data-theme=light]"],
               primary: "#004571",
               secondary: "#96BBCA",
               accent: "#015B93",
               neutral: "#000B14",
               "base-100": "#F2F3F1",
            },
            dark: {
               ...themes["[data-theme=dark]"],
               primary: "#8FD4FF",
               secondary: "#355A69",
               accent: "#6CC6FE",
               neutral: "#EBF6FF",
               "base-100": "#0D0E0C",
            }
         }
      ],
   }
}
