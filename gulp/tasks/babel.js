var gulp = require('gulp');
var babel = require('gulp-babel');
var config = require('../config');

gulp.task('babel', function () {
    return gulp.src(config.babel.src)
        .pipe(babel())
        .pipe(gulp.dest(config.babel.dest));
});
