/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFBF5',
          100: '#FFF8ED',
          200: '#FFF0D8',
          300: '#FFE6BF',
          400: '#FFD99F',
          500: '#FFCB7D',
        },
        beige: {
          50: '#FAF6F1',
          100: '#F5EEEA',
          200: '#EDE3DB',
          300: '#E2D4C7',
          400: '#D4C0AD',
          500: '#C5AA93',
        },
        rose: {
          50: '#FFF1F3',
          100: '#FFE4E8',
          200: '#FFCCD5',
          300: '#FFA3B4',
          400: '#FF6B8A',
          500: '#EE4A6A',
        },
        warm: {
          50: '#FFF9F5',
          100: '#FFEFDF',
          200: '#FFDFC8',
          300: '#FFC9A4',
          400: '#FFAB72',
          500: '#F58D4A',
        },
      },
      fontFamily: {
        sans: ['PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(255, 187, 150, 0.15)',
        'soft': '0 2px 12px rgba(200, 170, 140, 0.1)',
      },
    },
  },
  plugins: [],
}
