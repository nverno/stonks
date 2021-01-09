const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: {
    index: './src/popup/index.js',
    content: './src/content.js',
    background: './src/background.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  optimization: {
    // if multiple entry points on single HTML page
    // runtimeChunk: 'single',
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Stonks',
      cleanStaleWebpackAssets: false,
      template: './src/popup/index.ejs',
      // only inject index.bundle.js, others are used by extension only
      chunks: ['index'],
      inject: false,
    }),
    // new webpack.ProvidePlugin({
    //   _: 'underscore',
    // }),
  ],
  devServer: {
    contentBase: './build',
  },
  module: {
    rules: [
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
        exclude: /(node_modules)/,
        options: {
          esModule: false,
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.(c|s[ac])ss$/i,
        use: [
          'style-loader', // creates 'style' nodes from js strings
          'css-loader', // CSS => CommonJS
          'sass-loader', // sass => CSS
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
      {
        test: /\.svg$/i,
        type: 'asset/inline',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  },
};
