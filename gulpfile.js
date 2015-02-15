// general
var browserSync = require('browser-sync');
var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var watch       = require('gulp-watch')
var utils       = require('gulp-util');
var concat      = require('gulp-concat');

//css
var sass        = require('gulp-ruby-sass');
var prefixer    = require('gulp-autoprefixer');

//javascript
var uglify      = require('gulp-uglify');
var to5        = require('gulp-6to5');
var sourcemaps  = require('gulp-sourcemaps');

paths = {
  sass: 'app/**/*.sass',
  js: 'app/index.js',
  libs: [],
  build: 'build'
}
targets = {
  css: 'build/css',
  js: 'build'
}

gulp.task('default', ['build', 'watch']);

function generateSass () {
  return sass(paths.sass, {quiet: true})
    .pipe(plumber({errorHandler: utils.reportError}))
    .pipe(prefix("last 2 versions"))
    .pipe(concat(targets.css))
    .pipe(plumber.stop())
    .pipe(gulp.dest(paths.build))
    .pipe(browerSync.reload({stream:true}));
};

gulp.task('sass', generateSass);

gulp.task('js', function(){
  return gulp.src('app/*.js')
    .pipe(plumber({errorHandler: utils.reportError}))
    .pipe(sourcemaps.init())
    .pipe(to5())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
  gulp.watch('./app/**/*.js', ['js']);
  gulp.watch('./app/**/*.sass', ['sass']);
  browserSync({
    server: {baseDir: 'build'},
    browser: 'google chrome',
    injectChanges: false,
    files: ['build/**/*.*'],
    notify: false
  });
});

gulp.task('copy', function() {
  gulp.src('app/index.html').pipe(gulp.dest('build'))
});

gulp.task('build', ['copy', 'js', 'sass']);