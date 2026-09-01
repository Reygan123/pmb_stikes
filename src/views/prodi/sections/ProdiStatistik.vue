<script setup lang="ts">
import type { Departement } from '@/core/types/prodi'
import { ref, onMounted, watch } from 'vue'

const alumniCount = ref(0)
const mahasiswaCount = ref(0)
const prestasiCount = ref(0)
const prodiCount = ref(0)

const props = defineProps<{
  statistik: Departement | null
}>()

const formatNumber = (num: number): string => {
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'k'
  }
  return num.toString()
}

const animateCounter = (
  current: { value: number },
  target: number,
  duration: number = 2000
) => {
  const increment = target / (duration / 16)

  const updateCounter = () => {
    if (current.value < target) {
      current.value = Math.min(current.value + increment, target)
      requestAnimationFrame(updateCounter)
    }
  }

  updateCounter()
}

const startAnimation = () => {
  if (props.statistik) {
    animateCounter(alumniCount, Number(props.statistik.age), 2000)
    animateCounter(mahasiswaCount, Number(props.statistik.weekly), 2200)
    animateCounter(prestasiCount, Number(props.statistik.periode), 2400)
    animateCounter(prodiCount, Number(props.statistik.class_size), 2600)
  }
}

watch(
  () => props.statistik,
  (newValue) => {
    if (newValue) {
      setTimeout(() => {
        startAnimation()
      }, 300)
    }
  },
  { immediate: true }
)

onMounted(() => {
  setTimeout(() => {
    startAnimation()
  }, 300)
})
</script>

<template>
  <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-20">
    <div class="space-y-2 text-center">
      <h3
        class="text-2xl md:text-4xl lg:text-[44px] xl:text-[56px] text-primary font-medium transition-all duration-300">
        {{ formatNumber(Math.floor(alumniCount)) }}
      </h3>
      <p class="text-sm md:text-base lg:text-lg text-gstart md:text-netral">Alumni</p>
    </div>
    <div class="space-y-2 text-center">
      <h3
        class="text-2xl md:text-4xl lg:text-[44px] xl:text-[56px] text-primary font-medium transition-all duration-300">
        {{ formatNumber(Math.floor(mahasiswaCount)) }}
      </h3>
      <p class="text-sm md:text-base lg:text-lg text-gstart md:text-netral">Mahasiswa</p>
    </div>
    <div class="space-y-2 text-center">
      <h3
        class="text-2xl md:text-4xl lg:text-[44px] xl:text-[56px] text-primary font-medium transition-all duration-300">
        {{ formatNumber(Math.floor(prestasiCount)) }}
      </h3>
      <p class="text-sm md:text-base lg:text-lg text-gstart md:text-netral">Prestasi</p>
    </div>
    <div class="space-y-2 text-center">
      <h3
        class="text-2xl md:text-4xl lg:text-[44px] xl:text-[56px] text-primary font-medium transition-all duration-300">
        {{ formatNumber(Math.floor(prodiCount)) }}
      </h3>
      <p class="text-sm md:text-base lg:text-lg text-gstart md:text-netral">Karya Ilmiah</p>
    </div>
  </section>
</template>