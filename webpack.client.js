const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    //No need of target as the application is running on a browser.

    // Tell webpack the root file of our server appliacation.

    entry : './src/client/client.js',

    // Tell webpack where to put tht output file
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname,'public')
    } 
};

module.exports = merge(baseConfig,config);