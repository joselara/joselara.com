<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <Container>
    <div class="mt-10">
      <Container>
        <p class="text-zinc-600">
          Experienced software designer with 14+ years in software architecture, network design, and coding. Seeking opportunities to collaborate with a team towards the goal of creating exceptional products. When not programming, I enjoy deploying containerized environments and spending time with my dogs, Lola and Fluffy.
        </p>
      </Container>
    </div>
  </Container>

  <Container>
    <Socials />
  </Container>

  <Container>
    <WorkExperiences />
  </Container>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
