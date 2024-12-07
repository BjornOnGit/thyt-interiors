/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          500: "#9b6a4a",
          600: "#865c3f",
        },
      },
      fontFamily: {
        playfairdisplay: ["Playfair Display", "sans-serif"],
      },
    },
  },
  plugins: [],
}

