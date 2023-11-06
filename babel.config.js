module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      'react-native-paper/babel',
      'nativewind/babel',
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
      [
        'module-resolver',
        {
          alias: {
            assets: './src/assets',
            components: './src/components',
            hooks: './src/hooks',
            contexts: './src/contexts',
            navigation: './src/navigation',
            screens: './src/screens',
            styles: './src/styles',
            utils: './src/utils',
            api: './src/api',
            localization: './src/localization',
            providers: './src/providers',
            reducers: './src/reducers',
          },
        },
      ],
    ],
  };
};
