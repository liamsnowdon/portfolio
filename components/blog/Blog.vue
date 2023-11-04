<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () => {
  return queryContent('posts')
    .only(['title', 'posted_at', 'slug'])
    .limit(5)
    .find()
})
</script>

<template>
  <Wrapper>
    <Content>
      <div text="left md:center" space="y-4" m="b-8">
        <h2 text="3xl white" font="bold">
          Recent posts
        </h2>
      </div>

      <div max-w="screen-lg" m="x-auto">
        <Post v-for="post in posts" :key="post.name" :post="post" />
      </div>
    </Content>
  </Wrapper>
</template>
