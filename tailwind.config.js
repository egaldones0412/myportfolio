/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/index.html", "./app/src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { accent: "#d4af37" },
      boxShadow: {
        elevate: "0 8px 24px rgba(0,0,0,.08), 0 2px 8px rgba(0,0,0,.06)"
      },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")]
};
