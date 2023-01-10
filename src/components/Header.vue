<script setup lang="ts">
import DesktopNav from './DesktopNav.vue'
</script>

<template>
  <div
    class="pointer-events-none flex flex-col w-full bg-white border"
  >
    <Container class="pt-4">
      <div class="flex flex-1 justify-end md:justify-center">
        <!-- <DesktopNav /> -->
      </div>
    </Container>
  </div>
  <div class="mt-10 mb-4">
    <Avatar />
  </div>

  <slot />
</template>
