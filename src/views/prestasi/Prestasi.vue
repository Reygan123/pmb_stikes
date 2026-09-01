<script setup lang="ts">
import TestimonialSection from '@/components/sections/TestimonialSection.vue';
import { useHead } from '@vueuse/head';
import PrestasiHero from './sections/PrestasiHero.vue';
import ListPrestasi from './sections/ListPrestasi.vue';
import { useTestimoniStore } from '@/stores/testimoni';
import { onMounted } from 'vue';
import MainLayout from '@/components/layouts/MainLayout.vue';
import SeoMeta from '@/components/ui/SeoMeta.vue';
import { usePrestasiStore } from '@/stores/prestasi';
import { useStatPrestasiStore } from '@/stores/statPrestasi';

const statPrestasiStore = useStatPrestasiStore();
const prestasiStore = usePrestasiStore();
const testimoniStore = useTestimoniStore();

onMounted(async () => {
    await Promise.all([
        statPrestasiStore.fetchStorePrestasi(),
        prestasiStore.fetchPrestasis(),
        testimoniStore.fetchTestimoniHome(),
    ]);
})

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PMB Universitas BTH",
    "url": "https://admisi.universitas-bth.ac.id/",
    "logo": "https://admisi.universitas-bth.ac.id/assets/logo-bth-Dytwawg6.webp",
    "description": "Saksikan berbagai penghargaan dan prestasi yang telah diraih oleh mahasiswa dan civitas akademika Universitas BTH di tingkat nasional maupun internasional."
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
    <SeoMeta title="Prestasi Kampus & Mahasiswa"
        description="Saksikan berbagai penghargaan dan prestasi yang telah diraih oleh mahasiswa dan civitas akademika Universitas BTH di tingkat nasional maupun internasional."
        keywords="Prestasi BTH, Penghargaan Mahasiswa, Kampus Berprestasi" :meta-tags="[
            { property: 'og:type', content: 'website' },
            { name: 'twitter:creator', content: '@bth_university' }
        ]" />

    <MainLayout>
        <PrestasiHero :loading="statPrestasiStore.loading" :error="statPrestasiStore.error"
            :statprestasi="statPrestasiStore.statPrestasi" />
        <ListPrestasi :loading="prestasiStore.loading" :error="prestasiStore.error"
            :prestasi="prestasiStore.prestasis.slice(0,10)" />
        <TestimonialSection :loading="testimoniStore.loading" :error="testimoniStore.error"
            :testimoni="testimoniStore.testimoni" />
    </MainLayout>
</template>