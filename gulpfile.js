var gulp         = require('gulp');
var sass         = require('gulp-sass');
var watch        = require('gulp-watch');
var uglify       = require('gulp-uglify');
var browserSync  = require('browser-sync');

gulp.task('sass', function () {
  return gulp.src('assets/css/main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css/'))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/min'))
    .pipe(browserSync.stream());
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
