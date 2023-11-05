---
id: 1
posted_at: 2020-12-08T00:00:00.000Z
slug: integrating-gulp-into-your-workflow
title: Integrating Gulp into your workflow
category: javascript
tags: ['workflow']
intro: A task runner will make performing those repetitive tasks a lot more efficient and lets you worry about the actual development.
---

A good development workflow will automatically manage all your assets for you including bundling, minifying, compiling and optimising. Sure you could do this manually, but running one command to do all this for you will save you a bunch of time. One particular tool, Gulp.js, is a great task runner for these purposes, and there are many plugins you can integrate into it to manage all your development needs. Common tasks include:

- Compiling Sass to CSS
- Running CSS through PostCSS
- Minifying CSS and JS
- Automatically adding browser prefixes for CSS properties
- Concatenating CSS and JS files together

Let's take a look at how we can create a basic Gulp workflow, but first we will need to install the gulp-cli globally so we can use the Gulp commands in the terminal.

```bash [Bash]
npm install -g gulp-cli
```

Nice! We're now ready to start the project.

## Preparing the project

First we need to initialise the project for packages, we will use NPM for this.

```bash [Bash]
npm init
```

This will take you through the process of setting up the project and allow you to install node packages. If you take a look inside the project, you will now see a file called `package.json`. This is where you will be saving all the development dependencies that Gulp will be using. We can now install Gulp locally.

```bash [Bash]
npm install --save-dev gulp
```

If you look inside `package.json` again you will see Gulp as a development dependency and its files will now be inside the node_modules folder that NPM creates. Gulp is now ready to be used!

## Creating the gulpfile

When we use the Gulp CLI, it will look for a file called `gulpfile.js` and then the tasks it exports. So, let's create this file in the same location as `package.json`. We can add a basic task just to see it working. You can copy the following into your gulpfile:

```js [gulpfile.js]
const gulp = require('gulp')

function test () {
  console.log('This is the test task')
}

exports.test = test
```

This is the basics of creating a gulp task and exporting it. Using the Gulp CLI, we can run that test task by running `gulp test`, have a go! You will notice there will be an error that the task didn't complete due to forgetting to signal async completion. You can ignore this for now, we will talk about this later. All you need to know for now is that gulp tasks are asynchronous, so you need to tell Gulp when a task has finished.

## Adding more dependencies

Let's install some more dependencies to deal with our assets:

```bash [Bash]
npm install --save-dev gulp-sass gulp-postcss cssnano css-mqpacker autoprefixer gulp-concat gulp-uglify
```

There are several plugins here so let's quickly go over what they do:

1. gulp-sass compiles our Sass to CSS
2. gulp-postcss runs the CSS through PostCSS plugins
3. cssnano minifies the CSS
4. css-mqpacker combines multiple media queries that are the same into one
5. autoprefixer automatically adds browser prefixes to CSS properties
6. gulp-concat concatenates JS files together into one
7. gulp-uglify minifies the JS

Go ahead and **require** these in the gulpfile like we did with `const gulp = require('gulp');`

```js [gulpfile.js]
const gulp = require('gulp')
const sass = require('sass')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const mqPacker = require('css-mqpacker')
const autoprefixer = require('autoprefixer')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
```

## CSS Task

Let's create our first real task, which will process our CSS. You can delete the test function and export for it that we wrote earlier.

```js [gulpfile.js]
const postcssPlugins = [
  autoprefixer({ cascade: false }),
  mqPacker(),
  cssnano()
]

function css () {
  return gulp.src('./assets/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(postcssPlugins))
    .pipe(gulp.dest('../assets/css'))
}

exports.css = css
```

The css gulp task does the following:

1. Gets the Sass file source by its path
2. Compiles the Sass to CSS using `gulp-sass`, logging an error message if it encounters an error.
3. Runs that CSS through the PostCSS plugins we have defined in an array
4. Outputs the final CSS file.

This task can now be run with `gulp css`. Make sure you've got a `styles.scss` file created already in that source location and try running that task.

## JS Task

That's the CSS done, now we need another task that does the JavaScript.

```js [gulpfile.js]
function createErrorHandler (name) {
  return function (err) {
    console.error(`Error from ${name} in task`, err.toString())
  }
}

function js () {
  return gulp.src('./assets/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify().on('error', createErrorHandler('uglify')))
    .pipe(gulp.dest('../assets/js'))
}

exports.js = js
```

The js task does the following:

1. Gets all JS files inside the JS folder
2. Concatenates them together into a singular `main.js` file
3. Minifies it with gulp-uglify, logging an error message if it encounters an error.
4. Outputs the final main.js file.

This task can now be run with `gulp js`.

## Watching files

At the moment, every time we make a change to a CSS or JS file, we would need to re-run the command again in order for it to take effect. This is where watchers come in. It will watch for changes in any of these files, and re-run the commands automatically. This is done using the `gulp.watch` method.

```js [gulpfile.js]
function watch () {
  gulp.watch('./assets/scss/**/*.scss', css)
  gulp.watch('./assets/js/*.js', js)
}

exports.watch = watch
```

Simple enough, right? We can now run `gulp watch` to let Gulp automatically run our CSS and JS tasks without having to worry about doing it ourselves.

## Running tasks in parallel and series

Gulp 4 introduced two really cool methods that brings a new way of running tasks together.

1. `gulp.parallel` will run all tasks together at the same time and finishes when all tasks inside it are done.
2. `gulp.series` will run tasks sequentially and so therefore finishes after the last task in the list is done.

This is a good opportunity to create an additional task that runs all three of our tasks together. Remove the `exports.watch = watch;` from the gulpfile and add the following export instead:

```js [gulpfile.js]
exports.watch = gulp.series(gulp.parallel(css, js), watch)
```

Now with a simple `gulp watch` command, it will run the css and js tasks in parallel (at the same time) and after that is done, it will run the watch task. `gulp.parallel` and `gulp.series` provides you with a lot more control over how tasks are run together.

## Signalling async completion

An important thing to remember is that, as of Gulp 4, synchronous tasks are no longer supported. This means you need to let Gulp know when a task has finished using one of the following methods:

1. Returning a stream - this is how we did the css and js tasks
2. Returning a promise
3. Returning an event emitter
4. Returning a child process
5. Returning an observable
6. Using an error-first callback

Gulp has examples of how to use each method which you can view [here](https://gulpjs.com/docs/en/getting-started/async-completion). If you get a "*Did you forget to signal async completion?* error from one of your tasks, none of the methods above have been used.
