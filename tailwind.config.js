/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        custom: "990px",
        custom950: "950px",
        custom800: "800px",
        custom600: "600px",

      },
      fontFamily: {
        custom: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        custom:
          "0 10px 12px -2px rgba(50, 50, 93, 0.25), 0 3px 7px -3px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
