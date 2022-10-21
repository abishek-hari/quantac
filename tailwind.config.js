/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layout/index.html"],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "976px",
      xl: "1150px",
    },
    extend: {
      colors: {
        brightRed: "hsl(12,88%,59%)",
        brightRedLight: "hsl(12,88%,69%)",
        brightRedUpLight: "hsl(12,88%,95%)",
        darkBlue: "hsl(228,39%,23%)",
        darkGrayishBlue: "hsl(227,12%,61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13,100%,96%)",
        veryLightGray: "hsl(0,0%,96%)",
      },
    },
  },
  plugins: [],
};
