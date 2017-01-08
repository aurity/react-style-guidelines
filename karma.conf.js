const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')

module.exports = function (config) {
  const configSettings = createConfig()
  config.set(configSettings)
}

function createConfig() {
  return {
    browsers: ['PhantomJS'],
    frameworks: ['mocha'],

    files: [
      'src/**/*.spec.js',
    ],

    preprocessors: {
      'src/**/*.spec.js': ['webpack'],
    },

    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-phantomjs-launcher'),
    ],

    webpack: {
      externals: {
        cheerio: 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'react/addons': true,
      },

      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
      plugins: [
        new webpack.IgnorePlugin(/\.json$/),
        new webpack.NoErrorsPlugin(),
      ],
    },

    webpackServer: {
      noInfo: true,
    },
  }
}
