module.exports = {
  noParse: /highlight\.js\/lib\/languages\/.*\.js/,
  loaders: [{
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel',
  }, {
    test: /\.css$/,
    loader: 'style!css'
  }]
};