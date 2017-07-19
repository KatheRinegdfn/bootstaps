/*
* @Author: ASUS-PC
* @Date:   2017-07-19 11:35:34
* @Last Modified by:   ASUS-PC
* @Last Modified time: 2017-07-19 15:03:25
*/

'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var cssnano = require('gulp-cssnano');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  	gulp.src('css_yuan/*.html')
  	.pipe(gulp.dest('css/'));
});

gulp.task('init', function() {
  // 将你的默认的任务代码放在这
  	 gulp.watch('css_yuan/*.html', ['default']);
  	 gulp.watch('css_yuan/*.less', ['less']);
});

gulp.task('less', function () {
  return gulp.src('css_yuan/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('css/'));
});
