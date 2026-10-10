<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const EmptySection = defineAsyncComponent(() => import('@/components/sections/EmptySection.vue'));
const ErrorSection = defineAsyncComponent(() => import('@/components/sections/ErrorSection.vue'));
const HeroSkeleton = defineAsyncComponent(() => import('@/components/sections/skeletons/HeroSkeleton.vue'));
import Button from '@/components/ui/Button.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import type { Slider } from '@/core/types/slider';
import type { Statistik } from '@/core/types/statistik';
import { getImageUrl } from '@/utils/imageUtils';
import { useRouter } from 'vue-router';
import { useLanguageStore } from '@/stores/language';

const router = useRouter()
const langStore = useLanguageStore()

defineProps<{
    slider: Slider[]
    statistik: Statistik | null
    loading: boolean,
    error: string | null
}>()

const navigateToJalur = () => {
    router.push('/jalur-dan-jadwal')
}
</script>

<template>
    <div v-if="loading && (!slider || slider.length === 0)">
        <HeroSkeleton />
    </div>

    <div v-if="error && (!slider || slider.length === 0)">
        <ErrorSection />
    </div>

    <div v-if="!loading && (!slider || slider.length === 0)">
        <EmptySection name="Hero Beranda" />
    </div>

    <section v-if="slider && slider.length > 0"
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col-reverse lg:flex-row lg:items-center gap-8 md:gap-12 lg:gap-16 h-full">
        <div class="w-full lg:w-[45%] space-y-4 md:space-y-6 lg:space-y-8 pt-4 lg:p-0">
            <div
                class="flex flex-col gap-4 md:gap-5 lg:gap-6 justify-center items-center text-center lg:justify-center lg:items-start lg:text-start">
                <Tag :title="langStore.t('hero.tag')" />
                <Title :title="langStore.loc(slider[0]?.title || 'Pendaftaran Gelombang 2026/2027 Telah Dibuka!', (slider[0] as any)?.title_en || 'Academic Year 2026/2027 Admission is Now Open!')" />
                <Subtitle color="text-gstart" :text="langStore.loc(slider[0]?.description || 'Raih masa depan gemilang bersama institusi pendidikan kesehatan unggul, religius, berbudi luhur, dan berdaya saing global.', (slider[0] as any)?.description_en || 'Achieve a brighter future in healthcare with an outstanding, character-driven, and globally competitive health sciences institute.')" />

                <div class="flex items-center gap-4">
                    <Button :text="langStore.t('hero.cta_register')" />
                    <Button @click="navigateToJalur" bg-color="bg-primary/20" text-color="text-[#004e9a]" weight="font-medium"
                        :text="langStore.loc('Cek Jalur & Jadwal', 'Check Tracks & Schedules')" />
                </div>
            </div>

            <div class="w-fit mx-auto lg:w-full hidden md:grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-14">
                <div class="space-y-4">
                    <h3 class="text-[32px] text-primary font-medium">{{ statistik?.data1 }}</h3>
                    <p class="text-lg">{{ statistik?.title1 }}</p>
                </div>
                <div class="space-y-4">
                    <h3 class="text-[32px] text-primary font-medium">{{ statistik?.data4 }}</h3>
                    <p class="text-lg">{{ statistik?.title4 }}</p>
                </div>
                <div class="space-y-4">
                    <h3 class="text-[32px] text-primary font-medium">{{ statistik?.data3 }}</h3>
                    <p class="text-lg">{{ statistik?.title3 }}</p>
                </div>
            </div>
        </div>

        <!-- Dekstop -->
        <div class="w-full lg:w-[55%] lg:h-[70vh] relative hidden lg:block">
            <div class="w-full h-full">
                <img fetchpriority="high" decoding="async" width="640" height="480"
                    :src="getImageUrl(`sliders/${slider[0]?.image || 'faculty-image/TEA25aKWZkbL1D3oiGAieMvVW2B1nxv237PJJ4f4.jpg'}`)" :alt="slider[0]?.title || 'Penerimaan Mahasiswa Baru STIKes Budi Luhur Cimahi'"
                    class="w-full h-full object-cover rounded-4xl">
            </div>

            <div class="absolute flex flex-row-reverse items-start left-0 top-0 z-10">
                <div class="w-[10px] h-[10px] bg-transparent curve-1 ">
                    <div class="concave-1"></div>
                </div>
                <div class="flex flex-col">
                    <div class="h-20 md:h-22 lg:h-28 w-8 lg:w-8 bg-white rounded-br-2xl">

                    </div>
                    <div class="w-[10px] h-[10px] bg-transparent curve-2">
                        <div class="concave-2"></div>
                    </div>
                </div>
            </div>

            <div class="absolute flex flex-col items-start left-0 bottom-1/2 translate-y-1/2 z-10">
                <div class="w-[10px] h-[10px] bg-transparent curve-3">
                    <div class="concave-3"></div>
                </div>
                <div class="h-20 md:h-22 lg:h-24 w-[60px] bg-white rounded-r-full">

                </div>
                <div class="w-[10px] h-[10px] bg-transparent curve-4">
                    <div class="concave-4"></div>
                </div>
            </div>

            <div class="absolute -left-6 bottom-1/2 translate-y-1/2 z-20">
                <div class="w-16 h-16 rounded-full bg-primary flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M34 32L26 24L34 16M22 32L14 24L22 16" stroke="white" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>

            <div class="absolute flex flex-col items-start left-0 bottom-0 z-10">
                <div class="w-[10px] h-[10px] bg-transparent curve-5">
                    <div class="concave-5"></div>
                </div>
                <div class="flex items-end">
                    <div class="h-20 md:h-22 lg:h-28 w-8 bg-white rounded-tr-2xl">

                    </div>
                    <div class="w-[10px] h-[10px] bg-transparent curve-6">
                        <div class="concave-6"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile & Tablet -->
        <div class="w-full h-[60vh] lg:w-[55%] md:h-[40vh] relative lg:hidden">
            <div class="w-full h-full">
                <img fetchpriority="high" decoding="async" width="380" height="494"
                    :src="getImageUrl(`sliders/${slider[0]?.image || 'faculty-image/TEA25aKWZkbL1D3oiGAieMvVW2B1nxv237PJJ4f4.jpg'}`)" :alt="slider[0]?.title || 'Penerimaan Mahasiswa Baru STIKes Budi Luhur Cimahi'"
                    class="w-full h-full object-cover rounded-4xl">
            </div>

            <div class="absolute flex items-end left-0 bottom-0 z-10">
                <div class="flex flex-col-reverse items-start">
                    <div class="h-8 md:h-22 lg:h-28 w-12 bg-white rounded-tr-2xl">

                    </div>
                    <div class="w-[10px] h-[10px] bg-transparent curve-8">
                        <div class="concave-8"></div>
                    </div>
                </div>
                <div class="w-[10px] h-[10px] bg-transparent curve-7">
                    <div class="concave-7"></div>
                </div>
            </div>

            <div class="absolute flex items-end right-1/2 bottom-0 translate-x-1/2 z-10">
                <div class="w-[10px] h-[10px] bg-transparent curve-9">
                    <div class="concave-9"></div>
                </div>
                <div class="h-10 md:h-16 lg:h-24 w-[60px] md:w-[120px] bg-white rounded-t-full">

                </div>
                <div class="w-[10px] h-[10px] bg-transparent curve-10">
                    <div class="concave-10"></div>
                </div>
            </div>

            <div class="absolute -bottom-6 right-1/2 translate-x-1/2 z-20 rounded-full">
                <div class="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                        <path
                            d="M1.66671 1.33332L7.00004 6.66666L12.3334 1.33332M1.66671 9.33332L7.00004 14.6667L12.3334 9.33332"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>

            <div class="absolute flex items-end right-0 bottom-0 z-10">
                <div class="w-[10px] h-[10px] bg-transparent curve-11">
                    <div class="concave-11"></div>
                </div>
                <div class="flex flex-col-reverse items-end">
                    <div class="h-8 md:h-22 lg:h-28 w-12 bg-white rounded-tl-2xl">

                    </div>
                    <div class="w-[10px] h-[10px] bg-transparent curve-12">
                        <div class="concave-12"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.curve-1 {
    height: 20px;
    overflow: hidden;
    position: relative;
    transform: rotateX(0deg) rotateY(0deg);
    width: 20px;
}

