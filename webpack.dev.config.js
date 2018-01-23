const path = require('path');

module.exports = {
    // 入口
    entry: path.join(__dirname, 'src/index.js'),

    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    }

};