const path = require("path");
//위치를 가져옴

module.exports = {
    outputDir: path.resolve(__dirname, "../backend/public"),

    devServer: {
        proxyTable: {
            '/api': {
                target: "http://localhost:3000/api",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }

} 