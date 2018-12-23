const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path: path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.(eot|woff2?|ttf|svg)$/,use:'file-loader'},
            {test:/\.(png|jpg|gif|bmp|jpeg)$/,use:'url-loader?limit=100&name=[name].[ext]'},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ],
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.js'
        }
    }

}