const path = require('path')

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://169.254.126.59:6868',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}