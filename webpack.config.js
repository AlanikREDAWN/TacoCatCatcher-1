const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			title: 'Taco Cat Catcher',
			metaDesc: 'This game was started in the 2024 Girls Who Code SIP (Summer Immersion Program), and after becoming an alumni, I found Hack Club and decided to fully flesh out my game and make it into something unique. So, here I am!',
			template: './src/index.html',
			filename: 'index.html',
			inject: 'body'
		})
	],

	mode: 'development',
	
	output: {
		clean: true
	}
};