/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif']
      },
      colors: {
        dark: '#1e2028',
        darkSecondary: '#242731'
      }
    }
  },
  plugins: []
};
