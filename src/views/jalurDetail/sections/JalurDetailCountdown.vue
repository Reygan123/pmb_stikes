<script setup lang="ts">
import EmptySection from '@/components/sections/EmptySection.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import type { Jalur } from '@/core/types/jalur';
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps<{
    jalur: Jalur | null,
    loading: boolean,
    error: string | null
}>();

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let intervalId: number | null = null

const updateCountdown = () => {
    const now = new Date().getTime()
    const endTime = new Date(props.jalur?.end_date || 0).getTime()
    const distance = endTime - now

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

watch(() => props.jalur?.end_date, () => {
    updateCountdown()
})

onMounted(() => {
    updateCountdown()
    intervalId = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
    if (intervalId) clearInterval(intervalId)
})
</script>

<template>
    <div v-if="loading">
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && jalur === null">
        <EmptySection name="Countdown Jalur" />
    </div>

    <section v-if="!loading && !error && jalur !== null"
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
        <div class="w-full h-[360px] md:h-[520px] lg:h-[680px] rounded-4xl relative overflow-hidden">
            <div class="w-full h-full">
                <img src="https://cms-pmb.universitas-bth.ac.id/storage/sliders/7Tr4gJNooCvIgvfVjSrqzzhWvMxNIhBAxdzNp7BY.webp"
                    alt="Jalur Countdown" class="w-full h-full object-cover">
            </div>

            <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-[5]"></div>
            <div
                class="absolute top-6 right-6 left-6 md:left-auto md:top-8 md:right-8 lg:top-12 lg:right-12 md:w-full md:max-w-3/5 lg:max-w-3/5 xl:max-w-1/2 p-3 md:p-6 rounded-3xl border-3 border-white bg-white/30 text-white backdrop-blur-md z-10 space-y-3 md:space-y-6">
                <div class="space-y-2">
                    <h2 class="text-xs md:text-sm">Jangan Sampai Kesempatan Ini Terlewatkan!</h2>
                    <h3 class="text-base md:text-lg lg:text-xl font-bold">Penutupan {{ jalur?.name }}</h3>
                </div>
                <div class="w-full grid grid-cols-4 gap-4 xs:grid-cols-4 sm:grid-cols-4">
                    <div class="text-center">
                        <h4 class="text-[48px] md:text-[72px] lg:text-[96px] font-medium leading-tight">{{ days }}</h4>
                        <h5 class="text-lg md:text-xl lg:text-[28px] leading-tight">Hari</h5>
                    </div>
                    <div class="text-center">
                        <h4 class="text-[48px] md:text-[72px] lg:text-[96px] font-medium leading-tight">{{ hours }}</h4>
                        <h5 class="text-lg md:text-xl lg:text-[28px] leading-tight">Jam</h5>
                    </div>
                    <div class="text-center">
                        <h4 class="text-[48px] md:text-[72px] lg:text-[96px] font-medium leading-tight">{{ minutes }}
                        </h4>
                        <h5 class="text-lg md:text-xl lg:text-[28px] leading-tight">Menit</h5>
                    </div>
                    <div class="text-center">
                        <h4 class="text-[48px] md:text-[72px] lg:text-[96px] font-medium leading-tight">{{ seconds }}
                        </h4>
                        <h5 class="text-lg md:text-xl lg:text-[28px] leading-tight">Detik</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>