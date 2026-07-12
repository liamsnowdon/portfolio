<template>
  <div class="pointer-events-none fixed inset-0 z--10 overflow-hidden" aria-hidden="true">
    <div class="background-grid absolute inset-0" />

    <div class="aurora-blob left--10% top--20% h-50vh w-50vw bg-indigo-600/25" />
    <div class="aurora-blob right--15% top-10% h-45vh w-45vw bg-fuchsia-600/15" style="animation-delay: -8s" />
    <div class="aurora-blob bottom--25% left-20% h-50vh w-50vw bg-cyan-500/10" style="animation-delay: -16s" />

    <div class="background-noise absolute inset-0 opacity-4" />
  </div>
</template>

<style scoped>
.aurora-blob {
  position: absolute;
  border-radius: 9999px;
  filter: blur(120px);
  animation: aurora-drift 24s ease-in-out infinite;
  will-change: transform;
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
