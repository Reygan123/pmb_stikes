<script setup lang="ts">
import Button from '../ui/Button.vue';
import Subtitle from '../ui/Subtitle.vue';
import Title from '../ui/Title.vue';
import Image1 from '@/assets/img/gedung.webp';
import Image2 from '@/assets/img/bsc.webp';
import Banner from '@/assets/img/gel_2.webp';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
        <div data-aos="fade-up-sm" data-aos-duration="1000"
            class="w-full text-center space-y-2 lg:space-y-4 hidden md:block">
            <h2 class="text-xl md:text-2xl lg:text-4xl xl:text-[44px] font-medium inline-flex gap-2 lg:gap-4 items-center">
                {{ langStore.currentLang === 'en' ? 'Higher education institution' : 'Institusi pendidikan tinggi' }}
                <span>
                    <div class="w-20 h-12 lg:w-36 lg:h-14 rounded-full relative overflow-hidden inline-block"><img
                            :src="Image1"
                            alt="Gedung Kampus" class="w-full h-full object-cover object-center"></div>
                </span>
                {{ langStore.currentLang === 'en' ? 'dedicated' : 'yang' }}
            </h2>

            <h2 class="text-xl md:text-2xl lg:text-4xl xl:text-[44px] font-medium inline-flex gap-2 lg:gap-4 items-center">
                {{ langStore.currentLang === 'en' ? 'to producing' : 'berdedikasi' }}
                <span>
                    <div class="w-20 h-12 lg:w-36 lg:h-14 rounded-full relative overflow-hidden inline-block"><img
                            :src="Image2"
                            alt="BSC" class="w-full h-full object-cover object-center"></div>
                </span>
                {{ langStore.currentLang === 'en' ? 'outstanding health leaders.' : 'menghasilkan lulusan unggul.' }}
            </h2>

            <Subtitle :text="langStore.currentLang === 'en' ? 'Transforming a new generation into skilled, ethical, and compassionate healthcare workers.' : 'Mentransformasi generasi baru menjadi lulusan yang kreatif, inovatif, dan berkarakter budi luhur.'" />
        </div>

        <div class="space-y-2 text-center md:hidden">
            <Title :title="langStore.currentLang === 'en' ? 'Higher education dedicated to producing outstanding healthcare graduates.' : 'Institusi pendidikan tinggi yang berdedikasi menghasilkan lulusan unggul.'" />
            <Subtitle :text="langStore.currentLang === 'en' ? 'Transforming a new generation into skilled, ethical, and compassionate healthcare workers.' : 'Mentransformasi generasi baru menjadi lulusan yang kreatif, inovatif, dan berkarakter budi luhur.'" />
        </div>

        <div class="w-full h-fit rounded-2xl md:rounded-4xl relative overflow-hidden">
            <div class="w-full h-fit">
                <img :src="Banner"
                    alt="Brosur PMB" loading="lazy" class="w-full h-full object-cover object-left md:object-cover">
            </div>

            <div class="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

            <div
                class="absolute bottom-3 left-3 md:bottom-8 md:left-8 xl:bottom-16 xl:left-16 z-20 space-y-4 md:space-y-6">
                <Button onclick="window.open('https://stikesbudiluhurcimahi.ac.id/', '_blank')"
                    border="border-1" border-color="border-white" :text="langStore.t('hero.cta_register')" />
            </div>
        </div>
    </section>
</template>