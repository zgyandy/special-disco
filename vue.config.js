// var path = require('path')
// var PrerenderSpaPlugin = require('prerender-spa-plugin')
module.exports = {
  assetsDir: 'vue',
  productionSourceMap: false,
  devServer: {
    port: 9210,
    disableHostCheck: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://wap.deviotek.com',
    //     changeOrigin: true
    //   }
    // }
  },
  configureWebpack: {
    plugins: [
      // new PrerenderSpaPlugin({
      //   // 编译后的html需要存放的路径
      //   staticDir: path.join(__dirname, './dist')
      // })
    ]
  }
}