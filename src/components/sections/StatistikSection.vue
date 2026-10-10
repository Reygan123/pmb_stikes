<script setup lang="ts">
import type { Statistik } from '@/core/types/statistik'
import { ref, onMounted, watch } from 'vue'
import { useLanguageStore } from '@/stores/language'

const langStore = useLanguageStore()
const alumniCount = ref(0)
const mahasiswaCount = ref(0)
const prestasiCount = ref(0)
const prodiCount = ref(0)

const props = defineProps<{
  statistik: Statistik | null
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

onMounted(() => {
  setTimeout(() => {
    animateCounter(alumniCount, Number(props.statistik?.data1), 2000)
    animateCounter(mahasiswaCount, Number(props.statistik?.data2), 2200)
    animateCounter(prestasiCount, Number(props.statistik?.data3), 2400)
    animateCounter(prodiCount, Number(props.statistik?.data4), 2600)
  }, 300)
})

watch(() => props.statistik, (newValue) => {
  if (newValue) {
    alumniCount.value = 0
    mahasiswaCount.value = 0
    prestasiCount.value = 0
    prodiCount.value = 0
    
    setTimeout(() => {
      animateCounter(alumniCount, Number(newValue.data1), 2000)
      animateCounter(mahasiswaCount, Number(newValue.data2), 2200)
      animateCounter(prestasiCount, Number(newValue.data3), 2400)
      animateCounter(prodiCount, Number(newValue.data4), 2600)
    }, 300)
  }
})
</script>

<template>
  <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-20">
    <div class="space-y-2 text-center">
      <h3
        class="text-2xl md:text-4xl lg:text-[44px] xl:text-[56px] text-primary font-medium transition-all duration-300">
        {{ formatNumber(Math.floor(alumniCount)) }}
      </h3>
      <p class="text-sm md:text-base lg:text-lg text-gstart md:text-netral">{{ langStore.currentLang === 'en' ? 'Graduates' : (statistik?.title1 || 'Alumni') }}</p>
    </div>
    <div class="space-y-2 text-center">
      <h3
        class="text-2xl md:text-4xl lg:text-[44px] xl:text-[56px] text-primary font-medium transition-all duration-300">
        {{ formatNumber(Math.floor(mahasiswaCount)) }}
      </h3>
      <p class="text-sm md:text-base lg:text-lg text-gstart md:text-netral">{{ langStore.currentLang === 'en' ? 'Active Students' : (statistik?.title2 || 'Mahasiswa') }}</p>
    </div>
    <div class="space-y-2 text-center">
      <h3
        class="text-2xl md:text-4xl lg:text-[44px] xl:text-[56px] text-primary font-medium transition-all duration-300">
        {{ formatNumber(Math.floor(prestasiCount)) }}
      </h3>
      <p class="text-sm md:text-base lg:text-lg text-gstart md:text-netral">{{ langStore.currentLang === 'en' ? 'Achievements' : (statistik?.title3 || 'Prestasi') }}</p>
    </div>
    <div class="space-y-2 text-center">
      <h3
        class="text-2xl md:text-4xl lg:text-[44px] xl:text-[56px] text-primary font-medium transition-all duration-300">
        {{ formatNumber(Math.floor(prodiCount)) }}
      </h3>
      <p class="text-sm md:text-base lg:text-lg text-gstart md:text-netral">{{ langStore.currentLang === 'en' ? 'Study Programs' : (statistik?.title4 || 'Program Studi') }}</p>
    </div>
  </section>
</template>