// Development config file
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
      app: './src/index.ts',
      router: './src/router/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          root: path.resolve(__dirname, 'src'),
          attrs: ['img:src', 'link:href']
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        loader: 'file-loader',
        options: {
          name: "[name].[ext]",
          outputPath: 'assets',
          esModule: false
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['app'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: './src/view.html',
      chunks: ['app', 'router'],
      inject: true,
      filename: 'view.html'
    })
  ],
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: '[name].dev.js',
    // publicPath: 'assets'
  }
};