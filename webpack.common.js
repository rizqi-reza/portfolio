const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  node: {
    fs: 'empty',
    child_process : 'empty',
    net : 'empty',
    tls: 'empty',
  },
  entry: {
    main: path.join(__dirname, '/src/index.tsx'),
  },
  module: {
    rules: [{
        test: /\custom.js$/,
        use: ['script-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[contenthash]',
            limit: 8192,
            outputPath: 'images',
          },
        },
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
        options:{
          name: '[name].[ext]',
          outputPath: 'music',
        }
      },
      {
        test: /\.s?css$/i,
        use: [
          // Creates `stclyle` nodes from JS strings
          // 'style-loader', //3. Extract css into files
          MiniCssExtractPlugin.loader,
          'css-loader', //2. Turns css into commonjs
          'sass-loader', //1. Turns sass into css
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'font',
          },
        }, ],
      },
    ],
  },
  resolve: {
    modules: [].concat('src', ['node_modules']),
    extensions: ['.tsx', '.ts', '.js', 'scss', 'css', 'sass'],
  },
};