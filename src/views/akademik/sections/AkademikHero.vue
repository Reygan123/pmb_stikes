<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Ip from '@/assets/ip.png'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { ref } from 'vue';

const activeIndex = ref(1);
const swiperInstance = ref<any>(null);

const data = [
    {
        fakultas: "Fokus Bidang Prioritas & Jaminan Penyerapan Industri",
        prodi: "Prodi berfokus prioritas dengan jaminan serapan industri, termasuk program ikatan dinas langsung kerja."
    },
    {
        fakultas: "Pembelajaran Inovatif Berbasis Proyek & Kolaborasi Nyata",
        prodi: "Mahasiswa membangun portofolio melalui proyek nyata dan kolaborasi lintas-disiplin, dari startup hingga produk inovatif."
    },
    {
        fakultas: "Integrasi Teknologi Masa Depan",
        prodi: "Mahasiswa berkolaborasi dengan teknologi masa depan, termasuk AI, untuk mempersiapkan diri memasuki industri 5.0."
    },
    {
        fakultas: "Sinergi Akademisi Unggul & Praktisi Industri",
        prodi: "Anda akan dibimbing langsung oleh sinergi akademisi unggul dan para pemimpin industri berpengalaman."
    },
    {
        fakultas: "Fasilitas Riset dan Praktik Berstandar Industri",
        prodi: "Lebih dari 20 laboratorium spesialis dan fasilitas praktik berstandar industri, termasuk Mini Hospital."
    },
]

const prodiSwiperInstances = ref<any[]>([]);
const activeProdiIndexes = ref<number[]>(data.map(() => 0));

const onSwiper = (swiper: any) => {
    swiperInstance.value = swiper;
};

const onSlideChange = (swiper: any) => {
    activeIndex.value = swiper.realIndex;
};

const onProdiSwiper = (swiper: any, index: number) => {
    prodiSwiperInstances.value[index] = swiper;
};

const onProdiSlideChange = (swiper: any, index: number) => {
    activeProdiIndexes.value[index] = swiper.realIndex;
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
    <section
        class="w-full h-fit md:h-[70vh] lg:h-[70vh] py-8 md:py-8 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
        <div class="w-full lg:w-[50%] space-y-8 px-4 lg:px-0">
            <div
                class="flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-left gap-4 lg:gap-6">
                <Tag title="Akademik" />
                <h1 data-aos="fade-up-sm" data-aos-duration="1000"
                    class="text-xl md:text-2xl lg:text-4xl xl:text-[44px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-gstart to-gend">
                    Pendidikan Berkualitas untuk <br /> Membangun Karier Masa Depan</h1>
                <Subtitle
                    text="Temukan program studi terakreditasi di bidang Kesehatan, Teknologi, dan Bisnis dengan kurikulum relevan yang mendukung kesiapan lulusan menghadapi kebutuhan industri nasional dan global." />
                <Button text="Daftar Sekarang" />
            </div>
        </div>

        <div class="w-full h-[60vh] md:h-full lg:w-[50%] relative">
            <div class="absolute w-[90%] md:w-[50%] lg:w-[50%] h-full left-1/2 -translate-x-1/2">
                <img :src="Ip" alt="Mockup Iphone" class="w-full h-full object-cover object-top">
            </div>

            <div class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>

            <div class="w-full h-full flex justify-center items-center relative">
                <Swiper :modules="modules" :slides-per-view="1.3" :space-between="20" :breakpoints="{
                    640: {
                        slidesPerView: 1.2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 1.5,
                        spaceBetween: 20
                    }
                }" :centered-slides="true" :loop="true" :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    waitForTransition: true
                }" @swiper="onSwiper" @slide-change="onSlideChange" class="w-full h-fit">
                    <SwiperSlide v-for="(item, index) in data" :key="index">
                        <div
                            class="transition-all duration-500 ease-in-out cursor-pointer w-full sm:h-[180px] md:h-[180px] lg:h-[260px] xl:h-[240px] bg-white border border-netral rounded-4xl p-4 flex flex-col justify-between gap-3 md:gap-6">
                            <div class="w-full flex justify-between items-center gap-2">
                                <div class="flex items-center gap-4">
                                    <h3 class="text-sm lg:text-base xl:text-xl">{{ item.fakultas }}</h3>
                                </div>
                            </div>
                            <div class="w-full p-4 rounded-3xl space-y-4 relative bg-gstart">
                                <Swiper :modules="modules" :slides-per-view="1" :space-between="10" :loop="true"
                                    @swiper="(swiper) => onProdiSwiper(swiper, index)"
                                    @slide-change="(swiper) => onProdiSlideChange(swiper, index)" class="w-full">
                                    <div class="">
                                        <h4 class="font-medium text-sm lg:text-base xl:text-xl text-white">{{
                                            item.prodi }}</h4>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div
                    class="absolute w-[20%] lg:w-[20%] xl:w-[20%] h-full left-0 bg-gradient-to-r from-white via-transparent to-transparent z-10">
                </div>
                <div
                    class="absolute w-[20%] lg:w-[20%] xl:w-[20%] h-full right-0 bg-gradient-to-r from-transparent via-transparent to-white z-10">
                </div>
            </div>

            <div class="absolute right-4 bottom-4 hidden lg:flex gap-4 z-10">
                <div @click="prevSlide"
                    class="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full bg-transparent group border border-primary hover:bg-primary cursor-pointer flex items-center justify-center transition duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-primary group-hover:text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                <div @click="nextSlide"
                    class="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full bg-transparent group border border-primary hover:bg-primary cursor-pointer flex items-center justify-center transition duration-500">
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