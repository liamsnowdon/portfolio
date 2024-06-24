<script setup lang="ts">
useHead({
  title: 'Posts - Liam Snowdon',
})

const { data } = await useAsyncData('posts', () => {
  return queryContent('posts')
    .only(['title', 'posted_at', 'slug', 'intro', 'readingTime', 'category', 'tags'])
    .sort({ posted_at: -1 })
    .find()
})

const posts = computed(() => {
  return (data.value || [])
})
</script>

<template>
  <Wrapper>
    <WrapperContent space="y-8">
      <h1 text="4xl md:6xl white center" font="bold">
        Posts
      </h1>

      <div space="y-4 md:y-8">
        <Post v-for="post in posts" :key="post.title" :post="post" />
      </div>
    </WrapperContent>
  </Wrapper>
</template>
