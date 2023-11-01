module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      'react-native-paper/babel',
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
          },
        },
      ],
    ],
  };
};
