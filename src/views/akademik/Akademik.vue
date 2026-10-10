<script setup lang="ts">
import { useHead } from '@vueuse/head';
import AkademikHero from './sections/AkademikHero.vue';
import FakultasSection from './sections/FakultasSection.vue';
import TestimonialSection from '@/components/sections/TestimonialSection.vue';
import PedomanAkademik from './sections/PedomanAkademik.vue';
import KalenderAkademik from './sections/KalenderAkademik.vue';
import FaqAkademik from './sections/FaqAkademik.vue';
import { onMounted } from 'vue';
import { useTestimoniStore } from '@/stores/testimoni';
import { useAkademikStore } from '@/stores/akademik';
import MainLayout from '@/components/layouts/MainLayout.vue';
import SeoMeta from '@/components/ui/SeoMeta.vue';

const akademikStore = useAkademikStore()
const testimoniStore = useTestimoniStore();

onMounted(async () => {
    await Promise.all([
        testimoniStore.fetchTestimoniHome(),
        akademikStore.fetchAkademik()
    ]);
})

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PMB STIKes Budi Luhur Cimahi",
    "url": "https://stikesbudiluhurcimahi.ac.id/",
    "logo": "https://stikesbudiluhurcimahi.ac.id/favicon.png",
    "description": "STIKes Budi Luhur Cimahi mengembangkan pendidikan tinggi kesehatan unggul dengan program studi keperawatan dan kebidanan berstandar nasional dan global."
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
                "text": "Pendaftaran dapat dilakukan secara online melalui website resmi stikesbudiluhurcimahi.ac.id dengan mengisi formulir dan mengunggah berkas yang diperlukan."
            }
        },
        {
            "@type": "Question",
            "name": "Apa saja syarat pendaftaran PMB STIKes Budi Luhur Cimahi?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Syarat pendaftaran meliputi scan ijazah/raport, kartu keluarga, pas foto terbaru, dan biaya pendaftaran sesuai jalur yang dipilih."
            }
        },
        {
            "@type": "Question",
            "name": "Apakah STIKes Budi Luhur Cimahi sudah terakreditasi?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, STIKes Budi Luhur Cimahi dan seluruh program studinya telah terakreditasi oleh LAM-PTKes dan BAN-PT."
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
    <SeoMeta title="Informasi Akademik"
    description="STIKes Budi Luhur Cimahi mengembangkan pendidikan tinggi kesehatan unggul dengan program studi keperawatan dan kebidanan berstandar nasional dan global."
    keywords="Informasi Akademik, STIKes Budi Luhur Cimahi, Kalender Akademik" :meta-tags="[
      { property: 'og:type', content: 'website' },
      { name: 'twitter:creator', content: '@stikesbudiluhur' }
    ]" />

    <MainLayout>
        <AkademikHero />
        <FakultasSection />
        <PedomanAkademik />
        <KalenderAkademik :loading="akademikStore.loading" :error="akademikStore.error"
            :akademik="akademikStore.akademik" />
        <FaqAkademik />
        <TestimonialSection :loading="testimoniStore.loading" :error="testimoniStore.error"
            :testimoni="testimoniStore.testimoni" />
    </MainLayout>
</template>