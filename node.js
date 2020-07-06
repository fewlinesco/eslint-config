module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ["import"],
  extends: ["./index"],
  rules: {
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: false,
        },
        "newlines-between": "always",
        groups: [
          ["builtin", "external"],
          ["parent", "sibling", "index"],
        ],
      },
    ],
  },
};
