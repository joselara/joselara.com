<script setup lang="ts">
import rdsApp1 from '~/assets/rds-app-2.png'
import rdsApp2 from '~/assets/rds-app-4.png'
import rdsApp3 from '~/assets/rds-app-7.png'
import rdsApp4 from '~/assets/rds-app-8.png'

const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

const images = [
  rdsApp1, rdsApp2, rdsApp3, rdsApp4,
]

const visibleRef = ref(false)
const indexRef = ref(0) // default 0
const imgsRef = ref([])

const onShow = () => {
  visibleRef.value = true
}

const showMultiple = (imgIdx = 0) => {
  imgsRef.value = images
  indexRef.value = imgIdx // index of imgList
  onShow()
}
const onHide = () => (visibleRef.value = false)
</script>

<template>
  <div class="mt-20">
    <Container>
      <Container>
        <div class="sm:flex justify-between items-end">
          <div class="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl block">
            App Showcase
          </div>
        </div>
      </Container>
    </Container>
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        <div
          v-for="(image, imageIdx) in images" :key="imageIdx"
          class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl border shadow-lg"
          :class="rotations[imageIdx % rotations.length]"
          @click="showMultiple(imageIdx)"
        >
          <img :src="image" class="absolute inset-0 h-full w-full object-cover">
          />
        </div>
      </div>
    </div>
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      :loop="true"
      :move-disabled="true"
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
