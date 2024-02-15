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
  <div class="grid gap-3">
    <div>
      <div class="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl">
        {{ title }}
      </div>
      <div class="text-xl font-semibold tracking-tight text-zinc-600 sm:text-2xl">
        {{ name }}
      </div>
    </div>
    <div class="text-sm sm:text-base text-zinc-600">
      <div>
        {{ start }} &mdash; {{ end }}
      </div>
      <div>{{ location }}</div>
    </div>
    <div class="text-zinc-600">
      <p v-if="description">
        {{ description }}
      </p>
      <ul v-if="bullets" role="list" class="list-disc pl-4">
        <li v-for="(bullet, index) in bullets" :key="index">
          {{ bullet }}
        </li>
      </ul>
    </div>
  </div>
</template>
