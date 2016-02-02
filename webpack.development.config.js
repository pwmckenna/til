var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    require('./webpack.entry')
  ],
  output: require('./webpack.output'),
  plugins: [
    new CopyWebpackPlugin([{
      from: 'public'
    }]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: require('./webpack.resolve'),
  module: require('./webpack.module')
};