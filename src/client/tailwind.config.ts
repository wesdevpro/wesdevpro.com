const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require("daisyui"),
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(["mdi", "uil"]),
    }),
  ],
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
          "primary": "#3B3B3B",
          "secondary": "#004571",
          "accent": "#004571",
          "neutral": "#ffffff",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
