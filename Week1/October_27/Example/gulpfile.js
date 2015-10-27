var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');


gulp.task('lint', function() { // gulp.task('taskname')
  return gulp.src('./*.js') // * >> anything in this folder that has .js extension
    .pipe(jshint()) //create a writeable stream from readable stream
    .pipe(jshint.reporter(stylish)); // add basic reporting to what we're linting
});

gulp.task('default', ['lint']); // Run all the tasks inside this array
