const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'eslint-config-turbo',
  ],
  env: {
    node: true,
  },
  plugins: ['only-warn', 'import', '@typescript-eslint'],
  settings: {
    'import/parser': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    'node_modules/',
    'dist/',
    'coverage/',
    '*.d.ts',
    '*.yaml',
    '*.lock',
    '*.log',
    '*.md',
    '**/*.js',
    '**/*.json',
    '.turbo',
  ],
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
}
