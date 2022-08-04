const path = require("path");
const htmpWebackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/app.jsx',
    output: {
        clean: true,
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist/')
    },
    mode: 'production',
    module:{
        rules:[
            {
                test: /\.jsx$/i,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets:['@babel/preset-react']
                }
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /(node_modules)/,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader"
                  ]
            },
            {
                test: /\.glb/i,
                type: 'asset/resource',
                generator: {
                    filename: 'models/[hash][ext][query]'
                }
            },
            {
                test: /\.png/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]'
                }
            },
            {
                test: /\.svg$/i,
                type: 'asset/inline'
            },
            {
                test: /\.(ttf|otf|woff2?|eot)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new htmpWebackPlugin({
            template: './src/static/index.html',
            filename: 'index.html',
            title: 'webpack+react+threejs'
        })
    ]
}