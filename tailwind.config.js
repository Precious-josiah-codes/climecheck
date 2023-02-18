/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      colors: {
        primaryColor: "#121212",
        secondaryColor: "#262727",
        tetiary: "#74BF44",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
