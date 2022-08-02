module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@app': ['./src'],
            tests: ['./tests'],
            '@assets': ['./assets'],
            '@screens': ['./src/screens'],
            '@navigator': ['./src/navigator'],
            '@components': ['./src/components'],
            '@theme': ['./src/theme/index.tsx'],
            '@constants': ['./src/constants/index.ts'],
            '@libs': ['./src/libs']
          }
        }
      ]
    ]
  };
};
