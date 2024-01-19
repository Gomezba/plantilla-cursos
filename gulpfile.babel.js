// Constantes para el automatizador de tareas
import gulp from 'gulp'
import pug from 'gulp-pug'

gulp.task('pug', () => {
	return gulp
		.src('./dev/views/pages/*.pug')
		.pipe(
			pug({
				pretty: true,
			})
		)
		.pipe(gulp.dest('./public/views'))
})

gulp.task('indexPug', () => {
	return gulp
		.src('./dev/views/index/index.pug')
		.pipe(
			pug({
				pretty: true,
			})
		)
		.pipe(gulp.dest('./'))
})

gulp.task('default', () => {
	//PUG
	gulp.watch('./dev/**/*.pug', gulp.series('pug', 'indexPug'))
})
