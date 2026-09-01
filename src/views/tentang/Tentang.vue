<script setup lang="ts">
import { useHead } from '@vueuse/head';
import TentangHero from './sections/TentangHero.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import StatistikSection from '@/components/sections/StatistikSection.vue';
import KemitraanSection from '@/components/sections/KemitraanSection.vue';
import TestimonialSection from '@/components/sections/TestimonialSection.vue';
import TimSection from './sections/TimSection.vue';
import { useIdentityStore } from '@/stores/identity';
import { usePartnerStore } from '@/stores/partner';
import { useTestimoniStore } from '@/stores/testimoni';
import { onMounted } from 'vue';
import { useAboutStore } from '@/stores/about';
import { getImageUrl } from '@/utils/imageUtils';
import { useStatistikStore } from '@/stores/statistik';
import MainLayout from '@/components/layouts/MainLayout.vue';
import { useFakultasStore } from '@/stores/fakultas';
import { useTeamStore } from '@/stores/team';
import SejarahSection from './sections/SejarahSection.vue';
import SeoMeta from '@/components/ui/SeoMeta.vue';

const statistikStore = useStatistikStore()
const aboutStore = useAboutStore()
const fakultasStore = useFakultasStore()
const identityStore = useIdentityStore();
const partnerStore = usePartnerStore();
const teamStore = useTeamStore();
const testimoniStore = useTestimoniStore();

onMounted(async () => {
    await Promise.all([
        statistikStore.fetchStatistik(),
        aboutStore.fetchAbout(),
        fakultasStore.fetchFakultas(),
        identityStore.fetchIdentity(),
        partnerStore.fetchPartners(),
        teamStore.fetchTeamHome(),
        testimoniStore.fetchTestimoniHome(),
    ]);
})

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PMB Universitas BTH",
    "url": "https://admisi.universitas-bth.ac.id/",
    "logo": "https://admisi.universitas-bth.ac.id/assets/logo-bth-Dytwawg6.webp",
    "description": "Bangun Masa Depan Gemilang Di Universitas Bakti Tunas Husada Mencetak Profesional yang Inovatif Berkarakter di Bidang Kesehatan, Teknologi, dan Bisnis"
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
    <SeoMeta title="Beranda"
        description="Bangun Masa Depan Gemilang Di Universitas Bakti Tunas Husada Mencetak Profesional yang Inovatif Berkarakter di Bidang Kesehatan, Teknologi, dan Bisnis"
        keywords="Visi Misi BTH, Sejarah Kampus, Profil Universitas BTH" :meta-tags="[
            { property: 'og:type', content: 'website' },
            { name: 'twitter:creator', content: '@bth_university' }
        ]" />

    <MainLayout>
        <TentangHero />
        <AboutSection :loading="aboutStore.loading" :error="aboutStore.error"
            :img="getImageUrl(`identities/${aboutStore.about?.image1}` || '')" :tag="'Tentang Universitas BTH'"
            :title="aboutStore.about?.title || ''" :subtitle="'Selamat Datang di Universitas BTH'"
            :description="aboutStore?.about?.content || ''" :video="aboutStore.about?.video || ''" :status="'hidden'" />
        <StatistikSection :statistik="statistikStore.statistik" />
        <SejarahSection />
        <KemitraanSection :loading="partnerStore.loading" :error="partnerStore.error" :mitra="partnerStore.partners" />
        <TimSection />
        <TestimonialSection :loading="testimoniStore.loading" :error="testimoniStore.error"
            :testimoni="testimoniStore.testimoni" />
    </MainLayout>
</template>