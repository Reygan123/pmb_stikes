<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
import FaqAkademik from '../akademik/sections/FaqAkademik.vue';
import PengumumanHero from './sections/PengumumanHero.vue';
import PengumumanList from './sections/PengumumanList.vue';
import { ref } from 'vue';
import { useHead } from '@vueuse/head';

const pengumumanListRef = ref()

const handleSearch = (query: string) => {
    if (pengumumanListRef.value) {
        pengumumanListRef.value.handleSearch(query)
    }
}

const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Bagaimana cara mendaftar sebagai mahasiswa baru di STIKes Budi Luhur Cimahi?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pendaftaran dapat dilakukan secara online melalui website resmi pmb atau langsung mendatangi sekretariat PMB STIKes Budi Luhur Cimahi."
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
            innerHTML: JSON.stringify(faqStructuredData)
        }
    ]
});
</script>

<template>
    <MainLayout>
        <PengumumanHero @search="handleSearch" />
        <PengumumanList ref="pengumumanListRef" />
        <FaqAkademik />
    </MainLayout>
</template>