---
posted_at: 2025-01-28T20:00:00.000Z
slug: optimising-and-resizing-images-with-nuxt-image-and-netlify-image-cdn
title: Optimising and resizing images with Nuxt Image and Netlify Image CDN
intro: I play a lot of games... and it turns out I spam the screenshot button a LOT. I collect a lot of screenshots from all the games I play so I wanted someplace to showcase them.
---

I play a lot of games... and it turns out I spam the screenshot button a LOT. I collect a lot of screenshots from all the games I play so I wanted someplace to showcase them. I like to download gaming wallpapers for my PC (I'm rocking a Master Chief from Halo wallpaper right now) so making a website was perfect for all my screenshots.

I'd been wanting to play with the Nuxt Image module and an image transformer to resize and crop images, which would be perfect for making different sized wallpapers; for desktop, mobile, etc. So I started building [screenshottedit](https://screenshottedit.com). It uses Nuxt Image and the Netlify Image CDN to render optimised and resized images in a library of video game wallpapers, providing different resolution images for different devices.

[Nuxt Image](https://image.nuxt.com) is a Nuxt module with "Plug-and-play image optimization for Nuxt apps". It lets you "resize and transform your images using built-in optimizer or your favorite images CDN."

## NuxtImg component
It has a Vue component that's a drop-replacement for the `<img>` tag with props to define the size(s) of the image. It has over 30 different providers, including the built in IPX by the unjs team. I host `screenshottedit` on Netlify so using the Netlify Image CDN as the provider with Nuxt Image worked well.

Following the installation instructions, the module is registered to the app like any Nuxt Module.

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
  ]
})
```

<tip>The default provider is IPX, but if you're building your app directly on Netlify, it will automatically set the provider to Netlify Image CDN. You can manually set the provider through the module configuration.</tip>

Since it's a drop-replacement for the `<img>` tag, just replace any instance with the `<NuxtImg>` component. It is auto-imported by the module, but if you have disabled auto-imports, you can manually import it from `#components`.

```vue [WallpaperTile.vue]
<script setup lang="ts">
import type { PropType } from 'vue'
import type { WallpaperTile } from '~/types/entities'
import { NuxtImg } from '#components'

defineProps({
  wallpaper: {
    type: Object as PropType<WallpaperTile>,
    required: true,
  },
})
</script>

<template>
  <NuxtImg
    :src="`/images/games/${wallpaper.game.slug}/wallpapers/${wallpaper.filename}`"
    :alt="wallpaper.name"
    sizes="735px"
    loading="lazy"
  />
</template>
```

Using Nuxt Image with sizes is a great way to make sure you serve optimised images that are sized appropriately for the device or container. It automatically generates a new optimised and resized image based on the `src` and `sizes` props. There's no need to serve 2560px x 1440px images when it's only being rendered at 1/4 the size. This will keep file sizes lower and decrease the time to load.

From Netlify Image CDN:

> After an image is transformed, the result is uniquely cached on our edge and future requests for the same transformation will serve the cached asset. We also cache the source image so that future transformations don’t have to download it again.

## useImage composable

There is also a `useImage` composable that returns a helper function to generate optimized image URLs. It allows you to generate these URLs outside of using a component, e.g. downloading the optimised image on click. On screenshottedit, I use this to resize and crop wallpapers to generate mobile versions too.

```vue [WallpaperResolution.vue]
<script setup lang="ts">
import type { PropType } from 'vue'
import type { WallpaperPage } from '~/types/entities'
import { useImage } from '#imports'

const props = defineProps({
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  wallpaper: {
    type: Object as PropType<WallpaperPage>,
    required: true,
  },
})

const url = `/images/games/${props.wallpaper.game.slug}/wallpapers/${props.wallpaper.filename}`
const img = useImage()

function download () {
  // Generates a new url for the optimised image
  const href = img(url, { 
    width: props.width,
    height: props.height,
    fit: 'cover' 
  }, { 
    modifiers: { 
      position: 'center' 
    } 
  })

  const a = document.createElement('a')
  a.href = href
  a.download = 'download'
  a.style.display = 'none'
  
  // Download image
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
</script>

<template>
  <button @click="download">Download</button>
</template>
```

## Extra caching of generated images with TOML file

Even though Netlify will cache the image on the edge to be faster, the browser will still keep fetching the image as it is. You can tell the browser to cache the generated images by updating the `__headers` file or `netlify.toml` file, with the `/source-images/*` path like below:

```toml [netlify.toml]
[[headers]]
  for = "/source-images/*"
  [headers.values]
    Cache-Control = "public, max-age=604800, must-revalidate"
```

This will add the `cache-control` header to all these images generated by the Netlify Image CDN, telling the browser to cache and retrieve future requests to the urls from disk until it expires after 7 days (`max-age` is in seconds).
