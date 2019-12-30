var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefix   = require('gulp-autoprefixer');
var browserSync  = require('browser-sync').create();
var imagemin     = require('gulp-imagemin');
var uglify       = require('gulp-uglify');
var reload      = browserSync.reload;
var pump         = require('pump');
const child      = require('child_process');
const gutil      = require('gulp-util');
const shell = require('gulp-shell')

// Uglify js
gulp.task('compressjs', function (cb) {
  console.log('Start compressjs');
  pump([
        gulp.src('_srcassets/js/*.js'),
        uglify(),
        gulp.dest('assets/js')
    ],
    cb
  );
  console.log('End compressjs');
});

// Imagemin
gulp.task('imagemin', function() {
  gulp.src('_srcassets/img/**/*')
    .pipe(imagemin([
     imagemin.svgo({plugins: [{removeViewBox: false}]})
    ], {
     verbose: true
    }))
    .pipe(gulp.dest('assets/img'));
});


// Optimize icons
gulp.task('ico', function() {
  gulp.src('_srcassets/icons/*.svg')
    .pipe(imagemin([
     imagemin.svgo({plugins: [
       {removeViewBox: false},
       {removeAttrs: {attrs:['fill', 'stroke', 'style']}},
       {removeStyleElement: true},
       {removeUselessDefs: true}
     ]})
    ], {
     verbose: true
    }))
    .pipe(gulp.dest('_includes/icons'));
});

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['serve',
    '--config',
    '_config.yml,_config_dev.yml',
    '--watch',
    '--drafts',
    '--trace',
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

// scss
gulp.task('sass', function() {
  return gulp.src('_sass/**/*.scss')
  //outputStyle options nested, expanded, compact, compressed
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefix({browsers: ['last 5 versions', '> 0%'], cascade: false}))
    .pipe(gulp.dest('_site/assets'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

// browserSync
gulp.task('browserSync', function() {
  browserSync.init({
    files: ['_site' + '/**/*.html'],
    port: 4000,
    open: false,// open http://127.0.0.1:4000
    server: {
      baseDir: '_site'
    },
  });
});

gulp.task('watch', function () {
  gulp.watch(['_srcassets/js/*.js'], ['compressjs']);
});


gulp.task('dev', ['watch', 'compressjs', 'sass', 'jekyll', 'browserSync']);

gulp.task('serve', shell.task('bundle exec jekyll serve'));

gulp.task('build', shell.task('bundle exec jekyll build'));
