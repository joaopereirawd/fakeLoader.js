//Gulp Plugins
var gulp            =   require('gulp');
var sass            =   require('gulp-sass');
var autoprefixer    =   require('gulp-autoprefixer');
var minifycss       =   require('gulp-minify-css');
var size            =   require('gulp-size');
var rename          =   require('gulp-rename');
var uglify          =   require('gulp-uglify');


// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/fakeLoader.scss')
    .pipe(sass({outputStyle:''}).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(size({title: 'css'}))
    .pipe(gulp.dest('css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(size({title: 'css.min'}))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('demo/css'))
});


// Minify JS
gulp.task('scripts', function() {
    return gulp.src(['js/*.js'])
    .pipe(size({title: 'js'}))
    .pipe(gulp.dest('js'))
    .pipe(rename('fakeLoader.min.js'))
    .pipe(uglify())
    .pipe(size({title: 'js.min'}))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('demo/js'))
});


//Watch for changes 
gulp.task('watch', function() {
    gulp.watch("scss/**/*.scss", ['sass']);
    gulp.watch('js/*.js', ['scripts']);
});



// Init Tasks
gulp.task('default', ['sass', 'watch', 'scripts']);