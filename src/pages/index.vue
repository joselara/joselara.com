<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <Container>
    <div class="mt-10">
      <Container>
        <div class="space-y-6">
          <div class="text-zinc-600">
            As a highly skilled software architect with over 15 years of
            experience, I specialize in software design, network
            architecture, and coding. I am deeply passionate about tackling
            complex challenges and crafting innovative solutions. Currently,
            I am actively seeking opportunities to collaborate with
            exceptional teams in the pursuit of cutting-edge product
            development.
          </div>
          <div class="text-zinc-600">
            My mission is to consistently push the boundaries of technology
            while fostering a collaborative and innovative work culture.
            Beyond my professional pursuits, I excel in navigating
            containerized environments and treasure moments spent with my
            two little pups, Lola and Fluffy.
          </div>
        </div>
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
