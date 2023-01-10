const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const { DefinePlugin } = require('webpack')

//配合webpack-merge抽离出公共配置
module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    //添加了这些扩展名之后，项目中导包不需要写文件扩展名
    extensions: ['.js', '.json', '.wasm', '.jsx', '.vue'],
  },
}
