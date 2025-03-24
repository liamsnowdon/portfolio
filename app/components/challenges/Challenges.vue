<script setup lang="ts">
import { A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/a11y'
import Challenge from '../challenge/Challenge.vue'
import { challenges } from '~/constants'
import { ClientOnly } from '#components'
</script>

<template>
  <div text="center" space="y-4" m="b-8">
    <p text="sm neutral-400">
      ...and plenty more <NuxtLink to="/challenges" class="text-indigo-500 hover:text-indigo-400">coding challenges!</NuxtLink>
    </p>
  </div>

  <ClientOnly>
    <Swiper
      :modules="[A11y, Autoplay]"
      :loop="true"
      :free-mode="{
        enabled: true,
        momentum: false,
      }"
      :slides-per-view="1"
      :breakpoints="{
        480: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2.5,
        },
      }"
      :grab-cursor="true"
      :space-between="20"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
      }"
      :speed="7000"
    >
      <SwiperSlide v-for="challenge in challenges" :key="challenge.slug" h="auto!">
        <Challenge :challenge="challenge" />
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>

<style>
.swiper-free-mode .swiper-wrapper {
  transition-timing-function : linear !important;
}
</style>
