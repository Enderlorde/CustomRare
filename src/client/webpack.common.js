const path = require("path");

module.exports = {
    entry: './src/client/app.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../../dist/client'),
        publicPath: '/'
    },
    module:{
        rules:[
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets:['@babel/preset-react']
                }
            },
            {
                test: /\.s[ac]ss$/,
                exclude: /(node_modules)/,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader"
                  ]
            }
        ]
    }
}