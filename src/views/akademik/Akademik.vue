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
    "name": "PMB Universitas BTH",
    "url": "https://admisi.universitas-bth.ac.id/",
    "logo": "https://admisi.universitas-bth.ac.id/assets/logo-bth-Dytwawg6.webp",
    "description": "Universitas BTH mengembangkan pendidikan berbasis Ekosistem Kolaborasi, di mana Fakultas Ilmu Kesehatan, Farmasi, serta Teknologi dan Bisnis bersinergi dalam satu lingkungan akademik. Pendekatan ini membiasakan mahasiswa bekerja dalam tim multidisiplin untuk menyelesaikan tantangan nyata, sejalan dengan komitmen kami terhadap pendidikan inovatif berstandar global."
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
    <SeoMeta title="Informasi Akademik"
    description="Universitas BTH mengembangkan pendidikan berbasis Ekosistem Kolaborasi, di mana Fakultas Ilmu Kesehatan, Farmasi, serta Teknologi dan Bisnis bersinergi dalam satu lingkungan akademik. Pendekatan ini membiasakan mahasiswa bekerja dalam tim multidisiplin untuk menyelesaikan tantangan nyata, sejalan dengan komitmen kami terhadap pendidikan inovatif berstandar global."
    keywords="Agenda BTH, Kalender Akademik, Acara Kampus" :meta-tags="[
      { property: 'og:type', content: 'website' },
      { name: 'twitter:creator', content: '@bth_university' }
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