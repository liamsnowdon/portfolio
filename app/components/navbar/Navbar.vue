<template>
  <nav class="sticky top-0 z-40 border-b border-white/5 bg-[#08080c]/70 backdrop-blur-xl">
    <div class="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 md:px-8">
      <NuxtLink to="/" class="group flex items-center gap-3">
        <img
          src="/images/memoji.png"
          alt="Liam Snowdon Profile Picture"
          class="h-9 w-9 rounded-full bg-white/5 ring-1 ring-white/15 transition group-hover:ring-indigo-400/60"
        >
        <span class="hidden font-display font-semibold tracking-tight text-white md:inline">
          liam<span class="text-gradient">snowdon</span>
        </span>
      </NuxtLink>

      <div class="flex items-center gap-1 md:gap-2">
        <NuxtLink
          to="/#projects"
          class="hidden rounded-full px-3 py-2 text-sm text-neutral-400 transition hover:bg-white/5 hover:text-white sm:inline-flex"
        >
          Work
        </NuxtLink>
        <NuxtLink
          to="/challenges"
          class="rounded-full px-2 py-2 text-sm text-neutral-400 transition hover:bg-white/5 hover:text-white md:px-3"
        >
          Challenges
        </NuxtLink>
        <NuxtLink
          to="/posts"
          class="rounded-full px-2 py-2 text-sm text-neutral-400 transition hover:bg-white/5 hover:text-white md:px-3"
        >
          Posts
        </NuxtLink>

        <a
          href="#contact"
          class="ml-1 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-indigo-500/50 hover:brightness-110 md:ml-2 md:px-4"
        >
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
            <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Let's talk
        </a>
      </div>
    </div>
  </nav>
</template>
