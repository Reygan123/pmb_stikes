<script setup lang="ts">
import { useHead } from '@vueuse/head';
import SambutanDetailHeader from './sections/SambutanDetailHeader.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';

const data = JSON.parse(localStorage.getItem('sambutanData') || '{}')

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PMB STIKes Budi Luhur Cimahi",
    "url": "https://stikesbudiluhurcimahi.ac.id/",
    "logo": "https://stikesbudiluhurcimahi.ac.id/favicon.png",
    "description": "PMB STIKes Budi Luhur Cimahi - Platform Pendaftaran Mahasiswa Baru STIKes Budi Luhur Cimahi."
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