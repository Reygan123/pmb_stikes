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
    "name": "PMB STIKes Budi Luhur Cimahi",
    "url": "https://stikesbudiluhurcimahi.ac.id/",
    "logo": "https://stikesbudiluhurcimahi.ac.id/logo.png",
    "description": "PMB STIKes Budi Luhur Cimahi adalah portal resmi penerimaan mahasiswa baru STIKes Budi Luhur Cimahi untuk mencetak tenaga kesehatan unggul, mandiri, dan berkarakter."
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
        description="Lihat status akreditasi institusi dan program studi di STIKes Budi Luhur Cimahi. Jaminan kualitas pendidikan untuk masa depan Anda."
        keywords="Akreditasi STIKes, Akreditasi STIKes Budi Luhur, Akreditasi Institusi, Akreditasi LAM-PTKes, Kualitas Pendidikan" :meta-tags="[
            { property: 'og:type', content: 'website' },
            { name: 'twitter:creator', content: '@stikesbudiluhur' }
        ]" />
    <MainLayout>
        <AkreditasiHeader />
        <ListAkreditasi :loading="akreditasiStore.loading" :error="akreditasiStore.error"
            :akreditasi="akreditasiStore.akreditasi" />
    </MainLayout>
</template>