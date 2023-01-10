<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main>
    <RouterView />
    <div>
      <button @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
