module.exports = {
  env: {
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'prettier', // Updated rule name to 'prettier'
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@env', '.env'],
          ['components', './src/components'],
          ['hooks', './src/hooks'],
          ['contexts', './src/contexts'],
          ['navigation', './src/navigation'],
          ['screens', './src/screens'],
          ['styles', './src/styles'],
          ['utils', './src/utils'],
          ['api', './src/api'],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
