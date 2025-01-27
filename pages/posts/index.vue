<script setup lang="ts">
import { computed } from 'vue'
import { useSeoMeta } from '@unhead/vue'
import { useAsyncData, queryContent } from '#imports'
import Wrapper from '~/components/wrapper/Wrapper.vue'
import WrapperContent from '~/components/wrapper/WrapperContent.vue'
import Post from '~/components/posts/Post.vue'
import type { PostTileEntity } from '~/types'

useSeoMeta({
  title: 'Posts - Liam Snowdon',
  ogTitle: 'Posts - Liam Snowdon',
  twitterTitle: 'Posts - Liam Snowdon',
})

const { data } = await useAsyncData('posts', () => {
  return queryContent<PostTileEntity>('posts')
    .only(['title', 'posted_at', 'slug', 'intro', 'readingTime'])
    .sort({ posted_at: -1 })
    .find() as Promise<PostTileEntity[]>
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
