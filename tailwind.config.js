/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
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
      },

      screens: {
        tablet: '768px',
        desktop: '1280px',
      },
      transitionProperty: {},
    },
  },
  plugins: [],
};
