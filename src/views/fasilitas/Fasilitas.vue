<script setup lang="ts">
import { useHead } from '@vueuse/head';
import FasilitasHero from './sections/FasilitasHero.vue';
import FasilitasContent from './sections/FasilitasContent.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';
import SeoMeta from '@/components/ui/SeoMeta.vue';
import { onMounted } from 'vue';
import { useFasilitasStore } from '@/stores/fasilitas';

const fasilitasStore = useFasilitasStore();

onMounted(async () => {
    await Promise.all([
        fasilitasStore.fetchFasilitas(),
    ]);
})

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PMB STIKes Budi Luhur Cimahi",
    "url": "https://stikesbudiluhurcimahi.ac.id/",
    "logo": "https://stikesbudiluhurcimahi.ac.id/logo.png",
    "description": "Lihat berbagai fasilitas modern dan lengkap yang mendukung proses belajar dan pengembangan diri mahasiswa di STIKes Budi Luhur Cimahi."
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
    <SeoMeta title="Fasilitas STIKes Budi Luhur Cimahi"
        description="Lihat berbagai fasilitas modern dan lengkap yang mendukung proses belajar dan pengembangan diri mahasiswa di STIKes Budi Luhur Cimahi."
        keywords="Fasilitas STIKes, Fasilitas STIKes Budi Luhur, Laboratorium Keperawatan, Perpustakaan, Sarana Prasarana" :meta-tags="[
            { property: 'og:type', content: 'website' },
            { name: 'twitter:creator', content: '@stikesbudiluhur' }
        ]" />

    <MainLayout>
        <FasilitasHero :loading="fasilitasStore.loading" :error="fasilitasStore.error"
            :fasilitas="fasilitasStore.fasilitas.slice(0, 5)" />
        <FasilitasContent :loading="fasilitasStore.loading" :error="fasilitasStore.error"
            :fasilitas="fasilitasStore.fasilitas.length > 5 ? fasilitasStore.fasilitas.slice(5) : fasilitasStore.fasilitas" />
    </MainLayout>
</template>