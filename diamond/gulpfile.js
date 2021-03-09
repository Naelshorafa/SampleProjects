const gulp = require('gulp');
const htmlextender = require('gulp-html-extend');
const image = require('gulp-image');
const inlineFonts = require('gulp-inline-fonts');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const browserSync = require('browser-sync').create();

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
gulp.task('fonts', function() {
    return gulp.src(['./src/fonts/Avenir Regular.ttf'])
      .pipe(inlineFonts({ name: 'Avenir' }))
      .pipe(gulp.dest('./dist/fonts'));
  });

// TODO: Minify, concat js

// Default gulp task
gulp.task('default', gulp.parallel('html', 'sass', 'images', 'fonts'));

// Dev mode - local server
gulp.task('watch',function () {
    gulp.parallel('default');

    browserSync.init({
        server: "./dist"
    });

    gulp.watch('./src/scss/**/*', gulp.parallel('sass'));
    gulp.watch('./src/html/**/*', gulp.parallel('html'));
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
});