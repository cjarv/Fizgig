const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');
// require('dotenv').config();

module.exports = {
    entry: path.resolve(__dirname, 'src/main.js'), // application entry point
    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts', '.css'], //file extensions to process for packaging
        alias: { // So this is crazy handy. Make aliases to use in your code and then they will resolve
            'vue$': "vue/dist/vue.esm.js",
            '@': path.resolve('src')
        }
    },
    output: {
        path: path.resolve(__dirname, "../../server/public/apps/blog/"), // This is the public folder in the server that will be served by Express
        publicPath: (process.env.NODE_ENV === "development") ? "/" : "./", // this will be the prefix of your bundle path or point the devserver to root
        filename: "assets/bundle.js", // name of bundle file
        chunkFilename: '[name].js', // this is to process file chunks for packaging
    },
    devServer: {
        contentBase: __dirname + "/src/assets/", // when running dev server this points to your assets
        watchContentBase: true, // hot reloads changes
        inline: true,
        host: '0.0.0.0',
        port: process.env.DEVCLIENTPORT, //change in .env
        disableHostCheck: true,
    },
    module: { // always use absolute paths in include using regex, will break stuff
        rules: [
            { test: /\.js$/,
                use: 'babel-loader',
                include : [
                    path.resolve(__dirname, "src/"),
                    path.resolve(__dirname, "src/components/"),
                    path.resolve(__dirname, "src/assets/js/"),
                    path.resolve(__dirname, "src/assets/js/utils/"),
                ]
            },
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.css$/,
                use: [ 'vue-style-loader', 'css-loader' ],
                include: [
                    path.resolve(__dirname, "src/"),
                    path.resolve(__dirname, "src/components/"),
                    path.resolve(__dirname, "src/assets/css/"),
                    path.resolve(__dirname, "src/assets/css/utils/"),
                ]
            }
        ]

    },
    plugins : [
        new HtmlWebpackPlugin( {
            template: './src/index.html', //location of index.html in client app
        }),
        new VueLoaderPlugin(), // loads vue
        new Dotenv(),
    ]

}