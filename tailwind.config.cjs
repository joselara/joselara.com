/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js.ts,vue,vue.ts}'],
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {},
  },
}
