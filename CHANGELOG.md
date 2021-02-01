# CHANGELOG

## 3.1.0 - 2021-01-29

- Added rules for export. See documentation.
- Added import path group rule. `@src/**` is now considered an internal import.

### Bump of dependencies

```ts
  @typescript-eslint/eslint-plugin  dev    ~1mo  4.11.0  →  4.14.0   ~4d
  @typescript-eslint/parser         dev    ~1mo  4.11.0  →  4.14.0   ~4d
  eslint                            dev    ~1mo  7.16.0  →  7.18.0   ~6d
  eslint-config-prettier            dev    ~1mo   7.1.0  →   7.2.0   ~4d
  eslint-plugin-prettier            dev    ~1mo   3.3.0  →   3.3.1  ~18d

  4 minor, 1 patch updates
```

## 3.0.0 - 2020-07-16

- Made `typescript.ts` extend `node.ts` configuration.

## 2.1.1 - 2020-07-06

- Added `es6:true` to `env` to allow usage of Node globals in the `node` preset.

## 2.1.0 - 2020-06-23

- Added `react-typescript` preset (which remove `prop-types` calls).

## 2.0.0 - 2020-04-28

- Added `eslint-plugin-import` which should be added as a dependency when upgrading.
- Added the option `allowExpressions` in `@typescript-eslint/no-unused-vars` to avoid typing all callbacks.

## 1.1.0 - 2020-02-21

- Added `preact-typescript` preset.
