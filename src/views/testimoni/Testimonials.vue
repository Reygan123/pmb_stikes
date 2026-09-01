<script setup lang="ts">
import { useHead } from '@vueuse/head';
import TestimonialHero from './sections/TestimonialHero.vue';
import ListTestimonials from './sections/ListTestimonials.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';
import SeoMeta from '@/components/ui/SeoMeta.vue';

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PMB Universitas BTH",
    "url": "https://admisi.universitas-bth.ac.id/",
    "logo": "https://admisi.universitas-bth.ac.id/assets/logo-bth-Dytwawg6.webp",
    "description": "Dengarkan kisah sukses dan pengalaman berharga dari alumni dan mahasiswa Universitas BTH."
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
        description="Dengarkan kisah sukses dan pengalaman berharga dari alumni dan mahasiswa Universitas BTH."
        keywords="Testimoni BTH, Kisah Alumni, Pengalaman Mahasiswa BTH" :meta-tags="[
            { property: 'og:type', content: 'website' },
            { name: 'twitter:creator', content: '@bth_university' }
        ]" />

    <MainLayout>
        <TestimonialHero />
        <ListTestimonials />
    </MainLayout>
</template>