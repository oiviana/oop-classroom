/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      chalk: ['Chalk', 'FrederickatheGreat'],
      roboto:['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}