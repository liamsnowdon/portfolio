<script setup lang="ts">
import type { PropType } from 'vue'
import Post from '~/components/posts/Post.vue'
import type { PostTileEntity } from '~/types'

defineProps({
  posts: {
    type: Array as PropType<PostTileEntity[]>,
    required: true,
  },
})
</script>

<template>
  <div grid="~ cols-1 md:cols-2 gap-4 md:gap-8">
    <Post v-for="post in posts" :key="post.title" :post="post" />
  </div>
</template>
