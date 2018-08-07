const path = require('path');//webpack自带path模块
module.exports = {
    mode:"development",
    entry:{
        'index': "./src/index.js"
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        port:'8080',
        compress:true
    }
}