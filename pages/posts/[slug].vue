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
    <Content>
      <ContentDoc>
        <template #default="{ doc }">
          <article>
            <h1 text="4xl md:6xl white" font="bold" m="b-8">
              {{ doc.title }}
            </h1>
            <ContentRenderer :value="doc" space="y-4" />
          </article>
        </template>

        <template #not-found>
          <h1>Document not found</h1>
        </template>
      </ContentDoc>
    </Content>
  </Wrapper>
</template>
