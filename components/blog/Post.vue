<script setup lang="ts">
import type { PostEntity } from '~~/types'

defineProps<{
  post: PostEntity
}>()
</script>

<template>
  <NuxtLink :to="`/posts/${post.slug}`" flex="~" justify="between" bg="neutral-800 hover:neutral-700/50" rounded="2xl" p="8">
    <h3 text="2xl white" font="bold">
      {{ post.title }}
    </h3>
    <p text="lg">
      {{ $dayjs(post.posted_at).format('DD/MM/YYYY') }}
    </p>
  </NuxtLink>
</template>
