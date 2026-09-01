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
    "name": "PMB Universitas BTH",
    "url": "https://admisi.universitas-bth.ac.id/",
    "logo": "https://admisi.universitas-bth.ac.id/assets/logo-bth-Dytwawg6.webp",
    "description": "Lihat berbagai fasilitas modern dan lengkap yang mendukung proses belajar dan pengembangan diri mahasiswa di Universitas BTH."
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
    <SeoMeta title="Fasilitas Universitas BTH"
        description="Lihat berbagai fasilitas modern dan lengkap yang mendukung proses belajar dan pengembangan diri mahasiswa di Universitas BTH."
        keywords="Fasilitas BTH, Laboratorium Kampus, Perpustakaan BTH, Sarana Prasarana" :meta-tags="[
            { property: 'og:type', content: 'website' },
            { name: 'twitter:creator', content: '@bth_university' }
        ]" />

    <MainLayout>
        <FasilitasHero :loading="fasilitasStore.loading" :error="fasilitasStore.error"
            :fasilitas="fasilitasStore.fasilitas.slice(0, 5)" />
        <FasilitasContent :loading="fasilitasStore.loading" :error="fasilitasStore.error"
            :fasilitas="fasilitasStore.fasilitas.slice(5, 100)" />
    </MainLayout>
</template>