var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
};
