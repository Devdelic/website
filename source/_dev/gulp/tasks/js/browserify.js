'use strict';

const babelify   = require('babelify'),
      browserify = require('browserify'),
      buffer     = require('vinyl-buffer'),
      coffeeify  = require('coffeeify'),
      gulp       = require('gulp'),
      gutil      = require('gulp-util'),
      livereload = require('gulp-livereload'),
      merge      = require('merge'),
      rename     = require('gulp-rename'),
      source     = require('vinyl-source-stream'),
      sourceMaps = require('gulp-sourcemaps'),
      watchify   = require('watchify');

// This method makes it easy to use common bundling options in different tasks
function bundle (bundler) {

  // Add options to add to "base" bundler passed as parameter
  bundler
    .bundle()                                    // Start bundle
    .pipe(source(settings.files.dev.js))                 // Entry point
    .pipe(buffer())                              // Convert to gulp pipeline
    .pipe(rename(settings.path.theme.js))        // Rename output from 'main.js'
    //   to 'bundle.js'
    .pipe(sourceMaps.init({ loadMaps : true }))  // Strip inline source maps
    .pipe(sourceMaps.write('.'))    // Save source maps to their
    //   own directory
    .pipe(gulp.dest(settings.path.theme.js))        // Save 'bundle' to build/
    .pipe(livereload());                         // Reload browser if relevant
}

gulp.task('bundle', function () {

});

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('js:browserify', function (cb) {
    if (settings.debug) {
      console.log('js:browserify task...');
    }

    var bundler = browserify(settings.files.dev.js)  // Pass browserify the entry point
      .transform(babelify, {
        presets : [ 'es2015' ]
      });  // Then, babelify, with ES2015 preset

    bundle(bundler);  // Chain other options -- sourcemaps, rename, etc.

    cb();
  });
};
