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
    <Container>
      <div className="flex flex-col items-center gap-6 sm:flex-row">
        <p className="text-sm text-zinc-400 dark:text-zinc-500 pb-12 text-center tracking-tight">
          &copy; {{ new Date().getFullYear() }} Jose Lara. 115 West California Boulevard #114, Pasadena, CA 91105. All rights reserved.
        </p>
      </div>
    </Container>
  </Container>
  </footer>
</template>
