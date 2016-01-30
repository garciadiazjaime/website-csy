var gulp = require('gulp');
var gulpif = require('gulp-if');
var sprite = require('css-sprite').stream;

function task() {
	var folderName = ['general', 'home', 'ourteam', 'whatwedo', 'experience', 'contact'];
  // var folderName = ['ourteam'];
  for(var i=0, len=folderName.length; i<len; i++){
    gulp.src('./resources/sprites/' + folderName[i] +'/*.png')
    .pipe(sprite({
      name: '_' + folderName[i],
      cssPath: '/img/sprites/',
      style: '_' + folderName[i] + '-sprite.sass',
      processor: 'sass',
      orientation: 'binary-tree',
      prefix: 'sprite-' + folderName[i]
    }))
    .pipe(gulpif('*.png', gulp.dest('./public/img/sprites/'), gulp.dest('./compass_components/partials/sprites/')))  
  }
}

gulp.task('sprites', task);
