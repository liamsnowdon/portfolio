import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      // General
      'space-before-function-paren': ['error', 'always'],
      'curly': ['error', 'all'],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],

      // Typescript
      '@typescript-eslint/prefer-ts-expect-error': 'off',
      '@typescript-eslint/no-explicit-any': 'off',

      // Stylelistic
      '@stylistic/space-before-function-paren': ['error', 'always'],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],

      // Vue
      'vue/no-v-html': 'off',
      'vue/no-multiple-template-root': 'off',
      'vue/max-attributes-per-line': ['warn', {
        singleline: {
          max: 4,
        },
        multiline: {
          max: 1,
        },
      }],
      'vue/multi-word-component-names': 'off',
      'vue/no-undef-components': ['error', {
        ignorePatterns: [
          'NuxtLoadingIndicator',
          'NuxtRouteAnnouncer',
          'NuxtLayout',
          'NuxtPage',
          'NuxtLink',
        ],
      }],
    },
  },
)
