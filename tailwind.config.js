module.exports = {
  purge: {
    enabled: false,
    content: ["src/**/*.js"],
  },
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1680px",
    },
    fontFamily: {
      display: ["Merriweather", "sans-serif"],
      body: ["Source Sans Pro", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
    },
    fontSize: {
      sm: ["14px", "20px"],
      16: ["16px", "20px"],
      base: ["18px", "24px"],
      md: ["20px", "32px"],
      lg: ["26px", "34px"],
      h1: ["40px", "30px"],
      h2: ["24px", "32px"],
      h3: ["17px", "24px"],
      h5: ["14px", "30px"],
      link: ["17px", "30px"],
    },
    borderWidth: {
      default: "2px",
      "0": "0",
      "1": "1px",
      // '2': '2px',
      // '4': '4px',
    },
    extend: {
      height: {
        banner: "680px",
        mbanner: "450px",
      },
      colors: {
        bl: {
          default: "#004185",
          highlight: "#1F5B99",
          lightest: "#EBF3F7",
          link: "#004285",
          dark: "#162E51",
        },
        gr: {
          default: "#DBE3E7",
          dark: "#2D2E2F",
          light: "#565c65",
          lighter: "#DBE3E7",
        },
        green: "#2d8700",
        red: "#981F33",
      },
      spacing: {},
    },
  },
  corePlugins: {
    outline: false,
  },
  plugins: [require("@tailwindcss/ui")],
}
