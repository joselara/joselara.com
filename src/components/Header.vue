<script setup lang="ts">
import DesktopNav from './DesktopNav.vue'
</script>

<template>
  <div
    class="pointer-events-none flex flex-col w-full bg-white"
  >
    <Container class="pt-3">
      <div class="flex flex-1 justify-end md:justify-center">
        <DesktopNav />
      </div>
    </Container>
    <Container>
      <div class="h-16 mt-10">
        <div class="relative flex gap-4 w-full">
          <div class="flex flex-1">
            <Avatar />
          </div>
        </div>
      </div>
    </Container>
  </div>

  <slot />
</template>
