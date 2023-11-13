module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        monospace: ["Roboto Mono"],
        agbalumo: ["Agbalumo"],
        serif: ["Roboto Slab"],
        sansserif: ["Changa"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}