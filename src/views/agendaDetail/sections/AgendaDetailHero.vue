<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import type { Agenda } from '@/core/types/agenda';
import { getImageUrl } from '@/utils/imageUtils';
import { useRouter } from 'vue-router';

defineProps<{
    agenda: Agenda | null
}>()

const router = useRouter()

const navigateToAgenda = () => {
    router.push('/agenda')
}
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-6 xl:gap-12">
        <div @click="navigateToAgenda" class="w-full flex justify-center items-center text-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                <path d="M25.8337 16.5H7.16699M7.16699 16.5L15.167 24.5M7.16699 16.5L15.167 8.5" stroke="#F03C06"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h4 class="text-base md:text-lg lg:text-xl text-black">Back to Agenda</h4>
        </div>

        <div class="w-full h-fit space-y-4 md:space-y-8">
            <div class="w-full h-[50vh]">
                <img :src="getImageUrl(agenda?.image || '')" :alt="agenda?.title" loading="lazy"
                    class="w-full h-full rounded-4xl">
            </div>

            <div class="w-full flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 lg:gap-20">
                <div class="w-full md:w-[60%] space-y-4 lg:space-y-8">
                    <h1
                        class="text-xl md:text-2xl lg:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gstart to-gend">
                        {{ agenda?.title }}</h1>
                    <Button text="Hubungi Kami" />
                </div>
                <div class="w-full md:w-[40%] grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                    <div class="space-y-2">
                        <h4 class="text-base md:text-lg lg:text-xl font-bold">Tanggal</h4>
                        <p class="text-sm md:text-smlg:text-base">{{ agenda?.start_date }}</p>
                    </div>
                    <div class="space-y-2">
                        <h4 class="text-base md:text-lg lg:text-xl font-bold">Tempat</h4>
                        <p class="text-sm md:text-smlg:text-base">{{ agenda?.location }}</p>
                    </div>
                    <div class="space-y-2">
                        <h4 class="text-base md:text-lg lg:text-xl font-bold">Pembicara</h4>
                        <p class="text-sm md:text-smlg:text-base">{{ agenda?.organizer }}</p>
                    </div>
                    <div class="space-y-2">
                        <h4 class="text-base md:text-lg lg:text-xl font-bold">Tipe</h4>
                        <p class="text-sm md:text-smlg:text-base">Pelatihan</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>