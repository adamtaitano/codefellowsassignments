var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var stylish = require('jshint-stylish');
var watch = require('gulp-watch');

gulp.task('lint', function() {
  'use strict';
  return gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('mocha', function() {
  'use strict';
  return gulp.src('./test.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', function() {
  'use strict';
  watch('./*.js', function () {
    gulp.start(['lint', 'mocha']);
  });
});

gulp.task('default', ['lint', 'mocha', 'watch']);
