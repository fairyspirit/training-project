const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
	return gulp.src('./sass/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.stream());
}
function watch() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./sass/**/*.scss', style);
	gulp.watch('./*.html').on('change',browserSync.reload);
	gulp.watch('./js/**/*.js').on('change',browserSync.reload);
}

exports.style = style;
exports.watch = watch;