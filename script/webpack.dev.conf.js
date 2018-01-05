const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorWebpackPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack')
const utils = require('./utils')
const base = require('./webpack.base.conf')

for (let key in base.entry) {
  base.entry[key] = [
    path.resolve(__dirname, './dev-client')
  ].concat(base.entry[key])
}

module.exports = Object.assign(
  base,
  {
    module: {
      rules: base.module.rules.concat(utils.styleLoaders({ sourceMap: true, usePostCSS: true }))
    },
    devtool: '#eval-source-map',
    output: {
      path: '/',
      filename: '[name].js',
      publicPath: '/'
    },
    plugins: [
      new FriendlyErrorWebpackPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '../public/index.html'),
        inject: true
      })
    ]
  }
)
