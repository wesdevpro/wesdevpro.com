/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#004571",
          "secondary": "#96BBCA",
          "accent": "#3B3B3B",
          "neutral": "#ffffff",
          "base-100": "#ffffff",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "primary": "#004571",
          "secondary": "#96BBCA",
          "accent": "#3B3B3B",
          "neutral": "#ffffff",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
