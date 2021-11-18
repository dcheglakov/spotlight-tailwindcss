const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      grey: {
        0: "#FBFBFB",
        50: "#EEF1F8",
        100: "#E9EFFA",
        200: "#CBD4E6",
        300: "#A1B0CC",
        400: "#7C8DB0",
        500: "#657491",
        600: "#6E7491",
        700: "#52556F",
        800: "#36374A",
        900: "#27273F",
      },
      purple: {
        "extra-light": "#DEDCFF",
        light: "#7A88FF",
        DEFAULT: "#605DEC",
        dark: "#1513A0",
        button: "#AA46F9",
        "button-dark": "#9D46F9",
        "button-darker": "#8E46F9",
      },
      "light-blue": "#C7E4FB",
      turquoise: "#10DDC7",
      "top-bar": "#11153D",
      "side-bar": "#1B2476",
      red: "#FF5F7A",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
