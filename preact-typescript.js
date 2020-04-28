module.exports = {
  env: {
    browser: true,
  },
  extends: [
    "./index",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: "module",
  },
  rules: {
    "react/no-unknown-property": ["error", { ignore: ["class"] }],
  },
  settings: {
    react: {
      pragma: "h",
      version: "detect",
    },
  },
};
