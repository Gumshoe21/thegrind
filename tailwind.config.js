/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  colors: {
    primary: {
      100: '#7d5528',
      200: '#704d24',
      300: '#634420',
      400: '#563b1c',
      500: '#4a3217',
      600: '#3d2913',
      700: '#30210f',
      800: '#23180b',
      900: '#160f07',
    },
  },
  theme: {
    extend: {
  colors: {
    primary: {
      100: '#7d5528',
      200: '#704d24',
      300: '#634420',
      400: '#563b1c',
      500: '#4a3217',
      600: '#3d2913',
      700: '#30210f',
      800: '#23180b',
      900: '#160f07',
    },
  },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        letterFadeIn: {
          '0%': { bg: 'none' },
          '100%': { bg: 'green.600' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
