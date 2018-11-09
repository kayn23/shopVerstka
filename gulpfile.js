var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-clean-css'),
    clean = require('gulp-clean'),
    wiredep = require('gulp-wiredep'),
    pug = require('gulp-pug');

//pug
gulp.task('pug', function () {
    return gulp.src('app/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app/'));
})

// CSS
gulp.task('css', () =>
    gulp.src('app/scss/main.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist'))
);

//bower
gulp.task('bower',['pug'], function () {
    gulp.src('app/*.html')
        .pipe(wiredep({
            directory: "app/lib/bower_components"
        }))
        .pipe(gulp.dest('app/'))
});

// clean
gulp.task('clean', function () {
    return gulp.src('dist/', { read: false })
        .pipe(clean());
});

//img
gulp.task('img', function() {
    return gulp.src('app/img/**/*')
        .pipe(gulp.dest('dist/img/'));
});

//js 
gulp.task('js', function(){
    return gulp.src('app/js/')
});

// Prod
gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
    gulp.watch('app/**/**/*.pug', ['bower']);
});
