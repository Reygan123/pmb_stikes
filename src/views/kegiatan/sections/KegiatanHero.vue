<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { ref } from 'vue';
import Button from '@/components/ui/Button.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import type { Slider } from '@/core/types/slider';
import { getImageUrl } from '@/utils/imageUtils';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import EmptySection from '@/components/sections/EmptySection.vue';
import KegiatanHeroSkeleton from '@/components/sections/skeletons/KegiatanHeroSkeleton.vue';

defineProps<{
    slider: Slider[],
    loading: boolean,
    error: string | null
}>();

const activeIndex = ref(1);
const swiperInstance = ref<any>(null);

const onSwiper = (swiper: any) => {
    swiperInstance.value = swiper;
};

const onSlideChange = (swiper: any) => {
    activeIndex.value = swiper.realIndex;
};

const prevSlide = () => {
    swiperInstance.value?.slidePrev();
};

const nextSlide = () => {
    swiperInstance.value?.slideNext();
};

const modules = [Navigation, Pagination, Autoplay, EffectFade];
</script>

<template>
    <div v-if="loading">
        <KegiatanHeroSkeleton />
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && slider?.length === 0">
        <EmptySection name="Kegiatan" />
    </div>

    <section v-if="!loading && !error && slider?.length > 0"
        class="w-full h-full md:h-[60vh] lg:h-[100vh] xl:h-[100vh] p-4 md:p-8">
        <!-- Tablet & Dekstop -->
        <div class="w-full h-full rounded-4xl relative overflow-hidden hidden md:block">
            <div class="absolute inset-0">
                <img :src="getImageUrl(`sliders/${slider[activeIndex]?.image}`)" :alt="slider[activeIndex]?.title"
                    loading="lazy" class="w-full h-full object-cover">
            </div>

            <div class="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

            <div class="absolute top-1/5 left-6 space-y-6 lg:space-y-8 w-3/5 lg:w-2/5 z-10">
                <div class="space-y-2 text-white">
                    <h1 class="text-2xl md:text-4xl lg:text-[44px] xl:text-[56px] font-medium">{{
                        slider[activeIndex]?.title }}</h1>
                    <p class="text-base" v-html="slider[activeIndex]?.description"></p>
                </div>
                <Button onclick="window.open('http://pendaftaran.universitas-bth.ac.id/', '_blank')" :text="'Daftar Sekarang'" />
            </div>

            <div class="absolute right-8 bottom-8 flex flex-col gap-4 z-10 w-1/2">
                <div class="w-full h-fit overflow-visible">
                    <Swiper :modules="modules" :slides-per-view="2" :space-between="20" :loop="true" :breakpoints="{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        }
                    }" :autoplay="{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                        waitForTransition: true
                    }" @swiper="onSwiper" @slide-change="onSlideChange" class="w-full h-full">
                        <SwiperSlide v-for="(item, index) in slider" :key="index">
                            <div class="transition-all duration-500 ease-in-out cursor-pointer w-full md:h-[160px] lg:h-[220px] overflow-visible"
                                :class="{
                                    'scale-90': activeIndex !== index,
                                    'scale-100': activeIndex === index
                                }">
                                <div class="w-full h-full rounded-4xl border-2 border-white overflow-hidden">
                                    <img :src="getImageUrl(`sliders/${item.image}`)" :alt="item.title"
                                        class="w-full h-full object-cover">
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div class="w-full flex justify-between items-center">
                    <div>

                    </div>
                    <div class="flex items-center gap-4">
                        <div @click="prevSlide"
                            class="w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-white border border-primary group hover:bg-primary cursor-pointer flex items-center justify-center transition duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-primary group-hover:text-white"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                        <div @click="nextSlide"
                            class="w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-white border border-primary group hover:bg-primary cursor-pointer flex items-center justify-center transition duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-primary group-hover:text-white"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile -->
        <div class="w-full h-full relative md:hidden">
            <Swiper :modules="modules" :slides-per-view="1" :space-between="0" :loop="true" :effect="'fade'"
                :fade-effect="{
                    crossFade: true
                }" :breakpoints="{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    }
                }" :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    waitForTransition: true
                }" @swiper="onSwiper" @slide-change="onSlideChange"
                class="w-full rounded-4xl h-[60vh] overflow-hidden relative">
                <SwiperSlide v-for="(item, index) in slider" :key="index">
                    <div class="absolute inset-0">
                        <img :src="getImageUrl(`sliders/${item.image}`)" :alt="item.title"
                            class="w-full h-full object-cover">
                    </div>
                    <div
                        class="absolute w-full h-3/5 bottom-0 bg-gradient-to-t from-white via-white/90 to-transparent z-10">
                    </div>
                    <div
                        class="absolute bottom-4 z-20 w-full h-fit flex flex-col justify-center items-center text-center gap-4 px-4">
                        <h1
                            class="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gstart to-gend">
                            {{ item.title }}</h1>
                        <Subtitle color="text-gstart" :text="item.description" />
                        <Button onclick="window.open('http://pendaftaran.universitas-bth.ac.id/', '_blank')" text="Daftar Sekarang" weight="font-normal" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>