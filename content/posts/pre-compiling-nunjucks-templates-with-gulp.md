---
id: 4
posted_at: 2021-01-05T00:00:00.000Z
slug: pre-compiling-nunjucks-templates-with-gulp
title: Pre-compiling Nunjucks templates with Gulp
category: javascript
tags: ['workflow']
intro: Nunjucks is great for templating your HTML, but it's even better when that markup is pre-compiled at build time.
---

When your site is spanned across multiple pages and sections, odds are that a lot of your HTML will end up getting duplicated across files. Most commonly it will be your `<head>` tag, a navigation bar or slider, a footer, etc. This is where a templating engine will come in handy. There are many templating engines out there, some have advantages over the other so you want to find the right one for your needs. To name a few:

- EJS
- Handlebars
- Mustache
- Nunjucks
- ...and many more.

In this post I will be focusing on using Nunjucks and, more specifically, how to integrate it with Gulp for precompiling pages. Nunjucks files have the extension `.njk`, for example: `index.njk`.

To begin with, let's take a quick look at some of the main features Nunjucks offers.

## Features

### Template Inheritance

Nunjucks templates can inherit or **extend** from its parent template. This allows you to create boilerplates for your pages, whether that be the core markup with your metadata, stylesheets and scripts, or a particular page layout like a product page. This is done with two important tags:

1. block
2. extends

A parent template may look like this:

```twig
<!-- base.njk -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    
    <title>{% block pageTitle %}Page Title{% endblock %}</title>

    <link rel="stylesheet" href="/assets/css/styles.css">
  </head>
  <body>

    {% block content %}{% endblock %}

  </body>
</html>
```

You will see there are two blocks above: **pageTitle** and **content**. Blocks are sections that can be overridden by child templates. Let's see how that works with the **extends** tag.

```twig
<!-- product-listing.njk -->

{% extends "base.njk" %}

{% block pageTitle %}Browse our range of products{% endblock %}

{% block content %}
  <header class="l-header">
    <div class="l-header__content">
      <h1 class="l-header__heading">Our Products</h1>
    </div>
  </header>
{% endblock %}
```

The **extends** tag is used to tell Nunjucks what file to inherit from as its parent. The **block** tags are then used to inject that content where the blocks appear in the inherited template. Take a look at the output:

```html
<!-- product-listing.html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    
    <title>Browse our range of products</title>

    <link rel="stylesheet" href="/assets/css/styles.css">
  </head>
  <body>

    <header class="l-header">
      <div class="l-header__content">
        <h1 class="l-header__heading">Categories</h1>
      </div>
    </header>

  </body>
</html>
```

### Partials

One of the most popular features of templating engines is the ability to include partials into your templates. These are commonly headers, navigations, pods, footers, etc. This is done by using the **include** tag, like this:

```twig
{% include "partials/sticky-navigation.njk" %}
```

This would inject that partial template wherever it is used. Oftentimes though you will need to render a partial with some data, for example a product pod will have the product's name, image, description, etc. This is done by using macros.

### Macros

Macros can be thought of as partials that have access to the data that you pass it when it is called. It is called similarly to a standard function where you pass in the data as a parameter. Consider this macro:

```twig
<!-- product-macro.njk -->

{% macro pod(product) %}
  <div class="c-pod">
    <div class="c-pod__image c-pod__image--{{ product.alias }}"></div>
    <div class="c-pod__content">
      <h5 class="c-pod__title">{{ product.name }}</h4>
      <p class="c-pod__description">
        {{ product.description }}
      </p>
      
      <div class="c-pod__button-holder">
        <a class="c-button" href="/products/{{ product.alias }}">Shop now</a>
      </div>
    </div>
  </div>
{% endmacro %}
```

This product pod displays the product's image, name, description and a link to the product page. We can now use this macro in our templates. If it's used in a different file it will need to be imported using the **import** tag. It is then called like a standard function.

```twig
<!-- business-cards.njk -->

{% extends 'product-page.njk' %}

{% import 'macros/product-macro.njk' as productMacro %}

<!-- you can use the set tag to set a variable. You will notice the "| getById(8)" filter at the end. We will discuss this in the next section -->
{% set product = products | getById(8) %}

{% block productPod %}
  {{ productMacro.pod(product) }}
{% endblock %}
```

