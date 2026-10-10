<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { ref, computed } from 'vue';
import Button from '@/components/ui/Button.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import type { Slider } from '@/core/types/slider';
import { getImageUrl } from '@/utils/imageUtils';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import EmptySection from '@/components/sections/EmptySection.vue';
import KegiatanHeroSkeleton from '@/components/sections/skeletons/KegiatanHeroSkeleton.vue';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

const props = defineProps<{
    slider: Slider[],
    loading: boolean,
    error: string | null
}>();

const activeIndex = ref(0);
const desktopSwiper = ref<any>(null);
const mobileSwiper = ref<any>(null);

const onDesktopSwiper = (swiper: any) => {
    desktopSwiper.value = swiper;
};

const onMobileSwiper = (swiper: any) => {
    mobileSwiper.value = swiper;
};

const onDesktopSlideChange = (swiper: any) => {
    const rawIndex = swiper.realIndex;
    activeIndex.value = props.slider.length > 0 ? rawIndex % props.slider.length : 0;
};

const onMobileSlideChange = (swiper: any) => {
    const rawIndex = swiper.realIndex;
    activeIndex.value = props.slider.length > 0 ? rawIndex % props.slider.length : 0;
};

const prevSlide = () => {
    desktopSwiper.value?.slidePrev();
};

const nextSlide = () => {
    desktopSwiper.value?.slideNext();
};

const goToSlide = (idx: number) => {
    desktopSwiper.value?.slideToLoop(idx);
    activeIndex.value = idx % (props.slider.length || 1);
};

// Ensure enough slides for seamless looping & swiping
const displaySliders = computed(() => {
    if (!props.slider || props.slider.length === 0) return [];
    if (props.slider.length === 1) return props.slider;
    if (props.slider.length <= 3) {
        return [...props.slider, ...props.slider, ...props.slider];
    }
    return props.slider;
});

const currentSlide = computed(() => {
    if (!props.slider || props.slider.length === 0) return null;
    return props.slider[activeIndex.value] || props.slider[0];
});

const modules = [Navigation, Pagination, Autoplay];
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
        class="w-full h-full md:h-[60vh] lg:h-[85vh] xl:h-[90vh] p-4 md:p-8">
        <!-- Tablet & Dekstop -->
        <div class="w-full h-full rounded-4xl relative overflow-hidden hidden md:block">
            <div class="absolute inset-0 transition-all duration-700">
                <img :src="getImageUrl(`sliders/${currentSlide?.image}`)" :alt="currentSlide?.title || 'Kegiatan'"
                    loading="lazy" class="w-full h-full object-cover">
            </div>

            <div class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent"></div>

            <div class="absolute top-1/4 left-8 lg:left-12 space-y-6 lg:space-y-8 w-3/5 lg:w-2/5 z-10 text-white">
                <div class="space-y-3">
                    <span class="text-xs uppercase tracking-widest text-blue-200 font-semibold bg-white/10 px-3 py-1 rounded-full backdrop-blur-xs">
                        {{ langStore.currentLang === 'en' ? 'Campus Activities' : 'Kegiatan Kampus' }}
                    </span>
                    <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight drop-shadow-sm">
                        {{ langStore.loc(currentSlide?.title) }}
                    </h1>
                    <p class="text-sm lg:text-base text-gray-200 line-clamp-3 leading-relaxed" v-html="langStore.loc(currentSlide?.description)"></p>
                </div>
                <Button :text="langStore.t('cta.register')" />
            </div>

            <div class="absolute right-8 bottom-8 flex flex-col gap-4 z-10 w-1/2 lg:w-5/12">
                <div class="w-full h-fit overflow-hidden">
                    <Swiper :modules="modules" 
                        :slides-per-view="2" 
                        :space-between="16" 
                        :loop="true" 
                        :grab-cursor="true"
                        :simulate-touch="true"
                        :allow-touch-move="true"
                        :autoplay="{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }" 
                        @swiper="onDesktopSwiper" 
                        @slide-change="onDesktopSlideChange" 
                        class="w-full h-full py-2">
                        <SwiperSlide v-for="(item, index) in displaySliders" :key="index">
                            <div @click="goToSlide(index % slider.length)"
                                class="transition-all duration-300 ease-out cursor-pointer w-full h-[140px] lg:h-[180px] rounded-3xl overflow-hidden border-2 shadow-lg"
                                :class="activeIndex === (index % slider.length) ? 'border-primary ring-2 ring-primary/50 scale-100' : 'border-white/60 opacity-75 hover:opacity-100 scale-95'">
                                <img :src="getImageUrl(`sliders/${item.image}`)" :alt="item.title"
                                    class="w-full h-full object-cover">
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div class="w-full flex justify-end items-center gap-3">
                    <button @click="prevSlide" aria-label="Previous slide"
                        class="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 backdrop-blur-xs border border-white text-primary hover:bg-primary hover:text-white cursor-pointer flex items-center justify-center transition-all duration-300 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button @click="nextSlide" aria-label="Next slide"
                        class="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 backdrop-blur-xs border border-white text-primary hover:bg-primary hover:text-white cursor-pointer flex items-center justify-center transition-all duration-300 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile -->
        <div class="w-full h-full relative md:hidden">
            <Swiper :modules="modules" 
                :slides-per-view="1" 
                :space-between="0" 
                :loop="true" 
                :grab-cursor="true"
                :simulate-touch="true"
                :allow-touch-move="true"
                :autoplay="{
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }" 
                @swiper="onMobileSwiper" 
                @slide-change="onMobileSlideChange"
                class="w-full rounded-4xl h-[60vh] overflow-hidden relative shadow-lg">
                <SwiperSlide v-for="(item, index) in displaySliders" :key="index">
                    <div class="absolute inset-0">
                        <img :src="getImageUrl(`sliders/${item.image}`)" :alt="item.title"
                            class="w-full h-full object-cover">
                    </div>
                    <div class="absolute w-full h-3/5 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                    <div class="absolute bottom-6 z-20 w-full h-fit flex flex-col justify-center items-center text-center gap-3 px-6 text-white">
                        <h1 class="text-xl font-bold leading-snug drop-shadow-sm">
                            {{ langStore.loc(item.title) }}
                        </h1>
                        <Subtitle color="text-gray-200" :text="langStore.loc(item.description)" />
                        <Button :text="langStore.t('cta.register')" weight="font-normal" class="mt-2" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>