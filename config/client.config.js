const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const { DefinePlugin } = require('webpack')
const { merge } = require('webpack-merge')
const baseCongfig = require('./base.config')

module.exports = merge(baseCongfig,{
  {
    target: 'web',
    entry: './src/client/index.js',
    output: {
      filename: 'client_bundle.js',
      path: path.resolve(__dirname, '../build/client'),
    },
    plugins: [
      //关闭options API和devtools，利于tree shaking
      new DefinePlugin({
        __VUE_OPTIONS_API__: false,
        __VUE_PROD_DEVTOOLS__: false,
      }),
    ],
  }
})