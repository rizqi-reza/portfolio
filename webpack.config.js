const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const dotenv = require('dotenv');

const resolveAlias = require('./tsconfig-webpack-alias');

module.exports = () => {
  // const env = dotenv.config().parsed;
  // const envKeys = Object.keys(env).reduce((prev, next) => {
  //   prev[`process.env.${next}`] = JSON.stringify(env[next]);
  //   return prev;
  // }, {});

  return {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      compress: true,
      historyApiFallback: true,
      port: 7000,
    },
    entry: './src/index.tsx',
    module: {
      rules: [{
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(svg|png|jpg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts',
            },
          }, ],
        },
        {
          test: /\.s?css$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
      ],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      }),
      // new webpack.DefinePlugin(envKeys),
      // new CleanWebpackPlugin(['dist']),
    ],
    resolve: {
      alias: resolveAlias(),
      extensions: ['.tsx', '.ts', '.js'],
    },
  };
};