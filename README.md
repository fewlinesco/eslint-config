# eslint-config

Disclaimer: this package is made for our internal usage and is only open source for convenience so we might not consider Pull Requests or Issues.
Feel free to fork though.

This package includes the different styles we apply to our JavaScript and TypeScript code.

⚠️  As this plugin wants to use a minimalist configuration, it relies on using prettier via ESLint which means you could have to configure your editor.
The goal is to not have the editor run prettier directly as it would conflict with ESLint.

See here for VSCode: https://github.com/prettier/prettier-vscode#vs-code-eslint-and-tslint-integration

Vim users could use [ALE](https://github.com/dense-analysis/ale) and use `let g:ale_fix_on_save = 1` and `eslint` as the linter for JavaScript and TypeScript.

## Usage

This plugin offer several configurations depending on your project type.

### Node project

```shell
yarn add -D @fewlines/eslint-config eslint \
eslint-config-prettier eslint-plugin-prettier prettier
```

Then add these lines to your package.json:

```json
"eslintConfig": {
  "extends": "@fewlines/eslint-config/node"
}
```

### TypeScript project

```shell
yarn add -D @fewlines/eslint-config eslint \
eslint-config-prettier eslint-plugin-prettier prettier \
@typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Then add these lines to your package.json:

```json
"eslintConfig": {
  "extends": "@fewlines/eslint-config/typescript"
}
```

The TypeScript plugin extends the previous Node plugin so it is not needed.

### React project

```shell
yarn add -D @fewlines/eslint-config eslint \
eslint-config-prettier eslint-plugin-prettier prettier \
eslint-plugin-react
```

Then add these lines to your package.json:

```json
"eslintConfig": {
  "extends": "@fewlines/eslint-config/react"
}
```

The React plugin extends the previous Node plugin so it is not needed.

### VS Code

In order to integrate `ESLint` into `VS Code`, you need to add [this extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), then add these settings to your vscode's `settings.json`:

```json
"eslint.format.enable": true,
"editor.defaultFormatter": "dbaeumer.vscode-eslint",
"[javascript]": {
  "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
"[javascriptreact]": {
  "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
"[typescript]": {
  "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
"[typescriptreact]": {
  "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
"[graphql]": {
  "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
```

For more information, check [this](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) part of the documentation.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
