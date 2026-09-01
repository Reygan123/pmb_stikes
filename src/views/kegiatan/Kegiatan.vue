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
    "name": "PMB Universitas BTH",
    "url": "https://admisi.universitas-bth.ac.id/",
    "logo": "https://admisi.universitas-bth.ac.id/assets/logo-bth-Dytwawg6.webp",
    "description": "Lihat berbagai kegiatan ekstrakurikuler, organisasi, dan event yang memperkaya pengalaman akademik dan non-akademik mahasiswa BTH."
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
        description="Lihat berbagai kegiatan ekstrakurikuler, organisasi, dan event yang memperkaya pengalaman akademik dan non-akademik mahasiswa BTH."
        keywords="Kegiatan Kampus, UKM BTH, Organisasi Mahasiswa, Ekstrakurikuler" :meta-tags="[
            { property: 'og:type', content: 'website' },
            { name: 'twitter:creator', content: '@bth_university' }
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