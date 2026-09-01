<script setup lang="ts">
import Tag from '../ui/Tag.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { ref, computed } from 'vue';
import type { Testimonial } from '@/core/types/testimoni';
import TestimonialSkeleton from './skeletons/TestimonialSkeleton.vue';
import { getImageUrl } from '@/utils/imageUtils';
import ErrorSection from './ErrorSection.vue';
import EmptySection from './EmptySection.vue';
import Title from '../ui/Title.vue';
import Subtitle from '../ui/Subtitle.vue';
// import Button from '../ui/Button.vue';
// import { useRouter } from 'vue-router';

const props = defineProps<{
    testimoni: Testimonial[],
    loading: boolean,
    error: string | null
}>();

// const router = useRouter();
const activeIndex = ref(1);
const swiperInstance = ref<any>(null);
const desktopSwiperInstance = ref<any>(null);

const activeTestimonial = computed(() => {
    return props.testimoni.find((_, index) => index === activeIndex.value);
});

const progressWidth = computed(() => {
    if (props.testimoni.length === 0) return '0%';
    return `${((activeIndex.value + 1) / props.testimoni.length) * 100}%`;
});

const onSwiper = (swiper: any) => {
    swiperInstance.value = swiper;
};

const onSlideChange = (swiper: any) => {
    activeIndex.value = swiper.realIndex;
};

const onDesktopSwiper = (swiper: any) => {
    desktopSwiperInstance.value = swiper;
};

const onDesktopSlideChange = (swiper: any) => {
    activeIndex.value = swiper.realIndex;
};

const prevSlide = () => {
    swiperInstance.value?.slidePrev();
};

const nextSlide = () => {
    swiperInstance.value?.slideNext();
};

// const prevDesktopSlide = () => {
//     desktopSwiperInstance.value?.slidePrev();
// };

// const nextDesktopSlide = () => {
//     desktopSwiperInstance.value?.slideNext();
// };

const modules = [Navigation, Pagination, Autoplay];

// const navigateToTestimoni = () => {
//     router.push('/testimoni')
// }
</script>

