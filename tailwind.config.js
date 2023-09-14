/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['PT Serif', 'serif']
    },

    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr'
      }
    }
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: '16px' }
      })
    })
  ]
}
