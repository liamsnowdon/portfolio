<template>
  <ul flex="~ row" min-w="0" class="dot-spacer">
    <slot />
  </ul>
</template>

<style>
.dot-spacer > * {
  position: relative;
  flex-shrink: 0;
}
.dot-spacer > :not(:first-child):before {
  content: "\00a0·\00a0"; /* \00a0 is a space */
  display: inline-block;
  color: currentColor;
}
</style>
