/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        text: "var(--text)",
        muted: "var(--text-muted)",
        heading: "var(--heading)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        border: "var(--border)",
      },
      fontSize: {
        // Editorial type scale — Perfect Fourth (1.333)
        display: ["clamp(3rem, 8vw, 5.5rem)", { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "800" }],
        h1: ["clamp(2.25rem, 4.5vw, 3.125rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        h2: ["2.375rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }],
        h3: ["1.75rem", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "600" }],
        h4: ["1.3125rem", { lineHeight: "1.35", letterSpacing: "-0.01em", fontWeight: "600" }],
        lead: ["1.3125rem", { lineHeight: "1.5", fontWeight: "400" }],
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        caption: ["0.75rem", { lineHeight: "1.4", fontWeight: "500" }],
        eyebrow: ["0.8125rem", { lineHeight: "1.3", letterSpacing: "0.08em", fontWeight: "500" }],
        tag: ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.08em", fontWeight: "500" }],
      },
      maxWidth: {
        prose: "68ch",
      },
      animation: {
        typing1: "typing 3.5s steps(23) 2s forwards, blink 1.0s 6",
        typing2: "typing 3.5s steps(25) 5.5s forwards, blink 1.0s infinite",
      },
      keyframes: {
        typing: {
          from: { width: "0ch", opacity: 1 },
          to: { width: "25ch", opacity: 1, borderColor: "transparent" },
        },

        blink: {
          "0%": { "border-right-color": "var(--accent)" },
          "49%": { "border-right-color": "var(--accent)" },
          "50%": { "border-right-color": "transparent" },
          "100%": { "border-right-color": "transparent" },
        },
      },
    },
    fontFamily: {
      sans: ["var(--font-sans)"],
      mono: ["var(--font-mono)"],
      // Legacy aliases kept so existing classes inherit the new system
      "helvetica-neue": ["var(--font-sans)"],
      "Titan-One": ["var(--font-sans)"],
      "Oswald": ["var(--font-sans)"],
      "Roboto": ["var(--font-sans)"],
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
