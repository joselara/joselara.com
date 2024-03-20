<script setup lang="ts">
import { useFetch } from '@vueuse/core'
const filename = ref('Jose-Lara_CV')

const downloadCV = () => {
  const { data, onFetchResponse } = useFetch(`${filename.value}.pdf`).get().blob()
  onFetchResponse((response) => {
    if (response.status === 200 && data.value) {
      const blob = new Blob([data.value], { type: 'application/pdf' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = filename.value
      link.click()
      URL.revokeObjectURL(link.href)
    }
  })
}
</script>

<template>
  <div class="mt-20">
    <Container>
      <div class="sm:flex justify-between items-end">
        <div class="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl block">
          Experience
        </div>
        <!-- <div class="inline-block">
          <a
            class="inline-flex items-center shadow-sm gap-2 justify-center rounded-md py-2 px-5 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 group mt-6 w-full border"
            :href="`${filename}.pdf`"
            @click.prevent="downloadCV"
          >
            Download CV <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600">
              <path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div> -->
      </div>
      <div class="grid gap-14 mt-6">
        <Experience
          name="Seek Capital"
          title="Full Stack Developer"
          start="February 2023"
          end="January 2024"
          location="Los Angeles, California / On-site"
          :bullets="[
            'Revitalized an outdated WordPress corporate website with the use of React and Next.js framework, continuously integrating new features and migrating legacy code.',
            'Established a Headless CMS by utilizing Strapi, paired with Next.js on the front-end for the corporate website, which facilitated seamless content management and updates.',
            'Spearheaded daily stand-up meetings with an offshore development team, enhancing project updates and issue tracking.',
            'Administered AWS infrastructure, ensuring smooth operations through regular maintenance.',
            'Devised a weekly, secure reporting system for incoming leads from Experian and inbound leads from SoFi Technologies using PGP encryption, enhancing data protection.'
          ]"
        />
        <Experience
          name="Lalapoint"
          title="Co-founder + CTO"
          start="May 2018"
          end="September 2022"
          location="Pasadena, California / Hybrid"
          :bullets="[
            'Built the core components of a data partners pipeline from scratch, laying the groundwork for future development and expansion.',
            'Engineered systems for digital marketing initiatives, including video generation, lead capture landing pages, presentation materials, and graphics, all designed for easy sharing across various media channels.',
            'Designed the technical stack using Laravel, Serverless Framework, Node.js, and Vue2/3, demonstrating a strong understanding of multiple technologies and frameworks.',
            'Leveraged AWS Lambda and EC2 to optimize processing power and performance, demonstrating proficiency with cloud computing platforms.',
            'Conducted thorough code reviews to ensure high-quality, maintainable code and managed release branching, code merges, reverts, and versioning using GitHub Organizations, demonstrating strong version control skills.'
          ]"
        />
        <Experience
          name="Real Data Strategies"
          title="Engineering &amp; Technical Lead"
          start="May 2018"
          end="June 2021"
          location="Brea, California / Remote"
          :bullets="[
            'Developed a real-time analytical application utilizing Laravel, Tailwind, Vue3, and Inertia.js. This application enables users to analyze monthly home sales data from more than 200 MLS datasets. Leveraging Laravel for a robust backend infrastructure, and used Inertia.js, Vue3, and Tailwind to create a dynamic and engaging front-end.',
            'Successfully migrated legacy Microsoft Access databases to Aurora MySQL, a modernization that greatly enhanced system efficiency and improved data accessibility. This process included a meticulous assessment of the existing Access databases to identify and understand their data structure, relationships, and dependencies.',
            'Implemented a data pipeline for daily processing of raw sales data from over 200 MLS sources. This included data validation, cleaning, and error handling to ensure data accuracy and consistency.'
          ]"
        />
        <Experience
          name="Pacific Union International"
          title="Full Stack Developer"
          start="January 2017"
          end="May 2018"
          location="San Francisco, California / On-site"
          :bullets="[
            'Orchestrated the complex migration of three tech departments for John Aaroe Group, Partner Trust, and Gibson International ecosystems to the Pacific Union LA division brand intranet. This project involved close collaboration with IT teams to devise and execute a holistic migration strategy, ensuring a seamless transition.',
            'Oversaw the rebranding of the company\'s user-facing platform, intranet, and internal marketing tools, working in tandem with an agency partner. Defined project scope, timelines, and deliverables, maintaining regular communication with all stakeholders to ensure timely and successful project completion.',
            'Engaged in a thorough evaluation of the company\'s organizational structure and budgeting processes with C-suite management, pinpointing areas for enhancement and streamlining.'
          ]"

        />
        <Experience
          name="John Aaroe Group"
          title="Full Stack Developer"
          start="January 2014"
          end="December 2016"
          location="Beverly Hills, California / On-site"
          :bullets="[
            'Designed, created, and developed an internal intranet platform using Laravel for a company, serving 500 of the leading brokers and agents in Los Angeles. This included designing the platform\'s overall architecture and layout, including the user interface, navigation, and functionality.',
            'Maintained and managed the company\'s consumer-facing app, powered by Ruby on Rails (RoR), which processed listing and sale data from some of the nation\'s largest IDX systems. Responsibilities included monitoring and troubleshooting any issues, optimizing performance to handle high traffic and large amounts of data, maintaining backups of data for rollback in case of issues, and collaborating with other teams like design, marketing, and business development to improve performance and user experience.',
            'Developed internal tools that allowed users to create custom newsletters integrated with third-party APIs, such as Mailchimp and other CRMs. This involved creating an interface for users to easily create and customize newsletters.',
            'Developed an internal video generator, using FFMPEG and Puppeteer, for listings with a robust user interface that allowed users to select media and import data from other sources.'
          ]"
        />
      </div>
    </Container>
  </div>
</template>
