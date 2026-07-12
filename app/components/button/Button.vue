<script setup lang="ts">
import { computed, resolveComponent } from 'vue'

export type Variant = 'primary' | 'secondary' | 'ghost' | 'alpha-white' | 'alpha-black'
export type Size = 'xsmall' | 'small' | 'medium' | 'large'

interface Props {
  variant?: Variant
  size?: Size
  to?: string
  href?: string
  icon?: string
  fullWidth?: boolean
  iconOnly?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  fullWidth: false,
  iconOnly: false,
})

const classes = computed(() => {
  return {
    // Variants
    'bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 hover:brightness-110 ring-indigo-500 ring-offset-indigo-900 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/50': props.variant === 'primary',
    'bg-white hover:bg-neutral-200 ring-white ring-offset-neutral-900 text-black': props.variant === 'secondary',
    'bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 backdrop-blur ring-neutral-800 ring-offset-neutral-900 text-white': props.variant === 'ghost',
    'bg-white/30 hover:bg-white/40 ring-white ring-offset-neutral-900 text-white backdrop-filter backdrop-blur-2': props.variant === 'alpha-white',
    'bg-black/30 hover:bg-black/40 ring-black ring-offset-neutral-900 text-white backdrop-filter backdrop-blur-2': props.variant === 'alpha-black',

    // Sizes
    'py-1.5 px-3 h-8 text-sm leading-5': props.size === 'xsmall',
    'py-2.5 px-4 h-10 text-sm leading-5': props.size === 'small',
    'py-3 px-5 h-11 text-sm leading-5': props.size === 'medium',
    'py-3 px-6 h-12 text-base leading-6': props.size === 'large',

    // Other
    'w-full': props.fullWidth,
    'p-0!': props.iconOnly,
    'transition-all inline-flex justify-center items-center rounded-full font-semibold text-center outline-none focus:ring-2 ring-offset-2 space-x-1': true,
  }
})

const component = computed(() => {
  if (props.to) {
    return resolveComponent('NuxtLink')
  }

  if (props.href) {
    return 'a'
  }

  return 'button'
})
</script>

<template>
  <component
    :is="component"
    :class="classes"
    :to="to"
    :href="href"
    :style="{
      aspectRatio: iconOnly && '1 / 1',
    }"
  >
    <i
      v-if="icon"
      :class="icon"
      :h="size === 'xsmall' ? '4' : '5.5'"
      :w="size === 'xsmall' ? '4' : '5.5'"
    />

    <span
      v-if="$slots.default"
      flex="inline"
      items="center"
      :space="!iconOnly ? 'x-1' : null"
      :p="size !== 'xsmall' && icon ? 'x-1' : null"
    >
      <slot />
    </span>
  </component>
</template>
