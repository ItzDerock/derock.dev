/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#0C111B',
        primary: '#FF4C29',
        arch: "#1793D1",
        prompt: "#55FF56",
        header: "#2C394B",
        dots: "#334756",
        secondary: "rgb(156 163 175)"
      },

      fontFamily: {
        terminal: ['CascadiaCode', 'monospace'],
        header: ['Ubuntu Mono', 'monospace'],
      },

      fontSize: {
        '2xs': ['0.65rem', '1rem'],
      }
    },
  },
  plugins: [],
};
