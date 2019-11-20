const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/content-service.[name].bundle.js',
    library: ['content-service', '[name]'],
    libraryTarget: 'umd',
  },
  performance: {
    hints: false,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'content-service.css'
    }),
    new CleanWebpackPlugin(),
    new Dotenv(),
  ],
  resolve: {
    modules: [].concat('src', ['node_modules']),
    extensions: ['.tsx', '.ts', '.js', 'scss', 'css', 'sass'],
  },
});