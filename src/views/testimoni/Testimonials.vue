<script setup lang="ts">
import { useHead } from '@vueuse/head';
import TestimonialHero from './sections/TestimonialHero.vue';
import ListTestimonials from './sections/ListTestimonials.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';
import SeoMeta from '@/components/ui/SeoMeta.vue';

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PMB STIKes Budi Luhur Cimahi",
    "url": "https://stikesbudiluhurcimahi.ac.id/",
    "logo": "https://stikesbudiluhurcimahi.ac.id/favicon.png",
    "description": "Dengarkan kisah sukses dan pengalaman berharga dari alumni dan mahasiswa STIKes Budi Luhur Cimahi."
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
    <SeoMeta title="Testimoni Alumni & Mahasiswa"
        description="Dengarkan kisah sukses dan pengalaman berharga dari alumni dan mahasiswa STIKes Budi Luhur Cimahi."
        keywords="Testimoni STIKes, Kisah Alumni, Pengalaman Mahasiswa STIKes Budi Luhur Cimahi" :meta-tags="[
            { property: 'og:type', content: 'website' },
            { name: 'twitter:creator', content: '@stikesbudiluhur' }
        ]" />

    <MainLayout>
        <TestimonialHero />
        <ListTestimonials />
    </MainLayout>
</template>