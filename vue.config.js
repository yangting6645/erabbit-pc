const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, './src/assets/style/variables.less'),
        path.join(__dirname, './src/assets/style/mixins.less')
      ]
    }
  },
  // chainWebpack: config => {
  //   图片加载
  //   config.module
  //     .rule('images')
  //     .use('url-loader')
  //     .loader('url-loader')
  //     .tap(options => Object.assign(options, { limit: 10000 }))

  //   // 这个是给webpack-dev-server开启可IP和域名访问权限。
  //   config.devServer.disableHostCheck(true)
  // },
  configureWebpack: {
    externals: {
      qc: 'QC'
    }
  }
} 