Looking inside the **productPod** block, it would render something like:

```html
<!-- business-cards.html -->

<div class="c-pod">
  <div class="c-pod__image c-pod__image--business-cards"></div>
  <div class="c-pod__content">
    <h5 class="c-pod__title">Business Cards</h4>
    <p class="c-pod__description">
      This is the business cards description.
    </p>
    
    <div class="c-pod__button-holder">
      <a class="c-button" href="/products/business-cards">Shop now</a>
    </div>
  </div>
</div>
```

You can see how powerful macros can be when rendering partials with custom data.

### Filters

Filters are another powerful feature of Nunjucks and allow you to manipulate data to JavaScript's limit. There are a number of built-in filters in Nunjucks but you are able to add custom filters for your particular needs. It uses the same syntax as filters from popular frameworks like Vue and Angular:

```twig
<!-- index.njk -->

<!-- built in filter for transforming string to lowercase -->
{{ product.name | lower }}

<!-- custom filter for getting an object from an array by its ID -->
{% set product = products | getById(8) %}
```

## Integrating Nunjucks with Gulp

Using Nunjucks in the browser means all the templating is done on the client side at runtime. With Gulp, we can build all the pages using templates, partials and macros at buildtime so all the HTML files are all ready for when a user visits the page. Note: we will be using Gulp 4 in the following code snippets, feel free to rewrite it in an older version if you prefer.

The Gulp plugin we will be using is **gulp-nunjucks-render**. Let's install it with NPM and add it to our gulpfile.

```bash
npm install gulp-nunjucks-render --save-dev
```

```js
const nunjucksRender = require('gulp-nunjucks-render')

function nunjucks () {
  // Gets .html and .njk files in pages folder
  return gulp.src('pages/**/*.+(html|njk)')
    // Renders template with nunjucks
    .pipe(nunjucksRender({
      path: ['templates']
    }))
    .pipe(gulp.dest('./'))
}

exports.nunjucks = nunjucks
```

Nothing special here with the function, it behaves like any other Gulp task.

1. Nunjucks files are sourced from the pages directory and looks for `.html` or `.njk` files (it will work for either)
2. Pipes it through `gulp-nunjucks-render` plugin and we specify the directory the templates are located (these are the partials, macros, boilerplates, etc).
3. The built HTML files are placed in the destination directory.

The difference between **pages** and **templates** is the built HTML files come from the **pages** nunjucks files, whereas the **templates** files are included in others.

### Injecting data into our pages and templates

We discussed macros earlier and how they accept data when rendering, but where does this data come from? With Gulp we can globally add data to all Nunjucks files. We can store this data in JSON files. Let's continue with the product theme and say we have the following JSON file:

```json
[
  {
    "id": 1,
    "name": "Business Cards",
    "alias": "business-cards",
    "description": "This is the business cards description."
  },
  {
    "id": 2,
    "name": "Postcards",
    "alias": "postcards",
    "description": "This is the postcards description."
  }
]
```

To get this data into the Nunjucks files, we can use the `manageEnv` property when piping through in the Gulp task. We will use `fs` to read the JSON file.

```js
const fs = require('node:fs')

function manageEnvironment (environment) {
  const products = JSON.parse(fs.readFileSync('products.json'))

  environment.addGlobal('data', {
    products
  })
}

function nunjucks () {
  // Gets .html and .njk files in pages folder
  return gulp.src('pages/**/*.+(html|njk)')
    // Renders template with nunjucks
    .pipe(nunjucksRender({
      path: ['templates'],
      manageEnv: manageEnvironment
    }))
    .pipe(gulp.dest('./'))
}
```

When in any Nunjucks file, including partials and macros, you now have access to the products under `data.products`.

### Adding custom filters

We can add custom filters inside this `manageEnv` property too. Instead of using the `addGlobal` method, `addFilter` is used.

```js
environment.addFilter('getById', (array, id) => {
  return array.find(item => item.id === id)
})
```

Now we can make use of that filter in Nunjucks tags.

```twig
<!-- this will return the business cards object from products.json -->
{% set product = data.products | getById(1) %}
```
