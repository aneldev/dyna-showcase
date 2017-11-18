﻿// help: http://webpack.github.io/docs/configuration.html
// help: https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli
const path = require('path');
const webpack = require('webpack');

const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');

console.log('To debug open address: http://localhost:3220 on any browser');
console.log('');

const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:3220',
    path.resolve(__dirname, 'dev/scripts/index.tsx')
  ],
  devServer: {
    hot: true,
    port: 3220,
    publicPath: '/static',
    historyApiFallback: true
  },
  output: {
    path: path.resolve(__dirname, 'dev/public/static'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {},
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    loaders: loaders
  },
  plugins: plugins,
};

module.exports = config;
