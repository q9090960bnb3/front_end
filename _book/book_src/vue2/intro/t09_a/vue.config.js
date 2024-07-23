const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 开启代理服务器, 方式二
  devServer: {
    proxy: {
      '/v1': {
        target: 'http://localhost:5000',
        pathRewrite: {
          '^/v1': '' // 将前缀 /v1 重写为 空，否则转发时会带上前缀
        },
        ws: true, // 用于支持 websocket
        changeOrigin: true  // 是否 欺骗target 与他同源
      },
      '/v2': {
        target: 'http://localhost:5001',
        pathRewrite: {
          '^/v2': '' // 将前缀 /v1 重写为 空，否则转发时会带上前缀
        }
      }
    }
  }
})
