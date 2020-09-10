var gulp = require('gulp');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var header = require('gulp-header');

gulp.task('default', function() {

	// filename for the the output file
	const output_filename = 'styles.min.css';

	// destination directory for the output file
	const output_dest = './dist/css';

	// array of css files to be concatenated and minified
	const css_files = [
		'./docs/css/website.css'
	];

	return gulp.src(css_files)

		// minify CSS using cssnano
		.pipe(cssnano())

		// concatenate minified CSS into single file
		.pipe(concat(output_filename))

		// place file in the output destination directory
		.pipe(gulp.dest(output_dest));
});

gulp.task('build_dev', function() {

	// filename for the the output file
	const output_filename = 'styles.css';

	// destination directory for the output file
	const output_dest = './dist/css';

	// array of css files to be concatenated
	const css_files = [
		'./docs/css/website.css'
	];

	return gulp.src(css_files)

		// concatenate minified CSS into single file
		.pipe(concat(output_filename))

		// place file in the output destination directory
		.pipe(gulp.dest(output_dest));
});