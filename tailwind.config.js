/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        "screen-minus-nav": "calc(100vh - var(--nav-height))",
      },
      backgroundImage: {
        "stars-tall": "url('/StarsTall.png')",
        "gradient-radial":
          "radial-gradient(rgb(var(--background-start-rgb, #1A273E)), transparent)",
      },
      colors: {
        "deep-blue": "#1A273E",
      },

      screens: {
        tablet: "768px",
        desktop: "1280px",
      },
      transitionProperty: {},
    },
  },
  plugins: [],
};
