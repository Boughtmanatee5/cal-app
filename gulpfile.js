// general
var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var watch       = require('gulp-watch')
var utils       = require('gulp-util');
var concat      = require('gulp-concat');
var buffer      = require('vinyl-buffer');
var source      = require('vinyl-source-stream');
var browserSync = require('browser-sync');

//css
var sass        = require('gulp-ruby-sass');
var prefix      = require('gulp-autoprefixer');

//javascript
var browserify  = require('browserify');
var uglify      = require('gulp-uglify');
var babel       = require('gulp-babel');
var babelify    = require('babelify');
var sourcemaps  = require('gulp-sourcemaps');
