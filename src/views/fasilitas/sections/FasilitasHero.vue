<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { ref } from 'vue';
import type { Fasilitas } from '@/core/types/fasilitas';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import EmptySection from '@/components/sections/EmptySection.vue';
import FasilitasSkeleton from '@/components/sections/skeletons/FasilitasSkeleton.vue';
import { getImageUrl } from '@/utils/imageUtils';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

defineProps<{
    fasilitas: Fasilitas[]
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

const modules = [Navigation, Pagination, Autoplay];
</script>

<template>
    <div v-if="loading">
        <FasilitasSkeleton />
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && fasilitas?.length === 0">
        <EmptySection name="Fasilitas" />
    </div>

    <section v-if="!loading && !error && fasilitas?.length > 0"
        class="px-0 py-4 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div class="px-4 md:px-0 flex flex-col justify-center items-center text-center gap-4">
            <h1 data-aos="fade-up-sm" data-aos-duration="1000"
                class="text-2xl md:text-4xl lg:text-[44px] xl:text-[56px] text-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-gstart to-gend">
                {{ langStore.currentLang === 'en' ? 'Campus Facilities & Infrastructure' : 'Fasilitas dan Infrastruktur' }}
                <br /> STIKes Budi Luhur Cimahi
            </h1>
            <Subtitle :text="langStore.currentLang === 'en' ? 'State-of-the-art facilities fostering effective learning, clinical practicum, and student research.' : 'Fasilitas modern yang mendukung efektivitas pembelajaran, praktik klinis, dan penelitian.'" />
            <Button :text="langStore.currentLang === 'en' ? 'Explore Facilities' : 'Jelajahi Fasilitas'" />
        </div>

        <!-- Dekstop & Tablet -->
        <div class="w-full hidden md:flex flex-col justify-center items-center gap-14">
            <div class="w-full md:h-[30vh] lg:h-[50vh] xl:h-[40vh] flex justify-center items-center gap-4">
                <div class="w-full h-full grid grid-cols-5 gap-4 lg:gap-8 justify-center items-center">
                    <div
                        class="w-full h-[60%] relative rounded-xl overflow-hidden -skew-y-12 hover:skew-0 hover:-translate-y-2 transition-all duration-500">
                        <img :src="getImageUrl(`/facilities/${(fasilitas[0]?.image || fasilitas[0]?.image1)}` || '')"
                            :alt="fasilitas[0]?.title || ''" class="w-full h-full object-cover">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                            <div class="h-fit p-4 text-white w-full">
                                <h3 class="text-base md:text-lg font-medium">{{ fasilitas[0]?.title }}</h3>
                            </div>
                        </div>
                    </div>
                    <div
                        class="w-full h-[80%] relative rounded-xl overflow-hidden -skew-y-12 hover:skew-0 hover:-translate-y-2 transition-all duration-500">
                        <img :src="getImageUrl(`/facilities/${(fasilitas[1]?.image || fasilitas[1]?.image1)}` || '')"
                            :alt="fasilitas[1]?.title || ''" class="w-full h-full object-cover">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                            <div class="h-fit p-4 text-white w-full">
                                <h3 class="text-base md:text-lg font-medium">{{ fasilitas[1]?.title }}</h3>
                            </div>
                        </div>
                    </div>
                    <div
                        class="w-full h-[90%] relative rounded-xl overflow-hidden mt-20 hover:mt-0 transition-all duration-500">
                        <img :src="getImageUrl(`/facilities/${(fasilitas[2]?.image || fasilitas[2]?.image1)}` || '')"
                            :alt="fasilitas[2]?.title || ''" class="w-full h-full rounded-xl object-cover">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                            <div class="h-fit p-4 text-white w-full">
                                <h3 class="text-base md:text-lg font-medium">{{ fasilitas[2]?.title }}</h3>
                            </div>
                        </div>
                    </div>
                    <div
                        class="w-full h-[80%] relative rounded-xl overflow-hidden skew-y-12 hover:skew-0 hover:-translate-y-2 transition-all duration-500">
                        <img :src="getImageUrl(`/facilities/${(fasilitas[3]?.image || fasilitas[3]?.image1)}` || '')"
                            :alt="fasilitas[3]?.title || ''" class="w-full h-full object-cover">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                            <div class="h-fit p-4 text-white w-full">
                                <h3 class="text-base md:text-lg font-medium">{{ fasilitas[3]?.title }}</h3>
                            </div>
                        </div>
                    </div>
                    <div
                        class="w-full h-[60%] relative rounded-xl overflow-hidden skew-y-12 hover:skew-0 hover:-translate-y-2 transition-all duration-500">
                        <img :src="getImageUrl(`/facilities/${(fasilitas[4]?.image || fasilitas[4]?.image1)}` || '')"
                            :alt="fasilitas[4]?.title || ''" class="w-full h-full object-cover">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                            <div class="h-fit p-4 text-white w-full">
                                <h3 class="text-base md:text-lg font-medium">{{ fasilitas[4]?.title }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile -->
        <div class="md:hidden">
            <Swiper :modules="modules" :slides-per-view="1.4" :space-between="20" :centered-slides="true" :loop="true"
                :breakpoints="{
                    640: {
                        slidesPerView: 1.2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    }
                }" :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    waitForTransition: true
                }" @swiper="onSwiper" @slide-change="onSlideChange" class="w-full h-full">
                <SwiperSlide v-for="(item, index) in fasilitas" :key="index">
                    <div class="transition-all duration-500 ease-in-out cursor-pointer w-full" :class="{
                        'h-[45vh] md:h-[15vh] lg:h-[25vh]': activeIndex !== index,
                        'h-[45vh] md:h-[35vh] lg:h-[45vh]': activeIndex === index
                    }">
                        <div class="w-full h-full overflow-hidden rounded-4xl relative">
                            <img :src="getImageUrl(`facilities/${item.image}`)" :alt="item.title" class="w-full h-full object-cover">
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                                <div class="h-fit p-4 text-white w-full">
                                    <h3 class="text-base md:text-lg font-medium">{{ item.title }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>