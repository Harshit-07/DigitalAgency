/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6153CD",
        primary_hover: "#4b409a",
        disabled: "#FBFBFB",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      spacing: {
        15: "3.75rem",
      },
    },
  },
  plugins: [],
};
