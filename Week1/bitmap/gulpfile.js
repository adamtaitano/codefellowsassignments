var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var stylish = require('jshint-stylish');
var watch = require('gulp-watch');
var jscs = require('gulp-jscs');

gulp.task('lint', function() {
  'use strict';
  return gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('mocha', function() {
  'use strict';
  return gulp.src('./test-spec.js')
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('jscs', function() {
    return gulp.src('./*.js')
        .pipe(jscs())
        .pipe(jscs.reporter());
});

gulp.task('watch', function() {
  'use strict';
  watch('./*.js', function () {
    gulp.start(['lint', 'mocha', 'jscs']);
  });
});

gulp.task('default', ['lint', 'jscs', 'mocha']);
