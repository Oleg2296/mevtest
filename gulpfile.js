var gulp = require('gulp');
var pug = require('gulp-pug');
var scss = require('gulp-scss');
var minifycss = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
// var imageop = require('gulp-image-optimization');
var browserSync = require('browser-sync');

gulp.task('browserSync',['styles','pug','script'],function () {
    browserSync.init({
       server: {
          baseDir: './build'
       },
        notify: false
    })
});

gulp.task('styles',function () {
    return gulp.src('./src/style/**/*.scss')
        .pipe(concat('style.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('build/style'))
});

gulp.task('pug',function () {
   return gulp.src('./src/**/*.pug')
       .pipe(pug({
           pretty: true
       }))
       .pipe(htmlmin({collapseWhitespace: true}))
       .pipe(gulp.dest('build'))
});

gulp.task('script',function () {
   return gulp.src('./src/js/**/*.js')
       .pipe(concat('app.js'))
       .pipe(uglify())
       .pipe(gulp.dest('build/js'))
});

gulp.task('libs',function () {
   return gulp.src('./src/libs/**/*.js')
       .pipe(gulp.dest('build/libs'))
});

gulp.task('watch',function () {
   gulp.watch('./src/style/**/*.scss',['styles']);
   gulp.watch('./src/template/**/*.pug',['pug']);
   gulp.watch('./src/js/**/*.js',['script']);
});

gulp.task('default',['browserSync','watch','libs']);