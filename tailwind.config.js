/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#47B462',
        lightGreen: '#F1FEF4',
        darkBlue: '#011B33',
        orange: '#FF632F',
        offwhite: '#F8FAFD'
      }
    },
  },
  plugins: [],
}
