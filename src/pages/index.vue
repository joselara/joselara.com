<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <Container>
    <div class="mt-14">
      <Container>
        <div class="space-y-6 text-zinc-500 tracking-tight leading-loose">
          <div>
            Versatile software engineer with 12+ years of experience in designing, developing, and maintaining web applications. Proficient in PHP/Laravel, JavaScript, React, Vue.js, and Node.js. Skilled in implementing responsive and scalable solutions. Proven ability to collaborate with cross-functional teams and deliver high-quality products within tight deadlines. Committed to writing clean, maintainable code and adhering to best practices.
          </div>
        </div>
      </Container>
    </div>
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
