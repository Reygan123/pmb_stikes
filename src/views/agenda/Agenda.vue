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
    "name": "PMB Universitas BTH",
    "url": "https://admisi.universitas-bth.ac.id/",
    "logo": "https://admisi.universitas-bth.ac.id/assets/logo-bth-Dytwawg6.webp",
    "description": "Jelajahi kalender akademik, kegiatan, dan acara penting lainnya yang diselenggarakan oleh Universitas BTH."
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
        description="Jelajahi kalender akademik, kegiatan, dan acara penting lainnya yang diselenggarakan oleh Universitas BTH."
        keywords="Berita BTH, Pengumuman PMB, Info Kampus Terbaru" :meta-tags="[
            { property: 'og:type', content: 'website' },
            { name: 'twitter:creator', content: '@bth_university' }
        ]" />

    <MainLayout>
        <AgendaHeader />
        <AgendaBody :loading="agendaStore.loading" :error="agendaStore.error" :agenda="agendaStore.agendas" />
        <BeritaPublikasi />
    </MainLayout>
</template>