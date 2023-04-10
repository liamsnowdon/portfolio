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

  shortcuts: {
    'scrollbar-stack': 'relative! top-auto! right-auto! bottom-auto! left-auto! mt-6 max-w-30 mx-auto bg-neutral-800!',
    'scrollbar-stack-drag': 'h-full w-full relative left-0 top-0 rounded-[10px] bg-indigo-500! ',
  },

  preflights: [{
    getCSS: () => `
      html, body {
        height: 100%;
      }

      html {
        scroll-behavior: smooth;
      }
    `,
  }],
})
