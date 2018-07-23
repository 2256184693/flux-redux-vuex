
var webpack = require("webpack");

const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

var config = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: resolve('./src/index.js'),
  output: {
    filename: 'bundle.js',
    path: resolve('./dist'),
  },
  devServer: {
    host: '127.0.0.1',
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },
  plugins: [

  ]
};

module.exports = config;