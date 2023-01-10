<script setup lang="ts">

</script>

<template>
  <nav>
    <ul class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur">
      <NavItem name="About" url="#" :is-active="true" />
      <NavItem name="Articles" url="#" :is-active="false" />
      <NavItem name="Experience" url="#" :is-active="false" />
      <NavItem name="Connect" url="#" :is-active="false" />
    </ul>
  </nav>
</template>
