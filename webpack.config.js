const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const config = require('./config');
const isProduction  = config.nodeEnv === 'production';
const webpack = require('webpack');

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    app: './src/index.js',
    about: './src/about.js',
  },
  devServer: isProduction ? null : {
    contentBase: './dist',
    hot: true,
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'My Webpack Learning project',
      minify: true,
      hash: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader',
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader',
        ]
      }
    ]
  }
}
