module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      bodyColor: "#F2F3EF",
      titleColor: "#0B0A0A",
      textColor: "#453635",
      menuRightColor: "#FAFAFA",
      menuLeftColor: "#E0F4FC",
      assets: "#A9BCC3",
      white: "#fff",
      hoverLink: "#00C5A7",

      darkBodyColor: "#2B2B2B",
      darkTitleColor: "#D8DBD0",
      darkTextColor: "#F2F3EF",
      darkMenuRightColor: "#212121",
      darkMenuLeftColor: "#181616",
    },
  },
  plugins: [],
};
