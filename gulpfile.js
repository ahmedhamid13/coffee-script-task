let gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();

const jsSources = ['./components/scripts/scriptOne.js', './components/scripts/scriptTwo.js'];

gulp.task('js', function () {
    return gulp.src(jsSources)
            .pipe(uglify())
            .pipe(concat('script.js'))
            .pipe(gulp.dest('./js'))
});

gulp.task('watch', function(){
    livereload.listen();
    gulp.watch(jsSources, gulp.series('js'));
    gulp.watch(['./js/script.js', '*.html'], gulp.series('reload'));
});

gulp.task('reload', function() {
    return gulp.src('./*.html')
            .pipe(livereload());
});

gulp.task('default', gulp.series('js', 'watch'))