<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <Container>
    <div class="mt-10">
      <Container>
        <p>
          My name is Jose Lara and I'm a full-stack web2 developer from Pasadena, California. I was previously one of the co-founders of Lalapoint, a digital marketing company. There I lead the entire technology department outfitting our data partners system that I developed from the ground up. When I'm not creating code, I enjoy throwing up docker containers, network design, and engineering with my two dogs Lola and Fluffy.
        </p>
      </Container>
    </div>
  </Container>

  <Container>
    <div class="mt-20">
      <Container>
        <h2 class="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
          Work Experience
        </h2>
        <div class="grid gap-14 mt-6">
          <Experience
            name="John Aaroe Group"
            title="Digital Marketing Manager / Full-stack Developer"
            start="Jan 2014"
            end="Dec 2016"
            location="Beverly Hills, California"
            description="Developed an internal intranet platform named “Aaroe Space” for more than 500 of Los Angeles’ leading brokers and agents. The intranet had direct vendor integrations and interfaces to work in conjunction with custom tools built in-house. Created and developed a video platform for business new listings that were push-to-ready by internal team managers. Managed and processed all listing and sale company data with MLS partners, which were updated daily, with some of the nation’s largest IDX systems."
          />
          <Experience
            name="John Aaroe Group"
            title="Digital Marketing Manager / Full-stack Developer"
            start="Jan 2014"
            end="Dec 2016"
            location="Beverly Hills, California"
            description="Developed an internal intranet platform named “Aaroe Space” for more than 500 of Los Angeles’ leading brokers and agents. The intranet had direct vendor integrations and interfaces to work in conjunction with custom tools built in-house. Created and developed a video platform for business new listings that were push-to-ready by internal team managers. Managed and processed all listing and sale company data with MLS partners, which were updated daily, with some of the nation’s largest IDX systems."
          />
          <Experience
            name="John Aaroe Group"
            title="Digital Marketing Manager / Full-stack Developer"
            start="Jan 2014"
            end="Dec 2016"
            location="Beverly Hills, California"
            description="Developed an internal intranet platform named “Aaroe Space” for more than 500 of Los Angeles’ leading brokers and agents. The intranet had direct vendor integrations and interfaces to work in conjunction with custom tools built in-house. Created and developed a video platform for business new listings that were push-to-ready by internal team managers. Managed and processed all listing and sale company data with MLS partners, which were updated daily, with some of the nation’s largest IDX systems."
          />
        </div>
      </Container>
    </div>
  </Container>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
