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
      },
      colors: {
        bl: {
          default: "#004185",
          highlight: "#1F5B99",
        },
        gr: {
          default: "#DBE3E7",
          dark: "#2D2E2F",
        },
        transparent: "transparent",
        "dark-gray": "#2d2e2f",
        "light-gray": "#565c65",
        green: "#2d8700",
        "deep-blue": "#004285",
        "light-blue": "#ebf3f7",
      },
      spacing: {},
    },
  },
  plugins: [require("@tailwindcss/ui")],
}
