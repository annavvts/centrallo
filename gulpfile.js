"use strict";

var gulp = require("gulp");
var jshint = require("jshint");
var csslint = require("csslint");
var postcss = require("gulp-postcss");
var customMedia = require("postcss-custom-media")
var autoprefixer = require("autoprefixer");
var precss = require("precss");
var server = require("browser-sync").create();

gulp.task("jshint", function(){
  return gulp.src(paths.src.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"));
});

gulp.task("csslint", function(){
  return gulp.src(paths.src.css)
    .pipe(csslint())
    .pipe(csslint.reporter());
});

gulp.task("css", function() {
  var processors = [
    autoprefixer({ browsers: ["last 2 versions"] }),
    precss,
  ];
  return gulp.src("./postcss/*.css")
    .pipe(postcss(processors),customMedia())
    .pipe(gulp.dest("dest"))
    .pipe(server.stream());
});

gulp.task("serve", ["css"], function() {
  server.init({
    server: ".",
    notify: true,
    open: true,
    ui: false
  });

  gulp.watch("postcss/**/*.css", ["css"]);
  gulp.watch("*.html").on("change", server.reload);
});