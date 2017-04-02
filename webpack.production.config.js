const path = require('path');
const webpack = require('webpack')

module.exports = {
    devtool: 'source-map',
    entry: ['bootstrap-loader','./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'assets'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['latest', 'stage-0', 'react']
                    }
                }
                
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader'
            },
            { test: /\.woff2?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf$/,  loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot$/,  loader: "file-loader" },
            { test: /\.svg$/,  loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
            { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery' }
        ]
    }
}