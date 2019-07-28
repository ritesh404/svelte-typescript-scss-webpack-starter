module.exports = {
	extends: ["prettier", "plugin:import/errors", "plugin:import/warnings"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: "module",
		project: "./tsconfig.json"
	},
	env: {
		browser: true,
		es6: true,
		node: true
	},
	plugins: ["import", "json", "markdown"],
	overrides: [
		{
			files: ["**/*.svelte"],
			processor: "svelte3/svelte3",
			plugins: ["svelte3"]
		}
	],
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".ts"]
			}
		},
		"svelte3/ignore-styles": attributes =>
			attributes.lang && attributes.lang.includes("scss")
	}
};
