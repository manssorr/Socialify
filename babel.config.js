module.exports = {
	presets: [
		'module:metro-react-native-babel-preset',
		'@babel/preset-typescript',
	],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./app'],
				alias: {
					'@app': './app',
					'@mocks': './app/__mocks__',
					'@assets': './app/assets',
					'@components': './app/components',
					'@config': './app/config',
					'@hooks': './app/hooks',
					'@navigation': './app/navigation',
					'@networking': './app/networking',
					'@redux': './app/redux',
					'@screens': './app/screens',
					'@types': './app/types',
					'@utils': './app/utils',
				},
			},
		],
		[
			'module:react-native-dotenv',
			{
				path: 'env/.env',
				allowUndefined: true,
			},
		],
		[
			'@babel/plugin-transform-modules-commonjs',
			{
				allowTopLevelThis: true,
			},
		],
		'react-native-reanimated/plugin',
	],
};
