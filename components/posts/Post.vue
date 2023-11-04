<script setup lang="ts">
import type { PostEntity } from '~~/types'

defineProps<{
  post: PostEntity
}>()
</script>

<template>
  <NuxtLink :to="`/posts/${post.slug}`" bg="neutral-800 hover:neutral-700/50" rounded="2xl" p="8">
    <h3 text="2xl white" font="bold" m="b-2">
      {{ post.title }}
    </h3>

    <p m="b-6">
      {{ post.intro }}
    </p>

    <div flex="~" justify="between" space="x-4">
      <p text="sm">
        {{ post.reading_time }} min read
      </p>
      <p text="sm">
        {{ $dayjs(post.posted_at).format('DD/MM/YYYY') }}
      </p>
    </div>
  </NuxtLink>
</template>
