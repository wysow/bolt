module.exports = function(grunt) {
    'use strict';

    grunt.util.linefeed = '\n';

    var options = {
        sourcemap: {
            css: false,
            js: false
        },
        path: {
            tmp: 'tmp',
            pages: 'tmp/pages',
            sourcemaps: '../view/maps',
            doc: {
                js: 'docs/js',
                php: 'docs/php'
            },
            src: {
                js: 'js',
                lib: 'lib',
                sass: 'sass',
                npm: 'node_modules'
            },
            dest: {
                js: '../view/js',
                fonts: '../view/fonts',
                img: '../view/img',
                css: '../view/css'
            }
        },

        files: {
            boltJs: [
                // Prerequisites
                '<%= path.src.js %>/console.js',
                '<%= path.src.js %>/class-extends.js',
                // Old stuff
                '<%= path.src.js %>/init.js',
                // Bolt module
                '<%= path.src.js %>/bolt.js',
                //
                '<%= path.src.js %>/modules/actions.js',
                '<%= path.src.js %>/modules/app.js',
                '<%= path.src.js %>/modules/ckeditor.js',
                '<%= path.src.js %>/modules/conf.js',
                '<%= path.src.js %>/modules/data.js',
                '<%= path.src.js %>/modules/datetime.js',
                '<%= path.src.js %>/modules/editcontent.js',
                '<%= path.src.js %>/modules/extend.js',
                '<%= path.src.js %>/modules/files.js',
                '<%= path.src.js %>/modules/liveeditor.js',
                '<%= path.src.js %>/modules/omnisearch.js',
                '<%= path.src.js %>/modules/secmenu.js',
                '<%= path.src.js %>/modules/stack.js',
                '<%= path.src.js %>/modules/utils.js',
                // Bolt widgets
                '<%= path.src.js %>/widgets/**/*.js',
                // Old stuff
                '<%= path.src.js %>/obj-validation.js'
            ]
        },

        banner: {
            boltJs: [
                '/**',
                ' * These are Bolt’s COMPILED JS files!',
                ' * You can edit *.js files in /app/src/js/ and then run "grunt updateBolt" to generate this file.',
                ' */'
            ].join('\n'),
            boltCss: [
                '/**',
                ' * These are Bolt’s COMPILED CSS files!',
                ' * Do not edit these files, because all changes will be lost.',
                ' * You can edit *.scss files in /app/src/scss/ and then run "grunt updateBolt" to generate this file.',
                ' */'
            ].join('\n')
        }
    };

    // Optionally overwrite options with grunt-local/*.js
    var path = require('path'),
        localOptions = {};

    grunt.file.expand('./grunt-local/*.js').map(function (confPath) {
        grunt.verbose.writeln('Load local options "' + confPath + '"');
        localOptions[path.basename(confPath, '.js')] = require(confPath);
    });
    require('deep-extend')(options, localOptions);

    // Start
    require('load-grunt-config')(grunt, {
        data: options,
        jitGrunt: {
            staticMappings: {
                pages: 'grunt-tasks/pages.js',
                sass: 'grunt-tasks/sass.js',
                modernizr: 'grunt-tasks/modernizr.js',
                htmllint: 'grunt-html',
                bom: 'grunt-bom-removal'
            }
        }
    });
};
