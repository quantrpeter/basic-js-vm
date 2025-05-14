const path = require('path')
const webpack = require('webpack')

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js',
	},
	output: {
		path: path.join(__dirname, 'dist'),
	},
	devtool: 'source-map',
	devServer: {
		static: [
			{
				directory: path.join(__dirname, 'demo')
			},
			{
				directory: path.join(__dirname, 'dist')
			}
		],
		compress: true,
		port: 9000,
		open: ['index.html'],
	},
}
