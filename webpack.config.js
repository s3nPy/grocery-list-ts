const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './app.ts',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: '/node_modules'
            }, 
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader, // 'style-loader' may be used during dev
                    'css-loader', 
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        }
                    }
                ],
                exclude: '/node_modules'
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './assets/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
}