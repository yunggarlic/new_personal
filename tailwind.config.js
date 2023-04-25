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
        primary: 'rgb(var(--background-start-rgb))',
        test: () => {
          const colors = [
            '#FFC0CB',
            '#F4A460',
            '#FFE4B5',
            '#D3D3D3',
            '#90EE90',
            '#ADD8E6',
            '#E0FFFF',
            '#B0E0E6',
            '#87CEFA',
            '#9370DB',
            '#FFB6C1',
            '#FFA07A',
            '#FFEFD5',
            '#BDB76B',
            '#E6E6FA',
          ];
          return colors[Math.floor(Math.random() * colors.length)];
        },
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
