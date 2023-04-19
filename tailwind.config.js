/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#080A1A",
        subMain: "#F20000",
        dry: "#0B0F29",
        star: "#FFB000",
        text: "#C0C0C0",
        border: "#4b5563",
        dryGray: "#E0D5D5",
      },
      height: { header: "560px", rate: "400px" },
      fontSize: { h1: "2.6rem" },
      screens: {
        xs: "475px",
        xl3: "1800px",
        xl4: "2100px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
