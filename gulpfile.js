let gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();


const sassSources = ['./components/sass/*.scss'];
gulp.task('sass', function () {
    return sass(sassSources, {style: 'expanded', lineNumbers: true})
            .pipe(concat('style.css'))
            .pipe(gulp.dest('./css'))
            .pipe(livereload());
});

const coffeeSources = ['./components/coffee/*.coffee'];
gulp.task('coffee', function() {
    return gulp.src(coffeeSources)
            .pipe(coffee({bare: true}))
            .pipe(concat('coffee.js'))
            .pipe(gulp.dest('./components/scripts'));
});

const jsSources = ['./components/lib/jquery/jquery.js', './components/scripts/*.js'];
gulp.task('js', function () {
    return gulp.src(jsSources)
            .pipe(uglify())
            .pipe(concat('script.js'))
            .pipe(gulp.dest('./js'));
});


gulp.task('watch', function(){
    livereload.listen();
    gulp.watch(sassSources, gulp.series('sass'));
    gulp.watch(jsSources, gulp.series('js'));
    gulp.watch(coffeeSources, gulp.series('coffee'));
    gulp.watch(['./js/script.js', '*.html'], gulp.series('reload'));
});

gulp.task('reload', function() {
    return gulp.src('./*.html')
            .pipe(livereload());
});

gulp.task('default', gulp.series('sass', 'coffee', 'js', 'watch'))