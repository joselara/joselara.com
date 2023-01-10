<script setup lang="ts">
import DesktopNav from './DesktopNav.vue'
</script>

<template>
  <div
    class="pointer-events-none flex flex-col"
  >
    <Container class="pt-4">
      <div class="flex flex-1 justify-end md:justify-center">
        <!-- <DesktopNav /> -->
      </div>
    </Container>
  </div>
  <Container>
    <div class="mt-24 mb-4">
      <Avatar />
    </div>
  </Container>

  <slot />
</template>
