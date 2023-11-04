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
    <ContentRenderer :value="post">
      <template #default>
        <h1 text="4xl white" font="bold">
          {{ post.name }}
        </h1>

        <ContentRendererMarkdown :value="post" space="y-4" />
      </template>

      <template #empty>
        <p>No post found.</p>
      </template>
    </ContentRenderer>
  </div>
</template>
