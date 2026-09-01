<script setup lang="ts">
import { useHead } from '@vueuse/head';
import JalurDetailHero from './sections/JalurDetailHero.vue';
import KalenderAkademik from '../akademik/sections/KalenderAkademik.vue';
import JalurDetailAbout from './sections/JalurDetailAbout.vue';
import JalurDetailMengapa from './sections/JalurDetailKeunggulan.vue';
import FaqAkademik from '../akademik/sections/FaqAkademik.vue';
import JalurDetailSyarat from './sections/JalurDetailSyarat.vue';
import JalurDetailLangkah from './sections/JalurDetailLangkah.vue';
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
    "name": "PMB Universitas BTH",
    "url": "https://admisi.universitas-bth.ac.id/",
    "logo": "https://admisi.universitas-bth.ac.id/assets/logo-bth-Dytwawg6.webp",
    "description": jalurStore.currentJalur?.content
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
    <SeoMeta :title="jalurStore.currentJalur?.name" :description="jalurStore.currentJalur?.content"
        keywords="Syarat Pendaftaran BTH, Prosedur PMB, Pendaftaran Kuliah" :meta-tags="[
            { property: 'og:type', content: 'website' },
            { name: 'twitter:creator', content: '@bth_university' }
        ]" />

    <MainLayout>
        <JalurDetailHero :loading="jalurStore.loading" :error="jalurStore.error" :jalur="jalurStore.currentJalur" />
        <JalurDetailAbout :loading="jalurStore.loading" :error="jalurStore.error" :jalur="jalurStore.currentJalur" />
        <JalurDetailMengapa :loading="jalurStore.loading" :error="jalurStore.error" :jalur="jalurStore.currentJalur" />
        <JalurDetailSyarat :loading="jalurStore.loading" :error="jalurStore.error" :jalur="jalurStore.currentJalur" />
        <JalurDetailCountdown :loading="jalurStore.loading" :error="jalurStore.error"
            :jalur="jalurStore.currentJalur" />
        <JalurDetailLangkah :jalur="jalurStore.currentJalur" />
        <KalenderAkademik :loading="akademikStore.loading" :error="akademikStore.error"
            :akademik="akademikStore.akademik" />
        <FaqAkademik />
    </MainLayout>
</template>