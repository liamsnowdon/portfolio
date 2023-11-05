<script setup lang="ts">
interface SelectOption {
  label: string
  value: string
}

const { data } = await useAsyncData('posts', () => {
  return queryContent('posts')
    .only(['title', 'posted_at', 'slug', 'intro', 'readingTime', 'category', 'tags'])
    .sort({ id: -1, $numeric: true })
    .find()
})

const category = ref('')
const categoryOptions: SelectOption[] = [
  { label: 'Categories', value: '' },
  { label: 'HTML', value: 'html' },
  { label: 'CSS', value: 'css' },
  { label: 'JavaScript', value: 'javascript' },
]

const tag = ref('')
const tagOptions: SelectOption[] = [
  { label: 'Tags', value: '' },
  { label: 'Responsive', value: 'responsive' },
  { label: 'Workflow', value: 'workflow' },
  { label: 'Sass', value: 'sass' },
]

const posts = computed(() => {
  return (data.value || [])
    .filter(post => !category.value || post.category === category.value)
    .filter(post => !tag.value || post.tags.includes(tag.value))
})

function resetFilters () {
  tag.value = ''
  category.value = ''
}
</script>

<template>
  <Wrapper>
    <WrapperContent space="y-8">
      <h1 text="4xl md:6xl white center" font="bold">
        Posts
      </h1>

      <div flex="~ col-reverse md:row" items="md:center">
        <div flex="~ 1" justify="between" m="md:r-4">
          <div>
            <p v-if="posts">
              Showing {{ posts.length }} {{ posts.length === 1 ? 'post' : 'posts' }}
            </p>
          </div>

          <button
            v-if="category || tag"
            type="button"
            text="indigo-500 hover:indigo-400 sm"
            font="light"
            @click="resetFilters"
          >
            Reset filters
          </button>
        </div>

        <div flex="~" space="x-4" m="b-4 md:b-0">
          <InputSelect id="category" v-model="category" :options="categoryOptions" flex="1" />
          <InputSelect id="tag" v-model="tag" :options="tagOptions" flex="1" />
        </div>
      </div>

      <div v-if="posts.length" space="y-4 md:y-8">
        <Post v-for="post in posts" :key="post.name" :post="post" />
      </div>

      <div
        v-else
        flex="~ col md:row"
        justify="center"
        items="center"
        text="center md:left"
        space="y-4 md:x-12 md:y-0"
      >
        <div flex="none">
          <img src="/images/shrug-memoji.png" alt="Shrugging Liam Snowdon Memoji" h="30 md:60" w="30 md:60">
        </div>

        <div space="y-4">
          <h2 text="3xl white" font="bold">
            No posts matching your filters
          </h2>
          <p>
            Try changing your selections or <button type="button" text="indigo-500 hover:indigo-400" font="light" @click="resetFilters">
              resetting
            </button>.
          </p>
        </div>
      </div>
    </WrapperContent>
  </Wrapper>
</template>
