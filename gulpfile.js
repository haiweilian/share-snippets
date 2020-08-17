const { series, src, dest, watch } = require('gulp')
const sass = require('gulp-sass')
sass.compiler = require('node-sass')

function scssTask() {
  return src('./scss/*.scss')
    .pipe(
      sass({
        outputStyle: 'expanded',
      })
    )
    .pipe(dest('./scss/__test__'))
}

function watchTask() {
  watch(['./scss/*.scss'], scssTask)
}

exports.default = series(scssTask, watchTask)
