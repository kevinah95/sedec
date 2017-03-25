// Karma configuration
// Generated on Thu Mar 23 2017 07:43:18 GMT-0600 (Central America Standard Time)

module.exports = function(config) {
    var configuration = {

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            './public/bower_components/jquery/dist/jquery.js',
            './public/bower_components/angular/angular.js',
            './public/bower_components/angular-route/angular-route.js',
            './public/bower_components/angular-mocks/angular-mocks.js', // loads our modules for tests
            './public/bower_components/angular-css/angular-css.js', // loads our modules for tests
            './public/bower_components/ng-flow/dist/ng-flow-standalone.js', // loads our modules for tests
            './public/_core/app.js', // our angular app
            './public/_core/components/home/homeCtrl.js', // our Home Ctrl
            './public/_core/components/home/homeCtrl.spec.js' // our test file for our Home Ctrl
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    };

    if (process.env.TRAVIS) {
        configuration.browsers = ['Firefox'];
    };
    config.set(configuration);
}