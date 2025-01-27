<script setup lang="ts">
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
</script>

<template>
  <Wrapper>
    <WrapperContent>
      <NuxtLink
        to="/posts"
        class="text-indigo-500 hover:text-indigo-400"
        flex="inline"
        items="center"
        space="x-2"
        m="b-8"
      >
        <span class="i-carbon-arrow-left" />
        <span>Back to posts</span>
      </NuxtLink>

      <ContentDoc>
        <template #default="{ doc }">
          <article>
            <div m="b-8">
              <h1 text="4xl md:6xl white" font="bold" m="b-4">
                {{ doc.title }}
              </h1>
              <p>
                <template v-if="doc.readingTime">
                  {{ doc.readingTime.text }} •
                </template>Posted on {{ $dayjs(doc.posted_at).format('MMM DD, YYYY') }}
              </p>
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
              <h2 text="3xl white" font="bold">
                Well this is awkward...
              </h2>
              <p>
                I couldn't find a post here, let's head <NuxtLink to="/posts" class="text-indigo-500 hover:text-indigo-400">
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
