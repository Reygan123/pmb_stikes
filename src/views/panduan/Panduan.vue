<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
import SeoMeta from '@/components/ui/SeoMeta.vue';
import { onMounted } from 'vue';
import FaqAkademik from '../akademik/sections/FaqAkademik.vue';
import { useHead } from '@vueuse/head';
import PanduanHero from './sections/PanduanHero.vue';
import PanduanBody from './sections/PanduanBody.vue';
import PanduanBantuan from './sections/PanduanBantuan.vue';
import { useIdentityStore } from '@/stores/identity';

const identityStore = useIdentityStore()

onMounted(async () => {
    await Promise.all([
        identityStore.fetchIdentity()
    ]);
})

const orgStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PMB Universitas BTH",
    "url": "https://admisi.universitas-bth.ac.id/",
    "logo": "https://admisi.universitas-bth.ac.id/assets/logo-bth-Dytwawg6.webp",
    "description": "Cek panduan penerimaan mahasiswa baru (PMB) dan status akreditasi Institusi & Program Studi Universitas BTH terbaru."
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
            innerHTML: JSON.stringify(orgStructuredData)
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(faqStructuredData)
        }
    ]
});
</script>

<template>
    <SeoMeta title="Panduan PMB & Akreditasi Universitas BTH"
        description="Cek panduan penerimaan mahasiswa baru (PMB) dan status akreditasi Institusi & Program Studi Universitas BTH terbaru. Wujudkan pendidikan berkualitas Anda di BTH!."
        keywords="panduan pmb bth, akreditasi universitas bth, status prodi bth, syarat pendaftaran bth, kualitas pendidikan" :meta-tags="[
            { property: 'og:type', content: 'website' },
            { name: 'twitter:creator', content: '@bth_university' }
        ]" />

    <MainLayout>
        <PanduanHero />
        <PanduanBody />
        <PanduanBantuan :identity="identityStore.identity"/>
        <FaqAkademik />
    </MainLayout>
</template>