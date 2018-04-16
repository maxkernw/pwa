const path = require('path');

module.exports = {
  entry: ["babel-polyfill",'./app/app.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    compress: true,
    inline: true,
    port: 7890
  }
};