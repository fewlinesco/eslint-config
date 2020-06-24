module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["./index", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  settings: {
    react: { version: "detect" },
  },
};
