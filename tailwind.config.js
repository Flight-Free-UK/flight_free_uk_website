module.exports = {
  theme: {
    fontSize: {
      "xs": ".75rem",
      "sm": ".875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "subtitle": "2rem",
      "title": "3rem",
      "homepage": "4.5rem",
    },
    textColor: theme => ({
      ...theme("colors"),
      "gray-light": "#f9f9f9"
    }),
    backgroundColor: theme => ({
      ...theme("colors"),
      "gray-light": "#f9f9f9"
    }),
    borderColor: theme => ({
      ...theme("colors"),
      "gray-light": "#f9f9f9",
      "gray-mid": "#e7e7e7",
    }),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'center-bottom': 'center bottom',
    },
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
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
      'full': '1 0 100%',
    },
    extend: {
      colors: {
        "blue": {
          "dark": "#1f4d7b",
          "text-light": "#3e5a90",
          "default": "#357cb6",
          "twitter": "#00aaec",
          "dark-translucent": "rgba(31,77,123,0.8)",
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
      spacing: {
        "16-9": "56.25%",
        "square": "100%"
      },
      width: {
        "140": "140px",
        "200": "200px",
        "220": "220px",
        "230": "230px",
        "280": "280px", // for pledge form and hands SVG
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
        "104": "104px", // for hands SVG
        "140": "140px",
        "200": "200px",
        "220": "220px",
        "230": "230px",
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
