var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	browserify = require('gulp-browserify'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat');

var coffeeSources = ['components/coffee/tagline.coffee']
var jsSources = [
	'components/scripts/template.js'
];

gulp.task('coffee', function(){
	gulp.src(coffeeSources)
	   .pipe(coffee({ bare: true})
	     .on('error', gutil.log))
	   .pipe(gulp.dest('components/scripts'))
});

var sassSources = ['components/sass/style.scss']

gulp.task('log', function () {
	gutil.log('testing things');
});

gulp.task('js', function() {
	gulp.src(jsSources)
	  .pipe(concat('script.js'))
	  .pipe(browserify())
	  .pipe(gulp.dest('builds/development/js'))
});

env = process.env.NODE_ENV || 'development';

if (env==='development') {
outputDir = 'builds/development/';
sassStyle = 'expanded';
} else {
outputDir = 'builds/production/';
sassStyle = 'compressed';
}

gulp.task('sass', function () {
  return gulp.src('components/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('builds/development/css'));
});
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

