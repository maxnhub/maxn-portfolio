const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('pug', () => {
    gulp.src('./src/views/**/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist'))

});

gulp.task('watch', () => {
    gulp.watch('./src/views/**/*.pug', ['pug'])
});