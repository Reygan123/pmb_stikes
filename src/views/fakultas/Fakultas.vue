<script setup lang="ts">
import { useHead } from '@vueuse/head';
import TestimonialSection from '@/components/sections/TestimonialSection.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';
import SeoMeta from '@/components/ui/SeoMeta.vue';
import { useTestimoniStore } from '@/stores/testimoni';
import { onMounted } from 'vue';
import AkademikHero from '../akademik/sections/AkademikHero.vue';
// import MinatSection from './sections/MinatSection.vue';
import FakultasSection from '../akademik/sections/FakultasSection.vue';

const testimoniStore = useTestimoniStore();

onMounted(async () => {
  await Promise.all([
    testimoniStore.fetchTestimoniHome(),
  ]);
})

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PMB STIKes Budi Luhur Cimahi",
  "url": "https://stikesbudiluhurcimahi.ac.id/",
  "logo": "https://stikesbudiluhurcimahi.ac.id/logo.png",
  "description": "Jelajahi berbagai Program Studi unggulan di STIKes Budi Luhur Cimahi. Temukan bidang ilmu kesehatan yang sesuai dengan minat dan karir masa depan Anda."
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
  <SeoMeta title="Program Studi STIKes Budi Luhur Cimahi"
    description="Jelajahi berbagai Program Studi unggulan di STIKes Budi Luhur Cimahi. Temukan bidang ilmu kesehatan yang sesuai dengan minat dan karir masa depan Anda."
    keywords="Program Studi STIKes Budi Luhur, Jurusan Kuliah Kesehatan, Pilihan Prodi, STIKes Cimahi" :meta-tags="[
      { property: 'og:type', content: 'website' },
      { name: 'twitter:creator', content: '@stikesbudiluhur' }
    ]" />

  <MainLayout>
    <AkademikHero />
    <!-- <MinatSection /> -->
    <FakultasSection />
    <TestimonialSection :loading="testimoniStore.loading" :error="testimoniStore.error"
      :testimoni="testimoniStore.testimoni" />
  </MainLayout>
</template>