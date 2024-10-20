// const DashboardPlugin = require("webpack-dashboard/plugin");
const InstallPlugin = require("install-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
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
		}),
		new Dotenv({
			// path: '.env',
			safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
			allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
			systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
			silent: false, // hide any errors
			defaults: false, // load '.env.defaults' as the default values if empty.
			prefix: 'process.env.' // reference your env variables as 'enviro.ENV_VAR'.
		}),
		new InstallPlugin({
			dependencies: {
				peer: true,
			},
			packageManager: {
				type: 'npm',
				options: {
					dev: true,
					quiet: true,
				},
			},
			prompt: true,
		}),
		new CopyPlugin({
			patterns: [
				{
					from: "./src/assets",
					to({ context, absoluteFilename }) {
						return 'assets/';
					},
					toType: "dir",
				},
			],
		}),
		// new DashboardPlugin()
	],

	mode: 'development',
	
	output: {
		clean: true
	},

	// devServer: {
	// 	contentBase: './dist',
	// 	open: true
	// },

	// devtool: "#inline-source-map",

	
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
	// 		{
	// 			// You can use `regexp`
	// 			// test: /example\.js$/
	// 			test: require.resolve("./src/index.js"),
	// 			use: [
	// 				{
	// 					loader: "imports-loader",
	// 					options: {
	// 						type: "module",
							
	// 						imports: [
	// 							"namespace planck planck",
	// 							"namespace p5 p5",
	// 							"namespace p5play p5play"
	// 							// "side-effects planck",
	// 							// "side-effects p5",

	// 							// "side-effects p5play"

								
	// 						],
	// 					},
	// 				},
	// 			],
	// 		},
		],
	},
};