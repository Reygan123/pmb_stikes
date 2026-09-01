<script setup lang="ts">
import { useHead } from '@vueuse/head';
import SambutanDetailHeader from './sections/SambutanDetailHeader.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';

const data = JSON.parse(localStorage.getItem('sambutanData') || '{}')

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PMB Universitas BTH",
    "url": "https://admisi.universitas-bth.ac.id/",
    "logo": "https://admisi.universitas-bth.ac.id/assets/logo-bth-Dytwawg6.webp",
    "description": "PMB Universitas BTH adalah platform revolusioner yang menggabungkan teknologi mutakhir dengan layanan psikologi profesional untuk membantu individu, keluarga, institusi pendidikan, dan perusahaan memahami potensi diri, meningkatkan kualitas hidup, dan membangun sumber daya manusia yang berdaya saing."
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
    <MainLayout>
        <SambutanDetailHeader :tag="data[0]" :img="data[1]" :title="data[2]" :description="data[3]" />
    </MainLayout>
</template>