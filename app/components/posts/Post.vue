<script setup lang="ts">
import type { PostTileEntity } from '~/types'

defineProps<{
  post: PostTileEntity
}>()
</script>

<template>
  <NuxtLink
    :to="`/posts/${post.slug}`"
    flex="~ col"
    bg="neutral-800 hover:neutral-700/50 focus:neutral-700/50"
    ring="focus:2 neutral-800 offset-neutral-700 offset-2"
    outline="none"
    rounded="2xl"
    p="4 md:6"
  >
    <div flex="1" m="b-6">
      <h3 text="2xl white" font="bold" m="b-2">
        {{ post.title }}
      </h3>

      <p>
        {{ post.intro }}
      </p>
    </div>

    <div flex="~" justify="between" space="x-4">
      <p v-if="post.readingTime" text="sm">
        {{ post.readingTime.text }}
      </p>
      <p text="sm">
        {{ $dayjs(post.posted_at).format('DD/MM/YYYY') }}
      </p>
    </div>
  </NuxtLink>
</template>
