const webpack = require('webpack')
// const ora = require('ora')
const webpackConfig = require('./webpack.config')
// const spinner = ora('building for production...')

// spinner.start()

webpack(webpackConfig, function (err, stats) {
    // spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
})