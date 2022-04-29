module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb-base",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
    },
    plugins: ["@typescript-eslint", "eslint-plugin-tsdoc"],
    rules: {
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        semi: ["error", "never"],
        indent: ["error", 4],
        "import/extensions": ["error", "never"],
        "max-len": ["error", { code: 150 }],
        "tsdoc/syntax": "warn",
        "lines-between-class-members": [
            "error",
            "always",
            { exceptAfterSingleLine: true },
        ],
        "class-methods-use-this": "warn",
    },
    ignorePatterns: ["dist/*"],
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
}
