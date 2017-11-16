var gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	cleanCSS = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	projectError = require('gulp-util'),
	rename = require('gulp-rename'),
	watch = require('gulp-watch'),
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache'),
	gulpImport = require('gulp-html-import'),
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	spritesmith = require('gulp.spritesmith'),
	browserSync = require('browser-sync').create();

gulp.task('sass', function () {
	gulp.src('app/sass/app.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(cleanCSS())
		.pipe(rename('app.min.css'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('dist/css/'))
		.pipe(browserSync.stream());
});

/* gulp.task('cleanCSS', function () {
	gulp.src('app/css/app.css')
		.pipe(sourcemaps.init())
		.pipe(cleanCSS())
		.pipe(rename('app.min.css'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('dist/css'));
}); */










gulp.task('manage', function () {
	return gulp.src(['app/js/jquery-1.12.4.min.js', 'app/js/jquery-migrate-1.4.1.min.js', 'app/js/*.js'])
		.pipe(cache(uglify({ output: { comments: /^!/ } })))
		.pipe(concat('app.js'))
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('dist/js'))
		.on('error', projectError.log)
});

gulp.task('fonts', function () {
	gulp.src('app/fonts/*.*')
		.pipe(gulp.dest('dist/fonts'))
});

gulp.task('images', function () {
	return gulp.src(['app/images/**/*.+(png|jpg|gif|svg)', '!app/images/sprites/**/*'])
		.pipe(cache(imagemin([
			imagemin.gifsicle({ interlaced: true }),
			imagemin.jpegtran({ progressive: true, optimizationLevel: 5 }),
			imagemin.optipng({ optimizationLevel: 5 }),
			imagemin.svgo({ plugins: [{ removeViewBox: true }] })
		])))
		.pipe(gulp.dest('dist/images'))
});

gulp.task('sprite', function () {
	var spriteData = gulp.src('app/images/sprites/*.png').pipe(spritesmith({
		imgName: '../images/sprite.png',
		cssName: '_sprite.scss'
	}));
	spriteData.img.pipe(gulp.dest('dist/images'));
	spriteData.css.pipe(gulp.dest('app/sass/base/'));
});

gulp.task('import', function () {
	gulp.src('app/*.html')
		.pipe(gulpImport('app/temp/'))
		.pipe(gulp.dest('dist'));
});

gulp.task('browser-sync', function () {
	browserSync.init(["dist/css/*.css", "dist/js/*.js"], {
		server: {
			baseDir: "./dist"
		}
	});
});

gulp.task('watch', function () {
	gulp.watch(['app/sass/**/*.scss', 'app/css/*.css'], ['sass']);
	gulp.watch('app/js/*js', ['manage']);
	gulp.watch('app/fonts/*', ['fonts']);
	gulp.watch('app/images/**/*.+(png|jpg|gif|svg)', ['images', 'sprite']);
	gulp.watch(['app/temp/*.html', 'app/**/*.html'], ['import']);
	gulp.watch("dist/**/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'manage', 'fonts', 'images', 'import', 'browser-sync', 'sprite', 'watch']);
