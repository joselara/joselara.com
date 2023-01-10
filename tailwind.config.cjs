/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js.ts,vue}'],
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {},
  },
}
