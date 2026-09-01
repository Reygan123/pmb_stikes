<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { ref, computed } from 'vue';
import type { TestimoniFakultas } from '@/core/types/testimoni';
import { getImageUrl } from '@/utils/imageUtils';
import TestimonialSkeleton from '@/components/sections/skeletons/TestimonialSkeleton.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import EmptySection from '@/components/sections/EmptySection.vue';
import Tag from '@/components/ui/Tag.vue';


const props = defineProps<{
    testimoni: TestimoniFakultas[],
    loading: boolean,
    error: string | null
}>();

const activeIndex = ref(1);
const swiperInstance = ref<any>(null);

const activeTestimonial = computed(() => {
    return props.testimoni.find((_, index) => index === activeIndex.value);
});

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
        <TestimonialSkeleton />
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && testimoni?.length === 0">
        <EmptySection name="Testimoni"/>
    </div>

    <section v-if="!loading && !error && testimoni?.length > 0" class="px-0 py-4 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div class="flex flex-col justify-center items-center text-center gap-6 px-4 md:px-0">
            <Tag title="Testimoni" />

            <p class="text-lg lg:text-2xl xl:text-[32px]" v-html="activeTestimonial?.description || ''">
            </p>
        </div>

        <div class="w-full flex justify-between items-center gap-4">
            <div class="w-fit ml-auto hidden md:block">
                <div @click="prevSlide"
                    class="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full group bg-transparent border border-primary hover:bg-primary cursor-pointer flex items-center justify-center transition duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-primary group-hover:text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
            </div>

            <div class="w-full md:w-[80%] h-[35vh] lg:h-[45vh] relative">
                <Swiper :modules="modules" :slides-per-view="1.2" :space-between="20" :breakpoints="{
                    640: {
                        slidesPerView: 1.2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                }" :centered-slides="true" :loop="true" :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    waitForTransition: true
                }" @swiper="onSwiper" @slide-change="onSlideChange" class="w-full h-full">
                    <SwiperSlide v-for="(item, index) in testimoni" :key="index">
                        <div class="transition-all duration-500 ease-in-out cursor-pointer w-full" :class="{
                            'h-[25vh] md:h-[15vh] lg:h-[25vh]': activeIndex !== index,
                            'h-[35vh] md:h-[35vh] lg:h-[45vh]': activeIndex === index
                        }">
                            <div class="w-full h-full rounded-4xl overflow-hidden">
                                <img :src="getImageUrl(`/testimonies/${item.image}`)" :alt="item.title"
                                    class="w-full h-full object-cover">
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div class="space-y-1 text-center mt-2">
                    <h6 class="text-sm md:text-base lg:text-lg" v-html="activeTestimonial?.name || ''"></h6>
                    <p class="text-sm lg:text-base text-netral" v-html="activeTestimonial?.title || ''"></p>
                </div>
            </div>

            <div class="w-fit mr-auto hidden md:block">
                <div @click="nextSlide"
                    class="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full group bg-transparent border border-primary hover:bg-primary cursor-pointer flex items-center justify-center transition duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-primary group-hover:text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>

        <div class="flex items-center gap-4 pt-10 md:hidden">
            <div class="w-fit ml-auto">
                <div @click="prevSlide"
                    class="w-10 h-10 rounded-full group bg-transparent border border-primary hover:bg-primary cursor-pointer flex items-center justify-center transition duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-primary group-hover:text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
            </div>

            <div class="w-fit mr-auto">
                <div @click="nextSlide"
                    class="w-10 h-10 rounded-full group bg-transparent border border-primary hover:bg-primary cursor-pointer flex items-center justify-center transition duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-primary group-hover:text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
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