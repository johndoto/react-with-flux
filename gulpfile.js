"use strict";

var gulp =          require("gulp");
var connect =       require("gulp-connect");        // runs a local dev server
var open =          require("gulp-open");           // opens a URL in a web browser
var concat =        require("gulp-concat");         // concatenates files together
var lint =          require("gulp-eslint");         // checks JS files for syntax issues

var browserify =    require("browserify");          // bundles JS
var reactify =      require("reactify");            // transforms React JSX to JS
var source =        require("vinyl-source-stream"); // use conventional text streams with Gulp


var config = {
    port: 3000,
    devBaseUrl: "http://localhost",
    paths: {
        html:       "./src/*.html",
        appJs:      "./src/main.js",
        watchJs:    "./src/**/*.js",
        images:     "./src/images/*",
        css: [
            "node_modules/bootstrap/dist/css/bootstrap.min.css",
            "node_modules/bootstrap/dist/css/bootstrap-theme.min.css"
        ],
        dist:   "./dist"
    }
};

// start a local development server
gulp.task("connect", function() {
    connect.server({
        root: ["dist"],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

// activates after the dev server runs
// opens the index.html homepage
gulp.task("open", ["connect"], function() {
    gulp.src("dist/index.html")
        .pipe(open({ uri: config.devBaseUrl + ":" + config.port + "/" }));
});

// move HTML from src to dist
gulp.task("html", function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

// concat and move vendor JS from modules to dist
gulp.task("vendorJs", function() {
    browserify()
        .require("react")
        .require("react-router")
        .require("flux")
        .require("lodash")
        .require("jquery")
        .require("bootstrap")
        .bundle()
        .on("error", console.error.bind(console))
        .pipe(source("vendor.js"))
        .pipe(gulp.dest(config.paths.dist + "/scripts"));
});

// compile and move app JS from src to dist
gulp.task("appJs", function() {
    browserify(config.paths.appJs)
        .external("react")
        .external("react-router")
        .external("flux")
        .external("lodash")
        .external("jquery")
        .external("bootstrap")
        .transform(reactify)
        .bundle()
        .on("error", console.error.bind(console))
        .pipe(source("app.js"))
        .pipe(gulp.dest(config.paths.dist + "/scripts"))
        .pipe(connect.reload());
});

// concat and move CSS from modules to dist
gulp.task("css", function() {
    gulp.src(config.paths.css)
        .pipe(concat("vendor.css"))
        .pipe(gulp.dest(config.paths.dist + "/css"));
});

// move images from src to dist
gulp.task("images", function() {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + "/images"))
        .pipe(connect.reload());

    // publish favicon
    gulp.src("./src/favicon.ico")
        .pipe(gulp.dest(config.paths.dist));
});

// check JS files for syntax issues and report errors
gulp.task("lint", function() {
    return gulp.src(config.paths.appJs)
               .pipe(lint({ config: "eslint.config.json" }))
               .pipe(lint.format());
});

// watch for file changes
gulp.task("watch", function() {
    gulp.watch(config.paths.html, ["html"]);
    gulp.watch(config.paths.watchJs, ["appJs", "lint"]);
    gulp.watch(config.paths.images, ["images"]);
});

// set what should happen when "gulp" command is run in console
gulp.task("default", ["html", "vendorJs", "appJs", "css", "images", "lint", "open", "watch"]);

