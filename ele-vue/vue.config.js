/*
 * @Descripttion: 基础配置
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-01-05 15:47:10
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-02-17 23:53:24
 */
// vue.config.js
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 使用运行时编译器的 Vue 构建版本
  runtimeCompiler: true,

  // 开启生产环境SourceMap，设为false打包时不生成.map文件
  productionSourceMap: false,

  // 关闭ESLint，如果你需要使用ESLint，把lintOnSave设为true即可
  lintOnSave: true,

  devServer: {
    open: false, // 是否自动打开浏览器页面
    host: '0.0.0.0', // 指定使用一个 host，默认是 localhost
    port: 8091, // 端口地址
    https: false, // 使用https提供服务
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    proxy: {
      '/admin/*': {
        target: 'http://127.0.0.1:7001',
        changeOrigin: true,
        secure: false
      },
      '/merchants/*': {
        target: 'http://127.0.0.1:7001',
        changeOrigin: true,
        secure: false
      },
      '/food/*': {
        target: 'http://127.0.0.1:7001',
        changeOrigin: true,
        secure: false
      },
      '/mainIndex/*': {
        target: 'http://127.0.0.1:7001',
        changeOrigin: true,
        secure: false
      },
      '/merchantCategory/*': {
        target: 'http://127.0.0.1:7001',
        changeOrigin: true,
        secure: false
      },
      '/userAddress/*': {
        target: 'http://127.0.0.1:7001',
        changeOrigin: true,
        secure: false
      }
    }
  },

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
  },

  configureWebpack: config => {
    // 生产环境打包分析体积
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [new BundleAnalyzerPlugin()]
      }
    }
  },

  css: {
    loaderOptions: {
      sass: {
        data:
          '\n                @import "@/common/style/mixin.scss";\n                @import "@/common/style/_var.scss";\n                '
      },
      stylus: {
        'resolve url': true,
        import: ['./src/theme']
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
