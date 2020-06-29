const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const env = process.env.WEBPACK_ENV

const JS_SOURCE_FILES = ['babel-polyfill', './source/es6/site.js' ]
const OUTPUT_FILENAME = 'site'
const DEST_FOLDER = 'source/javascripts'
const COPYRIGHT = `@copyright Flight Free UK 2020`

const OUTPUT_FILE = `${OUTPUT_FILENAME}.js`
const OUTPUT_FILE_MIN = `${OUTPUT_FILENAME}.min.js`

const { plugins, outputfile, mode } = env == 'build' 
	? { 
		plugins: [
			new UglifyJSPlugin(), 
			new webpack.BannerPlugin(COPYRIGHT)
		], 
		outputfile: OUTPUT_FILE_MIN,
		mode: 'production'
	} 
	: { 
		plugins: [
			new webpack.BannerPlugin(COPYRIGHT)
		], 
		outputfile: OUTPUT_FILE,
		mode: 'development'
	} 

module.exports = {
	mode,
	entry: JS_SOURCE_FILES,
	output: {
		path: path.join(__dirname, DEST_FOLDER),
		filename: outputfile,
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		rules: [{
			// Only run `.js` files through Babel
			test: /\.m?js$/,
			exclude: /(node_modules)(functions)(lambda)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}]
	},
	devtool: 'source-map',
	plugins: plugins
}