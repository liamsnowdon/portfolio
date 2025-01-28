---
posted_at: 2025-01-27T23:00:00.000Z
slug: caching-nitro-endpoints-in-nuxt
title: Caching Nitro endpoints in Nuxt
intro: There is a caching mechanism built into Nitro, the server engine of Nuxt, that might be a little less known because it's documentation is not currently in the Nuxt docs, they are only in the Nitro docs.
---

There is a caching mechanism built into Nitro, the server engine of Nuxt, that might be a little less known because it's documentation is not currently in the Nuxt docs, it's only in the Nitro docs. Caching Nuxt/Nitro event handlers is a great way to improve performance and speed on endpoints by storing the response of incoming requests in JSON files so that the same requests can be served a lot faster. This might typically be used on endpoints where the data doesn't change much or where an endpoint is slow due to a lot of computing so caching will speed it up if available.

It's super easy to do as well by replacing `defineEventHandler` on an endpoint with `defineCachedEventHandler`. It takes an additional parameter which defines the options for the handler. It has many options, but the main one that you need is `maxAge` which sets the maximum time that cache is valid, in seconds. If you have disabled auto-imports like me, you can import it from `nitropack/runtime`.


```ts [server/api/index.ts]
import { defineCachedEventHandler } from 'nitropack/runtime'

export default defineCachedEventHandler(async () => {
  // Some asynchronous logic
  await new Promise(resolve => setTimeout(resolve, 500))

  return {
    posted_at: '2025-01-27T23:00:00.000Z',
    title: 'Caching Nitro endpoints in Nuxt',
    slug: 'caching-nitro-endpoints-in-nuxt',
  }
}, { maxAge: 60 * 60 }) // 1 hour
```

This will do two important things:

1. Cache the response of the request in Nitro's cache system
2. Add the `cache-control` header with `max-age=3600`

You can see the cached response in Nitro when running the dev server by going into `.nuxt/cache/nitro/handlers`. If you hit the endpoint, you'll see a JSON file be created which will have the response body as well as some other response metadata. You'll also see the `cache-control` header. Nuxt/Nitro will now serve this cached JSON as the response until the cache expires in 1 hour.

<tip>
The Nuxt Devtools has a great way of testing the API endpoints. Open Nuxt Devtools, press Command + K, then search for "Server Routes".
</tip>

In the browser devtools, check the response headers of the request and you'll see the `cache-control` header with `max-age=3600`. This will tell the browser that it should cache the response as well and reuse it for subsequent requests until it expires. Try hitting the endpoint again and you'll see the browser doesn't hit the API at all, but instead retrieves it from disk cache. You can prove this on the server side by deleting the cached JSON files and hitting the API again. If the browser retrieves it from disk cache the API does recreate the JSON file again.
