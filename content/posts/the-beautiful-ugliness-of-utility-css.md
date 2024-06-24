---
posted_at: 2023-11-05T00:00:00.000Z
slug: the-beautiful-ugliness-of-utility-css
title: The Beautiful Ugliness of Utility CSS
intro: In 2021, I started looking for a new frontend role. When it came to CSS, my background was a standard Sass pre-processor setup for CSS for work and personal projects. My go-to would be the 7-1 architecture pattern.
---

In 2021, I started looking for a new frontend role. When it came to CSS, my background was a standard Sass pre-processor setup for CSS for work and personal projects. My go-to would be the 7-1 architecture pattern. While it did the job, there were problems with it.

The biggest issue was the huge amount of CSS rules you could end up shipping. Think about how many times you write `display: flex` in a project; this could easily end up in the hundreds depending on the size of the codebase. There are some tools you can use to optimise the CSS you ship to production: minimising the stylesheet like you do with JavaScript, grouping media queries, and purging unused CSS rules; PostCSS helps a huge deal with this. These only apply to production for the most part, it still left a bit of a sour taste in my mouth from a developer experience point of view.

The role I landed at used Nuxt and TypeScript, with Tailwind CSS. I had never worked with a utlity-first CSS framework before; the closest I had come to one is having a `_utility.scss` file which contained rules that I would regularly use like `ml-4`, `p-6`, `d-block`, `p-relative`, etc. At first, I had the view I feel most people have before using one, **it makes the HTML messy**, at least compared to having a single class on an element like you normally would. Another argument I get from people when I tell them how great utility-first CSS frameworks are **"it's just inline styles"**, and I'll admit, I thought the same before I started using them.

Sure, some basic utility classes can be seen as that, let's take a simple text-blue-500 class, one of the default colour classes from Tailwind, for example. All that will do is set the text colour to blue, but let's take a closer look at what is generated in the CSS.

```css [tailwind.css]
.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}
```

Not only can this be combined with an opacity, such as `text-blue-500/50` to apply 50% opacity to the text, it also uses the value defined in the Tailwind config. This means that if we ever want to change the value of this colour, we can change it in the config and everywhere the class is used, the colour will use the new value, but you can do this with Sass variables or CSS custom properties so that's nothing new.

They do however get really powerful when used with "variants". Variants allow you to style elements based on pseudo-classes, like :hover and :disabled, and media queries. For example, you can create a box that has different padding across breakpoints which changes colour on hover like this:

```html [index.html]
<div class="p-4 md:p-8 lg:p-12 bg-blue-200 hover:bg-blue-400"></div>
```

Variants makes it **super fast to build components**. You don't need to worry about manually writing out media queries every time you want to build responsive components, and as usual the breakpoints can be completely customised in the Tailwind config.

Naturally though, some elements will contain quite a long list of classes. A typical button component might look something like this:

```html [index.html]
<button class="inline-flex items-center justify-center space-x-2 h-10 px-5 text-base text-blue-100 bg-blue-600 hover:bg-blue-700 focus:ring-blue-600 transition-colors duration-150 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none">
  Explore
</button>
```

Yep, that's 20 classes on there. It's messy and **can be hard to find a particular class** if you want to update its styles. While writing the component at first may have been fast because it's using utility classes, it makes maintenance harder.

## Attributify Mode

Windi CSS, another Utility CSS framework, introduced a way of writing Utility CSS called "Attributify Mode". Where normally you would apply styles as a long list of (probably unordered/unorganised) list of classes, Attributify Mode allows you to style elements based on attributes. If we take the button component above, we can rewrite it with attributes like:

```html [index.html]
<button
  flex="inline"
  align="items-center"
  justify="center"
  space="x-2"
  h="10"
  p="x-5"
  text="base blue-100"
  bg="blue-600 hover:blue-700"
  ring="focus:blue-600 focus:2 focus:offset-2"
  transition="colors duration-150"
  border="rounded-lg"
  outline="focus:none"
  opacity="disabled:60"
  pointer="disabled:none"
>
  Explore
</button>
```

By grouping styles under attributes, it makes it a lot easier to maintain and understand what styles are being applied to the element. Windi CSS was initially an experiment to see what could be done to improve the compilation time and hot reload speeds of apps using Tailwind. It worked by scanning files and generating utilites on demand to be able to provide faster load times and HMR in development. It later helped inspire the JIT mode that was introduced to Tailwind not long after.

While Windi CSS has been laid to rest, Uno CSS rose from the ashes to provide even faster performance, boasting 5x faster speed than Windi CSS and Tailwind JIT. It provides awesome features such as attributify mode and pure CSS icons. This is what I use now and it makes it a joy to work with CSS again.

## Conclusion

I've been using utility-first CSS, whether it be Tailwind CSS or Windi CSS, for about almost 3 years now and I can't imagine not using it at this point. Sure, it has its cons, but the benefits I get from using it far outweighs them compared to other solutions. I'm **building components faster than ever**, need to set up **a very minimal configuration** and it **works with JavaScript frameworks like Vue really well**. I'm also only shipping CSS that I'm actually using, and since each class is one CSS property, they are reused across the application leaving the stylesheet in production as small as possible.

I've written only a handful of actual CSS since I adopted using it, and I'm all the better for it.
