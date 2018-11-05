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
    gulp.src('dev/scss/style.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dev/css'))
);

//bower
gulp.task('bower',['pug'], function () {
    gulp.src('app/index.html')
        .pipe(wiredep({
            directory: "app/lib/bower_components"
        }))
        .pipe(gulp.dest('app/'))
});

// clean
gulp.task('clean', function () {
    return gulp.src('prod/', { read: false })
        .pipe(clean());
});

// Prod
gulp.task('html', ['clean'], function () {
    return gulp.src('dev/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('prod/'));
});

gulp.task('watch', function () {
    gulp.watch('app/**/**/*.pug', ['bower']);
});
