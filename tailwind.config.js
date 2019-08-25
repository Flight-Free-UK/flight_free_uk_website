module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme("colors"),
      "gray-light": "#f9f9f9"
    }),
    extend: {
      screens: {
        "xxl": "1440px",
      },
      colors: {
        "blue": {
          "dark": "#1f4d7b",
          "text-light": "#3e5a90",
          "default":"#357cb6",
          "twitter": "#00aaec",
        },
        "orange": {
          "default": "#f7b38a",
          "shadow": "#cc875d",
        },
        "text-default": "#363636",
        "text-gray-light": "#99adc1",
      },
      fontFamily: {
        body: ["Quicksand", "sans-serif"]
      },
    }
  },
  variants: {},
  plugins: []
}
