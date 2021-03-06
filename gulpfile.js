var gulp = require('gulp');

var postcss = require('gulp-postcss');

var gulpscss = require('gulp-scss');

/**
 * スプライト作成
 */
gulp.task('sprite', () => {
  var spritesmith = require('gulp.spritesmith');
  
  let spriteData = gulp.src('./sprite/*.gif')
    .pipe(spritesmith({
      imgName: 'sprite.png',                        // スプライト画像
      cssName: '_sprite.scss',                      // 生成される CSS テンプレート
      imgPath: './public/assets/images/sprite.png', // 生成される CSS テンプレートに記載されるスプライト画像パス
      cssFormat: 'scss',                            // フォーマット拡張子
      cssVarMap: (sprite) => {
        sprite.name = "sprite-" + sprite.name;      // 生成される CSS テンプレートに変数の一覧を記述
      }
  }));
  
  // imgName で指定したスプライト画像の保存先
  spriteData.img.pipe(gulp.dest('./public/assets/images'));     
  
  // cssName で指定した CSS テンプレートの保存先
  return spriteData.css.pipe(gulp.dest('./sass'));                     
});
 

gulp.task('analyze-css', function () {
  var stylelint = require('stylelint');
  var reporter = require('postcss-reporter');

  return gulp.src('sass/application.scss')
  .pipe(postcss([
    stylelint()
    , reporter()
  ]));
});

gulp.task('scss', function(){
  gulp.src('./scss/**/*.scss')
    .pipe(gulpscss({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('build-css', function () {
  var cssnano = require('cssnano');
  var autoprefixer = require('autoprefixer');
  return gulp.src('sass/application.css')
    .pipe(postcss([
      autoprefixer()
      //cssnano()
    ]))
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', () =>{
  gulp.watch('sass/application.scss', ['analyze-css']);
});

gulp.task('default', ['analyze-css']);