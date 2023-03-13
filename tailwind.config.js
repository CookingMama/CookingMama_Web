/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        29: "7.5rem",
        100: "30rem",
      },
      minWidth: {
        10: "10rem",
        12: "12rem",
        100: "12rem",
      },
      maxWidth: {
        10: "10rem",
        11: "11rem",
      },
      maxHeight: {
        10: "10rem",
        11: "11rem",
        100: "12rem",
      },
      minHeight: {
        10: "10rem",
        11: "11rem",
        100: "35rem",
        105: "40rem",
      },
      height: {
        29: "7.5rem",
        100: "36rem",
      },
      top: {
        13: "5rem",
      },
    },
  },
  plugins: [],
};
