const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'eslint-config-turbo',
  ],
  plugins: ['only-warn', 'import', '@typescript-eslint'],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
    'dist/',
    'coverage/',
    'public/',
    'out/',
    'build/',
    'tmp/',
    '*.d.ts',
    '*.yaml',
    '*.lock',
    '*.log',
    '*.md',
    '*.png',
    '*.jpg',
    '*.jpeg',
    '*.gif',
    '*.svg',
    '*.ico',
    '**/*.json',
  ],
  overrides: [
    {
      files: ['*.js?(x)', '*.ts?(x)'],
    },
  ],
  rules: {
    'react/require-default-props': 'off',
  },
}
