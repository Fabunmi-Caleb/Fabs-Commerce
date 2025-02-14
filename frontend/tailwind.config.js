/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8be7bb", //2eb875
        secondary: "orange",
      },
      screens: {
        "screen570": '570px', // Custom breakpoint for 570px
      },
    },
  },
  plugins: [],
};
