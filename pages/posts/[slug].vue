<script setup lang="ts">
// const { data: post } = await useAsyncData('posts', () => {
//   return queryContent('posts')
//     .where({
//       slug: useRoute().params.slug,
//     })
//     .findOne()
// })
</script>

<template>
  <div>
    <ContentDoc>
      <template #default="{ doc }">
        <article>
          <h1 text="3xl white" font="bold">
            {{ doc.title }}
          </h1>
          <ContentRenderer :value="doc" space="y-4" />
        </article>
      </template>

      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
  </div>
</template>
