// general
var browserSync = require('browser-sync');
var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var watch       = require('gulp-watch')
var utils       = require('gulp-util');
var concat      = require('gulp-concat');
var buffer      = require('vinyl-buffer');
var source      = require('vinyl-source-stream');

//css
var sass        = require('gulp-ruby-sass');
var prefix      = require('gulp-autoprefixer');

//javascript
var browserify  = require('browserify');
var uglify      = require('gulp-uglify');
var babel       = require('gulp-babel');
var babelify    = require('babelify');
var sourcemaps  = require('gulp-sourcemaps');

paths = {
  libs: [
    'bower_components/angular/angular.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-material/angular-material.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/hammerjs/hammer.js',
    'bower_components/hammerjs/hammer.js',
    'bower_components/ryanmullins-angular-hammer/angular.hammer.js'
  ]
};

// targets = {
//   css: 'build/css',
//   js: 'build'
// }

gulp.task('default', ['build', 'watch']);

function generateSass () {
  return sass('app/index.sass', {quiet: true})
    .pipe(plumber({errorHandler: utils.reportError}))
    .pipe(prefix("last 2 versions"))
    .pipe(concat('app.css'))
    .pipe(plumber.stop())
    .pipe(gulp.dest('build'))
    .pipe(browserSync.reload({stream:true}));
};

gulp.task('sass', generateSass);

gulp.task('js', function() {
  browserify('app/index.js', { debug: true })
  .add(require.resolve('babelify/polyfill'))
  .transform(babelify)
  .bundle()
  .on('error', utils.log.bind(utils, 'Browserify Error'))
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(uglify({ mangle: false }))
  .pipe(sourcemaps.write('./'))
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

gulp.task('libs', function() {
  return gulp.src(paths.libs)
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('build', ['copy', 'libs', 'js', 'sass']);