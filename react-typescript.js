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
    "plugin:prettier/recommended",
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
    "react/prop-types": 0,
  },
};
