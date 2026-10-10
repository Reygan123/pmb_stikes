<script setup lang="ts">
import StatistikSection from '@/components/sections/StatistikSection.vue';
import TestimonialSection from '@/components/sections/TestimonialSection.vue';
import { useHead } from '@vueuse/head';
import KegiatanHero from './sections/KegiatanHero.vue';
import ListKegiatan from './sections/ListKegiatan.vue';
import { useTestimoniStore } from '@/stores/testimoni';
import { onMounted } from 'vue';
import { useSliderStore } from '@/stores/slider';
import { useOrganisasiStore } from '@/stores/organisasi';
import { useStatistikStore } from '@/stores/statistik';
import MainLayout from '@/components/layouts/MainLayout.vue';
import SeoMeta from '@/components/ui/SeoMeta.vue';

const sliderStore = useSliderStore();
const statistikStore = useStatistikStore()
const organisasiStore = useOrganisasiStore();
const testimoniStore = useTestimoniStore();

onMounted(async () => {
    await Promise.all([
        sliderStore.fetchSlider(),
        statistikStore.fetchStatistik(),
        organisasiStore.fetchOrganisasi(),
        testimoniStore.fetchTestimoniHome(),
    ]);
})

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PMB STIKes Budi Luhur Cimahi",
    "url": "https://stikesbudiluhurcimahi.ac.id/",
    "logo": "https://stikesbudiluhurcimahi.ac.id/logo.png",
    "description": "Lihat berbagai kegiatan ekstrakurikuler, organisasi, dan event yang memperkaya pengalaman akademik dan non-akademik mahasiswa STIKes Budi Luhur Cimahi."
};

useHead({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(structuredData)
        }
    ]
});
</script>

<template>
    <SeoMeta title="Kegiatan Mahasiswa"
        description="Lihat berbagai kegiatan ekstrakurikuler, organisasi, dan event yang memperkaya pengalaman akademik dan non-akademik mahasiswa STIKes Budi Luhur Cimahi."
        keywords="Kegiatan Kampus, UKM STIKes Budi Luhur, Organisasi Mahasiswa, Ekstrakurikuler" :meta-tags="[
            { property: 'og:type', content: 'website' },
            { name: 'twitter:creator', content: '@stikesbudiluhur' }
        ]" />

    <MainLayout position="fixed">
        <KegiatanHero :loading="sliderStore.loading" :error="sliderStore.error" :slider="sliderStore.sliders" />
        <StatistikSection :statistik="statistikStore.statistik" />
        <ListKegiatan :loading="organisasiStore.loading" :error="organisasiStore.error"
            :organisasi="organisasiStore.organizations" />
        <TestimonialSection :loading="testimoniStore.loading" :error="testimoniStore.error"
            :testimoni="testimoniStore.testimoni" />
    </MainLayout>
</template>