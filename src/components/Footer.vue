<script setup lang="ts">

</script>

<template>
  <footer class="mt-32">
    <OuterContainer>
      <div className="border-t border-zinc-100 pt-10 pb-1">
        <InnerContainer />
      </div>
    </OuterContainer>
    <Container>
      <div className="flex flex-col items-center justify-end gap-6 sm:flex-row">
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          &copy; {{ new Date().getFullYear() }} Jose Lara. All rights reserved.
        </p>
      </div>
    </Container>
  </footer>
</template>
