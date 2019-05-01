var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
var sassGlob = require('gulp-sass-glob');
var bs = require('browser-sync').create();

gulp.task("sass", function() {
    return gulp.src("scss/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(
            sass({
                outputStyle: 'expanded',
                sourceComments: 'map'
            })
            .on("error", sass.logError)
        )
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"))
        .pipe(bs.reload({stream: true}));
});

gulp.task("default", gulp.series("sass", function(){
    bs.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("scss/**/*.scss", gulp.series("sass"));
    gulp.watch("*.html").on('change', bs.reload);
}));