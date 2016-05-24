var gulp         = require('gulp');
var sass         = require('gulp-sass');
var watch        = require('gulp-watch');
var uglify       = require('gulp-uglify');
var browserSync  = require('browser-sync');
var concat       = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('assets/css/main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css/'))
    .pipe(browserSync.stream());
});

gulp.task('minjs', function() {
  return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/min/'))
    .pipe(browserSync.stream());
});

gulp.task('concatjs', ['minjs'], function() {
  return gulp.src('assets/js/min/*.js')
      .pipe(concat('allJs.min.js'))
      .pipe(gulp.dest('assets/js/concat/'));
});

gulp.task('html', function(){
  return gulp.src('*.html')
  .pipe(browserSync.stream());
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: ''
    }
  });
    gulp.watch('*.html', ['html']);
    gulp.watch('assets/js/main.js', ['js']);
    gulp.watch(['assets/css/*.sass', 'assets/css/*.scss'], ['sass']);
});

gulp.task('default', ['browserSync']);


gulp.task('js', ['minjs', 'concatjs']);
