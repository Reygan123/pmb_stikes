<script setup lang="ts">
import { useHead } from '@vueuse/head';
import JalurDetailHero from './sections/JalurDetailHero.vue';
import KalenderAkademik from '../akademik/sections/KalenderAkademik.vue';
import JalurDetailAbout from './sections/JalurDetailAbout.vue';
import JalurDetailMengapa from './sections/JalurDetailKeunggulan.vue';
import FaqAkademik from '../akademik/sections/FaqAkademik.vue';
import JalurDetailSyarat from './sections/JalurDetailSyarat.vue';
// import JalurDetailLangkah from './sections/JalurDetailLangkah.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';
import { useRoute } from 'vue-router';
import { useJalurStore } from '@/stores/jalur';
import { onMounted } from 'vue';
import { useAkademikStore } from '@/stores/akademik';
import JalurDetailCountdown from './sections/JalurDetailCountdown.vue';
import SeoMeta from '@/components/ui/SeoMeta.vue';

const route = useRoute()
const name = route.params.slug

const jalurStore = useJalurStore()
const akademikStore = useAkademikStore()

onMounted(() => {
    jalurStore.fetchJalurBySlug(String(name))
    akademikStore.fetchAkademik()
})

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PMB STIKes Budi Luhur Cimahi",
    "url": "https://stikesbudiluhurcimahi.ac.id/",
    "logo": "https://stikesbudiluhurcimahi.ac.id/logo.png",
    "description": jalurStore.currentJalur?.content
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
    <SeoMeta :title="jalurStore.currentJalur?.name" :description="jalurStore.currentJalur?.content"
        keywords="Syarat Pendaftaran STIKes, Prosedur PMB STIKes, Pendaftaran Kuliah STIKes Budi Luhur" :meta-tags="[
            { property: 'og:type', content: 'website' },
            { name: 'twitter:creator', content: '@stikesbudiluhur' }
        ]" />

    <MainLayout>
        <JalurDetailHero :loading="jalurStore.loading" :error="jalurStore.error" :jalur="jalurStore.currentJalur" />
        <JalurDetailAbout :loading="jalurStore.loading" :error="jalurStore.error" :jalur="jalurStore.currentJalur" />
        <JalurDetailMengapa :loading="jalurStore.loading" :error="jalurStore.error" :jalur="jalurStore.currentJalur" />
        <JalurDetailSyarat :loading="jalurStore.loading" :error="jalurStore.error" :jalur="jalurStore.currentJalur" />
        <JalurDetailCountdown :loading="jalurStore.loading" :error="jalurStore.error"
            :jalur="jalurStore.currentJalur" />
        <!-- <JalurDetailLangkah :jalur="jalurStore.currentJalur" /> -->
        <KalenderAkademik :loading="akademikStore.loading" :error="akademikStore.error"
            :akademik="akademikStore.akademik" />
        <FaqAkademik />
    </MainLayout>
</template>