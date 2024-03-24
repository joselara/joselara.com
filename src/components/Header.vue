<script setup>
import Socials from './Socials.vue'
</script>

<template>
  <Container>
    <div className="border-b border-zinc-200 pb-12 pt-24">
      <div class="flex space-between">
        <div class="flex-1">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
            Jose Lara
          </h1>
          <h2 className="text-xl tracking-tight text-zinc-500 sm:text-2xl uppercase font-semibold mt-6">
            Software Engineer
          </h2>
        </div>
        <div>
          <Socials />
        </div>
      </div>
    </div>
  </Container>
</template>
