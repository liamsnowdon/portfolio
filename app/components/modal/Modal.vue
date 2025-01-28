<script setup lang="ts">
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

interface Props {
  isOpen: boolean
}

interface Emits {
  (event: 'close'): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>

<template>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog
      as="div"
      pos="fixed inset-0"
      z="10"
      overflow="y-auto"
      @close="$emit('close')"
    >
      <div
        flex="~"
        items="end"
        justify="center"
        min-h="screen"
        p="t-4 x-4 b-20 sm:0"
        text="center"
        block="sm:~"
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay pos="fixed inset-0" bg="neutral-900/70" transition="opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block" align="sm:middle" h="sm:screen" aria-hidden="true">&#8203;</span>

        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            pos="relative"
            inline="block"
            align="bottom sm:middle"
            bg="neutral-800"
            rounded="3xl"
            text="left"
            overflow="hidden"
            shadow="xl"
            transform="~"
            transition="all"
            m="sm:y-8"
            w="sm:full"
            :class="{
              'sm:max-w-screen-md': false,
              'sm:max-w-screen-lg': true,
              'sm:max-w-screen-xl': false,
            }"
          >
            <div bg="neutral-800" p="4 md:6">
              <div flex="~" items="start" justify="between" space="x-4">
                <div />

                <button
                  p="2"
                  bg="neutral-900/50"
                  text="hover:white"
                  rounded="full"
                  flex="~"
                  items="center"
                  justify="center"
                  @click="$emit('close')"
                >
                  <i class="i-carbon-close" text="3xl" />
                </button>
              </div>

              <div m="t-2 md:t-4">
                <slot name="content" />
              </div>
            </div>

            <div
              v-if="$slots.footer"
              bg="gray-50"
              p="x-4 y-3 sm:x-6"
              flex="sm:~"
              justify="sm:end"
              space="x-2"
            >
              <slot name="footer" />
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
