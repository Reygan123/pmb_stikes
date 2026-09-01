<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  targetDate?: string
}

const props = withDefaults(defineProps<Props>(), {
  targetDate: '2026-01-31T23:59:59'
})

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let intervalId: number | null = null

const updateCountdown = () => {
  const now = new Date().getTime()
  const targetDate = new Date(props.targetDate).getTime()
  const distance = targetDate - now

  if (distance < 0) {
    days.value = 0
    hours.value = 0
    minutes.value = 0
    seconds.value = 0
    if (intervalId) clearInterval(intervalId)
    return
  }

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
}

onMounted(() => {
  updateCountdown()
  intervalId = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<template>
  <div class="px-6 py-3 rounded-3xl md:rounded-4xl border-2 border-primary bg-primary/15 flex items-center gap-0 relative">
    <slot name="left-icon"></slot>
    <div class="grid grid-cols-4 gap-8">
      <div class="space-y- text-gstart text-center">
        <p class="text-2xl md:text-[32px] font-medium">{{ days }}</p>
        <h6 class="text-sm md:text-base">Hari</h6>
      </div>
      <div class="space-y- text-gstart text-center">
        <p class="text-2xl md:text-[32px] font-medium">{{ hours }}</p>
        <h6 class="text-sm md:text-base">Jam</h6>
      </div>
      <div class="space-y- text-gstart text-center">
        <p class="text-2xl md:text-[32px] font-medium">{{ minutes }}</p>
        <h6 class="text-sm md:text-base">Menit</h6>
      </div>
      <div class="space-y- text-gstart text-center">
        <p class="text-2xl md:text-[32px] font-medium">{{ seconds }}</p>
        <h6 class="text-sm md:text-base">Detik</h6>
      </div>
    </div>
  </div>
</template>