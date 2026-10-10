<script setup lang="ts">
import { useHead } from '@vueuse/head';
import TestimonialSection from '@/components/sections/TestimonialSection.vue';
import JalurHero from './sections/JalurHero.vue';
import ListJalur from './sections/ListJalur.vue';
import { useTestimoniStore } from '@/stores/testimoni';
import { onMounted } from 'vue';
import MainLayout from '@/components/layouts/MainLayout.vue';
import SeoMeta from '@/components/ui/SeoMeta.vue';
import { useJalurStore } from '@/stores/jalur';
import { useIdentityStore } from '@/stores/identity';
import FakultasSection from '../akademik/sections/FakultasSection.vue';

const identityStore = useIdentityStore()
const jalurStore = useJalurStore();
const testimoniStore = useTestimoniStore();

onMounted(async () => {
  await Promise.all([
    identityStore.fetchIdentity(),
    jalurStore.fetchJalurs(),
    testimoniStore.fetchTestimoniHome(),
  ]);
})

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PMB STIKes Budi Luhur Cimahi",
  "url": "https://stikesbudiluhurcimahi.ac.id/",
  "logo": "https://stikesbudiluhurcimahi.ac.id/logo.png",
  "description": "Temukan semua jalur pendaftaran PMB STIKes Budi Luhur Cimahi, termasuk informasi jadwal, syarat, dan tanggal penting pendaftaran."
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
  <SeoMeta title="Jalur dan Jadwal Pendaftaran"
    description="Temukan semua jalur pendaftaran PMB STIKes Budi Luhur Cimahi, termasuk informasi jadwal, syarat, dan tanggal penting pendaftaran."
    keywords="Jalur Pendaftaran STIKes Budi Luhur, Jadwal PMB, Syarat Pendaftaran Kuliah, Tanggal Penting PMB" :meta-tags="[
      { property: 'og:type', content: 'website' },
      { name: 'twitter:creator', content: '@stikesbudiluhur' }
    ]" />

  <MainLayout>
    <JalurHero :identity="identityStore.identity" />
    <ListJalur :loading="jalurStore.loading" :error="jalurStore.error" :jalur="jalurStore.jalurs"
      :identity="identityStore.identity" />
    <FakultasSection />
    <TestimonialSection :loading="testimoniStore.loading" :error="testimoniStore.error"
      :testimoni="testimoniStore.testimoni" />
  </MainLayout>
</template>