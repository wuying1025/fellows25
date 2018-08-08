const path = require('path');//webpack自带path模块
const webpack = require('webpack');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const PurifycssWebpack =require('purifycss-webpack');
const entry = require('./webpack_config/entry-config.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode:"development",
    entry:entry,
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath:'http://127.0.0.1:8080/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader:"css-loader",
                        options:{
                            importLoaders:1
                        }
                    },"postcss-loader"]
                })
            },
            {
                test:/\.(jpg|png|gif|jpeg)$/i,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:500,
                            outputPath:"images/"
                        }
                    }
                ]
            },
            {
                test:/\.(html|htm)$/i,
                loader:"html-withimg-loader"
            },
            {
                test:/\.scss$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","sass-loader"]
                })
            },{
                test:/\.(jsx|js)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            'es2015'
                        ]
                    }
                },
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            chunks:['index'],
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        // new HtmlWebpackPlugin({
        //     filename:'index2.html',
        //     chunks:['index2'],
        //     minify:{
        //         removeAttributeQuotes:true
        //     },
        //     hash:true,
        //     template:'./src/index2.html'
        // }),
        new ExtractTextWebpackPlugin("./css/style.css"),
        new PurifycssWebpack({
            paths: glob.sync(path.join(__dirname, 'src/*.html'))
        }),
        new webpack.BannerPlugin('唯创'),
        new webpack.ProvidePlugin({
            $:"jquery"
        }),
        new CopyWebpackPlugin([{
            from:__dirname + '/src/public',
            to:"public"
        }])
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        port:'8080',
        compress:true,
        hot:true,
        open:true
    }
}