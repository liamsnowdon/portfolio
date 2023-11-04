<script setup lang="ts">
const { data: post } = await useAsyncData('posts', () => {
  return queryContent('posts')
    .where({
      slug: useRoute().params.slug,
    })
    .findOne()
})
</script>

<template>
  <div>
    <h1 text="4xl white" font="bold">
      {{ post.name }}
    </h1>

    <ContentRenderer :value="post" space="y-4" />
  </div>
</template>
