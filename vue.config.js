const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports ={
  css: {
    loaderOptions: {
      scss:{
        pretentData: '@import "~@/assets/fonts/footer-font-iconmoon.scss'
      }
    }
  }
}