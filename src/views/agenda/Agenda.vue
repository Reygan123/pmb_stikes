<script setup lang="ts">
import { useHead } from '@vueuse/head';
import AgendaHeader from './sections/AgendaHeader.vue';
import AgendaBody from './sections/AgendaBody.vue';
import BeritaPublikasi from '@/components/sections/BeritaPublikasi.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';
import { onMounted } from 'vue';
import { useAgendaStore } from '@/stores/agenda';
import SeoMeta from '@/components/ui/SeoMeta.vue';

const agendaStore = useAgendaStore()

onMounted(() => {
    agendaStore.fetchAgendas()
})

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PMB STIKes Budi Luhur Cimahi",
    "url": "https://stikesbudiluhurcimahi.ac.id/",
    "logo": "https://stikesbudiluhurcimahi.ac.id/logo.png",
    "description": "Jelajahi kalender akademik, kegiatan, dan acara penting lainnya yang diselenggarakan oleh STIKes Budi Luhur Cimahi."
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
    <SeoMeta title="Daftar Agenda dan Acara"
        description="Jelajahi kalender akademik, kegiatan, dan acara penting lainnya yang diselenggarakan oleh STIKes Budi Luhur Cimahi."
        keywords="Agenda STIKes Budi Luhur, Pengumuman PMB, Info Kampus Terbaru" :meta-tags="[
            { property: 'og:type', content: 'website' },
            { name: 'twitter:creator', content: '@stikesbudiluhur' }
        ]" />

    <MainLayout>
        <AgendaHeader />
        <AgendaBody :loading="agendaStore.loading" :error="agendaStore.error" :agenda="agendaStore.agendas" />
        <BeritaPublikasi />
    </MainLayout>
</template>