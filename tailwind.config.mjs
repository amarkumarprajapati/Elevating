import colors from 'tailwindcss/colors.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: colors.stone,
        primary: {
          50: '#faf5ef',
          100: '#f4e7dc',
          200: '#e7ceba',
          300: '#d8ad8c',
          400: '#c68961',
          500: '#ac603b',
          600: '#934927',
          700: '#77391e',
          800: '#62301c',
          900: '#462417',
        },
        navy: colors.stone,
        accent: {
          ...colors.amber,
          500: '#855025',
          600: '#693e1b',
        },
        gold: colors.amber,
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        display: ['Arial', 'Helvetica', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(36, 32, 29, 0.05), 0 2px 6px -1px rgba(36, 32, 29, 0.02)',
        'card': '0 10px 30px -5px rgba(53, 42, 31, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'lift': '0 20px 35px -5px rgba(68, 48, 32, 0.12), 0 10px 15px -5px rgba(36, 32, 29, 0.04)',
      }
    },
  },
  plugins: [],
}
