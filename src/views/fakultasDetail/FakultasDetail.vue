<script setup lang="ts">
import { useHead } from '@vueuse/head';
import FakultasHero from './sections/FakultasDetailHero.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
// import PendaftaranSection from '@/components/sections/PendaftaranSection.vue';
import KemitraanSection from '@/components/sections/KemitraanSection.vue';
import FasilitasSection from '@/components/sections/FasilitasSection.vue';
import PublikasiSection from '@/components/sections/PublikasiSection.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';
import SeoMeta from '@/components/ui/SeoMeta.vue';
import ListProdi from './sections/ListProdi.vue';
import { useIdentityStore } from '@/stores/identity';
import { usePartnerStore } from '@/stores/partner';
import { useTestimoniStore } from '@/stores/testimoni';
import { useFasilitasStore } from '@/stores/fasilitas';
import { onMounted } from 'vue';
import { useUnggulanStore } from '@/stores/unggulan';
import { usePrestasiStore } from '@/stores/prestasi';
import { usePostStore } from '@/stores/post';
import { getImageUrl } from '@/utils/imageUtils';
import { useOrganisasiStore } from '@/stores/organisasi';
import { useRoute } from 'vue-router';
import { useFakultasStore } from '@/stores/fakultas';
import FakultasMengapa from './sections/FakultasMengapa.vue';
import FakultasKegiatan from './sections/FakultasKegiatan.vue';
// import FakultasTestimoni from './sections/FakultasTestimoni.vue';
// import FakultasPrestasi from './sections/FakultasPrestasi.vue';

const route = useRoute()

const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug;

const fakultasStore = useFakultasStore()
const uspStore = useUnggulanStore()
const identityStore = useIdentityStore();
const partnerStore = usePartnerStore();
const prestasiStore = usePrestasiStore();
const organisasiStore = useOrganisasiStore()
const fasilitasStore = useFasilitasStore();
const testimoniStore = useTestimoniStore();
const beritaStore = usePostStore();

onMounted(async () => {
  try {
    await fakultasStore.fetchFakultasBySlug(slug);

    if (fakultasStore.currentFakultas?.fakultas.id) {
      const fakultasId = fakultasStore.currentFakultas.fakultas.id;

      await uspStore.fetchUnggulanFakultas(fakultasId);
      await organisasiStore.fetchOrganisasiFakultas(fakultasId);
      await prestasiStore.fetchPrestasiFakultas(fakultasId);
      await testimoniStore.fetchTestimoniFakultas(fakultasId)
      await fasilitasStore.fetchFasilitasFakultas(fakultasId)
    } else {
      console.error('ID Fakultas tidak ditemukan');
      await uspStore.fetchUnggulanFakultas(0);
      await organisasiStore.fetchOrganisasiFakultas(0);
      await prestasiStore.fetchPrestasiFakultas(0);
      await testimoniStore.fetchTestimoniFakultas(0)
      await fasilitasStore.fetchFasilitasFakultas(0)
    }
    await Promise.all([
      identityStore.fetchIdentity(),
      partnerStore.fetchPartners(),
      beritaStore.fetchPosts(),
    ]);

  } catch (error) {
    console.error('Error loading page data:', error);
  }
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PMB STIKes Budi Luhur Cimahi",
  "url": "https://stikesbudiluhurcimahi.ac.id/",
  "logo": "https://stikesbudiluhurcimahi.ac.id/logo.png",
  "description": "Informasi mendalam tentang Program Studi, dosen, dan prospek karir di STIKes Budi Luhur Cimahi."
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
  <SeoMeta :title="fakultasStore.currentFakultas?.fakultas?.name || 'Detail Program Studi'"
    description="Informasi mendalam tentang Program Studi, dosen, dan prospek karir di STIKes Budi Luhur Cimahi."
    keywords="Program Studi STIKes Budi Luhur, Info Program Studi, Prospek Karir Kesehatan" :meta-tags="[
      { property: 'og:type', content: 'website' },
      { name: 'twitter:creator', content: '@stikesbudiluhur' }
    ]" />

  <MainLayout position="fixed">
    <FakultasHero :loading="fakultasStore.loading" :error="fakultasStore.error"
      :image="fakultasStore.currentFakultas?.fakultas?.image1 || ''"
      :title="fakultasStore.currentFakultas?.fakultas?.name || ''"
      :description="fakultasStore.currentFakultas?.fakultas?.subtitle || ''" />
    <AboutSection :loading="fakultasStore.loading" :error="fakultasStore.error"
      :img="getImageUrl(`fakultas/${fakultasStore.currentFakultas?.fakultas?.image2}` || '')" :tag="'Tentang Fakultas'"
      :title="fakultasStore.currentFakultas?.fakultas.title1 || ''"
      :description="fakultasStore.currentFakultas?.fakultas.description1 || ''"
      :video="fakultasStore.currentFakultas?.fakultas.yt_id || ''"
      :status="'hidden'" 
      :name="fakultasStore.currentFakultas?.fakultas.name"/>
    <ListProdi :loading="fakultasStore.loading" :error="fakultasStore.error"
      :title="fakultasStore.currentFakultas?.fakultas.title2 || ''"
      :prodi="fakultasStore.currentFakultas?.departements || []"
      :fakultas="fakultasStore.currentFakultas?.fakultas.name || ''" />
    <!-- <PendaftaranSection /> -->
    <FakultasMengapa v-if="uspStore.unggulanFakultas && uspStore.unggulanFakultas.length > 0" :loading="uspStore.loading" :error="uspStore.error" :name="fakultasStore.currentFakultas?.fakultas.name || ''" :usp="uspStore.unggulanFakultas.slice(0, 6)" />
    <KemitraanSection v-if="partnerStore.partners && partnerStore.partners.length > 0" :loading="partnerStore.loading" :error="partnerStore.error" :mitra="partnerStore.partners" />
    <!-- <FakultasPrestasi :loading="prestasiStore.loading" :error="prestasiStore.error"
      :prestasi="prestasiStore.prestasiFakultas" /> -->
    <FakultasKegiatan v-if="organisasiStore.organisasiFakultas && organisasiStore.organisasiFakultas.length > 0" :loading="organisasiStore.loading" :error="organisasiStore.error"
      :organisasi="organisasiStore.organisasiFakultas.slice(0, 5)" />
    <FasilitasSection v-if="fasilitasStore.fasilitasFakultas && fasilitasStore.fasilitasFakultas.length > 0" :loading="fasilitasStore.loading" :error="fasilitasStore.error"
      :fasilitas="fasilitasStore.fasilitasFakultas" />
    <!-- <FakultasTestimoni :loading="testimoniStore.loading" :error="testimoniStore.error"
      :testimoni="testimoniStore.testimoniFakultas" /> -->
    <PublikasiSection v-if="beritaStore.posts && beritaStore.posts.length > 0" :loading="beritaStore.loading" :error="beritaStore.error"
      :berita="beritaStore.posts?.slice(0, 6)" />
  </MainLayout>
</template>