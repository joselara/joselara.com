<script setup lang="ts">

</script>

<template>
  <div class="mt-20">
    <Container>
      <div class="flex justify-between items-end">
        <div class="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl block">
          Work Experience
        </div>
        <div class="inline-block">
          <a class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-5 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 group mt-6 w-full border" href="/#">
            Download CV <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600">
              <path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </div>
      <div class="grid gap-14 mt-6">
        <Experience
          name="Lalapoint"
          title="Co-founder + CTO"
          start="May 2018"
          end="Dec 2022"
          location="Pasadena, California"
          description="Developed an internal intranet platform named “Aaroe Space” for more than 500 of Los Angeles’ leading brokers and agents. The intranet had direct vendor integrations and interfaces to work in conjunction with custom tools built in-house. Created and developed a video platform for business new listings that were push-to-ready by internal team managers. Managed and processed all listing and sale company data with MLS partners, which were updated daily, with some of the nation’s largest IDX systems."
        />
        <Experience
          name="Pacific Union International"
          title="Digital Marketing Manager / Full-stack Developer"
          start="Jan 2017"
          end="May 2018"
          location="San Francisco, California"
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
</template>
