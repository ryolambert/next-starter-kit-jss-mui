const baseRules = require('eslint-config-lydell')

module.exports = {
  plugins: ['babel', 'import', 'prettier', 'react'],
  parser: 'babel-eslint',
  env: { es6: true },
  globals: Object.assign({}, baseRules.browserEnv(), {
    DEBUG: false,
    process: true,
  }),
  rules: Object.assign({}, baseRules({ import: true, react: true }), {
    'arrow-body-style': 'off',
    'babel/no-invalid-this': 'error',
    'func-style': 'off',
    'import/order': ['error', { 'newlines-between': 'never' }],
    'no-invalid-this': 'off',
    'prefer-destructuring': 'off',
    'prettier/prettier': 'error',
    'react/require-default-props': 'off',
    // Disable this rule as we have aliased the root of the project so that we
    // can import things using absolute paths.
    'import/no-extraneous-dependencies': 'off',
    // Disabled for now since this rule has autofix but does not move comments.
    // We could enable it once we've manually fixed all issues. See also:
    // https://github.com/yannickcr/eslint-plugin-react/issues/1940
    // 'react/sort-prop-types': 'error',
  }),
  overrides: [
    {
      files: ['.*.js', '*.config.js', '.storybook/*.js'],
      env: { node: true },
    },
    {
      files: ['stories.js'],
      globals: {
        module: false,
      },
    },
  ],
  settings: {
    'import/resolver': {
      'babel-module': {
        root: ['.'],
      },
    },
    react: {
      version: '16',
    },
  },
}