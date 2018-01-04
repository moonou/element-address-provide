const app = require('express')()
const webpack = require('webpack')
const chalk = require('chalk')
const config = require('./webpack.dev.conf.js')

const compiler = webpack(config)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})

devMiddleware.waitUntilValid(() => {
  console.log(chalk.blue('🚀  Develop server stared, port is 4000'))
})

app.use(devMiddleware)
app.use(hotMiddleware)

app.listen(4000)
