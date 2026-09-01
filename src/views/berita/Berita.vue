<script setup lang="ts">
import { useHead } from '@vueuse/head';
import BeritaHeader from './sections/BeritaHeader.vue';
import BeritaHero from './sections/BeritaHero.vue';
import ListBerita from './sections/ListBerita.vue';
import BeritaRec from './sections/BeritaRec.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';
import { usePostStore } from '@/stores/post';
import { onMounted, ref } from 'vue';
import SeoMeta from '@/components/ui/SeoMeta.vue';

const beritaStore = usePostStore();
const initialLoading = ref(true);

onMounted(async () => {
  await beritaStore.fetchPosts();
  initialLoading.value = false;
})

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog", 
  "name": "Berita Terbaru Universitas BTH",
  "description": "Ikuti perkembangan terbaru Universitas BTH. Dapatkan berita, pengumuman, dan informasi penting seputar kampus dan PMB.",
  "url": "https://admisi.universitas-bth.ac.id/berita",
  "publisher": {
    "@type": "CollegeOrUniversity",
    "name": "Universitas BTH",
    "logo": {
      "@type": "ImageObject",
      "url": "https://admisi.universitas-bth.ac.id/assets/logo-bth-Dytwawg6.webp"
    }
  }
};

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(structuredData)
    }
  ]
})
</script>

<template>
  <SeoMeta title="Berita Terbaru PMB BTH"
    description="Ikuti perkembangan terbaru Universitas BTH. Dapatkan berita, pengumuman, dan informasi penting seputar kampus dan PMB."
    keywords="Berita BTH, Pengumuman PMB, Info Kampus Terbaru" :meta-tags="[
      { property: 'og:type', content: 'website' },
      { name: 'twitter:creator', content: '@bth_university' }
    ]" />

  <MainLayout>
    <BeritaHeader />
    <BeritaHero :loading="initialLoading" :error="beritaStore.error" :berita="beritaStore.posts" />
    <ListBerita :loading="beritaStore.loading" :error="beritaStore.error" :berita="beritaStore" />
    <BeritaRec :loading="initialLoading" :error="beritaStore.error" :berita="beritaStore.posts?.slice(0, 2)" />
  </MainLayout>
</template>