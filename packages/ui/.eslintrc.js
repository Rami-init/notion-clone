/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/eslint-config/react-internal.js'],
  ignorePatterns: ['*.config.js', '*.config.ts'],

  parserOptions: {
    project: './tsconfig.lint.json',
  },
}
