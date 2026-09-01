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
// import Countdown from '@/components/sections/Countdown.vue';
// import Image from '@/assets/vector/maskot-countdown.png'

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
  "name": "PMB Universitas BTH",
  "url": "https://admisi.universitas-bth.ac.id/",
  "logo": "https://admisi.universitas-bth.ac.id/assets/logo-bth-Dytwawg6.webp",
  "description": "Temukan semua jalur pendaftaran PMB Universitas BTH, termasuk informasi jadwal, syarat, dan tanggal penting pendaftaran."
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
    description="Temukan semua jalur pendaftaran PMB Universitas BTH, termasuk informasi jadwal, syarat, dan tanggal penting pendaftaran."
    keywords="Jalur Pendaftaran BTH, Jadwal PMB, Syarat Pendaftaran Kuliah, Tanggal Penting BTH" :meta-tags="[
      { property: 'og:type', content: 'website' },
      { name: 'twitter:creator', content: '@bth_university' }
    ]" />

  <MainLayout>
    <JalurHero :identity="identityStore.identity" />
    <!-- <div class="text-center space-y-4 md:space-y-8">
      <p class="text-sm md:text-base text-gstart font-medium">Gelombang I Akan ditutup dalam: </p>
      <div class="w-fit mx-auto">
        <Countdown target-date="2026-01-31T23:59:59">
          <template #left-icon>
            <div class="absolute left-0 top-1/2 -translate-y-1/2">
              <img :src="Image" alt="Maskot Countdown" class="w-[100px] h-[100px] md:w-[140px] md:h-[140px] object-contain">
            </div>
            <div class="w-[100px] md:w-[130px]"></div>
          </template>
        </Countdown>
      </div>
    </div> -->
    <ListJalur :loading="jalurStore.loading" :error="jalurStore.error" :jalur="jalurStore.jalurs"
      :identity="identityStore.identity" />
    <FakultasSection />
    <TestimonialSection :loading="testimoniStore.loading" :error="testimoniStore.error"
      :testimoni="testimoniStore.testimoni" />
  </MainLayout>
</template>