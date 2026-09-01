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
  "name": "PMB Universitas BTH",
  "url": "https://admisi.universitas-bth.ac.id/",
  "logo": "https://admisi.universitas-bth.ac.id/assets/logo-bth-Dytwawg6.webp",
  "description": "Jelajahi berbagai Fakultas unggulan di Universitas BTH. Temukan bidang ilmu yang sesuai dengan minat dan karir masa depan Anda."
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
  <SeoMeta title="Fakultas BTH"
    description="Jelajahi berbagai Fakultas unggulan di Universitas BTH. Temukan bidang ilmu yang sesuai dengan minat dan karir masa depan Anda."
    keywords="Fakultas BTH, Program Studi BTH, Jurusan Kuliah, Pilihan Fakultas" :meta-tags="[
      { property: 'og:type', content: 'website' },
      { name: 'twitter:creator', content: '@bth_university' }
    ]" />

  <MainLayout>
    <AkademikHero />
    <!-- <MinatSection /> -->
    <FakultasSection />
    <TestimonialSection :loading="testimoniStore.loading" :error="testimoniStore.error"
      :testimoni="testimoniStore.testimoni" />
  </MainLayout>
</template>