<template>
    <div v-if="loading">
        <TestimonialSkeleton />
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && testimoni?.length === 0">
        <EmptySection name="Testimoni" />
    </div>

    <section v-if="!loading && !error && testimoni?.length > 0"
        class="px-4 md:p-0 lg:py-16 lg:pl-24 lg:pr-0 flex flex-col lg:flex-row gap-16">
        <div
            class="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-start gap-4">
            <Tag title="Testimoni" />
            <Title title="Apa Kata Mereka Tentang Universitas BTH" />
            <Subtitle
                text="Temukan bagaimana pengalaman belajar di Universitas BTH membentuk mahasiswa yang siap berinovasi, berkontribusi, dan bersaing ditingkat global." />
            <!-- <Button @click="navigateToTestimoni" text="Lihat Semua" /> -->
        </div>

        <div class="w-full md:w-1/2 space-y-14 hidden lg:block">
            <Swiper :modules="modules" :slides-per-view="1.3" :space-between="20" :loop="true" :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true
            }" @swiper="onDesktopSwiper" @slide-change="onDesktopSlideChange" class="w-full">
                <SwiperSlide v-for="(item, index) in testimoni" :key="index">
                    <div class="w-full p-6 rounded-4xl bg-primary/10 flex items-start gap-8 transition-all duration-500" :class="{
                                'scale-100': activeIndex === index,
                                'scale-90': activeIndex !== index
                            }">
                        <div class="w-[40%] space-y-4">
                            <div>
                                <img :src="getImageUrl(`/testimonies/${item.image}`)" :alt="item.name" class="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover">
                            </div>
                            <div class="space-y-1">
                                <h3 class="text-lg text-primary text-medium" v-html="item.name"></h3>
                                <h4 class="text-sm" v-html="item.title"></h4>
                            </div>
                        </div>

                        <div class="w-[60%] p-6 bg-gradient-to-b from-primary/20 to-primary/5 rounded-3xl space-y-6">
                            <div class="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M10.6767 4.31208C11.0932 3.03009 12.9069 3.03009 13.3235 4.31208L14.4993 7.93108C14.6856 8.5044 15.2199 8.89257 15.8227 8.89257H19.628C20.9759 8.89257 21.5364 10.6175 20.4459 11.4098L17.3674 13.6465C16.8797 14.0008 16.6756 14.6289 16.8619 15.2022L18.0378 18.8212C18.4543 20.1032 16.987 21.1692 15.8965 20.3769L12.818 18.1403C12.3303 17.7859 11.6699 17.7859 11.1822 18.1403L8.10367 20.3769C7.01315 21.1692 5.54585 20.1032 5.96239 18.8212L7.13828 15.2022C7.32456 14.6289 7.12049 14.0008 6.63279 13.6465L3.55429 11.4098C2.46376 10.6175 3.02421 8.89257 4.37218 8.89257H8.17742C8.78025 8.89257 9.31452 8.5044 9.50081 7.93108L10.6767 4.31208Z"
                                        fill="#F03C06" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M10.6767 4.31208C11.0932 3.03009 12.9069 3.03009 13.3235 4.31208L14.4993 7.93108C14.6856 8.5044 15.2199 8.89257 15.8227 8.89257H19.628C20.9759 8.89257 21.5364 10.6175 20.4459 11.4098L17.3674 13.6465C16.8797 14.0008 16.6756 14.6289 16.8619 15.2022L18.0378 18.8212C18.4543 20.1032 16.987 21.1692 15.8965 20.3769L12.818 18.1403C12.3303 17.7859 11.6699 17.7859 11.1822 18.1403L8.10367 20.3769C7.01315 21.1692 5.54585 20.1032 5.96239 18.8212L7.13828 15.2022C7.32456 14.6289 7.12049 14.0008 6.63279 13.6465L3.55429 11.4098C2.46376 10.6175 3.02421 8.89257 4.37218 8.89257H8.17742C8.78025 8.89257 9.31452 8.5044 9.50081 7.93108L10.6767 4.31208Z"
                                        fill="#F03C06" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M10.6767 4.31208C11.0932 3.03009 12.9069 3.03009 13.3235 4.31208L14.4993 7.93108C14.6856 8.5044 15.2199 8.89257 15.8227 8.89257H19.628C20.9759 8.89257 21.5364 10.6175 20.4459 11.4098L17.3674 13.6465C16.8797 14.0008 16.6756 14.6289 16.8619 15.2022L18.0378 18.8212C18.4543 20.1032 16.987 21.1692 15.8965 20.3769L12.818 18.1403C12.3303 17.7859 11.6699 17.7859 11.1822 18.1403L8.10367 20.3769C7.01315 21.1692 5.54585 20.1032 5.96239 18.8212L7.13828 15.2022C7.32456 14.6289 7.12049 14.0008 6.63279 13.6465L3.55429 11.4098C2.46376 10.6175 3.02421 8.89257 4.37218 8.89257H8.17742C8.78025 8.89257 9.31452 8.5044 9.50081 7.93108L10.6767 4.31208Z"
                                        fill="#F03C06" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M10.6767 4.31208C11.0932 3.03009 12.9069 3.03009 13.3235 4.31208L14.4993 7.93108C14.6856 8.5044 15.2199 8.89257 15.8227 8.89257H19.628C20.9759 8.89257 21.5364 10.6175 20.4459 11.4098L17.3674 13.6465C16.8797 14.0008 16.6756 14.6289 16.8619 15.2022L18.0378 18.8212C18.4543 20.1032 16.987 21.1692 15.8965 20.3769L12.818 18.1403C12.3303 17.7859 11.6699 17.7859 11.1822 18.1403L8.10367 20.3769C7.01315 21.1692 5.54585 20.1032 5.96239 18.8212L7.13828 15.2022C7.32456 14.6289 7.12049 14.0008 6.63279 13.6465L3.55429 11.4098C2.46376 10.6175 3.02421 8.89257 4.37218 8.89257H8.17742C8.78025 8.89257 9.31452 8.5044 9.50081 7.93108L10.6767 4.31208Z"
                                        fill="#F03C06" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M10.6767 4.31208C11.0932 3.03009 12.9069 3.03009 13.3235 4.31208L14.4993 7.93108C14.6856 8.5044 15.2199 8.89257 15.8227 8.89257H19.628C20.9759 8.89257 21.5364 10.6175 20.4459 11.4098L17.3674 13.6465C16.8797 14.0008 16.6756 14.6289 16.8619 15.2022L18.0378 18.8212C18.4543 20.1032 16.987 21.1692 15.8965 20.3769L12.818 18.1403C12.3303 17.7859 11.6699 17.7859 11.1822 18.1403L8.10367 20.3769C7.01315 21.1692 5.54585 20.1032 5.96239 18.8212L7.13828 15.2022C7.32456 14.6289 7.12049 14.0008 6.63279 13.6465L3.55429 11.4098C2.46376 10.6175 3.02421 8.89257 4.37218 8.89257H8.17742C8.78025 8.89257 9.31452 8.5044 9.50081 7.93108L10.6767 4.31208Z"
                                        fill="#F03C06" />
                                </svg>
                            </div>
                            <div>
                                <p class="text-base line-clamp-[8]" v-html="item.description"></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div v-if="testimoni.length > 1" class="w-full h-1 relative bg-primary/10">
                <div class="absolute h-full bg-primary shadow-md shadow-primary/80 transition-all duration-300" :style="{ width: progressWidth }"></div>
            </div>
        </div>

        <!-- Mobile -->
        <div class="px-0 py-0 md:p-8 lg:py-16 lg:px-24 lg:hidden flex flex-col gap-8 md:gap-12 lg:gap-16">
            <div class="flex flex-col justify-center items-center text-center gap-6 px-4 md:px-0">
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
                                    <img :src="getImageUrl(`/testimonies/${item.image}`)" loading="lazy"
                                        :alt="item.title" class="w-full h-full object-cover">
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <div class="space-y-1 text-center mt-2">
                        <h3 class="text-sm md:text-base lg:text-lg" v-html="activeTestimonial?.name || ''"></h3>
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
        </div>
    </section>
</template>

<style scoped></style>