<script setup lang="ts">
defineProps<{
  name: string
  title: string
  location: string
  description: string
  start: string
  end: string
}>()
</script>

<template>
  <div class="grid gap-3">
    <div>
      <div class="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl">
        {{ name }}
      </div>
      <div class="text-xl font-semibold tracking-tight text-zinc-600 sm:text-2xl">
        {{ title }}
      </div>
    </div>
    <div class="text-sm sm:text-base">
      <div>
        {{ start }} &mdash; {{ end }}
      </div>
      <div>{{ location }}</div>
    </div>
    <p>{{ description }}</p>
  </div>
</template>
