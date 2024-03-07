<script setup lang="ts">
import { useTimeoutPoll } from '@vueuse/core'
import { promiseTimeout } from '@vueuse/shared'

import rdsApp1 from '~/assets/rds-app-2.png'
import rdsApp2 from '~/assets/rds-app-4.png'
import rdsApp3 from '~/assets/rds-app-7.png'
import rdsApp4 from '~/assets/rds-app-8.png'
import lalaApp1 from '~/assets/lala-1.png'
import lalaApp2 from '~/assets/lala-2.png'
import lalaApp3 from '~/assets/lala-3.png'
import lalaApp4 from '~/assets/lala-4.png'
import lalaApp5 from '~/assets/lala-5.png'
import seekApp1 from '~/assets/seek-1.png'
import seekApp2 from '~/assets/seek-2.png'
import seekApp3 from '~/assets/seek-3.png'


const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2', 'rotate-2', '-rotate-2']

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const rdsImages = [rdsApp1, rdsApp2, rdsApp3, rdsApp4];
const lalaImages = [lalaApp1, lalaApp2, lalaApp3, lalaApp4, lalaApp5];
const seekImages = [seekApp1, seekApp2, seekApp3];

// Combined image data
const allImageEntries = [
  ...Object.entries(rdsImages).map(img => ({ title: 'Real Data Strategies', src: img[1] })),
  ...Object.entries(lalaImages).map(img => ({ title: 'Lalapoint', src: img[1] })),
  ...Object.entries(seekImages).map(img => ({ title: 'Seek Capital', src: img[1] }))
];


const allImages = ref([...rdsImages, ...lalaImages, ...seekImages]);
shuffleArray(allImages.value);

const visibleRef = ref(false)
const indexRef = ref(0)
const imgsRef = ref([])

const onShow = () => {
  visibleRef.value = true
}

const showMultiple = (imgIdx = 0) => {
  imgsRef.value = allImageEntries as any
  indexRef.value = imgIdx
  onShow()
}
const onHide = () => (visibleRef.value = false)

const rotateImages = async () => {
  await promiseTimeout(5000)
  allImages.value.unshift(allImages.value.pop() as any)
}

const { pause, resume } = useTimeoutPoll(rotateImages, 5000)

onMounted(() => resume())
</script>

<template>
  <div class="mt-20">
    <Container>
      <Container>
        <div class="sm:flex justify-between items-end">
          <div class="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl block">
            Showreel of Software Solutions
          </div>
        </div>
      </Container>
    </Container>
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8" @mouseenter="pause()" @mouseleave="resume()">
        <div
          v-for="(image, imageIdx) in allImages" :key="imageIdx"
          class="relative cursor-pointer aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl border shadow-lg"
          :class="rotations[imageIdx % rotations.length]"
          @click="showMultiple(imageIdx)"
        >
          <img :src="image" class="absolute inset-0 h-full w-full object-cover">
        </div>
      </div>
    </div>
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      :loop="true"
      @hide="onHide"
    >
      <template #toolbar>
        <span />
      </template>
    </vue-easy-lightbox>
  </div>
</template>

<style>
.vel-modal {
  background-color: rgba(0,0,0,.7) !important;
}
</style>
