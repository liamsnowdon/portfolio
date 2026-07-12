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

  theme: {
    colors: {
      midnite: '#48f359',
    },
    fontFamily: {
      display: '"Space Grotesk", ui-sans-serif, system-ui, sans-serif',
      sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
    },
  },

  shortcuts: {
    'text-gradient': 'bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent',
    'glass-card': 'bg-white/5 border border-white/10 backdrop-blur-md',
    'link-accent': 'text-indigo-400 hover:text-indigo-300 transition-colors',
  },

  preflights: [{
    getCSS: ({ theme }: { theme: any }) => `
      html, body {
        height: 100%;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        background-color: #08080c;
        color: ${theme.colors.neutral[400]};
        font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
        overflow-x: hidden;
      }

      ::selection {
        background-color: rgba(129, 140, 248, 0.4);
        color: #fff;
      }

      ::-webkit-scrollbar {
        width: 10px;
      }

      ::-webkit-scrollbar-track {
        background: #08080c;
      }

      ::-webkit-scrollbar-thumb {
        background: ${theme.colors.neutral[800]};
        border-radius: 8px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: ${theme.colors.neutral[700]};
      }

      .text-shimmer {
        background: linear-gradient(90deg, #818cf8, #e879f9, #22d3ee, #818cf8);
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: shimmer 6s linear infinite;
      }

      @keyframes shimmer {
        to {
          background-position: 200% center;
        }
      }

      @keyframes marquee {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }

      @keyframes aurora-drift {
        0%, 100% {
          transform: translate(0, 0) scale(1);
        }
        33% {
          transform: translate(5%, 8%) scale(1.1);
        }
        66% {
          transform: translate(-5%, -5%) scale(0.95);
        }
      }

      @keyframes float-y {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .text-shimmer,
        [class*="aurora"],
        [class*="marquee"] {
          animation: none !important;
        }
      }
    `,
  }],
})
