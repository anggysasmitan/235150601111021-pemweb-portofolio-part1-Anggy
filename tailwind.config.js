/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'ungu' : '#CDB4DB',
        'pink-muda' : "#FFC8DD",
        'pink' : "#FFAFCC",
        'biru-muda': "#BDE0FE",
        'biru': "#A2D2FF",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}