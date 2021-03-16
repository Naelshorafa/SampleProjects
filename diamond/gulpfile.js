'use strict';

const browserify = require('browserify');
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const log = require('gulplog');
const htmlextender = require('gulp-html-extend');
const image = require('gulp-image');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const postcss = require('gulp-postcss');
const rtlcss = require('gulp-rtlcss');
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
        .pipe(rtlcss())
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

// Copy and optimize fonts
gulp.task('fonts', function () {
    return gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./dist/fonts'));
});

// TODO: Minify (uglify) js
gulp.task('scripts', function () {
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: './src/js/script.js',
        debug: true
    });

    return b.bundle()
        .pipe(source('script.js'))
        .pipe(buffer())
        .on('error', log.error)
        .pipe(gulp.dest('./dist/js'));

});

// Default gulp task
gulp.task('default', gulp.parallel('html', 'sass', 'images', 'fonts', 'scripts'));

// Dev mode - local server
gulp.task('watch', function () {
    gulp.parallel('default');

    browserSync.init({
        server: "./dist"
    });

    gulp.watch('./src/scss/**/*', gulp.parallel('sass'));
    gulp.watch('./src/html/**/*', gulp.parallel('html'));
    gulp.watch('./src/js/**/*', gulp.parallel('scripts'));

    gulp.watch('./dist/*.html').on('change', browserSync.reload);
    gulp.watch('./dist/scripts/*.js').on('change', browserSync.reload);
});