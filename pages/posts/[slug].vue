<script setup lang="ts">
// const { data: post } = await useAsyncData('posts', () => {
//   return queryContent('posts')
//     .where({
//       slug: useRoute().params.slug,
//     })
//     .findOne()
// })

useHead({
  titleTemplate: '%s - Liam Snowdon',
})
</script>

<template>
  <Wrapper>
    <WrapperContent>
      <NuxtLink to="/posts" class="text-indigo-500 hover:text-indigo-400" flex="inline" items="center" space="x-2" m="b-8">
        <span class="i-carbon-arrow-left" />
        <span>Back to posts</span>
      </NuxtLink>

      <ContentDoc>
        <template #default="{ doc: post }">
          <article>
            <div m="b-8">
              <h1 text="4xl md:6xl white" font="bold" m="b-4">
                {{ post.title }}
              </h1>
              <p>{{ post.readingTime.text }} • Posted on {{ $dayjs(post.posted_at).format('MMM DD, YYYY') }}</p>
            </div>
            <ContentRenderer :value="post" space="y-4" />
          </article>
        </template>

        <template #not-found>
          <h1>Document not found</h1>
        </template>
      </ContentDoc>
    </WrapperContent>
  </Wrapper>
</template>
