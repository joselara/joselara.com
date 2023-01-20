<script setup lang="ts">

</script>

<template>
  <div class="mt-20">
    <Container>
      <div class="sm:flex justify-between items-end">
        <div class="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl block">
          Work Experience
        </div>
        <div class="inline-block">
          <a class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-5 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 group mt-6 w-full border" href="/Jose_Lara_CV.pdf" target="_blank">
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
          end="December 2022"
          location="Pasadena, California"
          :bullets="[
            'Led the technology team and developed core components from data partners data pipeline from scratch. Developed and implemented systems for digital marketing initiatives: Generating video, landing pages with lead capture, presentation materials and graphics delivered ready-to-share on any media channel.',
            'Architected the entire tech stack using Laravel, Serverless Framework, Node.js, and Vue2/3. Utilized processing power tools such as AWS Lambda and EC2 for optimal performance.',
            'Used agile development practices to manage issues and feature requests, plan sprints and test improvements to the codebase.',
            'Performed thorough code reviews to ensure high-quality and maintainable code. Managed release branching, code merges, reverts, and versioning using GitHub Enterprise. Contributed to the team’s development process by implementing best practices for code management.',
            'Developed procedures to streamline and automate app development and deployment using Docker containers. ',
            'Solid understanding of networking concepts such as VPN, DNS, and load balancing, as well as experience in configuring and maintaining network infrastructure and ensuring high availability and performance of network services.',
          ]"
        />
        <Experience
          name="Real Data Strategies"
          title="Engineering Technical Lead"
          start="May 2018"
          end="June 2021"
          location="Brea, California"
          :bullets="[
            'Migrated legacy Microsoft Access databases to Aurora MySQL, modernizing the system and improving data accessibility. Conducted a thorough assessment of the existing Access databases to identify data structure, relationships, and dependencies. Implemented data validation procedures to ensure data integrity and accuracy during the migration process. ',
            'Set up a data pipeline for processing raw sales data from over 200 MLS sources on a daily basis. Implemented a data pipeline for data validation, cleaning, and error handling to ensure data accuracy and consistency. Continuously evaluated the pipeline for performance and scalability and made adjustments as needed.',
            'Developed a new real-time analytical app using Laravel, Tailwind, Vue3 and Intertia.js, allowing users to view monthly home sales data from over 200+ MLS datasets. Utilized Laravel to set up the backend infrastructure for the app. Incorporated Inertia.js, Vue 3 and Tailwind for the front-end of the application. Monitored the app\'s performance and scalability, and made adjustments as needed to ensure optimal performance.',
          ]"
        />
        <Experience
          name="Pacific Union International"
          title="Digital Marketing Manager / Full-stack Developer"
          start="January 2017"
          end="May 2018"
          location="San Francisco, California"
          :bullets="[
            'Facilitated the successful migration of three tech departments for John Aaroe Group, Partner Trust, and Gibson international ecosystems to the Pacific Union LA division brand intranet developed by my department. Worked closely with the IT teams to develop and implement a comprehensive migration plan and schedule. Provided training and support to all department members to ensure they were able to effectively use the new intranet and company tools.',
            'Project managed the rebranding of the Aaroe website platform, intranet, and internal marketing tools in collaboration with an agency partner. Worked closely with the agency partner to define project scope, timelines, and deliverables. Communicated regularly with all stakeholders to ensure the project was on track and delivered on time.',
            'Collaborated with C-Suite management to conduct a comprehensive review of the company\'s organizational structure and budgeting processes and identified areas for improvement.',
          ]"
        />
        <Experience
          name="John Aaroe Group"
          title="Digital Marketing Manager / Full-stack Developer"
          start="January 2014"
          end="December 2016"
          location="Beverly Hills, California"
          :bullets="[
            'Created and developed an internal intranet platform using Laravel for a company with 500 of the leading brokers and agents in Los Angeles. Designing the overall architecture and layout of the platform, including the user interface, navigation, and functionality.',
            'Maintained and managed the company website powered by Ruby on Rails (RoR) that processes listing and sale data from some of the nation\'s largest IDX systems involving several tasks such as monitoring the website and troubleshooting any issues, optimizing website performance to ensure it could handle high traffic and large amounts of data, keeping backups of website data to rollback in case of issues, collaborating with other teams such as design and marketing, business development to improve website performance and user experience.',
            'Developed internal tools for users to create custom newsletters that integrate with third-party APIs, such as Mailchimp and Constant Contact, and other CRMs would involve several steps, including; Identifying the specific needs and requirements of the company regarding newsletter creation and distribution. Researching and evaluating different third-party APIs and CRMs that can be integrated into internal tools, such as Mailchimp, Constant Contact, and others. Creating an interface for users to easily create and customize newsletters to send to recipients. Integrating with third-party APIs, such as Mailchimp and Constant Contact, to enable the distribution of newsletters. Deploying the internal tools and providing training to users on how to use them effectively.',
            'Developed an internal video generator, harnessing FFMPEG and Puppeteer, for listings with a front-end interface that allows users to select photos and input copy, and then sent an email with the generated video to the user to publish on social media channels. ',
            'Created a static website for every new property listing for the company and agent with its own unique subdomain URL. Include a gallery, documents and video of the subject property that was managed by office staff and integrated with the company site. ',
          ]"
        />
      </div>
    </Container>
  </div>
</template>
