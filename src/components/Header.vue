<script setup lang="ts">
import DesktopNav from './DesktopNav.vue'
</script>

<template>
  <div class="pointer-events-none relative z-50 flex flex-col">
    <Container>
      <div className="top-0 z-10 h-16 pt-6">
        <div class="relative flex gap-4">
          <div className="flex flex-1">
            <Avatar />
          </div>
        </div>
        <div className="flex flex-1 justify-end md:justify-center">
          <DesktopNav />
        </div>
      </div>
    </Container>
  </div>
</template>
