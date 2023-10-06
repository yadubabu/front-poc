/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.ts", "./src/**/*.tsx", "./**/*.html"],
  theme: {
    extend: {},
    screens: {
      sm: "400px",
      // => @media (min-width: 640px) { ... }

      md: "640px",
      // => @media (min-width: 768px) { ... }

      lg: "768px",
      // => @media (min-width: 1024px) { ... }

      xl: "1024px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1280px",
      // => @media (min-width: 1536px) { ... }
    },

  },
  plugins: [],
};
