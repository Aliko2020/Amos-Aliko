/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: 'media',
    extend: {
      colors: {
        lightbg: "#e8e8e3",
        lighttxt: "#5b5e62",
        darkbg: "#5b5e62",
        darktxt: "#e8e8e3",
        standout: "#33b289"
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
