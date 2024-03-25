<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <Container>
    <div class="mt-14">
      <Container>
        <div class="lg:flex w-full">
          <div class="text-xl text-zinc-800 sm:text-xl font-bold mt-1 w-32  mb-6 lg:mb-0">
            Profile
          </div>
          <div class="flex-1 space-y-6 text-zinc-500 tracking-tight leading-loose">
              Versatile software engineer with 12+ years of experience in designing, developing, and maintaining web applications. Proficient in PHP/Laravel, JavaScript, React, Vue.js, and Node.js. Skilled in implementing responsive and scalable solutions. Proven ability to collaborate with cross-functional teams and deliver high-quality products within tight deadlines. Committed to writing clean, maintainable code and adhering to best practices.
          </div>
        </div>
      </Container>
    </div>

    <Container>
      <div class="mt-14 border-t border-zinc-200 pt-14">
        <div class="lg:flex w-full">
          <div class="text-xl text-zinc-800 sm:text-xl font-bold mt-1 w-32 mb-6 lg:mb-0">
            Skills
          </div>
          <div class="flex-1 text-zinc-500 tracking-tight leading-loose">
            <div class="grid grid-cols-[95px_1fr]">
              <div class="font-semibold text-zinc-800">Backend</div>
              <div class="truncate">PHP · Laravel · Node.js · RoR · Next.js · GraphQL · MySQL · PostgresSQL</div>
              <div class="font-semibold text-zinc-800">Frontend</div>
              <div class="truncate">React · Vue.js · Angular · TailwindCSS · Bootstrap · MUI · Webpack · Vite</div>
              <div class="font-semibold text-zinc-800">Fullstack</div>
              <div class="truncate">LAMP · Ngninx · APIs · Microservices · AWS · DigitalOcean · Serverless · Containers</div>
              <div class="font-semibold text-zinc-800">Practices</div>
              <div class="truncate">Git · Agile · Scrum · TDD · CI/CD · DevOps · Docker · K8S · Figma</div>
              <div class="font-semibold text-zinc-800">Additional</div>
              <div class="truncate">Puppeteer · Playwright · FFMPEG · WebRTC · WebSockets · PWAs · Jamstack</div>
            </div>
          </div>
        </div>
      </div>
    </Container>


  </Container>

  <!-- <Showcase /> -->
  <Container>
    <WorkExperiences />
  </Container>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
