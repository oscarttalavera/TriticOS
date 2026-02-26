/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#e6fff9',
          100: '#ccfff4',
          500: '#00ffc7',
          600: '#00d6a7',
          900: '#00476a',
        }
      }
    },
  },
  plugins: [],
}
