/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
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

    },
  },
  plugins: [],
}
