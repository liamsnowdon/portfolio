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
      pos="fixed top-0 bottom-0 left-0"
      w="screen"
      z="50"
      overflow="y-auto"
      @close="$emit('close')"
    >
      <!-- w-screen (100vw) on the Dialog includes the scrollbar gutter, so the
           panel doesn't re-center when the scroll lock releases mid-leave-transition -->
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
          <DialogOverlay pos="fixed inset-0" bg="black/75" transition="opacity" />
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
            text="left"
            overflow="hidden"
            rounded="3xl"
            transform="~"
            transition="all"
            m="sm:y-8"
            w="sm:full"
            class="border border-white/10 bg-[#0b0b13] shadow-2xl shadow-indigo-500/10 sm:max-w-screen-lg"
          >
            <button
              class="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition hover:border-indigo-400/40 hover:text-white"
              aria-label="Close modal"
              @click="$emit('close')"
            >
              <i class="i-carbon-close" text="2xl" />
            </button>

            <div p="5 md:8">
              <slot name="content" />
            </div>

            <div
              v-if="$slots.footer"
              class="border-t border-white/10 bg-white/5"
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
