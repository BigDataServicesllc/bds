const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    fallback: {
      ...config.resolve?.fallback,
      stream: require.resolve('stream-browserify'),
      https: require.resolve('https-browserify'),
      http: require.resolve('stream-http'),
      url: require.resolve('url'),
      buffer: require.resolve('buffer'),
      process: require.resolve('process'),
      zlib: require.resolve('browserify-zlib'),
      crypto: require.resolve('crypto-browserify'),
    },
  };

  config.plugins = [
    ...(config.plugins || []),
    new webpack.ProvidePlugin({
      process: 'process',
      Buffer: ['buffer', 'Buffer'],
    }),
  ];

  // 👇 Esta línea resuelve el error de lectura de "module"
  config.module = {
    ...config.module,
    rules: [...(config.module?.rules || [])],
  };

  return config;
};
