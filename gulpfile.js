var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');

gulp.task('css', function() {
  return gulp.src(['./src/Assets/sass/main.scss', './src/Assets/sass/custom.scss'])
  .pipe(concat('app.css'))
  .pipe(sass().on('error', sass.logError))
  .pipe(uglifycss())
  .pipe(rename('app.min.css'))
  .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function() {
  return gulp.src('./src/Assets/js/theme.js')
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest('./public/js'));
});
