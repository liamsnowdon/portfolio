<script setup lang="ts">
type Variant = 'primary' | 'secondary' | 'printed' | 'widgeter' | 'bolt'
type Size = 'small' | 'medium' | 'large'

interface Props {
  variant?: Variant
  size?: Size
  to?: 'string'
  href?: string
  fullSize?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  fullSize: false,
})

const classes = computed(() => {
  return {
    'bg-indigo-400 hover:bg-indigo-500 ring-indigo-400 ring-offset-indigo-900  text-white': props.variant === 'primary',
    'bg-white hover:bg-neutral-200 ring-white ring-offset-neutral-900 text-black': props.variant === 'secondary',
    'bg-[#ed40a9] hover:bg-[#eb5cc1] ring-[#ed40a9] ring-offset-white text-white': props.variant === 'printed',
    'bg-blue-600 hover:bg-blue-500 ring-blue-600 text-white': props.variant === 'widgeter',
    'bg-yellow-400 hover:bg-yellow-500 ring-yellow-400 text-black': props.variant === 'bolt',
    'py-2 px-4 text-sm': props.size === 'small',
    'py-3 px-5 text-base': props.size === 'medium',
    'py-4 px-6 text-lg': props.size === 'large',
    'w-full': props.fullSize,
    'transition-colors inline-flex justify-center rounded-xl font-semibold text-center outline-none focus:ring-2 ring-offset-2': true,
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
  >
    <slot />
  </component>
</template>
