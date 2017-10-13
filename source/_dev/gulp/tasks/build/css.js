'use strict';

var run = require('run-sequence');

module.exports = function (gulp, plugins, settings, handlers) {
  // Development
  gulp.task('build:css:development', function (cb) {
    if (settings.debug) {
      console.log('build:css:development task...');
    }

    run(
      'css:del',               // Remove all CSS files.
      'svg:min',               // Minify SVG before use it in CSS.
      [
        'sass:global'         // Compile global Sass files with Sass.
        // 'sass:components'      // Compile components Sass files with Sass.
      ],
      [
        'css:global'          // Compile global CSS files with PostCSS.
        // 'css:components'       // Compile components CSS files with PostCSS.
      ],
      cb
    );
  });

  // Production
  gulp.task('build:css:production', function (cb) {
    if (settings.debug) {
      console.log('build:css:production task...');
    }

    run(
      'css:del',             // Remove all CSS files.
      'svg:min',             // Minify SVG before use it in CSS.
      [
        'sass:global'       // Compile global Sass files with Sass.
        // 'sass:components'    // Compile components Sass files with Sass.
      ],
      [
        'css:global'        // Compile global CSS files with PostCSS.
        // 'css:components'     // Compile global CSS files with PostCSS.
      ],
      'css:minify',          // Minify CSS.
      'css:gzip',            // Make .css.gz files (browser search for them automatically).
      cb
    );
  });
};
