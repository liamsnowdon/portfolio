<script setup lang="ts">
import Wrapper from '../wrapper/Wrapper.vue'
import WrapperContent from '../wrapper/WrapperContent.vue'
import Button from '../button/Button.vue'
import SectionHeading from '../section-heading/SectionHeading.vue'
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
      <SectionHeading number="04" eyebrow="Writing" centered>
        Latest posts
        <template #description>
          Notes, guides and thoughts from the frontend trenches.
        </template>
      </SectionHeading>

      <PostGrid v-if="posts" :posts="posts" m="b-8 md:b-12" />

      <div flex="~" justify="center">
        <Button to="/posts" variant="ghost" icon="i-carbon-arrow-right">
          View all posts
        </Button>
      </div>
    </WrapperContent>
  </Wrapper>
</template>
