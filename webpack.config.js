var webpack = require('webpack');
var path = require('path');
module.exports = {
    context: path.join(__dirname, "src"),
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './js/index.js'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query  :{
                presets:['react','es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/src',
        publicPath: '/',
        filename: 'index.min.js'
    },
    devServer: {
        contentBase: './src',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};