<script setup lang="ts">
const year = new Date().getFullYear()

const socials = [
  { name: 'Linkedin', icon: 'i-carbon-logo-linkedin', url: 'https://www.linkedin.com/in/liam-snowdon' },
  { name: 'Github', icon: 'i-carbon-logo-github', url: 'https://github.com/liamsnowdon' },
]
</script>

<template>
  <footer p="y-8 x-4 md:y-12 md:x-8">
    <WrapperContent flex="~" items="center" justify="between">
      <span text="white sm">&copy; {{ year }} Liam Snowdon</span>

      <div flex="~" space="x-4">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.url"
          target="_blank"
          :class="social.icon"
          text="xl neutral-400 hover:white"
          :aria-label="social.name"
        />
      </div>
    </WrapperContent>
  </footer>
</template>
