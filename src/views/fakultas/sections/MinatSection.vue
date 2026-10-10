<script setup lang="ts">
import { computed } from 'vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import { useLanguageStore } from '@/stores/language';
import { useRouter } from 'vue-router';

const router = useRouter();
const langStore = useLanguageStore();

const data = computed(() => [
  {
    slug: 'rumpun-ilmu-keperawatan',
    title: langStore.t('academics.nursing_faculty'),
    dept: langStore.t('academics.nursing_dept'),
    description: langStore.currentLang === 'en'
      ? 'Providing global-standard nursing education with gerontic nursing specialization and international employment opportunities.'
      : 'Menyelenggarakan pendidikan keperawatan berstandar global dengan keunggulan keperawatan gerontik dan peluang kerja internasional.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
  },
  {
    slug: 'rumpun-ilmu-kebidanan',
    title: langStore.t('academics.midwifery_faculty'),
    dept: langStore.t('academics.midwifery_dept'),
    description: langStore.currentLang === 'en'
      ? 'Cultivating compassionate, professional, and noble-character midwives specializing in complementary midwifery care.'
      : 'Mencetak bidan profesional, tanggap, dan berkarakter budi luhur dalam pelayanan kebidanan komplementer.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80',
  },
  {
    slug: 'pusat-karier-internasional-balai-bahasa',
    title: langStore.t('academics.career_center'),
    dept: langStore.t('academics.career_center_title'),
    description: langStore.currentLang === 'en'
      ? 'Equipping graduates with Japanese and German language proficiencies, competencies, and overseas career pathways.'
      : 'Menyiapkan lulusan berkarier dan berkarya hingga tingkat internasional dengan pembekalan bahasa dan kompetensi klinis.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
  },
]);

const navigateTo = (slug: string) => {
  router.push(`/fakultas/${slug}`);
};
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-12 md:gap-16">
        <div class="w-full flex flex-col justify-center items-center text-center gap-3">
            <Tag :title="langStore.t('academics.faculty')" />
            <Title :title="langStore.currentLang === 'en' ? 'Choose Your Calling, Shape Your Future' : 'Pilih Minat, Tentukan Masa Depan'" />
            <Subtitle :text="langStore.currentLang === 'en' ? 'Every study program at STIKes Budi Luhur Cimahi is designed to nurture competent, ethical, and career-ready healthcare professionals.' : 'Setiap program studi di STIKes Budi Luhur Cimahi dirancang untuk mengembangkan kompetensi profesional tenaga kesehatan yang unggul dan siap bersaing di dunia kerja.'" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div v-for="(item, index) in data" :key="index"
                @click="navigateTo(item.slug)"
                class="w-full h-[360px] md:h-[400px] lg:h-[440px] flex flex-col group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500">
                
                <!-- Background Image -->
                <div class="absolute inset-0 w-full h-full">
                    <img :src="item.image" :alt="item.title" loading="lazy"
                        class="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-black/90 transition-colors"></div>
                </div>

                <!-- Hover Details -->
                <div class="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col justify-end text-white">
                    <span class="text-xs uppercase tracking-wider text-blue-200 font-semibold mb-1">{{ item.dept }}</span>
                    <h3 class="text-xl md:text-2xl font-bold mb-2">{{ item.title }}</h3>
                    <p class="text-xs md:text-sm text-gray-200 line-clamp-3 opacity-90 group-hover:opacity-100 transition-opacity">
                      {{ item.description }}
                    </p>
                    <div class="mt-4 flex items-center gap-2 text-xs font-semibold text-blue-200 group-hover:translate-x-1 transition-transform">
                      <span>{{ langStore.t('common.learn_more') }}</span>
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>