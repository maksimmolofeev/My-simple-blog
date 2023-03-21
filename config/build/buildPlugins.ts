import webpack, { Chunk } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from "./types/config";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {

    const plugins = [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        
    ]

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
    }

    if (isDev) {
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    }

    return plugins
}