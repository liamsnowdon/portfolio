<script lang="ts" setup>
const props = defineProps<{
  feature: string
}>()

const embed = ref<HTMLIFrameElement>()

function setIframeHeight (e: MessageEvent) {
  const data = e.data

  if (typeof data === 'string' && data.includes('ciu_embed')) {
    const featureID = data.split(':')[1]
    const height = data.split(':')[2]

    if (props.feature === featureID) {
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
