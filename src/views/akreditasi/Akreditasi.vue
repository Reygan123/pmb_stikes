<script setup lang="ts">
import { useHead } from '@vueuse/head';
import AkreditasiHeader from './sections/AkreditasiHeader.vue';
import ListAkreditasi from './sections/ListAkreditasi.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';
import { useAkreditasiStore } from '@/stores/akreditasi';
import { onMounted } from 'vue';
import SeoMeta from '@/components/ui/SeoMeta.vue';

const akreditasiStore = useAkreditasiStore()

onMounted(() => {
    akreditasiStore.fetchAkreditasi()
})

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
    <SeoMeta title="Akreditasi"
        description="Lihat status akreditasi institusi dan program studi di Universitas BTH. Jaminan kualitas pendidikan untuk masa depan Anda."
        keywords="Akreditasi BTH, Akreditasi Institusi, Akreditasi Prodi, Kualitas Pendidikan" :meta-tags="[
            { property: 'og:type', content: 'website' },
            { name: 'twitter:creator', content: '@bth_university' }
        ]" />
    <MainLayout>
        <AkreditasiHeader />
        <ListAkreditasi :loading="akreditasiStore.loading" :error="akreditasiStore.error"
            :akreditasi="akreditasiStore.akreditasi" />
    </MainLayout>
</template>