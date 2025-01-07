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
        purple: {
          DEFAULT: "var(--bg-purple)",
          start: "var(--btn-purple-start)",
          end: "var(--btn-purple-end)",
          hover: "var(--btn-purple-hover)",
        },
        orange: "var(--text-orange)",
        yellow: "var(--text-yellow)",
        bluetext: "var(--text-blue)",
        gray: {
          dark: "var(--text-gray-dark)",
          light: "var(--text-gray-light)",
        },
        cyan: {
          dark: "var(--text-cyan-dark)",
          light: "var(--text-cyan-light)",
        },
      },
      backgroundImage: {
        "gradient-to-r":
          "linear-gradient(to right, var(--btn-blue-start), var(--btn-blue-end))",
        "gradient-hover":
          "linear-gradient(to right, var(--btn-blue-hover), var(--btn-blue-hover))",
      },
      animation: {
        scroll: "scroll 50s linear infinite",
        "scroll-reverse": "scroll-reverse 50s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "scroll-reverse": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".paused": { "animation-play-state": "paused" },
          ".running": { "animation-play-state": "running" },
        },
        ["responsive", "hover"]
      );
    },
  ],
});
