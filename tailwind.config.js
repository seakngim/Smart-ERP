/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1FA8E0',
        danger: '#EA4951',
        whitesmoke: '#F6F7F9',
      },
    },
  },
  plugins: [],
}