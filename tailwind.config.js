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
    screens: {
      'sm': '575px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}