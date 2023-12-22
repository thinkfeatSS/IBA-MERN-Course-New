/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
        Raleway: "Raleway",
      },
      colors: {
        primary: '#DA722C', // your primary color
        secondary: '#6F7DFB', // your secondary color
      },
    },
  },
  plugins: [],
}

