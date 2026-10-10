<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
import SeoMeta from '@/components/ui/SeoMeta.vue';
import { onMounted } from 'vue';
import FaqAkademik from '../akademik/sections/FaqAkademik.vue';
import { useHead } from '@vueuse/head';
import BiayaHero from './sections/BiayaHero.vue';
// import BiayaTable from './sections/BiayaTable.vue';
import BiayaMengapa from './sections/BiayaMengapa.vue';

onMounted(async () => {
    await Promise.all([

    ]);
})

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PMB STIKes Budi Luhur Cimahi",
    "url": "https://stikesbudiluhurcimahi.ac.id/",
    "logo": "https://stikesbudiluhurcimahi.ac.id/logo.png",
    "description": "Lihat rincian lengkap biaya kuliah per program studi di STIKes Budi Luhur Cimahi. Investasi terjangkau untuk masa depan terbaik Anda!."
};

const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Bagaimana cara mendaftar sebagai mahasiswa baru di STIKes Budi Luhur Cimahi?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pendaftaran dapat dilakukan secara online melalui website resmi pmb atau langsung datang ke sekretariat PMB STIKes Budi Luhur Cimahi."
            }
        },
        {
            "@type": "Question",
            "name": "Apa saja syarat pendaftaran PMB STIKes Budi Luhur Cimahi?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Syarat pendaftaran meliputi scan ijazah/raport, kartu keluarga, pas foto terbaru, dan berkas persyaratan sesuai jalur yang dipilih."
            }
        },
        {
            "@type": "Question",
            "name": "Apakah STIKes Budi Luhur Cimahi sudah terakreditasi?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, STIKes Budi Luhur Cimahi dan seluruh program studinya telah terakreditasi oleh BAN-PT dan LAM-PTKes."
            }
        }
    ]
};

useHead({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(structuredData)
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(faqStructuredData)
        }
    ]
});
</script>

<template>
    <SeoMeta title="Biaya Kuliah STIKes Budi Luhur Cimahi"
        description="Lihat rincian lengkap biaya kuliah per program studi di STIKes Budi Luhur Cimahi. Investasi terjangkau untuk masa depan terbaik Anda!."
        keywords="biaya kuliah stikes budi luhur, rincian biaya prodi stikes, uang semester stikes, daftar biaya pmb stikes, kuliah kesehatan terjangkau" :meta-tags="[
            { property: 'og:type', content: 'website' },
            { name: 'twitter:creator', content: '@stikesbudiluhur' }
        ]" />

    <MainLayout>
        <BiayaHero />
        <!-- <BiayaTable /> -->
        <BiayaMengapa />
        <FaqAkademik />
    </MainLayout>
</template>