<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { ref } from 'vue';

const activeIndex = ref(1);
const swiperInstance = ref<any>(null);

const data = [
    {
        image: 'https://i.pravatar.cc/150?img=1',
        title: 'Jonathan Doe',
        description: 'Pengalaman saya dengan layanan ini sangat luar biasa, timnya responsif dan profesional.',
        role: 'Software Engineer',
        company: 'Tech Corp',
        companyLogo: ''
    },
    {
        image: 'https://i.pravatar.cc/150?img=2',
        title: 'Amelia Putri',
        description: 'Sangat membantu dalam mengembangkan bisnis kami, rekomendasi yang tepat!',
        role: 'Marketing Manager',
        company: 'Creative Agency',
        companyLogo: ''
    },
    {
        image: 'https://i.pravatar.cc/150?img=3',
        title: 'Michael Tan',
        description: 'Prosesnya cepat, hasilnya memuaskan, dan supportnya luar biasa.',
        role: 'UI/UX Designer',
        company: 'Design Studio',
        companyLogo: ''
    },
    {
        image: 'https://i.pravatar.cc/150?img=4',
        title: 'Siti Aisyah',
        description: 'Saya sangat terbantu dengan sistem yang dibuat, memudahkan pekerjaan sehari-hari.',
        role: 'HR Specialist',
        company: 'Global Indonesia',
        companyLogo: ''
    },
    {
        image: 'https://i.pravatar.cc/150?img=5',
        title: 'Daniel Wijaya',
        description: 'User interface yang mudah digunakan, bahkan untuk pemula.',
        role: 'Product Owner',
        company: 'Startup Hub',
        companyLogo: ''
    },
    {
        image: 'https://i.pravatar.cc/150?img=6',
        title: 'Clara Anggraini',
        description: 'Layanan pelanggan yang ramah dan solutif, benar-benar profesional.',
        role: 'Customer Success',
        company: 'SaaS Solutions',
        companyLogo: ''
    },
    {
        image: 'https://i.pravatar.cc/150?img=7',
        title: 'Rizky Firmansyah',
        description: 'Saya kagum dengan dedikasi dan kualitas kerja tim ini.',
        role: 'Data Analyst',
        company: 'FinTech Global',
        companyLogo: ''
    },
];

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
    <section class="w-full h-full px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-16">
        <div class="w-full h-[50vh] relative">
            <Swiper :modules="modules" :slides-per-view="1" :space-between="20" :centered-slides="true" :loop="true"
                :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    waitForTransition: true
                }" @swiper="onSwiper" @slide-change="onSlideChange" class="w-full h-full">
                <SwiperSlide v-for="(item, index) in data" :key="index">
                    <div
                        class="transition-all duration-500 ease-in-out cursor-pointer w-full flex justify-center items-center gap-20 h-full">
                        <div class="w-1/2 h-full rounded-4xl">
                            <img :src="item.image" :alt="item.title" class="w-full h-full rounded-4xl object-cover">
                        </div>
                        <div class="space-y-8">
                            <p class="text-2xl" v-html="item.description"></p>
                            <div class="w-full h-full flex items-center gap-5">
                                <div class="space-y-1">
                                    <h5 class="text-lg font-medium">{{ item.title }}</h5>
                                    <p class="text-base">{{ item.role }} <span>{{ item.company }}</span></p>
                                </div>
                                <div class="w-[1px] h-14 bg-black"></div>
                                <div>
                                    <img :src="item.companyLogo" :alt="`Logo ${item.company}`"
                                        class="w-[120px] object-contain">
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

        <div class="w-full flex justify-between items-center">
            <div class="flex gap-2">
                <div v-for="(_, index) in data" :key="index" 
                     :class="['w-3 h-3 rounded-full', activeIndex === index ? 'bg-black' : 'bg-gray-300']">
                </div>
            </div>

            <div class="flex gap-4 z-10">
                <div @click="prevSlide"
                    class="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full bg-transparent border border-black hover:bg-black cursor-pointer flex items-center justify-center transition duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-black hover:text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                <div @click="nextSlide"
                    class="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full bg-transparent border border-black hover:bg-black cursor-pointer flex items-center justify-center transition duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-black hover:text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>