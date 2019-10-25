module.exports = {
    // Tell webpack to run babel on every file it runs through

    module : {
        rules : [
            {
                test : /\.js?$/,    // run babel only on js files.
                loader : 'babel-loader',
                exclude : /node_modules/,
                options : {
                    presets : [     // rules to transpilet the code.
                        'react','stage-0',['env',{ targets : { browsers : ['last 2 versions'] }}]
                        // stage-0 is for asynchronous calls.
                        // env states that run these files on the latest 2 browser versions.
                        // react converts JSX into normal javascript function calls.
                    ]
                }
            }
        ]
    }
};