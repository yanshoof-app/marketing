const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['"Assistant"', 'sans-serif'], // make assistant the default font
      roboto: ['"Roboto"', 'sans-serif'],
      tinos: ['"Tinos"', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        theme: '8px 8px 0 0',
      },

      colors: {
        primary: colors.sky,
        gray: colors.gray,
        event: colors.rose,
        change: colors.amber,
        celebration: colors.lime,
        uiPrimary: colors.zinc,
        slate: {
          850: '#172033',
        },
      },
    },
  },
  plugins: [],
}
