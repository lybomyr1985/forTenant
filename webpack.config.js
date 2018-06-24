var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: 'src',
        port: 3000
    },
    devtool: 'source-map',
    entry: './src/js/index.js',
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel'],exclude: /node_modules/},
            {test: /\.json$/, loader: 'json-loader'},
            { test: /\.scss/,loader: 'style-loader!css-loader!sass-loader'},
            { test: /\.(gif|png|jpe?g)$/i, loader: 'file-loader?name=dist/images/[name].[ext]' },
            { test: /\.woff2?$/, loader: 'url-loader?name=dist/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff' },
            { test: /\.(ttf|eot|svg)$/, loader: 'file-loader?name=dist/fonts/[name].[ext]' },
            {test:/\.css$/, loaders : ['style-loader', 'css-loader']},
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
        ]
    },
    output: {
        path: 'dev/',
        filename: 'bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
                    // .... other plugins
            new webpack.NormalModuleReplacementPlugin(
              /\/iconv-loader$/, 'node-noop',
            )
       
    ]
};
