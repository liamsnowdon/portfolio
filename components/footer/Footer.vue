<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer p="y-8 x-4 md:y-12 md:x-8">
    <Content flex="~" items="center" justify="between">
      <span text="white sm">&copy; {{ year }}   Liam Snowdon</span>
      <span class="i-logos-github-icon" />
    </Content>
  </footer>
</template>
