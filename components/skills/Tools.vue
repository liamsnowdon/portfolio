<script setup lang="ts">
import { A11y, Autoplay, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/a11y'
import 'swiper/css/scrollbar'

const items = [
  { name: 'Nuxt.js', url: 'https://nuxtjs.org', icon: 'i-logos-nuxt-icon' },
  { name: 'Vue.js', url: 'https://vuejs.org', icon: 'i-logos-vue' },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org', icon: 'i-logos-typescript-icon' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com', icon: 'i-logos-tailwindcss-icon' },
  { name: 'UnoCSS', url: 'https://unocss.dev', icon: 'i-logos-unocss' },
  { name: 'Sass', url: 'https://sass-lang.com', icon: 'i-logos-sass' },
  { name: 'Vitest', url: 'https://vitest.dev/', icon: 'i-logos-vitest' },
  { name: 'Jest', url: 'https://jestjs.io', icon: 'i-logos-jest' },
  { name: 'Cypress', url: 'https://www.cypress.io/', icon: 'i-logos-cypress-icon' },
  { name: 'VSCode', url: 'https://code.visualstudio.com', icon: 'i-logos-visual-studio-code' },
  { name: 'Figma', url: 'https://www.figma.com', icon: 'i-logos-figma' },
  { name: 'Netlify', url: 'https://www.netlify.com', icon: 'i-logos-netlify-icon' },
  { name: 'Github', url: 'https://github.com/liamsnowdon', icon: 'i-logos-github-icon' },
]
</script>

<template>
  <Wrapper>
    <Content>
      <div text="left md:center" space="y-4" m="b-8">
        <h2 text="3xl white" font="bold">
          My Toolset
        </h2>

        <p text="lg neutral-400">
          These are the development tools I use day to day.
        </p>
      </div>

      <ClientOnly>
        <Swiper
          :modules="[A11y, Autoplay, Scrollbar]"
          :slides-per-view="2"
          :space-between="16"
          :breakpoints="{
            480: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
          }"
          :autoplay="{
            disableOnInteraction: false,
          }"
          :scrollbar="{
            horizontalClass: 'scrollbar-stack',
            dragClass: 'scrollbar-stack-drag',
            draggable: true,
            hide: false,
          }"
        >
          <SwiperSlide v-for="item in items" :key="item.name" aspect="1/1">
            <Tool :tool="item" />
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </Content>
  </Wrapper>
</template>
