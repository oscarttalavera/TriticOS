/** @type {import('tailwindcss').Config} */
// Tokens del sistema visual Tritic v1.3 ("plano de taller").
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"IBM Plex Sans"', 'Arial', 'sans-serif'],
      mono: ['"IBM Plex Mono"', 'Consolas', 'monospace'],
      condensed: ['"IBM Plex Sans Condensed"', '"Arial Narrow"', 'sans-serif'],
      display: ['Syncopate', 'Arial', 'sans-serif'],
    },
    // Esquinas 0–2 px, filetes en lugar de sombras.
    borderRadius: {
      none: '0',
      sm: '2px',
      DEFAULT: '2px',
      md: '2px',
      lg: '2px',
      xl: '2px',
      '2xl': '2px',
      full: '9999px',
    },
    boxShadow: {
      sm: 'none', DEFAULT: 'none', md: 'none', lg: 'none', xl: 'none', '2xl': 'none', inner: 'none', none: 'none',
    },
    extend: {
      colors: {
        azul: {
          50: '#EEF5F8',
          100: '#D6E6EE',
          200: '#B7CCD8',
          400: '#5B9BBF',
          600: '#0A6E9C',
          700: '#00476A',
          900: '#002F47',
          950: '#04202F',
        },
        verde: {
          100: '#CCFFF3',
          500: '#00FFC7',
          700: '#006B53',
        },
        // Grafitos (claro) y azules de fondo (oscuro): reemplazan la escala slate.
        slate: {
          50: '#F4F7F8',
          100: '#E9EEF1',
          200: '#D5DDE1',
          300: '#B7C6CF',
          400: '#8FA4B0',
          500: '#5A6973',
          600: '#3A4A55',
          700: '#1E4458',
          800: '#12394D',
          900: '#0A2C3E',
          950: '#04202F',
        },
        estado: {
          info: '#0A6E9C',
          ok: '#006B53',
          aviso: '#A15300',
          peligro: '#B3261E',
        },
      },
    },
  },
  plugins: [],
}
