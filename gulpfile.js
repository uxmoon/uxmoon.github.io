var gulp       = require('gulp'),
  postcss      = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnext      = require('postcss-cssnext'),
  precss       = require('precss'),
  atImport     = require('postcss-import'),
  mqpacker     = require('css-mqpacker'),
  cssnano      = require('gulp-cssnano'),
  sourcemaps   = require('gulp-sourcemaps'),
  lost         = require('lost'),
  pxtorem      = require('postcss-pxtorem'),
  browserSync  = require('browser-sync'),
  reload       = browserSync.reload;

// Static server
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('css', function() {
  var processors = [
    autoprefixer,
    cssnext,
    precss,
    atImport,
    mqpacker,
    lost,
    pxtorem({
      prop_white_list: ['font-size', 'line-height', 'letter-spacing']
    }),
  ];
  return gulp.src('./sass/app.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'));
});

// Watch
gulp.task('watch', function() {

  // Watch .css files
  gulp.watch('sass/**/*.css', ['css', browserSync.reload]);
  // gulp.watch('./**/*.css', ['css', browserSync.reload]);

  // Watch any files in dist/, reload on change
  gulp.watch("js/**/*.js", browserSync.reload);

  // Watch any files in dist/, reload on change
  gulp.watch("*.html", browserSync.reload);

});

gulp.task('default', ['css', 'browser-sync', 'watch']);
