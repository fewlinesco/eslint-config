# eslint-config

Disclaimer: this package is made for our internal usage and is only open source for convenience so we might not consider Pull Requests or Issues.
Feel free to fork though.

This package includes the different styles we apply to our JavaScript and TypeScript code.

⚠️  As this plugin wants to use a minimalist configuration, it relies on using prettier via ESLint which means you could have to configure your editor. The goal is to not have the editor run prettier directly as it would conflict with ESLint.

Jump [here](#vs-code) for VSCode integration.


Vim users could use [ALE](https://github.com/dense-analysis/ale) and use `let g:ale_fix_on_save = 1` and `eslint` as the linter for JavaScript and TypeScript.

## Usage

This plugin offer several configurations depending on your project type.

### Node project

```shell
yarn add -D @fewlines/eslint-config eslint \
eslint-config-prettier eslint-plugin-prettier prettier \
eslint-plugin-import
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
@typescript-eslint/eslint-plugin @typescript-eslint/parser \
eslint-plugin-import
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
eslint-plugin-react \
eslint-plugin-import
```

Then add these lines to your package.json:

```json
"eslintConfig": {
  "extends": "@fewlines/eslint-config/react"
}
```

The React plugin extends the previous Node plugin so it is not needed.

### Preact + Typescript project

```shell
yarn add -D @fewlines/eslint-config eslint \
eslint-config-prettier eslint-plugin-prettier prettier \
@typescript-eslint/eslint-plugin @typescript-eslint/parser \
eslint-plugin-import
```

Then add these lines to your package.json:

```json
"eslintConfig": {
  "extends": "@fewlines/eslint-config/preact-typescript"
}
```

The React + Typescript plugin extends the previous Node plugin so it is not needed.

### <a id="vs-code"></a>VS Code integration

In order to integrate `ESLint` into `VS Code`, install these two extensions:
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Then add these settings to your vscode's `settings.json`:

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
"[json]": {
  "editor.defaultFormatter": "dbaeumer.vscode-eslint"
}
```

If the linter does not work right away, you can pop the `VS Code` command palette with `⌘ Cmd + ↑ Shift + P` on mac, or `Ctrl + ↑ Shift + P` on windows/linux, and set the default formatter:

![VS Code default linter gif](https://user-images.githubusercontent.com/31956107/75045130-06f07800-54c3-11ea-8881-f9c9a50efea9.gif)

For more information, check [this](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) part of the documentation.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
