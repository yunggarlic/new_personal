/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height:{
        "screen-minus-nav": "calc(100vh - var(--nav-height))",
      },
      screens:{
        tablet: "768px",
        desktop: "1024px",
      }
    },
  },
  plugins: [],
}
