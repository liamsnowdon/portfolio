<script setup lang="ts">
const { data: posts } = await useAsyncData('latest_posts', () => {
  return queryContent('posts')
    .only(['title', 'posted_at', 'slug', 'intro', 'readingTime'])
    .limit(4)
    .sort({ id: -1, $numeric: true })
    .find()
})
</script>

<template>
  <Wrapper>
    <WrapperContent>
      <div text="left md:center" m="b-8">
        <h2 text="3xl white" font="bold">
          Latest posts
        </h2>
      </div>

      <div grid="~ cols-1 md:cols-2 gap-4 md:gap-8" m="b-4 md:b-8">
        <Post v-for="post in posts" :key="post.name" :post="post" />
      </div>

      <div flex="~" justify="center">
        <Button to="/posts">
          View all
        </Button>
      </div>
    </WrapperContent>
  </Wrapper>
</template>
