const path = require('path')
const webpack = require('webpack')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'basic-js-vm.js',
	},
	devtool: 'source-map',
	module: {
		rules: [
		]
	},
	devServer: {
		static: [
			{
				directory: path.join(__dirname, 'demo')
			}
		],
		compress: true,
		port: 9000,
		open: ['index.html'],
	},
}
