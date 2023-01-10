const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const { merge } = require('webpack-merge')
const baseCongfig = require('./base.config')

module.exports = merge(baseCongfig, {
  target: 'node',
  entry: './src/server/index.js',
  output: {
    filename: 'server_bundle.js',
    path: path.resolve(__dirname, '../build/server'),
  },
  //排除node_modules中的包
  externals: [nodeExternals()],
})
