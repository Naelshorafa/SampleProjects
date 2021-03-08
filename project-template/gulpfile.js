var gulp = require('gulp');
var htmlextender = require('gulp-html-extend');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
var browserSync = require('browser-sync').create();

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

// TODO: Copy imgs

// TODO: Copy fonts

// TODO: Minify, concat js

// Default gulp task
gulp.task('default', gulp.parallel('html', 'sass'));

// Dev mode - local server
gulp.task('watch',function () {
    gulp.parallel('default');

    browserSync.init({
        server: "./dist"
    });

    gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass'));
    gulp.watch(['./src/html/**/*.html'], gulp.parallel('html'));
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
});