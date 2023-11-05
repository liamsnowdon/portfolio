---
id: 6
posted_at: 2021-01-24T00:00:00.000Z
slug: using-the-7-1-pattern-for-better-sass-architecture
title: Using the 7-1 pattern for better Sass architecture
category: css
tags: ['sass']
intro: As with everything, keeping your Sass files organised is key for easy and efficient working. The 7-1 pattern can help with this.
---

Despite the pure joy I get when having to dive into a giant mess of a CSS file trying to find a specific set of styles for a component, I much prefer having everything split across multiple files like my JavaScript. This is very common to do in Sass with `@import` -ing Sass files into another. The 7-1 pattern is a common architecture pattern to use when splitting out Sass files into different directories. These are usually:

- abstracts
- base
- components
- layout
- pages
- themes
- vendors

## Abstracts

Sometimes called utilities instead, abstracts holds many of Sass' features like variables, mixins, functions, etc. They will usually not compile into anything in the output CSS but are used in the other Sass files like a button making use of a background-color variable called `$button-background: #1997c6`.

- `_variables.scss`
- `_mixins.scss`
- `_functions.scss`
- `_placeholders.scss`

## Base

Common styles that would be used across the whole app will be here, hence the name "base". General styles against tags like a reset or images that don't belong anywhere else would go here. The general idea for base styles is they could be used anywhere.

- `_.base.scss`
- `_helpers.scss`
- `_reset.scss`
- `_typography.scss`

## Components

This is where the majority of the files will be since the app should consist of a lot of small components/widgets, being as small as a single `<button>` tag. It's okay to have a large number of component files; it splits out your styles well and at the end of the day it's likely all compiled into a single CSS file.

- `_buttons.scss`
- `_cards.scss`
- `_form-input.scss`
- `_loaders.scss`
- `_overlays.scss`

## Layout

Elements that would be considered more of a page layout widget like a navigation bar or footer would be here. They may appear on every page like a boilerplate and is crucial for laying out the content of the page.

- `_header.scss`
- `_footer.scss`
- `_sidebar.scss`
- `_navigation.scss`
- `_grid.scss`

## Pages

Page-specific styles go in the pages directory, such as homepage, product page, search page, etc. You may decide to compile page-specific styles into separate stylesheets and load them on their appropriate pages to avoid the user loading unnecessary styles if there are a lot.

- `homepage.scss`
- `search.scss`
- `product.scss`
- `category.scss`

## Themes

Some sites may have different themes: GitHub for example (and many others) have a dark theme, which is implemented with CSS custom properties that get overridden by a data attribute or class, or even by using the `prefers-color-scheme` media feature.

- `_light.scss`
- `_dark.scss`

## Vendors

Any third-party libraries and packages used would have their styles placed here. As a general rule, these files should never be edited directly, and if possible imported directly from the package such as `node_modules`. If changes need to be set for design reasons, bug fixes, etc, then an additional directory called `vendors-extensions` should be created and those overrides should be placed in there.

###### vendors

- `_choices.scss`
- `_prism.scss`
- `_swiper.scss`

###### vendors-extensions

- `_swiper.scss`

## Main File

All the above directories' content will be imported into one main file. It's important to use the right order when importing to make sure the abstracts can be accessed properly and any cascading styles behave as expected. The final Sass file may look like this:

```scss [app.scss]
// Abstract
@import 'abstracts/variables';
@import 'abstracts/functions';
@import 'abstracts/mixins';

// Themes
@import 'themes/dark';
@import 'themes/light';

// Base
@import 'base/reset';
@import 'base/helpers';
@import 'base/base';
@import 'base/typography';

// Layout
@import 'layout/content';
@import 'layout/footer';
@import 'layout/header';
@import 'layout/grid';
@import 'layout/navigation';
@import 'layout/wrapper';

// Components
@import 'components/banner';
@import 'components/block';
@import 'components/breadcrumbs';
@import 'components/buttons';
@import 'components/card';
@import 'components/modals';
@import 'components/pod';
@import 'components/tabs';
@import 'components/tooltip';

// Pages
@import 'pages/homepage';
@import 'pages/post';

// Vendors
@import 'vendors/fontawesome';
@import 'vendors/prism';
@import 'vendors/swiper';

// Vendors Extensions
@import 'vendors-extensions/swiper';
```

## Conclusion

Splitting out the CSS across multiple files in an organised architecture makes it a lot easier to manage and find exactly what you're looking for. Each file is dedicated to its own thing rather than having a file contain a bunch of other styles too.
