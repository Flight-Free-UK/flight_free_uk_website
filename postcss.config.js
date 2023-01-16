const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './source/**/*.erb',
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  whitelist: ["ol", "figure", "figcaption", "blockquote", "left-1/3", "h-104"]
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    ...process.env.WEBPACK_ENV === 'build'
      ? [purgecss]
      : []
  ]
}
