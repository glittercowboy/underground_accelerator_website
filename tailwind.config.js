/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00F0FF', // Cyber Teal
        secondary: '#00FF8C', // Neon Green
        success: '#00FF8C', // Same as secondary for checks
        dark: '#0A0A0A',
        'dark-lighter': '#1A1A1A',
        'off-white': '#fcffeb',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

