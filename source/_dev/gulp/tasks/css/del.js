'use strict';

var del = require('del');

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('css:del', function (cb) {
    if (settings.debug) {
      console.log('css:del task...');
    }

    var deldir = function (err) {
      if (err) return cb(err);
      del([
        settings.path.dev.css + '/*',
        settings.path.theme.css + '/*',
        settings.path.theme.templates + '/**/*.css',
        settings.path.theme.templates + '/**/*.css.*'
      ], {
        force: true
      });
      cb();
    };

    return deldir();
  });
};
