module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['dist/javascript/app/*.js', 'dist/javascript/app/**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        jasmine: {
            pivotal: {
                src: ['dist/javascript/app/*.js', 'dist/javascript/app/**/*.js'],
                options: {
                    specs: 'tests/spec.js',
                    helpers: ['dist/javascript/vendor/*.js', 'tests/vendor/angular-mocks-*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('test', ['jshint', 'jasmine']);
    grunt.registerTask('default', ['jshint', 'jasmine']);

};