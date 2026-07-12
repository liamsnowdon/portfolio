<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useSeoMeta } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { useAsyncData, queryContent } from '#imports'
import Wrapper from '~/components/wrapper/Wrapper.vue'
import WrapperContent from '~/components/wrapper/WrapperContent.vue'
import { ContentDoc, ContentRenderer } from '#components'

const slug = useRoute().params.slug

const { data: post } = await useAsyncData(`post-${slug}`, () => {
  return queryContent('posts')
    .where({
      slug,
    })
    .findOne()
})

useSeoMeta({
  title: `${post.value?.title} - Liam Snowdon`,
  description: post.value?.intro,
  ogType: 'article',
  articlePublishedTime: post.value?.posted_at,
  ogDescription: post.value?.intro,
  twitterTitle: `${post.value?.title} - Liam Snowdon`,
  twitterDescription: post.value?.intro,
})

const readingProgress = ref(0)

function onScroll () {
  const element = document.documentElement
  const scrollable = element.scrollHeight - element.clientHeight
  readingProgress.value = scrollable > 0 ? Math.min(element.scrollTop / scrollable, 1) : 0
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <Wrapper>
    <div
      class="fixed left-0 top-0 z-50 h-0.75 w-full origin-left bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400"
      :style="{ transform: `scaleX(${readingProgress})` }"
    />

    <WrapperContent max-w="screen-md">
      <NuxtLink
        to="/posts"
        class="group mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 backdrop-blur transition hover:border-indigo-400/40 hover:text-white"
      >
        <span class="i-carbon-arrow-left transition-transform group-hover:-translate-x-0.5" />
        <span>Back to posts</span>
      </NuxtLink>

      <ContentDoc>
        <template #default="{ doc }">
          <article>
            <div class="mb-12">
              <h1 class="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                {{ doc.title }}
              </h1>

              <div class="flex flex-wrap items-center gap-3 text-sm text-neutral-400">
                <span v-if="doc.readingTime" class="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  <span class="i-carbon-time" />
                  {{ doc.readingTime.text }}
                </span>
                <span class="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  <span class="i-carbon-calendar" />
                  {{ $dayjs(doc.posted_at).format('MMM DD, YYYY') }}
                </span>
              </div>

              <div class="mt-10 h-px w-full bg-gradient-to-r from-indigo-400/40 via-white/10 to-transparent" />
            </div>

            <ContentRenderer :value="doc" />
          </article>
        </template>

        <template #not-found>
          <div
            flex="~ col md:row"
            justify="center"
            items="center"
            text="center md:left"
            space="y-4 md:x-2 md:y-0"
          >
            <div flex="none">
              <img src="/images/not-found-memoji.png" alt="Shrugging Liam Snowdon Memoji" h="30 md:60" w="30 md:60">
            </div>

            <div space="y-4">
              <h2 class="font-display text-3xl font-bold tracking-tight text-white">
                Well this is awkward...
              </h2>
              <p>
                I couldn't find a post here, let's head <NuxtLink to="/posts" class="link-accent underline decoration-indigo-400/40 underline-offset-4">
                  back
                </NuxtLink>
              </p>
            </div>
          </div>
        </template>
      </ContentDoc>
    </WrapperContent>
  </Wrapper>
</template>
