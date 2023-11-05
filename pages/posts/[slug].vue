<script setup lang="ts">
const { data: post } = await useAsyncData('post', () => {
  return queryContent('posts')
    .where({
      slug: useRoute().params.slug,
    })
    .findOne()
})

useHead({
  title: `${post.value?.title} - Liam Snowdon`,
  meta: [
    {
      name: 'description',
      content: post.value?.intro,
    },
    {
      name: 'og:title',
      content: `${post.value?.title} - Liam Snowdon`,
    },
    {
      name: 'og:description',
      content: post.value?.intro,
    },
    {
      name: 'og:type',
      content: 'article',
    },
    {
      name: 'article:published_time',
      content: post.value?.posted_at,
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:title',
      content: `${post.value?.title} - Liam Snowdon`,
    },
    {
      name: 'twitter:description',
      content: post.value?.intro,
    },
  ],
})
</script>

<template>
  <Wrapper>
    <WrapperContent>
      <NuxtLink to="/posts" class="text-indigo-500 hover:text-indigo-400" flex="inline" items="center" space="x-2" m="b-8">
        <span class="i-carbon-arrow-left" />
        <span>Back to posts</span>
      </NuxtLink>

      <ContentRenderer v-if="post" :value="post">
        <article>
          <div m="b-8">
            <h1 text="4xl md:6xl white" font="bold" m="b-4">
              {{ post.title }}
            </h1>
            <p>{{ post.readingTime.text }} • Posted on {{ $dayjs(post.posted_at).format('MMM DD, YYYY') }}</p>
          </div>
          <ContentRendererMarkdown :value="post" />
        </article>
      </ContentRenderer>

      <div
        v-else
        flex="~ col md:row"
        justify="center"
        items="center"
        text="center md:left"
        space="y-4 md:x-2 md:y-0"
      >
        <div flex="none">
          <img src="/images/not-found-memoji.png" alt="Shrugging Liam Snowdon Memoji" h="30 md:60" w="30 md:60">
        </div>

        <div space="y-4">
          <h2 text="3xl white" font="bold">
            Well this is awkward...
          </h2>
          <p>
            I couldn't find a post here, let's head <NuxtLink to="/posts" class="text-indigo-500 hover:text-indigo-400">
              back
            </NuxtLink>
          </p>
        </div>
      </div>
    </WrapperContent>
  </Wrapper>
</template>
