module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    browser: true,
    es2021: true,
    development: {
      plugins: ['react-native-dotenv'],
    },
    production: {
      plugins: ['react-native-dotenv'],
    },
  },
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: false,
      },
    ],
  ],
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'prettier', // Updated rule name to 'prettier'
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
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
