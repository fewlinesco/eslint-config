module.exports = {
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", { trailingComma: "all" }],
    "comma-dangle": ["error", "always-multiline"],
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
};
