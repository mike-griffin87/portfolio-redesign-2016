var gulp         = require('gulp');
var concat       = require('gulp-concat');
var sass         = require('gulp-sass');
var watch        = require('gulp-watch');
var uglify       = require('gulp-uglify');
var browserSync  = require('browser-sync');
var htmlmin      = require('gulp-htmlmin');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var jade = require('gulp-jade');
var historyApiFallback = require('connect-history-api-fallback');



gulp.task('sass', function () {
  return gulp.src('src/css/main.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sass({ outputStyle: 'nested' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('src/css/'))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

gulp.task('html', function(){
  return gulp.src('src/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.stream());
});

gulp.task('templates', function() {
  var YOUR_LOCALS = {};

  gulp.src(['./src/*.jade', './src/partials/*.jade'], {base: './src/'})
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: ['dist/'],
      middleware: [ historyApiFallback() ]
    }
  });
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/**/*.jade', ['templates']);
    gulp.watch('src/partials/*.jade', ['templates']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch(['src/css/*.sass', 'src/css/*.scss'], ['sass']);
});

gulp.task('default', ['html', 'js', 'sass', 'templates', 'browserSync']);
