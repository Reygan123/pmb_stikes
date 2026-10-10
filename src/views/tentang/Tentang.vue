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
import { useLanguageStore } from '@/stores/language';
import { watch } from 'vue';

const langStore = useLanguageStore();
const statistikStore = useStatistikStore()
const aboutStore = useAboutStore()
const fakultasStore = useFakultasStore()
const identityStore = useIdentityStore();
const partnerStore = usePartnerStore();
const teamStore = useTeamStore();
const testimoniStore = useTestimoniStore();

const loadData = async () => {
    await Promise.all([
        statistikStore.fetchStatistik(),
        aboutStore.fetchAbout(),
        fakultasStore.fetchFakultas(),
        identityStore.fetchIdentity(),
        partnerStore.fetchPartners(),
        teamStore.fetchTeamHome(),
        testimoniStore.fetchTestimoniHome(),
    ]);
};

onMounted(loadData);
watch(() => langStore.currentLang, loadData);

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PMB STIKes Budi Luhur Cimahi",
    "url": "https://stikesbudiluhurcimahi.ac.id/",
    "logo": "https://stikesbudiluhurcimahi.ac.id/favicon.png",
    "description": "Bangun Masa Depan Gemilang di STIKes Budi Luhur Cimahi - Mencetak Tenaga Kesehatan Profesional, Unggul, dan Berkarakter"
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
    <SeoMeta title="Tentang Kami"
        description="Bangun Masa Depan Gemilang di STIKes Budi Luhur Cimahi - Mencetak Tenaga Kesehatan Profesional, Unggul, dan Berkarakter"
        keywords="Visi Misi STIKes, Sejarah Kampus, Profil STIKes Budi Luhur Cimahi" :meta-tags="[
            { property: 'og:type', content: 'website' },
            { name: 'twitter:creator', content: '@stikesbudiluhur' }
        ]" />

    <MainLayout>
        <TentangHero />
        <AboutSection :loading="aboutStore.loading" :error="aboutStore.error"
            :img="getImageUrl(`identities/${aboutStore.about?.image1}` || '')" 
            :tag="langStore.currentLang === 'en' ? 'About STIKes Budi Luhur Cimahi' : 'Tentang STIKes Budi Luhur Cimahi'"
            :title="langStore.currentLang === 'en' ? (aboutStore.about?.title_en || 'Profile of STIKes Budi Luhur Cimahi') : (aboutStore.about?.title || 'Profil STIKes Budi Luhur Cimahi')" 
            :subtitle="langStore.currentLang === 'en' ? 'Welcome to STIKes Budi Luhur Cimahi' : 'Selamat Datang di STIKes Budi Luhur Cimahi'"
            :description="langStore.currentLang === 'en' ? (aboutStore.about?.description_en || aboutStore?.about?.content || '') : (aboutStore?.about?.content || '')" :video="aboutStore.about?.video || ''" :status="'hidden'" />
        <StatistikSection :statistik="statistikStore.statistik" />
        <SejarahSection />
        <KemitraanSection :loading="partnerStore.loading" :error="partnerStore.error" :mitra="partnerStore.partners" />
        <TimSection />
        <TestimonialSection :loading="testimoniStore.loading" :error="testimoniStore.error"
            :testimoni="testimoniStore.testimoni" />
    </MainLayout>
</template>