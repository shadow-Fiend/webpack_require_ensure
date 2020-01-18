const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './index.js',
		test: './src/test.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash:8].main.js',
		chunkFilename: '[name].[hashChunk:8].chunck.js' 
	},
	resolve: {
		extensions: ['.js']
	},
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader'
			}
		}]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: './index.html', //生成的html存放路径，相对于 path
			template: './index.html', //html模板路径
			inject: true //允许插件修改哪些内容，包括head与body`
		})
	]
}