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
    'bg-indigo-400 text-white': props.variant === 'primary',
    'bg-white text-black': props.variant === 'secondary',
    'bg-[#ed40a9] text-white': props.variant === 'printed',
    'bg-blue-600 text-white': props.variant === 'widgeter',
    'bg-yellow-400 text-black': props.variant === 'bolt',
    'py-2 px-4 text-sm': props.size === 'small',
    'py-3 px-5 text-base': props.size === 'medium',
    'py-4 px-6 text-lg': props.size === 'large',
    'w-full': props.fullSize,
    'inline-flex justify-center rounded-xl font-semibold text-center': true,
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
