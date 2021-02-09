const path = require('path');
const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new StylableWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
}