// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',  // Pastikan ini sesuai dengan struktur file proyekmu
    ],
    theme: {
      extend: {
        colors: {
          // Menambahkan custom warna atau tema, jika diperlukan
        },
        fontFamily: {
          'signika': ['"Signika Negative"', 'sans-serif'],  // Menambahkan font custom
        }
      },
    },
    plugins: [
      // eslint-disable-next-line no-undef
      require('tailwind-scrollbar-hide'),
    ],
  }
  