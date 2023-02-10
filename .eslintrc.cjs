/**
 * @type { import('eslint').ESLint.ConfigData }
 */
module.exports = {
	extends: ['standard-with-typescript', 'prettier'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc'],
	ignorePatterns: [
		'github',
		'vscode',
		'analysis',
		'i18n',
		'markdown',
		'node_modules',
		'roll20',
		'./*.*',
		'src/_schema-ts-old',
		'src/data-in',
		'src/data-out',
		'src/_schema-ts-old',
		'src/type-gen/results',
		'*.d.ts'
	],
	parserOptions: {
		project: './tsconfig.json',
		ecmaVersion: 'latest'
	},
	rules: {
		'tsdoc/syntax': 'error',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{ prefer: 'type-imports', fixStyle: 'inline-type-imports' }
		]
	}
}
