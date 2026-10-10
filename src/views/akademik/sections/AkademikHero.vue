<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Ip from '@/assets/ip.png'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { ref, computed } from 'vue';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();
const activeIndex = ref(1);
const swiperInstance = ref<any>(null);

const data = computed(() => [
    {
        fakultas: langStore.currentLang === 'en'
            ? 'Priority Focus & Healthcare Career Guarantee'
            : 'Fokus Bidang Prioritas & Jaminan Karier Kesehatan',
        prodi: langStore.currentLang === 'en'
            ? 'Comprehensive nursing and midwifery programs with strong clinical affiliations and direct job placement.'
            : 'Prodi berfokus keperawatan & kebidanan dengan jaminan kemitraan klinik dan serapan karier rumah sakit.'
    },
    {
        fakultas: langStore.currentLang === 'en'
            ? 'Innovative Clinical Practicum & Hospital Partnerships'
            : 'Praktik Klinik Inovatif & Kerja Sama Rumah Sakit',
        prodi: langStore.currentLang === 'en'
            ? 'Students build hands-on skills in teaching hospitals, community clinics, and state-of-the-art simulation labs.'
            : 'Mahasiswa membangun kompetensi klinis melalui praktik di rumah sakit rujukan dan laboratorium berstandar modern.'
    },
    {
        fakultas: langStore.currentLang === 'en'
            ? 'Global Healthcare Pathways (Japan & Germany)'
            : 'Program Penempatan Karier Luar Negeri (Jepang & Jerman)',
        prodi: langStore.currentLang === 'en'
            ? 'Specialized language preparation and career guidance for international nursing and midwifery opportunities.'
            : 'Pembekalan bahasa asing intensif dan pendampingan kerja perawat & bidan ke Jepang serta Jerman.'
    },
    {
        fakultas: langStore.currentLang === 'en'
            ? 'Dedicated Mentorship by Experienced Faculty'
            : 'Bimbingan Dosen Ahli & Praktisi Medis Berpengalaman',
        prodi: langStore.currentLang === 'en'
            ? 'Guided directly by certified health educators and senior healthcare practitioners.'
            : 'Anda akan dibimbing langsung oleh akademisi kesehatan berdedikasi dan praktisi senior berpengalaman.'
    },
    {
        fakultas: langStore.currentLang === 'en'
            ? 'Modern Simulation & OSCE Laboratories'
            : 'Fasilitas Laboratorium OSCE, CBT & Mini Hospital',
        prodi: langStore.currentLang === 'en'
            ? 'Integrated laboratories designed for comprehensive clinical nursing and midwifery training.'
            : 'Laboratorium simulasi keperawatan, kebidanan, dan mini hospital untuk kesiapan praktik klinis nyata.'
    },
]);

const modules = [Navigation, Pagination, Autoplay];

const prodiSwiperInstances = ref<any[]>([]);
const activeProdiIndexes = ref<number[]>(data.value.map(() => 0));

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
</script>

<template>
    <section
        class="w-full h-fit md:h-[70vh] lg:h-[70vh] py-8 md:py-8 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
        <div class="w-full lg:w-[50%] space-y-8 px-4 lg:px-0">
            <div
                class="flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-left gap-4 lg:gap-6">
                <Tag :title="langStore.currentLang === 'en' ? 'Academics' : 'Akademik'" />
                <h1 data-aos="fade-up-sm" data-aos-duration="1000"
                    class="text-xl md:text-2xl lg:text-4xl xl:text-[44px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-gstart to-gend">
                    {{ langStore.currentLang === 'en' ? 'Quality Healthcare Education for a Global Career' : 'Pendidikan Kesehatan Berkualitas untuk Karier Masa Depan' }}
                </h1>
                <Subtitle
                    :text="langStore.currentLang === 'en' 
                        ? 'Discover accredited programs in Nursing and Midwifery with cutting-edge curricula tailored to national and global healthcare demands.' 
                        : 'Temukan program studi terakreditasi di bidang Keperawatan dan Kebidanan dengan kurikulum relevan yang mendukung kesiapan lulusan menghadapi kebutuhan industri kesehatan nasional dan global.'" />
                <Button :text="langStore.t('cta.register')" />
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
                                    <h3 class="text-sm lg:text-base xl:text-xl font-semibold text-gstart">{{ item.fakultas }}</h3>
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
            </div>
        </div>
    </section>
</template>