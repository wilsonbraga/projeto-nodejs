module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: ['prettier', 'airbnb-base'],
  plugins: ['prettier'],

  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
