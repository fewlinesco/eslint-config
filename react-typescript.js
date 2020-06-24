module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "./index",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  settings: {
    react: { version: "detect" },
  },
  rules: {
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true },
    ],
    "react/prop-types": 0,
  },
};
