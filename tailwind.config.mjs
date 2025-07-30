/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        warrior: ['"Inter"', "sans-serif"],
        mystic: ['"Cormorant Garamond"', "serif"],
        builder: ['"Roboto Mono"', "monospace"],
        wolf: ['"Montserrat"', "sans-serif"],
        dragon: ['"Cinzel"', "serif"],
        artist: ['"Playfair Display"', "serif"],
        healer: ['"Quicksand"', "sans-serif"],
        alchemist: ['"EB Garamond"', "serif"],
        strategist: ['"Raleway"', "sans-serif"],
        steward: ['"Lora"', "serif"],
      },
    },
  },
  plugins: [],
};
