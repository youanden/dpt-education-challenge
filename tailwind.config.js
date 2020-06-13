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
      xl: "1440px",
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
        menu: "20em",
      },
      colors: {
        bl: {
          default: "#004185",
          highlight: "#1F5B99",
        },
      },
      spacing: {},
    },
  },
  plugins: [require("@tailwindcss/ui")],
}
