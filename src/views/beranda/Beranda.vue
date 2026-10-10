<script setup lang="ts">
import { onMounted, watch, defineAsyncComponent, ref } from 'vue';
import HeroSection from './sections/HeroSection.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';
import SeoMeta from '@/components/ui/SeoMeta.vue';
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
import { useLanguageStore } from '@/stores/language';

const AboutSection = defineAsyncComponent(() => import('@/components/sections/AboutSection.vue'));
const MengapaSection = defineAsyncComponent(() => import('@/components/sections/MengapaSection.vue'));
const FakultasSection = defineAsyncComponent(() => import('../akademik/sections/FakultasSection.vue'));
const JalurSection = defineAsyncComponent(() => import('./sections/JalurSection.vue'));
const KemitraanSection = defineAsyncComponent(() => import('@/components/sections/KemitraanSection.vue'));
const PrestasiSection = defineAsyncComponent(() => import('@/components/sections/PrestasiSection.vue'));
const KegiatanSection = defineAsyncComponent(() => import('@/components/sections/KegiatanSection.vue'));
const FasilitasSection = defineAsyncComponent(() => import('@/components/sections/FasilitasSection.vue'));
const TestimonialSection = defineAsyncComponent(() => import('@/components/sections/TestimonialSection.vue'));
const PublikasiSection = defineAsyncComponent(() => import('@/components/sections/PublikasiSection.vue'));

const langStore = useLanguageStore();
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

const showBelowFold = ref(false);

const revealBelowFold = () => {
  showBelowFold.value = true;
};

const loadHomeData = async () => {
  await Promise.all([
    sliderStore.fetchSlider(),
    statistikStore.fetchStatistik(),
  ]);
  const loadDeferred = () => {
    aboutStore.fetchAbout();
    jalurStore.fetchJalurs();
    uspStore.fetchUnggulans();
    organisasiStore.fetchOrganisasiHome();
    partnerStore.fetchPartners();
    prestasiStore.fetchPrestasis();
    fasilitasStore.fetchFasilitas();
    testimoniStore.fetchTestimoniHome();
    beritaStore.fetchPosts();
  };
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    (window as any).requestIdleCallback(loadDeferred);
  } else {
    setTimeout(loadDeferred, 200);
  }
};

onMounted(() => {
  loadHomeData();
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', revealBelowFold, { once: true, passive: true });
    window.addEventListener('touchstart', revealBelowFold, { once: true, passive: true });
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(revealBelowFold, { timeout: 800 });
    } else {
      setTimeout(revealBelowFold, 300);
    }
  }
});
watch(() => langStore.currentLang, loadHomeData);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PMB STIKes Budi Luhur Cimahi",
  "url": "https://stikesbudiluhurcimahi.ac.id/",
  "logo": "https://stikesbudiluhurcimahi.ac.id/favicon.png",
  "description": "STIKes Budi Luhur Cimahi berkomitmen mencetak lulusan tenaga kesehatan yang unggul, berkarakter, dan berdaya saing global."
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
    description="STIKes Budi Luhur Cimahi berkomitmen mencetak lulusan tenaga kesehatan yang unggul, berkarakter, dan berdaya saing global."
    keywords="PMB STIKes, STIKes Budi Luhur Cimahi, Pendaftaran Mahasiswa Baru, Kuliah Kesehatan Cimahi" :meta-tags="[
      { property: 'og:type', content: 'website' },
      { name: 'twitter:creator', content: '@stikesbudiluhur' }
    ]" />

  <MainLayout>
    <HeroSection :loading="sliderStore.loading" :error="sliderStore.error" :slider="sliderStore.sliders"
      :statistik="statistikStore.statistik || null" />
    <AboutSection :loading="aboutStore.loading" :error="aboutStore.error"
      :img="aboutStore.about?.image1 ? getImageUrl(`identities/${aboutStore.about.image1}`) : ''" 
      :tag="langStore.currentLang === 'en' ? 'About STIKes Budi Luhur Cimahi' : 'Tentang STIKes Budi Luhur Cimahi'"
      :title="langStore.currentLang === 'en' ? (aboutStore.about?.title_en || 'Profile of STIKes Budi Luhur Cimahi') : (aboutStore.about?.title || 'Profil STIKes Budi Luhur Cimahi')" 
      :description="langStore.currentLang === 'en' ? (aboutStore.about?.description_en || 'STIKes Budi Luhur Cimahi is dedicated to producing healthcare graduates who are outstanding, of noble character, and globally competitive. Supported by modern teaching facilities and experienced faculty.') : (aboutStore.about?.description || '')"
      :subtitle="langStore.currentLang === 'en' ? (aboutStore.about?.subtitle_en || 'Welcome to STIKes Budi Luhur Cimahi') : (aboutStore.about?.subtitle || 'Selamat Datang di STIKes Budi Luhur Cimahi')" 
      :video="aboutStore.about?.video || ''" />
    <template v-if="showBelowFold">
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
    </template>
  </MainLayout>
</template>