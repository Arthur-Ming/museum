
/* let project_folder = require("path").basename(__dirname); */
let project_folder = "dist";
let source_folder = "#src";
let prettyHtml = require('gulp-pretty-html');

let fs = require('fs');

let path = {
   build: {
      html: project_folder + "/",
      css: project_folder + "/css/",
      js: project_folder + "/js/",
      img: project_folder + "/img/",
      fonts: project_folder + "/fonts/",
      tours: project_folder + "/tours/",
      video: project_folder + "/video/",
   },
   src: {
      /*  html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"], */
      html: source_folder + "/index.html",
      css: source_folder + "/scss/style.scss",
      js: source_folder + "/js/app.js",
      img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
      fonts: source_folder + "/fonts/*.ttf",
      tours: source_folder + "/tours/*.html",
      video: source_folder + "/video/*.mp4",
   },
   watch: {
      html: source_folder + "/**/*.html",
      css: source_folder + "/scss/**/*.scss",
      js: source_folder + "/js/**/*.js",
      img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
      tours: source_folder + "/tours/*.html",
      video: source_folder + "/video/*.*",
   },
   clean: "./" + project_folder + "/"
}

let { src, dest } = require('gulp'),
   gulp = require('gulp'),
   browsersync = require('browser-sync').create(),
   fileinclude = require('gulp-file-include'),
   del = require('del'),
   scss = require('gulp-sass'),
   autoprefixer = require("gulp-autoprefixer"),
   group_media = require("gulp-group-css-media-queries"),
   clean_css = require("gulp-clean-css"),
   rename = require("gulp-rename"),
   uglify = require("gulp-uglify-es").default,
   imagemin = require("gulp-imagemin"),
   webp = require('gulp-webp'),
   webphtml = require('gulp-webp-html'),
   webp_css = require("gulp-webp-css"),
   svgSprite = require('gulp-svg-sprite'),
   ttf2woff = require('gulp-ttf2woff'),
   fonter = require('gulp-fonter');



function browserSync() {
   browsersync.init({
      server: {
         baseDir: "./" + project_folder + "/"
      },
      port: 3000,
      notify: false
   });
};

function html() {
   return src(path.src.html)
      .pipe(fileinclude())
      .pipe(webphtml())
      .pipe(dest(path.build.html))
      .pipe(browsersync.stream());
};
function tours() {
   return src(path.src.tours)
      .pipe(fileinclude())
      .pipe(webphtml())
      .pipe(dest(path.build.tours))
      .pipe(browsersync.stream());
};
function video() {
   return src(path.src.video)

      .pipe(dest(path.build.video))

}

function css() {
   return src(path.src.css)
      .pipe(
         scss({
            outputStyle: "expanded"
         })
      )
      .pipe(
         group_media()
      )
      .pipe(
         autoprefixer({
            overrideBrowserslist: ["last 5 versions"],
            cascade: true
         })
      )
      .pipe(webp_css())
      .pipe(dest(path.build.css))
      .pipe(clean_css())
      .pipe(
         rename({
            extname: ".min.css"
         })
      )
      .pipe(dest(path.build.css))
      .pipe(browsersync.stream())
};
function js() {
   return src(path.src.js)
      .pipe(fileinclude())
      .pipe(dest(path.build.js))
      .pipe(
         uglify()
      )
      .pipe(
         rename({
            extname: ".min.js"
         })
      )
      .pipe(dest(path.build.js))
      .pipe(browsersync.stream());
};
function images() {
   return src(path.src.img)
      .pipe(
         webp({
            quality: 70
         })
      )
      .pipe(dest(path.build.img))
      .pipe(src(path.src.img))
      .pipe(
         imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 3 // 0 to 7
         })
      )
      .pipe(dest(path.build.img))
      .pipe(browsersync.stream());
};

function fonts() {
   return src(path.src.fonts)
      .pipe(ttf2woff())
      .pipe(dest(path.build.fonts));

};
const ghPages = require('gulp-gh-pages');
gulp.task('deploy', function () {
   return gulp.src('./dist/**/*')
      .pipe(ghPages());
});

gulp.task('otf2ttf', function () {
   return src([source_folder + '/fonts/*.otf'])
      .pipe(fonter({
         formats: ['ttf']
      }))
      .pipe(dest(source_folder + '/fonts/'));
});

gulp.task('svgSprite', function () {
   return gulp.src([source_folder + '/iconsprite/*.svg'])
      .pipe(svgSprite({
         mode: {
            stack: {
               sprite: "../icons/icons.svg",  //sprite file name
               example: true
            }
         },
      }
      ))
      .pipe(dest(path.build.img))
});

/* gulp.task('pages', function () {
   return gulp.src(path.src.html)
       .pipe(prettyHtml({
         indent_size: 2,
         indent_char: ' ',
         unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br']
     }))
       .pipe(gulp.dest('dist'));
}); */

function fontsStyle(params) {
   let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
   if (file_content == '') {
      fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
      return fs.readdir(path.build.fonts, function (err, items) {
         if (items) {
            let c_fontname;
            for (var i = 0; i < items.length; i++) {
               let fontname = items[i].split('.');
               fontname = fontname[0];
               if (c_fontname != fontname) {
                  fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
               }
               c_fontname = fontname;
            }
         }
      })
   }
};

function cb() {

};

function watchFiles() {
   gulp.watch([path.watch.html], html);
   gulp.watch([path.watch.css], css);
   gulp.watch([path.watch.js], js);
   gulp.watch([path.watch.img], images);
};

function clean() {
   return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts, tours, video), fontsStyle);
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.tours = tours;
exports.video = video;
exports.build = build;
exports.watch = watch;
exports.default = watch;