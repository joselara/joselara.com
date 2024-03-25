<script setup lang="ts">
defineProps<{
  name: string
  // hidden: boolean
  title: string
  location: string
  description?: string
  start: string
  end: string
  bullets?: string[]
}>()
</script>

<template>
  <div class="sm:flex gap-10 w-full">
    <div class="text-sm text-zinc-500 mt-1 tracking-tight">
        {{ start }} &mdash; {{ end }}
    </div>
    <div class="flex-1">
        <div class="text-xl font-semibold tracking-tight text-zinc-800 sm:text-xl mb-2">
          {{ title }} at {{ name }}
        </div>
      <div class="text-zinc-500">
        <p v-if="description">
          {{ description }}
        </p>
        <ul v-if="bullets" role="list" class="list-disc pl-4 -ml-4 list-none">
          <li v-for="(bullet, index) in bullets" :key="index" class="mb-2.5 tracking-tight leading-relaxed">
            {{ bullet }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
