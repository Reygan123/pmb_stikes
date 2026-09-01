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
    "name": "PMB Universitas BTH",
    "url": "https://admisi.universitas-bth.ac.id/",
    "logo": "https://admisi.universitas-bth.ac.id/assets/logo-bth-Dytwawg6.webp",
    "description": "Lihat rincian lengkap biaya kuliah per program studi dan institusi di Universitas BTH untuk tahun 2024/2025. Investasi terjangkau untuk masa depan terbaik Anda!."
};

const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Bagaimana cara mendaftar sebagai mahasiswa baru di Universitas BTH?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pendaftaran dapat dilakukan secara online melalui website resmi pmb.universitas-bth.ac.id dengan mengisi formulir dan mengunggah berkas yang diperlukan."
            }
        },
        {
            "@type": "Question",
            "name": "Apa saja syarat pendaftaran PMB Universitas BTH?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Syarat pendaftaran meliputi scan ijazah/raport, kartu keluarga, pas foto terbaru, dan biaya pendaftaran sesuai jalur yang dipilih."
            }
        },
        {
            "@type": "Question",
            "name": "Apakah Universitas BTH sudah terakreditasi?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, Universitas BTH dan seluruh program studinya telah terakreditasi oleh BAN-PT dan LAM-PTKes."
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
    <SeoMeta title="Biaya Kuliah Universitas BTH 2024/2025"
        description="Lihat rincian lengkap biaya kuliah per program studi dan institusi di Universitas BTH untuk tahun 2024/2025. Investasi terjangkau untuk masa depan terbaik Anda!."
        keywords="biaya kuliah universitas bth, rincian biaya prodi bth, uang semester bth, daftar biaya pmb bth, kuliah terjangkau" :meta-tags="[
            { property: 'og:type', content: 'website' },
            { name: 'twitter:creator', content: '@bth_university' }
        ]" />

    <MainLayout>
        <BiayaHero />
        <!-- <BiayaTable /> -->
        <BiayaMengapa />
        <FaqAkademik />
    </MainLayout>
</template>