const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "var(--bg-white)",
        blue: {
          DEFAULT: "var(--bg-blue)", 
          start: "var(--btn-blue-start)", 
          end: "var(--btn-blue-end)", 
          hover: "var(--btn-blue-hover)",
        },
        orange: "var(--text-orange)",
        yellow: "var(--text-yellow)",
        purple: "var(--text-purple)",
        cyan: "var(--text-cyan)",
        bluetext: "var(--text-blue)",
        gray: {
          dark: "var(--text-gray-dark)",
          light: "var(--text-gray-light)",
        },
      },
      backgroundImage: {
        "gradient-to-r": "linear-gradient(to right, var(--btn-blue-start), var(--btn-blue-end))",
        "gradient-hover": "linear-gradient(to right, var(--btn-blue-hover), var(--btn-blue-hover))",
      },
    },
  },
  plugins: [],
});
