<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { ref } from 'vue';
import type { PrestasiFakultas } from '@/core/types/prestasi';
import { getImageUrl } from '@/utils/imageUtils';
import { useRouter } from 'vue-router';
import PrestasiSkeleton from '@/components/sections/skeletons/PrestasiSkeleton.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import EmptySection from '@/components/sections/EmptySection.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import Button from '@/components/ui/Button.vue';

const router = useRouter()

const navigateToDetail = () => {
    router.push('/prestasi')
}

defineProps<{
    prestasi: PrestasiFakultas[],
    loading: boolean,
    error: string | null
}>()

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

const modules = [Navigation, Pagination, Autoplay];
</script>

<template>
    <div v-if="loading">
        <PrestasiSkeleton />
    </div>

    <div v-else-if="error">
        <ErrorSection />
    </div>

    <div v-else-if="loading === false && prestasi?.length === 0">
        <EmptySection name="Prestasi" />
    </div>

    <section v-if="!loading && !error && prestasi?.length > 0"
        class="px-0 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-16">
        <div class="w-full flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div
                class="flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-left gap-3">
                <Tag title="Prestasi" />
                <Title title="Capaian dan <br/> Prestasi" />
                <div class="md:hidden">
                    <Subtitle
                        text="Kontribusi dan keunggulan civitas academik mahasiswa Universitas Bakti Tunas Husada" />
                </div>
                <Button @click="navigateToDetail" text="Selengkapnya" />
            </div>

            <div class="max-w-sm hidden md:block">
                <Subtitle text="Kontribusi dan keunggulan civitas academik mahasiswa Universitas Bakti Tunas Husada" />
            </div>
        </div>

        <div class="h-[40vh] md:h-[35vh] lg:h-[45vh] relative">
            <div class="absolute right-0 bottom-[45%] lg:bottom-3/5 hidden md:flex gap-4 z-10">
                <div @click="prevSlide"
                    class="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full bg-transparent border border-primary group hover:bg-primary cursor-pointer flex items-center justify-center transition duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-primary group-hover:text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                <div @click="nextSlide"
                    class="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full bg-transparent border border-primary group hover:bg-primary cursor-pointer flex items-center justify-center transition duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-primary group-hover:text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

            <Swiper :modules="modules" :slides-per-view="1.4" :space-between="0" :centered-slides="true" :loop="true"
                :breakpoints="{
                    640: {
                        slidesPerView: 1.2,
                        spaceBetween: 0
                    },
                    768: {
                        slidesPerView: 3,
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
                <SwiperSlide v-for="(item, index) in prestasi" :key="index">
                    <div class="transition-all duration-500 ease-in-out cursor-pointer w-full relative" :class="{
                        'h-[40vh] scale-80 md:scale-100 md:h-[15vh] lg:h-[25vh]': activeIndex !== index,
                        'h-[40vh] md:h-[35vh] lg:h-[45vh]': activeIndex === index
                    }">
                        <div class="w-full h-full overflow-hidden rounded-4xl">
                            <img :src="getImageUrl(`/prestasis/${item.image}`)" :alt="item.title"
                                class="w-full h-full object-cover">
                        </div>

                        <div v-if="activeIndex === index"
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-4xl">
                            <div class="h-fit p-4 text-white w-full">
                                <h3 class="text-base md:text-lg font-medium">{{ item.title }}</h3>
                                <p class="text-sm md:text-base">{{ item.name }}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<style scoped>
.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    opacity: 1 !important;
    transition: all 0.3s ease;
}
</style>