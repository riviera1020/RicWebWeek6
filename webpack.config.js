var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index', // 進入點
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js', // 輸出的檔案名稱
  },
  module: {
    loaders: [{
      test: /\.js$/, // 針對 js 檔
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/ // 不要處理 3rd party 的 code
    }, {
      test: /\.css$/, // 針對 css 檔
      loaders: ['style', 'css'],
      //include: path.join(__dirname, 'src'),
      exclude: /node_modules/ // 不要處理 3rd party 的 code
    }]
  },
  plugins: [ // 要加這些 plugin
    new webpack.HotModuleReplacementPlugin(), // => 啟用 HMR
    new webpack.NoErrorsPlugin() // => 不要把錯誤的 Code 打包進來
  ]
};