/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: 'class', // or 'media' or 'class',
  jit: true,
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx, mdx}',
    './nextra-theme-docs/**/*.{tsx, css}',
      './theme.config.js',
      './styles.css',

  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [`"Inter"`, "sans-serif"],
        mono: [
          "Menlo",
          "Monaco",
          "Lucida Console",
          "Liberation Mono",
          "DejaVu Sans Mono",
          "Bitstream Vera Sans Mono",
          "Courier New",
          "monospace",
        ],
      },
      colors: {
        dark: "#000",
        gray: colors.neutral,
        blue: colors.blue,
        orange: colors.orange,
        green: colors.green,
        red: colors.red,
        yellow: colors.yellow,
        teal: colors.teal,
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        betterhover: { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [],
};
