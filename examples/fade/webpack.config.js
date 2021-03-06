const webpack = require('webpack');
const path = require('path');
const del  = require('del');

// Clean Up Build
del(path.resolve(__dirname, 'dist/js'), { force: true });

// Configuration
module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/js/main.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: ['node_modules', 'bower_components'],
        options: {
          presets: ['env', ['es2015', { 'modules': false }]],
        },
      },
    ],
  },
  resolve: {
    alias: {
      'highway': 'highway.js/dist/highway.js',
      'highway.min': 'highway.js/dist/highway.min.js',
    },
    modules: [
      '.',
      'src',
      'node_modules',
      'bower_components',
    ],
    extensions: ['.js'],
  },
  devtool: 'source-map',
};
