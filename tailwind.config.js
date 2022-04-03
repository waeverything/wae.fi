const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'members': 'repeat(auto-fit, minmax(8rem, 1fr))',
      }
    },
    colors: {
      accent: '#04c2ff',
      white: '#ffffff',
      gray: colors.gray,
    },
    fontFamily: {
      sans: ['Alata', 'sans-serif'],
    }
  },
  plugins: [],
}
