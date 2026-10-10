<script setup lang="ts">
import AboutSection from '@/components/sections/AboutSection.vue';
// import PendaftaranSection from '@/components/sections/PendaftaranSection.vue';
import KemitraanSection from '@/components/sections/KemitraanSection.vue';
// import PrestasiSection from '@/components/sections/PrestasiSection.vue';
import KegiatanSection from '@/components/sections/KegiatanSection.vue';
import PublikasiSection from '@/components/sections/PublikasiSection.vue';
import { useHead } from '@vueuse/head';
import ProdiHero from './sections/ProdiHero.vue';
import ProdiKurikulum from './sections/ProdiKurikulum.vue';
import ProdiProspek from './sections/ProdiProspek.vue';
import JalurSection from '../beranda/sections/JalurSection.vue';
import { useIdentityStore } from '@/stores/identity';
import { usePartnerStore } from '@/stores/partner';
import { useTestimoniStore } from '@/stores/testimoni';
import { onMounted } from 'vue';
import { usePrestasiStore } from '@/stores/prestasi';
import { usePostStore } from '@/stores/post';
import { getImageUrl } from '@/utils/imageUtils';
import { useOrganisasiStore } from '@/stores/organisasi';
import { useRoute } from 'vue-router';
import { useProdiStore } from '@/stores/prodi';
import MainLayout from '@/components/layouts/MainLayout.vue';
import ProdiFasilitas from './sections/ProdiFasilitas.vue';
import ProdiUnggulan from './sections/ProdiUnggulan.vue';
// import FakultasTestimoni from '../fakultasDetail/sections/FakultasTestimoni.vue';
import { useStatistikStore } from '@/stores/statistik';
import { useJalurStore } from '@/stores/jalur';
import SeoMeta from '@/components/ui/SeoMeta.vue';
import { useLanguageStore } from '@/stores/language';
// import ProdiStatistik from './sections/ProdiStatistik.vue';

const langStore = useLanguageStore();
const route = useRoute()

const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug;

const prodiStore = useProdiStore()
const statistikStore = useStatistikStore()
const identityStore = useIdentityStore();
const jalurStore = useJalurStore();
const partnerStore = usePartnerStore();
const prestasiStore = usePrestasiStore();
const organisasiStore = useOrganisasiStore()
const testimoniStore = useTestimoniStore();
const beritaStore = usePostStore();

onMounted(async () => {
  try {
    await prodiStore.fetchProdiBySlug(slug);

    if (prodiStore.currentProdi?.departement.id) {
      const prodiId = prodiStore.currentProdi?.departement.id;

      await organisasiStore.fetchOrganisasiProdi(prodiId)
      await testimoniStore.fetchTestimoniProdi(prodiId)
    } else {
      console.error('ID Prodi tidak ditemukan');
      await organisasiStore.fetchOrganisasiProdi(0)
      await testimoniStore.fetchTestimoniProdi(0)
    }
    await Promise.all([
      prodiStore.fetchProdiBySlug(slug),
      statistikStore.fetchStatistik(),
      identityStore.fetchIdentity(),
      jalurStore.fetchJalurs(),
      partnerStore.fetchPartners(),
      prestasiStore.fetchPrestasis(),
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
  "description": "Lihat kurikulum, keunggulan, dan peluang kerja dari Program Studi pilihan di STIKes Budi Luhur Cimahi."
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
  <SeoMeta :title="prodiStore.currentProdi?.departement.name || 'Program Studi STIKes Budi Luhur Cimahi'"
    description="Lihat kurikulum, keunggulan, dan peluang kerja dari Program Studi pilihan di STIKes Budi Luhur Cimahi."
    keywords="Program Studi STIKes Budi Luhur, Jurusan Kuliah Kesehatan, Prospek Kerja Lulusan" :meta-tags="[
      { property: 'og:type', content: 'website' },
      { name: 'twitter:creator', content: '@stikesbudiluhur' }
    ]" />

  <MainLayout>
    <ProdiHero :loading="prodiStore.loading" :error="prodiStore.error"
      :prodi="langStore.loc(prodiStore.currentProdi?.departement.name)"
      :title="langStore.loc(prodiStore.currentProdi?.departement.title1)"
      :image="getImageUrl(`programs/${prodiStore.currentProdi?.departement.image_head}`)"
      :description="langStore.loc(prodiStore.currentProdi?.departement.description1)" />
    <AboutSection :loading="prodiStore.loading" :error="prodiStore.error"
      :img="getImageUrl(`programs/${prodiStore.currentProdi?.departement.image1}` || '')" 
      :tag="langStore.currentLang === 'en' ? 'About Program' : 'Tentang'"
      :title="langStore.loc(prodiStore.currentProdi?.departement.title2)"
      :description="langStore.loc(prodiStore.currentProdi?.departement.description2)"
      :video="prodiStore.currentProdi?.departement.id_yt || ''" status="hidden" />
    <ProdiUnggulan v-if="prodiStore.currentProdi?.unggulan && prodiStore.currentProdi?.unggulan.length > 0" :loading="prodiStore.loading" :error="prodiStore.error"
      :usp="prodiStore.currentProdi?.unggulan.slice(0, 9) || []"
      :name="langStore.loc(prodiStore.currentProdi?.departement.name)" />
    <ProdiKurikulum :loading="prodiStore.loading" :error="prodiStore.error"
      :image="prodiStore.currentProdi?.departement.image3 || ''"
      :title="langStore.loc(prodiStore.currentProdi?.departement.title3)"
      :description="langStore.loc(prodiStore.currentProdi?.departement.description3)" />
    <ProdiProspek :loading="prodiStore.loading" :error="prodiStore.error"
      :image="prodiStore.currentProdi?.departement.image4 || ''"
      :title="langStore.loc(prodiStore.currentProdi?.departement.title4)"
      :description="langStore.loc(prodiStore.currentProdi?.departement.description4)" />
    <JalurSection v-if="jalurStore.jalurs && jalurStore.jalurs.length > 0" :loading="jalurStore.loading" :error="jalurStore.error" :jalur="jalurStore.jalurs" />
    <KemitraanSection v-if="partnerStore.partners && partnerStore.partners.length > 0" :loading="partnerStore.loading" :error="partnerStore.error" :mitra="partnerStore.partners" />
    <!-- <PrestasiSection :loading="prestasiStore.loading" :error="prestasiStore.error"
      :prestasi="prestasiStore.prestasis" /> -->
    <KegiatanSection v-if="organisasiStore.organizations && organisasiStore.organizations.length > 0" :loading="organisasiStore.loading" :error="organisasiStore.error"
      :organisasi="organisasiStore.organizations.slice(0, 5)" />
    <ProdiFasilitas v-if="prodiStore.currentProdi?.fasilitas && prodiStore.currentProdi?.fasilitas.length > 0" :loading="prodiStore.loading" :error="prodiStore.error"
      :fasilitas="prodiStore.currentProdi?.fasilitas.slice(0, 5) || []" />
    <!-- <FakultasTestimoni :loading="testimoniStore.loading" :error="testimoniStore.error"
      :testimoni="testimoniStore.testimoniFakultas" /> -->
    <PublikasiSection v-if="beritaStore.posts && beritaStore.posts.length > 0" :loading="beritaStore.loading" :error="beritaStore.error"
      :berita="beritaStore.posts.slice(0, 6)" />
  </MainLayout>
</template>