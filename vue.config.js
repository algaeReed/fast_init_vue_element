module.exports = {
    publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/node': {
                target: 'https://v1.hitokoto.cn/',
                changeOrigin: true,
                pathRewrite: {
                    '/node': ''
                }
            },
        }
    }
}