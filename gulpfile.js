var gulp 					= require('gulp'),
	inlineCss 				= require('gulp-inline-css');




gulp.task('watch', function() {

	gulp.watch( 'code/*.html', gulp.parallel('html') );
});




gulp.task('default', gulp.series('watch'));




gulp.task('html', function() {
	return gulp.src('code/*.html')

		.pipe(
			inlineCss({
				applyWidthAttributes: true,
				applyTableAttributes: true,
				removeHtmlSelectors: true
			})
		)

		.pipe(
			gulp.dest('code/result')
		);
});
