/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightbg: "#e0fafa",
        lighttxt: "#1a3e5c",
        darkbg: "#121212",
        darkbgc: "#1f1f1f",
        darktxt: "#faede0",
        standout: "#e36c4b"
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
