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
        secondary: "#334756"
      },

      fontFamily: {
        terminal: ['CaskaydiaCove NF', 'monospace'],
        header: ['Ubuntu Mono', 'monospace'],
      }
    },
  },
  plugins: [],
};
