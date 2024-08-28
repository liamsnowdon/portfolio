<script setup lang="ts">
const steps = [
  {
    title: 'Get in touch',
    description: 'We discuss what requirements your website needs. I make notes and take them away to come up with ideas and design if needed.',
    image: '/images/memoji-phone.png',
  },
  {
    title: 'Quote given',
    description: 'I\'ll give you a quote for how much it will cost and how long it will take.',
    image: '/images/memoji-thinking.png',
  },
  {
    title: 'Development begins',
    description: 'I begin work on your website, building it to your requirements. I will keep in touch with regular updates and make any adjustments you need.',
    image: '/images/memoji.png',
  },
  {
    title: 'Website handed over',
    description: 'Once you are happy with the website, I will hand over all the files. If you need help with deploying it to your domain, I can offer this.',
    image: '/images/memoji-celebrate.png',
  },
]
</script>

<template>
  <Wrapper>
    <WrapperContent max-w="screen-lg">
      <h2 text="3xl white" font="bold">
        How it works
      </h2>

      <div>
        <div v-for="step in steps" :key="step.title" grid="~ cols-2">
          <div>
            <img :src="step.image" loading="lazy" :alt="step.title">
          </div>
          <div>
            <h3 text="2xl white" font="bold">
              {{ step.title }}
            </h3>
            <p text="lg neutral-400">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </WrapperContent>
  </Wrapper>
</template>
