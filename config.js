// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {//生成生产文件路径配置
    index: path.resolve(__dirname, 'dist/index.html'),//主页
    assetsRoot: path.resolve(__dirname, './dist'),//根目录
    assetsSubDirectory: 'static',//静态资源目录
    assetsPublicPath: process.env.NODE_ENV === 'production' ? '' : '/',//公共目录
    productionSourceMap: true,
    watch: true
  },
  dev: {
    port: 8083,
    proxyTable: {}
  }
}