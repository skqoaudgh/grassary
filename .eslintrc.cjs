module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:prettier/recommended',
		'plugin:react/jsx-runtime',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		'react/jsx-props-no-spreading': 0,
	},
	settings: {
		'import/resolver': {
			alias: {
				map: [['@', './src/client']],
				extensions: ['.ts', '.js', '.jsx', '.json'],
			},
		},
	},
};
