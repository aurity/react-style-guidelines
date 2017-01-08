const path = require('path')
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')

const config = {
  debug: true,
  entry: [
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: 'src',
    historyApiFallback: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.(jpg|png|ttf|eot|woff|woff2)$/,
        exclude: /node_modules/,
        loader: 'url?limit=100000',
      },
    ],
  },
  plugins: [
    new WebpackNotifierPlugin(),
  ],
}

if (process.env.NODE_ENV === 'production') {
  config.devtool = 'source-map'
  config.devServer = {}
  config.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ]
}

module.exports = config
