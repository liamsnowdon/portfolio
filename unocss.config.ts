import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetAttributify(),
    presetIcons({}),
  ],

  preflights: [{
    getCSS: () => `
      html {
        scroll-behavior: smooth
      }
    `,
  }],
})
