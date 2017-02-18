/**
 * Created by cag on 2016/11/5.
 */
var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;
// 静态服务器
gulp.task("browser-sync", function () {
    browserSync.init({
        files: "./src/html/*.html,./src/css/*.css,./src/js/*.js,./src/*.*", // 监控的文件
        server: {
            baseDir: "./src" // 根路径。若根路径有index.html,就打开；没有的话，需要自己补充网址。
        },
        // browser: ["chrome", "firefox", "iexplore"], // 打开3个浏览器
        //browser: ["chrome"]
    })
});

gulp.task("default", ["browser-sync"]);