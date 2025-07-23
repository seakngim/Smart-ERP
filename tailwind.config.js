/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1082B9',
        whitesmoke: '#F6F7F9',
      },
    },
  },
  plugins: [],
}