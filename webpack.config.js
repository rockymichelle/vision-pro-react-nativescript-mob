const webpack = require('@nativescript/webpack');

module.exports = (env) => {
  webpack.init(env);

  // Learn how to customize:
  // https://docs.nativescript.org/webpack

  const config = webpack.resolveConfig();

  // WebContainer support: Add optimizations for browser-based Node.js environment
  if (process.env.WEBCONTAINER === '1') {
    config.optimization = {
      ...config.optimization,
      minimize: false, // Disable minification for faster builds in WebContainer
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    };

    // Add WebContainer-specific performance hints
    config.performance = {
      ...config.performance,
      hints: false, // Disable performance hints in WebContainer
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    };
  }

  return config;
};