.concave-1 {
    border-radius: 50%;
    box-shadow: -20px -20px white;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0;
    left: 0;
}

.curve-2 {
    height: 20px;
    overflow: hidden;
    position: relative;
    width: 20px;
}

.concave-2 {
    border-radius: 50%;
    box-shadow: -20px -20px white;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0;
    left: 0;
}

.curve-3 {
    height: 20px;
    overflow: hidden;
    position: relative;
    transform: rotateX(180deg);
    width: 20px;
}

.concave-3 {
    border-radius: 50%;
    box-shadow: -20px -20px white;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0;
    left: 0;
}

.curve-4 {
    height: 20px;
    overflow: hidden;
    position: relative;
    width: 20px;
}

.concave-4 {
    border-radius: 50%;
    box-shadow: -20px -20px white;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0;
    left: 0;
}

.curve-5 {
    height: 20px;
    overflow: hidden;
    position: relative;
    transform: rotateX(180deg);
    width: 20px;
}

.concave-5 {
    border-radius: 50%;
    box-shadow: -20px -20px white;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0;
    left: 0;
}

.curve-6 {
    height: 20px;
    overflow: hidden;
    position: relative;
    transform: rotateX(180deg);
    width: 20px;
}

.concave-6 {
    border-radius: 50%;
    box-shadow: -20px -20px white;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0;
    left: 0;
}

.curve-7 {
    height: 20px;
    overflow: hidden;
    position: relative;
    transform: rotateX(180deg);
    width: 20px;
}

.concave-7 {
    border-radius: 50%;
    box-shadow: -20px -20px white;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0;
    left: 0;
}

.curve-8 {
    height: 20px;
    overflow: hidden;
    position: relative;
    transform: rotateX(180deg);
    width: 20px;
}

.concave-8 {
    border-radius: 50%;
    box-shadow: -20px -20px white;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0;
    left: 0;
}

.curve-9 {
    height: 20px;
    overflow: hidden;
    position: relative;
    transform: rotateY(180deg) rotateX(180deg);
    width: 20px;
}

.concave-9 {
    border-radius: 50%;
    box-shadow: -20px -20px white;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0;
    left: 0;
}

.curve-10 {
    height: 20px;
    overflow: hidden;
    position: relative;
    transform: rotateX(180deg);
    width: 20px;
}

.concave-10 {
    border-radius: 50%;
    box-shadow: -20px -20px white;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0;
    left: 0;
}

.curve-11 {
    height: 20px;
    overflow: hidden;
    position: relative;
    transform: rotateX(180deg) rotateY(180deg);
    width: 20px;
}

.concave-11 {
    border-radius: 50%;
    box-shadow: -20px -20px white;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0;
    left: 0;
}

.curve-12 {
    height: 20px;
    overflow: hidden;
    position: relative;
    transform: rotateX(180deg) rotateY(180deg);
    width: 20px;
}

.concave-12 {
    border-radius: 50%;
    box-shadow: -20px -20px white;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0;
    left: 0;
}
</style>