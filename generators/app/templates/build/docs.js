(function () {
  'use strict';

  var gulp = require('gulp');
  var path = require('path');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });
  var includePaths = path.join(__dirname, '..', 'node_modules');
  //styles
  gulp.task('docs', function () {
    return gulp
      .src('docs/style.scss')
      .pipe($.sass({ outputStyle: 'expanded', includePaths }))
      .pipe(gulp.dest('docs'));
  });
})();
