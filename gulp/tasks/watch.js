var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config');

gulp.task('watch', function () {
    watch(config.watch.ts, function () {
        gulp.start(['tsc']);
    });
});
