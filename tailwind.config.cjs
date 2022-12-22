/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  safelist: [
    // src/components/Navbar.js
    "text-white", "border-b-2", "border-b-accent-100", "text-secondary-100"
  ],
  theme: {
    extend: {
  
      transformOrigin: {
        "hand-wave": "70% 70%"
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },

        "phone-ring-animation": {
          "0%":   { transform: "rotate(0);" },
          "10%":  { transform: "rotate(10deg);" },
          "20%":  { transform: "rotate(-10deg);" },
          "30%":  { transform: "rotate(10deg);" },
          "40%":  { transform: "rotate(-10deg);" },
          "50%":  { transform: "rotate(10.0deg)" },
          "60%":  { transform: "rotate(0)" },
        },

        shake: {
          "0%": { transform: "translate(1px, 1px) rotate(0deg);" },
          "10%": { transform: "translate(-1px, -2px) rotate(-1deg);" },
          "20%": { transform: "translate(-2px, 0px) rotate(1deg);" },
          "30%": { transform: "translate(2px, 2px) rotate(0deg);" },
          "40%": { transform: "translate(1px, -1px) rotate(1deg);" },
          "50%": { transform: "translate(-1px, 2px) rotate(-1deg);" },
          "60%": { transform: "translate(-2px, 1px) rotate(0deg);" },
          "70%": { transform: "translate(2px, 1px) rotate(-1deg);" },
          "80%": { transform: "translate(-1px, -1px) rotate(1deg);" },
          "90%": { transform: "translate(1px, 2px) rotate(0deg);" },
          "100%": { transform: "translate(1px, -2px) rotate(-1deg);" }
        },

        "hand-wave": {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" }
        }
      },

      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        "phone-ring": "phone-ring-animation 1s infinite linear",
        shake: "shake 0.75s infinite linear",
        "hand-wave": "hand-wave 2.5s infinite linear"
      },

      colors: {
        primary: {
          100: "#01080E",
          200: "#011627",
          300: "#011221",
          400: "#5565E8"
        },

        secondary: {
          100: "#607B96",
          200: "#3C9D93",
          300: "#4D5BCE",
          400: "#1C2B3A"
        },

        accent: {
          100: "#FEA55F",
          200: "#43D9AD",
          300: "#E99287",
          400: "#C98BDF"
        },

        line: "#1E2D3D",

        gradient: {
          100: "#4D5BCE",
          200: "#43D9AD"
        },

        background: "#010C15"
      },

      fontFamily: {
        fira: ["Fira Code", "monospace"]
      },

      boxShadow: {
        snakeWindow: "inset 0px 2px 0px rgba(255, 255, 255, 0.3)",
        snakeGameWindow: "inset 1px 5px 11px rgba(2, 18, 27, 0.71)"
      },
  
      

    },
  },
  plugins: []
};
