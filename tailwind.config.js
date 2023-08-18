/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueColor: "#1271E5",
        orangeColor: "#F07164",
        skyBlueColor: "#D8E9FF",
        subTitleTextColor: "#3D5A80",
        subTitleBgColor: "#E0FBFC",
        redColor: "#FC3549",
        yellowColor: "#FFB700",
        purpleColor: "#6610F2",
        greenColor: "#00D280",
        lightPurpleBgColor: "#F0EEFA",
        purpleBorderColor: "#F0EEFA",
        searchbarBorderColor: "#C9C4C4",
      },
      // fontSize: {
      //   bannerTitleTextSize: "40px",
      //   bannerSubTitleTextSize: "20px",
      //   subTitleText: "14px",
      // },
    },
  },
  plugins: [],
}

