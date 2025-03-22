<script setup lang="ts">
import { computed } from 'vue'
import { useSeoMeta } from '@unhead/vue'
import { useAsyncData, queryContent } from '#imports'
import Wrapper from '~/components/wrapper/Wrapper.vue'
import WrapperContent from '~/components/wrapper/WrapperContent.vue'
import PostGrid from '~/components/posts/PostGrid.vue'
import type { PostTileEntity } from '~/types'
import { getExperience } from '~/utils'

const experience = getExperience()

useSeoMeta({
  title: 'Posts - Liam Snowdon',
  ogTitle: 'Posts - Liam Snowdon',
  twitterTitle: 'Posts - Liam Snowdon',
  description: `I'm a frontend engineer with over ${experience} years of commercial experience in web development and a keen eye for detail.`,
  ogDescription: `I'm a frontend engineer with over ${experience} years of commercial experience in web development and a keen eye for detail.`,
  twitterDescription: `I'm a frontend engineer with over ${experience} years of commercial experience in web development and a keen eye for detail.`,
})

const { data } = await useAsyncData('posts', () => {
  return queryContent<PostTileEntity>('posts')
    .only(['title', 'posted_at', 'slug', 'intro', 'readingTime'])
    .sort({ posted_at: -1 })
    .find() as Promise<PostTileEntity[]>
})

const groupedPosts = computed(() => {
  return (data.value || []).reduce<{ year: number, posts: PostTileEntity[] }[]>((acc, item) => {
    const postYear = new Date(item.posted_at).getFullYear()
    const existingGroupIndex = acc.findIndex(group => group.year === postYear)

    if (existingGroupIndex === -1) {
      acc.push({
        year: postYear,
        posts: [item],
      })
    } else {
      acc[existingGroupIndex]!.posts.push(item)
    }

    return acc
  }, [])
})
</script>

<template>
  <Wrapper>
    <WrapperContent space="y-8">
      <h1 text="4xl md:6xl white center" font="bold">
        Posts
      </h1>

      <div space="y-12">
        <div v-for="group in groupedPosts" :key="group.year">
          <h2 text="3xl white" font="bold" m="b-8">
            {{ group.year }}
          </h2>
          <PostGrid :posts="group.posts" />
        </div>
      </div>
    </WrapperContent>
  </Wrapper>
</template>
