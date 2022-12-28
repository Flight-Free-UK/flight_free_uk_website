const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const env = process.env.WEBPACK_ENV

const OUTPUT_FILENAME = 'site'
const COPYRIGHT = `@copyright Flight Free UK 2020`

const OUTPUT_FILE = `${OUTPUT_FILENAME}.js`
const OUTPUT_FILE_MIN = `${OUTPUT_FILENAME}.min.js`

const { plugins, outputfile, mode } = env == 'build'
  ? {
    plugins: [
      new MiniCssExtractPlugin({filename: "stylesheets/[name].css"}),
      new UglifyJSPlugin(),
      new webpack.BannerPlugin(COPYRIGHT)
    ],
    outputfile: OUTPUT_FILE_MIN,
    mode: 'production'
  }
  : {
    plugins: [
      new MiniCssExtractPlugin({filename: "stylesheets/[name].css"}),
      new UglifyJSPlugin(),
      new webpack.BannerPlugin(COPYRIGHT)
    ],
    outputfile: OUTPUT_FILE_MIN,
    mode: 'development'
  }

module.exports = {
  mode,
  entry: ['babel-polyfill', './assets/source/js/site.js', './assets/source/css/styles.css'],
  output: {
    path: path.join(__dirname, 'assets/build'),
    filename: "javascripts/[name].js",
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        // Only run `.js` files through Babel
        test: /\.m?js$/,
        exclude: /(node_modules)(functions)(lambda)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader'
      }
    ]
  },
  devtool: 'source-map',
  plugins: plugins
}
