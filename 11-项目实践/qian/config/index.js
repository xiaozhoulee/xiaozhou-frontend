
const path = require('path')
 
module.exports = {
  dev: {
 
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    proxyTable: {
    	'/api': {
        target: 'http://127.0.0.1:7001',//此处可以换成自己需要的地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
     }
    }
}
}