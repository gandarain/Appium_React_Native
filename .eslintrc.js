module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    indent: [
      'error',
      2,
      {
        ArrayExpression: 1,
        MemberExpression: 1,
        ObjectExpression: 1,
      },
    ],
    'linebreak-style': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'react/prop-types': 0,
  },
}