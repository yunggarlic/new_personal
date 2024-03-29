/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        'screen-minus-nav': 'calc(100vh - var(--nav-height))',
      },
      backgroundImage: {
        'stars-tall': "url('/StarsTall.png')",
      },
      colors: {
        'deep-blue': '#1A273E',
        primary: 'rgba(var(--background-start-rgb), 0.1)',
        primaryDark: 'rgba(var(--background-start-rgb), 0.6)',
        testDark: '#00A07A'
      },

      screens: {
        tablet: '768px',
        desktop: '1280px',
      },
      transitionProperty: {
        about: 'transform, opacity',
      },
    },
  },
  plugins: [],
};
