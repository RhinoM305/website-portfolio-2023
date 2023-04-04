/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        typing1: "typing 3.5s steps(23) 2s forwards, blink 1.0s 6",
        typing2: "typing 3.5s steps(24) 5.5s forwards, blink 1.0s infinite",
      },
      keyframes: {
        typing: {
          from: { width: "0ch", opacity: 1 },
          to: { width: "24ch", opacity: 1, borderColor: "transparent" },
        },

        blink: {
          "0%": { "border-right-color": "white" },
          "49%": { "border-right-color": "white" },
          "50%": { "border-right-color": "transparent" },
          "100%": { "border-right-color": "transparent" },
        },
      },
    },
    fontFamily: {
      mono: ["monospace"],
      "helvetica-neue": ["Helvetica Neue", "sans-serif"],
      "Titan-One": ["Titan One", "sans"],
    },
    screens: {
      se: "375px",
      xr: "414px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1400px",
    },
  },
  plugins: [],
};
