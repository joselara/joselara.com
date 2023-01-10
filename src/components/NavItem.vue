<script setup lang="ts">
defineProps<{
  name: string
  isActive: boolean
  url: string
}>()
</script>

<template>
  <li>
    <a :href="url" class="relative block px-3 py-2 transition" :class="isActive ? 'text-teal-500 dark:text-teal-400' : 'hover:text-teal-500 dark:hover:text-teal-400'">
      {{ name }}
      <span class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
    </a>
  </li>
</template>
