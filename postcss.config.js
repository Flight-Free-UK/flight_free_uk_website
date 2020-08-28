const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './source/**/*.erb',
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  whitelist: ["ol", "figure", "figcaption"]
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    ...process.env.WEBPACK_ENV === 'build'
      ? [purgecss]
      : []
  ]
}
