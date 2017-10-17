'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  scss: 'vue-style-loader!css-loader!sass-loader', // Allows you to use <style lang="scss"> in scoped CSS.
  sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax', // Allows you to use <style lang="sass"> in scoped CSS.
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
