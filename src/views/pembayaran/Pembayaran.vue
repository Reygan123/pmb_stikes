<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
import SeoMeta from '@/components/ui/SeoMeta.vue';
import { onMounted } from 'vue';
import FaqAkademik from '../akademik/sections/FaqAkademik.vue';
import { useHead } from '@vueuse/head';
import { useIdentityStore } from '@/stores/identity';
import PembayaranHero from './sections/PembayaranHero.vue';
// import PembayaranRegistrasiUlang from './sections/PembayaranRegistrasiUlang.vue';

const identityStore = useIdentityStore()

onMounted(async () => {
    await Promise.all([
        identityStore.fetchIdentity()
    ]);
})

const orgStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PMB STIKes Budi Luhur Cimahi",
    "url": "https://stikesbudiluhurcimahi.ac.id/",
    "logo": "https://stikesbudiluhurcimahi.ac.id/logo.png",
    "description": "Cek panduan penerimaan mahasiswa baru (PMB) dan status akreditasi Institusi & Program Studi STIKes Budi Luhur Cimahi terbaru."
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
    <SeoMeta title="Panduan Pembayaran Registrasi Ulang STIKes Budi Luhur Cimahi"
        description="Cek panduan pembayaran registrasi ulang penerimaan mahasiswa baru (PMB) STIKes Budi Luhur Cimahi terbaru."
        keywords="panduan pmb stikes, registrasi ulang stikes, status prodi stikes, syarat pendaftaran stikes, kualitas pendidikan" :meta-tags="[
            { property: 'og:type', content: 'website' },
            { name: 'twitter:creator', content: '@stikesbudiluhur' }
        ]" />

    <MainLayout>
        <PembayaranHero />
        <!-- <PembayaranRegistrasiUlang /> -->
        <FaqAkademik />
    </MainLayout>
</template>