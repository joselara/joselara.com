<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Jose Lara: From Code to Company - Software & Startup Expertise',
  meta: [
    { name: 'description', content: 'Seasoned software engineer with a flair for entrepreneurship. Discover a portfolio that showcases a blend of technical prowess & visionary leadership.' },
    { property: 'og:image', content: '/og.svg' },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
