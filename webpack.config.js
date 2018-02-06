const path = require('path');
const ROOT = path.resolve(__dirname);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './client/src/js/index.jsx',
  output: {
    path: path.join(ROOT, '/client'),
    filename: 'assets/js/bundle.js',
    publicPath: '/',
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [ 'css-loader', 'sass-loader' ] })
      }
    ]
  },
  resolve: {
     extensions: [".js", ".json", ".jsx", ".css"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/src/index.html',
    }),
    new ExtractTextPlugin("assets/css/styles.css"),
  ]
};
