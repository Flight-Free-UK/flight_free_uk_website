module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme("colors"),
    }),
    extend: {
      screens: {
        "xxl": "1440px",
      },
      colors: {
        "blue": {
          "dark": "#1f4d7b",
          "default":"#357cb6",
        },
        "orange": {
          "default": "#f7b38a",
          "shadow": "#cc875d",
        }
      },
      fontFamily: {
        body: ["Quicksand", "sans-serif"]
      },
    }
  },
  variants: {},
  plugins: []
}
