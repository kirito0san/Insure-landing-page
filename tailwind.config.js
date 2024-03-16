/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-Violet": "#2d2640",
        "Grayish-Blue": "#95a9c6",
        "Very-Dark-Violet": "#2b272f",
        "Dark-Grayish-Violet": "#837d87",
        "Very-Light-Gray": "#fafafa",
      },
      fontFamily: {
        'Karla': ['Karla', 'sans-serif'],
        'DMSerif': ['DM Serif Display', 'serif'],
      }
    },
  },
  plugins: [],
}