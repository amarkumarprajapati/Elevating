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
        navy: {
          950: '#050d14',
          900: '#091925',
          800: '#112839',
          700: '#1c394f',
        },
        gold: {
          400: '#f6c361',
          500: '#e5a93b',
          600: '#cb8c22',
          700: '#a36d12',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Cabinet Grotesk', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        'lift': '0 20px 35px -5px rgba(15, 23, 42, 0.12), 0 10px 15px -5px rgba(15, 23, 42, 0.05)',
      }
    },
  },
  plugins: [],
}
