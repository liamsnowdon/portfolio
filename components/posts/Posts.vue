<script setup lang="ts">
import Wrapper from '../wrapper/Wrapper.vue'
import WrapperContent from '../wrapper/WrapperContent.vue'
import Button from '../button/Button.vue'
import PostGrid from './PostGrid.vue'
import { useAsyncData, queryContent } from '#imports'
import type { PostTileEntity } from '~/types'

const { data: posts } = await useAsyncData('latest_posts', () => {
  return queryContent<PostTileEntity>('posts')
    .only(['title', 'posted_at', 'slug', 'intro', 'readingTime'])
    .limit(4)
    .sort({ posted_at: -1 })
    .find() as Promise<PostTileEntity[]>
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

      <PostGrid v-if="posts" :posts="posts" m="b-4 md:b-8" />

      <div flex="~" justify="center">
        <Button to="/posts">
          View all
        </Button>
      </div>
    </WrapperContent>
  </Wrapper>
</template>
