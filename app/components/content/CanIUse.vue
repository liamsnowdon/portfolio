<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps<{
  feature: string
}>()

const embed = ref<HTMLIFrameElement>()

function setIframeHeight (e: MessageEvent) {
  const data = e.data

  if (typeof data === 'string' && data.includes('ciu_embed')) {
    const [_, featureId, height] = data.split(':')

    if (props.feature === featureId) {
      const iframeHeight = Number(height) + 30
      embed.value!.height = `${iframeHeight}px`
    }
  }
}

onMounted(() => {
  window.addEventListener('message', setIframeHeight)
})

onBeforeUnmount(() => {
  window.removeEventListener('message', setIframeHeight)
})
</script>

<template>
  <iframe
    ref="embed"
    :src="`https://caniuse.bitsofco.de/embed/index.html?feat=${feature}&periods=future_1,current,past_1,past_2&accessible-colours=false&image-base=none`"
    frameborder="0"
    width="100%"
    height="400px"
  />
</template>
