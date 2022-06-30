const gulp = require("gulp");
const serve = require("gulp-serve");

const { paths } = require("../paths");
const { default: build } = require("./build");

exports.default = gulp.series(build, serve(paths.build));
