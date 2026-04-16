/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bunny: {
          pink: "#FFB6C1",
          "pink-dark": "#FF91A4",
          "pink-light": "#FFE4E8",
          white: "#FFF9FA",
          cream: "#FFF8F0",
          yellow: "#FFF3CD",
          "yellow-dark": "#FFD966",
          lavender: "#E8D5F5",
        },
      },
      fontFamily: {
        cute: ["'Nunito'", "sans-serif"],
      },
      borderRadius: {
        cute: "1.25rem",
      },
      boxShadow: {
        cute: "0 4px 20px rgba(255, 182, 193, 0.3)",
        "cute-hover": "0 8px 30px rgba(255, 182, 193, 0.5)",
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        breathe: "breathe 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.15)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
