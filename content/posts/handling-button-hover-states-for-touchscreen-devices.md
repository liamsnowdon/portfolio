---
id: 3
posted_at: 2020-12-22T00:00:00.000Z
slug: handling-button-hover-states-for-touchscreen-devices
title: Handling button hover states for touchscreen devices
category: css
tags: ['responsive']
intro: On mobile devices hover states tend to stick unlike desktop. The workaround is to use a special media query.
---

On mobile and touchscreen devices, when an element with a `:hover` pseudo-class is pressed the hover state styles will persist even after the pointing device has been released. This might not be noticeable in many cases if a button takes you to another page, however if not, the issue will arise. This can be solved with using a **hover media query**.

The W3 spec defines it as the following:

<blockquote>
  The hover media feature is used to query the user's ability to hover over elements on the page with the primary pointing device. If a device has multiple pointing devices, the hover media feature must reflect the characteristics of the "primary" pointing device, as determined by the user agent.
</blockquote>

The value of the media query is either **none** or **hover**. Let's take a look at how it works:

```scss
/* _buttons.scss */

.button {
  background-color: #1997c6;
  text-decoration: none;

  &:hover {
    // Only apply hover styles on devices that support hover
    @media (hover: hover) {
      background-color: darken(#1997c6, 10%)
    }
  }
}
```

In the example above, on any device that supports hovering over elements will darken the background colour. That's pretty much it!

## Browser Compatibility

Browser support for `@media (hover: hover)` is pretty good nowadays.

<can-i-use feature="css-media-interaction"></can-i-use>

Although, there is one problem you may have which is IE if you need to support it. There's a workaround for it though, it just involves using a reset.

```scss
/* _buttons.scss */

.button {
  background-color: #1997c6;
  text-decoration: none;

  &:hover {
    // Hover states are done as normal so it works in IE
    background-color: darken(#1997c6, 10%);

    // Reset hover states here for devices that don't support hover
    @media (hover: none) {
      background-color: #1997c6;
    }
  }
}
```

## Conclusion

This will solve those issues with buttons persisting their hover styles on mobile. There are a few other interaction media features: "**pointer**", "**any-pointer**" and "**any-hover**". They're worth a read on the [W3 spec](https://www.w3.org/TR/mediaqueries-4/#any-input).
