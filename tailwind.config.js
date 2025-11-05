/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          hover: '#3b82f6',
        },
        secondary: '#475569',
        light: '#f9fafb',
        dark: '#1f2937',
      },
    },
  },
  plugins: [],
}
