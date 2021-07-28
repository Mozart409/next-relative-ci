const { StatsWriterPlugin } = require('webpack-stats-plugin')

module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config, {}) => {
    config.plugins.push(
      new StatsWriterPlugin({
        filename: 'stats.json',
        stats: {
          context: './', // optional, will improve readability of the paths
          assets: true,
          entrypoints: true,
          chunks: true,
          modules: true,
        },
      })
    )

    return config
  },
}
