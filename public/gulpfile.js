var gulp = require('gulp'),
    //connect = require('gulp-connect'),
    browserify = require('browserify'),
    vueify = require('vueify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload'),
    babelify = require('babelify'),
    util = require('gulp-util');

// gulp.task('connect', function() {
//     connect.server({
//         root: '.',
//         livereload: true,
//         port: 8000
//     });
// });

gulp.task('js', function () {
    browserify({
        entries: './js/src/app.js',
        debug: true
    })
        .transform(babelify, {presets: ['env']})
        .transform(vueify)
        .bundle()
        .on('error', util.log)
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./js/dist'))
        .pipe(livereload());
});

gulp.task('compile', function () {
    livereload.listen()
    gulp.watch('./js/src/**/*', ['js'])
});

gulp.task('default', ['connect', 'compile']);