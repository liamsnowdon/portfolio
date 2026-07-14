<template>
  <div class="pointer-events-none fixed inset-0 z--10 overflow-hidden" aria-hidden="true">
    <div class="background-grid absolute inset-0" />

    <div class="aurora aurora--indigo" />
    <div class="aurora aurora--fuchsia" />
    <div class="aurora aurora--cyan" />

    <div class="background-noise absolute inset-0 opacity-4" />
  </div>
</template>

<style scoped>
/*
 * The glow is baked into radial gradients rather than filter: blur() so the
 * drift animation stays compositor-only — large animated blur filters force
 * constant re-rasterisation and tank scroll performance.
 */
.aurora {
  position: absolute;
  border-radius: 9999px;
  will-change: transform;
  animation: aurora-drift 30s ease-in-out infinite;
}

.aurora--indigo {
  left: -20%;
  top: -30%;
  height: 80vh;
  width: 80vw;
  background: radial-gradient(closest-side, rgba(79, 70, 229, 0.18), transparent 70%);
}

.aurora--fuchsia {
  right: -25%;
  top: 0;
  height: 70vh;
  width: 70vw;
  background: radial-gradient(closest-side, rgba(192, 38, 211, 0.12), transparent 70%);
  animation-delay: -10s;
}

.aurora--cyan {
  bottom: -35%;
  left: 10%;
  height: 80vh;
  width: 80vw;
  background: radial-gradient(closest-side, rgba(6, 182, 212, 0.1), transparent 70%);
  animation-delay: -20s;
}

.background-grid {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 90% 70% at 50% 0%, black 10%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 90% 70% at 50% 0%, black 10%, transparent 75%);
}

.background-noise {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E");
}
</style>
