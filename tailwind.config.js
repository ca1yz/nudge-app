/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui'],
      },
    },
  },
  plugins: [],
  darkMode: 'class', //'media' or 'class'
}

