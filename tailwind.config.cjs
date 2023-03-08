/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      light: '#FFFFFF',
      primary: {
        300: '#FFCC21',
        400: '#FF963C',
        500: '#EA6C00',
      },
      secondary: {
        300: '#8FE9D0',
      },
      dark: {
        500: '#414141',
        600: '#2E2E2E',
      },
      gray: {
        400: '#777777',
        500: '#707070',
      },
    },
    extend: {
      backgroundImage: {
        'hero-pattern':
          'linear-gradient(225deg, rgb(255 204 33 / 0%) 0%, rgb(255 150 60 / 69%) 100%), url(/images/d01.jpg)',
        'btn-primary':
          'linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)',
      },
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        noto_sans: ['Noto Sans JP', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
