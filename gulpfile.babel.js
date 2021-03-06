import gulp from 'gulp';

import {
    serve as DEV_SERVE,
    css as DEV_CSS,
    injectAssets as DEV_INJECT,
    watchCss as DEV_WATCH_CSS
} from './tasks/development';

import {
    serve as DIST_SERVE,
    copyAndMoveFiles as DIST_COPY_FILES,
    css as DIST_CSS,
    js as DIST_JS,
    injectAssets as DIST_INJECT,
    createSitemap as DIST_CREATE_SITEMAP
} from './tasks/production';

// Development Tasks

export const devServe = DEV_SERVE;
export const devCss = DEV_CSS;
export const devInject = DEV_INJECT;
export const watchCss = DEV_WATCH_CSS;
export const watch = gulp.series(devCss, devInject, watchCss);


// Production Tasks

export const distServe = DIST_SERVE;
export const distCopyFiles = DIST_COPY_FILES;
export const distCss = DIST_CSS;
export const distJs = DIST_JS;
export const distInject = DIST_INJECT;
export const createSitemap = DIST_CREATE_SITEMAP;

export const dev = gulp.series(devCss, devInject);
export const dist = gulp.series(distCopyFiles, createSitemap, gulp.parallel(distCss, distJs), distInject);

export default dev;