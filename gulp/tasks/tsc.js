var gulp = require('gulp');
var typescript = require('gulp-typescript');
var config = require('../config');

gulp.task('tsc', function () {
    return gulp.src(config.ts.src)
        .pipe(typescript(config.ts.options))
        .js
        .pipe(gulp.dest(config.ts.dest));
});
