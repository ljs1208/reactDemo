const path = require('path');

module.exports = {
    // 入口
    entry: path.join(__dirname, 'src/index.js'),

    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
   //ReactDOM.render出语法错误
    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ],
        /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
/*cacheDirectory是用来缓存编译结果，下次编译加速*/
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }]
    },
    devServer: {
        // port:5000,
        contentBase: path.join(__dirname, './dist'),
        // historyApiFallback: true,
    }

};
