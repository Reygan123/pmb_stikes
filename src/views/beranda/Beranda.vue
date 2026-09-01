<script setup lang="ts">
import HeroSection from './sections/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import MengapaSection from '@/components/sections/MengapaSection.vue';
import KemitraanSection from '@/components/sections/KemitraanSection.vue';
import PrestasiSection from '@/components/sections/PrestasiSection.vue';
import KegiatanSection from '@/components/sections/KegiatanSection.vue';
import FasilitasSection from '@/components/sections/FasilitasSection.vue';
import TestimonialSection from '@/components/sections/TestimonialSection.vue';
import PublikasiSection from '@/components/sections/PublikasiSection.vue';
import FileSection from '@/components/sections/FileSection.vue';
import JalurSection from './sections/JalurSection.vue';
import FakultasSection from '../akademik/sections/FakultasSection.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';
import SeoMeta from '@/components/ui/SeoMeta.vue';
import { onMounted } from 'vue';
import { usePartnerStore } from '@/stores/partner';
import { useTestimoniStore } from '@/stores/testimoni';
import { useFasilitasStore } from '@/stores/fasilitas';
import { useUnggulanStore } from '@/stores/unggulan';
import { usePrestasiStore } from '@/stores/prestasi';
import { usePostStore } from '@/stores/post';
import { useAboutStore } from '@/stores/about';
import { getImageUrl } from '@/utils/imageUtils';
import { useOrganisasiStore } from '@/stores/organisasi';
import { useHead } from '@vueuse/head';
import { useStatistikStore } from '@/stores/statistik';
import { useSliderStore } from '@/stores/slider';
import { useJalurStore } from '@/stores/jalur';
import File1 from '@/assets/files/35.00 SOP Sistem Penerimaan Mahasiswa Baru.pdf';
import File2 from '@/assets/files/Pedoman Seleksi Penerimaan Mahasiswa Baru 2025_2026.pdf';

const sliderStore = useSliderStore()
const statistikStore = useStatistikStore()
const aboutStore = useAboutStore()
const jalurStore = useJalurStore()
const uspStore = useUnggulanStore()
const organisasiStore = useOrganisasiStore()
const partnerStore = usePartnerStore();
const prestasiStore = usePrestasiStore();
const fasilitasStore = useFasilitasStore();
const testimoniStore = useTestimoniStore();
const beritaStore = usePostStore();

onMounted(async () => {
  await Promise.all([
    sliderStore.fetchSlider(),
    statistikStore.fetchStatistik(),
    aboutStore.fetchAbout(),
    jalurStore.fetchJalurs(),
    uspStore.fetchUnggulans(),
    organisasiStore.fetchOrganisasiHome(),
    partnerStore.fetchPartners(),
    prestasiStore.fetchPrestasis(),
    fasilitasStore.fetchFasilitas(),
    testimoniStore.fetchTestimoniHome(),
    beritaStore.fetchPosts(),
  ]);
})

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PMB Universitas BTH",
  "url": "https://admisi.universitas-bth.ac.id/",
  "logo": "https://admisi.universitas-bth.ac.id/assets/logo-bth-Dytwawg6.webp",
  "description": "Universitas BTH berkomitmen mencetak lulusan yang menguasai integrasi ilmu pengetahuan dan kecerdasan buatan untuk menjawab tantangan industri di tingkat global."
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
  <SeoMeta title="Pendaftaran Mahasiswa Baru (PMB) & Admisi"
    description="Universitas BTH berkomitmen mencetak lulusan yang menguasai integrasi ilmu pengetahuan dan kecerdasan buatan untuk menjawab tantangan industri di tingkat global."
    keywords="PMB BTH, Universitas BTH, Pendaftaran Mahasiswa Baru, Kuliah BTH, Fakultas BTH" :meta-tags="[
      { property: 'og:type', content: 'website' },
      { name: 'twitter:creator', content: '@bth_university' }
    ]" />

  <MainLayout>
    <HeroSection :loading="sliderStore.loading" :error="sliderStore.error" :slider="sliderStore.sliders"
      :statistik="statistikStore.statistik || null" />
    <AboutSection :loading="aboutStore.loading" :error="aboutStore.error"
      :img="getImageUrl(`identities/${aboutStore.about?.image1}` || '')" :tag="'Tentang Universitas BTH'"
      :title="aboutStore.about?.title || ''" :description="aboutStore.about?.description || ''"
      :subtitle="aboutStore.about?.subtitle" :video="aboutStore.about?.video || ''" />
    <FileSection :file1="{ url: File1, name: '35.00 SOP Sistem Penerimaan Mahasiswa Baru' }"
      :file2="{ url: File2, name: 'Pedoman Seleksi Penerimaan Mahasiswa Baru 2025/2026' }" />
    <MengapaSection :loading="uspStore.loading" :error="uspStore.error" :usp="uspStore.unggulans.slice(0, 9)" />
    <FakultasSection />
    <JalurSection :loading="jalurStore.loading" :error="jalurStore.error" :jalur="jalurStore.jalurs" />
    <KemitraanSection :loading="partnerStore.loading" :error="partnerStore.error" :mitra="partnerStore.partners" />
    <PrestasiSection :loading="prestasiStore.loading" :error="prestasiStore.error"
      :prestasi="prestasiStore.prestasis" />
    <KegiatanSection :loading="organisasiStore.loading" :error="organisasiStore.error"
      :organisasi="organisasiStore.organizations.slice(0, 5)" />
    <FasilitasSection :loading="fasilitasStore.loading" :error="fasilitasStore.error"
      :fasilitas="fasilitasStore.fasilitas" />
    <TestimonialSection :loading="testimoniStore.loading" :error="testimoniStore.error"
      :testimoni="testimoniStore.testimoni" />
    <PublikasiSection :loading="beritaStore.loading" :error="beritaStore.error"
      :berita="beritaStore.posts.slice(0, 3)" />
  </MainLayout>
</template>