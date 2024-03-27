/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1310px",
    },
    extend: {
      backgroundImage: {
        singerOverlay: "url(/assets/hero/singer-overlay.png)",
        newsletter: "url(/assets/newsletter/bg.png)",
      },
      fontFamily: {
        alexBrush: [`var(--font-alexBrush)`, "sans-serif"],
        montserrat: [`var(--font-montserrat)`, "sans-serif"],
      },
      colors: {
        primary: "#06062a",
        secondary: "#151538",
        tertiary: "#242445",
        accent: {
          DEFAULT: "#7f1cfc",
          hover: "#6519c6",
        },
      },
      boxShadow: {
        "outline-gray-focus": "inset 0 0 0 1.5px #222127",
        "outline-gray": "inset 0 0 0 1.5px #131317",
      },
      animation: {
        "fade-in-3": "fade-in 3s ease-in-out forwards",
        "fade-in": "fade-in 0.5s ease-in-out forwards",
        title: "title 3s ease-out forwards",
        "fade-bottom": "fade-bottom 3s ease-in-out forwards",
        "fade-top": "fade-top 3s ease-in-out forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-in-3": {
          "0%": {
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        title: {
          "0%": {
            "line-height": "0%",
            "letter-spacing": "0.25em",
            opacity: "0",
          },
          "25%": {
            "line-height": "0%",
            opacity: "0%",
          },
          "80%": {
            opacity: "100%",
          },

          "100%": {
            "line-height": "100%",
            opacity: "100%",
          },
        },
        "fade-bottom": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0%",
          },
          "30%": {
            transform: "translateY(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "100%",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/typography")],
};
