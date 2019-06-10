var gulp 					= require('gulp'),
	inlineCss 				= require('gulp-inline-css');




gulp.task('watch', function(done) {

	gulp.watch([
		'code/**/*.html',

		'!code/result/**/*.html',
		], html );
});




gulp.task('default', gulp.series('watch'));




function html() {

	gulp.src('code/**/*.html')

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
}
