const path = require('path');
const { version } = require('./package');

module.exports = {
	components: 'src/components/**/*.{js,jsx,ts,tsx}',
	defaultExample: true,
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader',
				},
			],
		},
	},
}
