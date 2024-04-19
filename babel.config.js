module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.png',
        ],
        alias: {
          assets: './assets',
          components: './src/components',
          configs: './src/configs',
          hooks: './src/hooks',
          router: './src/router',
          helpers: './src/helpers',
          screens: './src/screens',
          services: './src/services',
          store: './src/store',
          theme: './src/theme',
          types: './src/types',
          constants: './src/constants',
          utils: './src/utils',
        },
      },
    ],
    // 'react-native-reanimated/plugin',
  ],
};
