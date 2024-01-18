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
          Highly skilled software architect with over 15 years of experience in software design, network architecture, and coding, passionate about solving complex challenges and creating innovative solutions. I am actively seeking opportunities to collaborate with exceptional teams in the pursuit of cutting-edge product development. My mission is to continue pushing the boundaries of technology while fostering a collaborative and innovative work culture. Beyond my professional pursuits, I thrive in the world of containerized environments and cherish moments with my two little pups, Lola and Fluffy.
        </p>
      </Container>
    </div>
  </Container>

  <Container>
    <Socials />
  </Container>
  <Showcase />
  <Container>
    <WorkExperiences />
  </Container>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
