module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme("colors"),
      "gray-light": "#f9f9f9"
    }),
    borderColor: theme => ({
      ...theme("colors"),
      "gray-light": "#f9f9f9"
    }),
    screens: {
      "xs": "420px",
      "sm": "540px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "xxl": "1440px",
    },
    inset: {
      "0": "0",
      "auto": "auto",
      "1/4": "25%",
      "1/3": "33.33333%",
      "1/2": "50%",
      "2/3": "66.66667%",
      "3/4": "75%"
    },
    extend: {
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
        "whiteveil": {
          "default": "rgba(255, 255, 255, 0.75)"
        },
        "text-default": "#363636",
        "text-gray-light": "#99adc1",
      },
      fontFamily: {
        body: ["Kollektif", "sans-serif"],
        blog: ["Helvetica", "Arial", "sans-serif"]
      },
      fontSize: {
        "title": "4.5rem"
      },
      spacing: {
          "16-9": "56.25%",
          "square": "100%"
      },
      width: {
        "140": "140px",
        "200": "200px",
        "220": "220px",
        "229": "229px",
        "280": "280px", // 288 - (2 x 4 rounded corners)
        "288": "288px",
        "320": "320px",
        "360": "360px",
        "640": "640px"
      },
      height: {
        "44": "44px",
        "54": "54px",
        "64": "16rem",
        "80": "20rem",
        "96": "24rem",
        "140": "140px",
        "200": "200px",
        "220": "220px",
        "229": "229px",
        "280": "280px",
        "440": "440px"
      },
      minHeight: {
          "3": "3rem",
          "160": "160px"
      },
      padding: {
        "7": "1.75rem",
        "14": "3.5rem",
        "15": "3.75rem"
      },
      marginTop: {
        "14": "3.5rem"
      },
      left: {
        "1/4": "25%",
        "1/3": "33.33333%",
        "1/2": "50%",
        "2/3": "66.66667%",
        "3/4": "75%"
      },
      lineHeight: {
        "heading": "1.125"
      },
      borderWidth: {
        "6": "6px"
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem"
      },
      gridTemplateColumns: {
        "131": "1fr 3fr 1fr"
      },
      gridTemplateRows: {
        "mincontent": "min-content"
      }
    }
  },
  variants: {
    opacity: ({ after }) => after(['disabled']),
    bg: ({ after }) => after(['disabled']),
  },
  plugins: []
}
