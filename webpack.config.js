const path = require('path');
const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');

module.exports = {
  mode: "production",
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
    new StylableWebpackPlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
}