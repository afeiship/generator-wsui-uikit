(function() {
  'use strict';

  var gulp = require('gulp');
  var path = require('path');
  var autoprefixer = require('autoprefixer');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*'],
  });

  var includePaths = path.join(__dirname, '..', 'node_modules');

  //styles
  gulp.task('styles', function() {
    return gulp
      .src('src/index.scss')
      .pipe($.jswork.pkgHeader())
      .pipe($.sassGlob())
      .pipe($.sass({ includePaths }))
      .pipe($.postcss([autoprefixer()]))
      .pipe(gulp.dest('dist'))
      .pipe($.rename('index.scss'))
      .pipe(gulp.dest('dist'));
  });


})();
