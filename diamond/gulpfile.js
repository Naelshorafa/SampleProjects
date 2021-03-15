const gulp = require('gulp');
const htmlextender = require('gulp-html-extend');
const image = require('gulp-image');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
sass.compiler = require('node-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const browserSync = require('browser-sync').create();
const copy = require('copy');


// Compile html pages
gulp.task('html', function () {
    return gulp.src('./src/html/pages/*.html')
        .pipe(htmlextender({ annotations: true, verbose: false }))
        .pipe(gulp.dest('./dist'));
});


// Compile scss files, do all css stuff
gulp.task('sass', function () {
    return gulp.src('./src/scss/**/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer, cssnano]))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream()); // tell browser
});

// Copy and optimize images
gulp.task('images', function () {
    return gulp.src('./src/images/**/*')
      .pipe(image())
      .pipe(gulp.dest('./dist/images'));
  });

// TODO: Copy fonts
gulp.task('copy', function () {
    return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts'));
  });

// TODO: Minify, concat js
gulp.task('scripts', function() {
    return gulp.src('./src/js/*.js')
      .pipe(concat('script.js'))
      .pipe(gulp.dest('./dist/js'));
  });

// Default gulp task
gulp.task('default', gulp.parallel('html', 'sass', 'images','scripts'));

// Dev mode - local server
gulp.task('watch',function () {
    gulp.parallel('default');

    browserSync.init({
        server: "./dist"
    });

    gulp.watch('./src/scss/**/*', gulp.parallel('sass'));
    gulp.watch('./src/html/**/*', gulp.parallel('html'));
    gulp.watch('./src/js/*.js', gulp.parallel('scripts'));
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
});