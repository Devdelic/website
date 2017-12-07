'use strict';

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('js:minify', ['js:load'], function (cb) {
    if (settings.debug) {
      console.log('js:minify task...');
    }

    return gulp.src(settings.files.dev.js)
      .pipe(plugins.plumber({errorHandler: handlers.error}))
      // .pipe(plugins.sourcemaps.init({ loadMaps: true }))
      .pipe(plugins.babel())
      .pipe(plugins.concat("all.js"))
      .pipe(plugins.uglify())
      // .pipe(plugins.sourcemaps.write("."))
      .pipe(gulp.dest(settings.path.theme.js));
  });
};
