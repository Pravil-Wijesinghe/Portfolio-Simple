/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#171443',
      'secondary': '#808080',
      'white': '#ffffff',
      'black': '#000000',
    },
    fontFamily:{
      'sans': ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}

