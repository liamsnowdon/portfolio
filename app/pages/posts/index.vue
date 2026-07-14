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
    <WrapperContent>
      <div class="mb-14 text-center md:mb-20">
        <p class="mb-4 flex items-center justify-center gap-3">
          <span class="h-px w-10 bg-gradient-to-r from-transparent to-indigo-400/60" />
          <span class="text-xs uppercase tracking-[0.3em] text-neutral-500">The blog</span>
          <span class="h-px w-10 bg-gradient-to-l from-transparent to-indigo-400/60" />
        </p>

        <h1 class="mb-4 font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
          Posts<span class="text-shimmer">.</span>
        </h1>

        <p class="mx-auto max-w-xl text-lg text-neutral-400">
          Notes, guides and thoughts from the frontend trenches.
        </p>
      </div>

      <div space="y-16">
        <section v-for="group in groupedPosts" :key="group.year">
          <div class="mb-8 flex items-center gap-4">
            <h2 class="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              {{ group.year }}
            </h2>
            <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-400">
              {{ group.posts.length }} {{ group.posts.length === 1 ? 'post' : 'posts' }}
            </span>
            <span class="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
          </div>

          <PostGrid :posts="group.posts" />
        </section>
      </div>
    </WrapperContent>
  </Wrapper>
</template>
