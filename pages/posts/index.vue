<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () => {
  return queryContent('posts')
    .only(['title', 'posted_at', 'slug', 'intro', 'reading_time'])
    .sort({ id: -1, $numeric: true })
    .find()
})
</script>

<template>
  <Wrapper>
    <Content space="y-8">
      <div text="left md:center" space="y-4">
        <h1 text="4xl md:6xl white" font="bold">
          Posts
        </h1>
      </div>

      <div grid="~ cols-2 gap-8">
        <Post v-for="post in posts" :key="post.name" :post="post" />
      </div>
    </Content>
  </Wrapper>
</template>
