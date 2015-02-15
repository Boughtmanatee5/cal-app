// general
var browserSync = require('browser-sync');
var gulp        = require('gulp');
var plumber     = require('plumber');
var watch       = require('gulp-watch')
var util        = require('gulp-util');

//css
var sass        = require('gulp-ruby-sass');
var prefixer    = require('gulp-autoprefixer');
var sourcemaps  = require('gulp-sourcemaps');

//javascript
var uglify      = require('gulp-uglify');
var 6to5        = require('gulp-6to5');
var concat      = require('gulp-concat');

paths = {
  sass: './app/**/*.sass'
  js: './app/**/*.js'
}
targets = {
  css: './build/css'
  js: './build'
}

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

gulp.task('6to5', function(){
  return gulp.src(paths.js)
    .pipe(to5())
    .pipe(targets.js);
});

gulp.task('scripts', function(){
  return gulp.src(paths.js)
    .pipe(plumber({errorHandler: utils.reportError}))
    .pipe(concat(targets.js))
    .pipe(gulp.dest(paths.build));
});

gulp.task('watch', function () {
  gulp.watch('./app/**/*.js', ['6to5']);
  gulp.watch('./app/**/*.sass', ['sass']);
  browserSync({
    server: {baseDir: 'build'}
    browser: 'google chrome'
    injectChanges: false
    files: ['build/**/*.*']
    notify: false
  });
})