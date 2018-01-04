const rm = require('rimraf')
const ora = require('ora')
const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.conf')
const chalk = require('chalk')

process.env.NODE_ENV = 'production'

const spinners = ora({
  text: 'Building...',
  spinner: 'clock'
})
spinners.start()

rm(webpackConfig.output.path, (error) => {
  if (error) throw error
  webpack(webpackConfig, (err, stats) => {
    spinners.stop()
    if (err) throw err

    console.log(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }))

    if (stats.hasErrors()) {
      console.log(chalk.red('🚫  Build failed with errors.\n'))
    } else {
      console.log(chalk.green('🍻  Build Success.\n'))
    }
  })
})
