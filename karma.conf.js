// Karma configuration
// Generated on Sun Jan 11 2015 15:15:08 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'lib/assets/bower_components/angular/angular.js',
      'lib/assets/bower_components/angular-animate/angular-animate.js',
      'lib/assets/bower_components/angular-aria/angular-aria.js',
      'lib/assets/bower_components/angular-material/angular-material.js',
      'lib/assets/bower_components/angular-resource/angular-resource.js',
      'lib/assets/bower_components/angular-route/angular-route.js',
      'lib/assets/bower_components/restangular/dist/restangular.js',
      'app/assets/javascripts/application.js',
      'app/assets/javascripts/angular-app/*.js',
      'app/assets/javascripts/angular-app/**/*.js',
      'spec/javascripts/**/*_spec.js'
    ],

      

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 8080,


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
    singleRun: false
  });
};
