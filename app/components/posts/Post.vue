<script setup lang="ts">
import type { PostTileEntity } from '~/types'

defineProps<{
  post: PostTileEntity
}>()
</script>

<template>
  <NuxtLink
    :to="`/posts/${post.slug}`"
    class="group glass-card flex flex-col rounded-2xl p-6 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/8 focus:border-indigo-400/60 md:p-7"
  >
    <div class="mb-6 flex-1">
      <div class="mb-3 flex items-start justify-between gap-4">
        <h3 class="font-display text-xl font-bold tracking-tight text-white transition-colors group-hover:text-indigo-300 md:text-2xl">
          {{ post.title }}
        </h3>

        <span class="i-carbon-arrow-up-right mt-1 flex-none text-xl text-neutral-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-indigo-300" />
      </div>

      <p class="text-neutral-400">
        {{ post.intro }}
      </p>
    </div>

    <div class="flex items-center gap-3 text-sm text-neutral-500">
      <template v-if="post.readingTime">
        <span class="inline-flex items-center gap-1.5">
          <span class="i-carbon-time" />
          {{ post.readingTime.text }}
        </span>
        <span class="h-1 w-1 rounded-full bg-neutral-700" />
      </template>
      <span>{{ $dayjs(post.posted_at).format('MMM DD, YYYY') }}</span>
    </div>
  </NuxtLink>
</template>
