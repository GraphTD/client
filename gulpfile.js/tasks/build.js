const { src, dest, series, parallel } = require("gulp");
const clean = require("gulp-clean");
const autoprefixer = require("gulp-autoprefixer");
const cleanCss = require("gulp-clean-css");
const esBuild = require("gulp-esbuild");

const paths = require("../paths").paths;

const clearDest = () => src(paths.build.root, { allowEmpty: true }).pipe(clean());

const buildStyles = () =>
    src(paths.css).pipe(autoprefixer()).pipe(cleanCss()).pipe(dest(paths.build.root));

const buildScripts = () =>
    src(paths.js)
        .pipe(
            esBuild({
                target: "es6",
                bundle: true,
                minify: true,
            }),
        )
        .pipe(dest(paths.build.root));

const copyHTML = () => src(paths.html).pipe(dest(paths.build.root));

const copyAssets = () => src(paths.svg).pipe(dest(paths.build.svg));

const build = series(clearDest, parallel(buildStyles, buildScripts, copyAssets, copyHTML));

exports.default = build;
