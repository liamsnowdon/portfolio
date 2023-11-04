---
id: 2
posted_at: 2020-12-15T00:00:00.000Z
slug: handling-responsive-images
title: Handling responsive images
category: html
tags: ['responsive']
reading_time: 5
intro: Sometimes we want an image to look slightly different across devices or show a different image entirely.
---

It can be common to render different images in different situations, whether it is for retina screens or for different screen sizes. This can have a range of advantages:

- A different image may be created specifically for mobile devices which would look better than using the image being used on desktop. This is called **art direction**.
- Having multiple image formats allows you to make the most of a browser's support for image format. It's good to load the best format possible to take full advantage of its benefits. WEBP images for example support animation and has smaller file sizes than JPEGs and PNGs.
- Loading a mobile image on a mobile device instead of a desktop image will likely be smaller in file size which would lead to saving mobile data and faster loading times. There is no need to download a larger image for desktop if we're on a mobile.

## Image Srcset and Sizes

### Srcset

Adding a `srcset` attribute to an `<img>` tag allows you to provide a list of different sized versions of an image. Each image provided is paired with a **pixel density descriptor** or a **width descriptor**. This gives the browser information about when each image version should be shown so it knows which one from the list to render on the screen.

A **pixel density descriptor** refers to the pixel density of the device's display. With this it is possible to render a more detailed high-res version of the image for retina screens. It may look like this:

```html
<img
  src="business-cards.jpg"
  srcset="
   business-cards-2.jpg 2x,
   business-cards-4.jpg 4x
  "
  alt="Uncoated business cards"
>
```

A default, standard image should be declared in the `src` attribute as usual and the other versions should be listed in the `srcset`.

A **width descriptor** tells the browser the width of the image. If the image is 500px wide, as a version inside `srcset` it would look like `business-cards-500.jpg 500w`. Browsers will then try to decide on what's the best image to use based on this information and the current page layout, but what you want may not be exactly what happens. To give the browser a better idea of what image to use in this case, we can use the `sizes` attribute too.

### Sizes

The `sizes` attribute defines a list of media conditions along with the image from `srcset` to choose from. The browser will work its way through those media conditions until one is true and show the image paired with it. If none of the media conditions are true, it will use the default one.

```html
<img
  src="business-cards-1024.jpg"
  srcset="
    business-cards-480.jpg 480w,
    business-cards-768.jpg 768w
    business-cards-1024.jpg 1024w
  "
  sizes="
    (max-width: 600px) 480px,
    (max-width: 900px) 768px,
    1024px
  "
  alt="Uncoated business cards"
>
```

In the example above, three images are provided in `srcset` using **width descriptors**. The `sizes` attribute has two media conditions and the default image at 1024px. If we go through them, it is saying:

1. If the device width is less than 600px, it will use the 480px image, which is `business-cards-480.jpg` as described by the `480w` width descriptor.
2. If the device width is less than 900px, it will use the 768px image, which is `business-cards-768.jpg`.
3. Otherwise, just use the 1024px image which is `business-cards-1024.jpg`.

So looking at how we can combine `srcset` and sizes together, we can give the browser more information about which images to show depending on the device width.

### Browser Compatibility

Browser support for `<img src="" srcset="" sizes="">` is pretty good with the exception of IE.

<can-i-use feature="srcset"></can-i-use>

## `<picture>` Element

It's important to remember that using `<img src="" srcset="" sizes="">` is for serving different versions of the same image, and gives the browser control over what it thinks is the best image to render at any particular time. However it is common to want to be able to show completely different images depending on the device width for design reasons, stated as **art direction**** in the introduction of this article.

The `<picture>` element is meant exactly for this, and gives you way more control over what the browser does when rendering the images. Where using the previous method tells the browser to choose the most appropriate image to render based on the layout of the page as well as the viewport width, using the `<picture>` element will tell the browser exactly what image to render using a media condition.

```html
<picture>
  <source 
    srcset="business-cards-1024.jpg"
    media="(min-width: 1024px)"
  >
  <source 
    srcset="business-cards-768.jpg"
    media="(min-width: 768px)"
  >
  <img src="business-cards.jpg" alt="Uncoated business cards" />
</picture>
```

This already looks a lot simpler to understand than using `<img src="" srcset="" sizes="">`. The `<picture>` element is made up of `<source>` tags, similar to `<video>` and `<audio>` elements and uses `srcset` and `media` attributes to define the image used for that media condition. The browser will go through the `<source>` tags to find a media condition that is true and render that image in `srcset`. If none of them are true, it will use the `<img>` as a fallback image.

You might have noticed it uses srcset like the **Image Srcset and Sizes** section previously. This means we can use similar features in our `<picture>` element for the `<source srcset="">`.

```html
<picture>
  <source 
    srcset="
      business-cards-1024-4.jpg 4x
      business-cards-1024-2.jpg 2x
      business-cards-1024.jpg
    "
    media="(min-width: 1024px)"
  >
  <source 
    srcset="
      business-cards-768-4.jpg 4x
      business-cards-768-2.jpg 2x
      business-cards-768.jpg
      "
      media="(min-width: 768px)"
  >
  <img src="business-cards.jpg" alt="Uncoated business cards" />
</picture>
```

The example above uses pixel density descriptors in the `srcset` to render higher resolution versions of the image on displays with higher pixel density.

That handles our needs for having responsive images in a great way and gives us a lot of control over what the browser renders on the screen. But that's not all we can do with the `<picture>` element! Since the `media` attribute supports media conditions other than `max-width` and `min-width`, we can have different images being shown for a bunch of other conditions such as:

- Not showing animated images for users with `prefers-reduced-motion` accessibility preference.
- Showing a darker or lighter version of an image based on the `prefers-color-scheme` preference.
- Showing a lower res version of the image for users with the `prefers-reduced-data`.

Although `prefers-reduced-data` is in early draft in the W3 Media Queries Level 5 spec, it gives you an idea of the potential it can have.

### Browser Compatibility

Again, browser support for the `<picture>` element is great other than IE.

<can-i-use feature="picture"></can-i-use>

## Foundation's Interchange

If you're using a framework such as Foundation in your project, it may come with a method for handling this scenario. Foundation, for example, ships with [Interchange](https://get.foundation/sites/docs/interchange.html), which uses media queries to:

<blockquote>
  dynamically load responsive content that is appropriate for the user's device.
</blockquote>

It allows you to set what images to show on matching media queries. It works well and does exactly what you need for displaying different images across different devices. It does require installing Foundation itself though since it is a part of it. It runs off JavaScript and the media queries defined in your Sass.

## Conclusion

Out of the options discussed above, the best choice is probably the `<picture>` element as it gives you a lot more control and the browser will do exactly what you tell it, instead of making its own decisions about what image it thinks will be best to use. It's also a lot simpler to write than combining `srcset` and `sizes` together.
