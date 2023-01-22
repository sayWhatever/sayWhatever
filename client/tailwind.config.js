/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0F172A",
        heading: "#F8FAFC",
        message: "#8E9CB1",
        darkPurple: "#4338CA",
        lightPurple: "#6366F1",
        inactive: "#334155"

      }
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      fira: ["Fira Code", "monospace"]
    },

  },
  plugins: [],
}