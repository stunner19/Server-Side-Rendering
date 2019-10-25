const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // Inform webpack that we're building a bundle for NodeJs, rather than a browser.
    target : 'node',

    // Tell webpack the root file of our server appliacation.

    entry : './src/index.js',

    // Tell webpack where to put tht output file
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname,'build')
    },

    externals : [webpackNodeExternals()]    
};

// merge function from webpack merge is used to merge the two objects.
module.exports = merge(baseConfig,config);

// webpack puts the entire code of the library into the bundle.js file.
// At the server side, we do not need to add the node modules into the bundle.js
// At the clinet side, for browser based applictions,we need to add the library code to the bundle.js file.