<script setup lang="ts">
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

const data = [
  {
    "id": 1,
    "id_departement": 1,
    "title": "1988 YBudiLuhur",
    "slug": "1988-ybudiluhur",
    "description": "\u003Cp\u003EBerdiri Yayasan Pambudhi Luhur 1976 pada tanggal 12 November 1988\u003C/p\u003E",
    "description_en": "\u003Cp\u003EEstablishment of Yayasan Pambudhi Luhur 1976 on November 12, 1988.\u003C/p\u003E",
    "image": "",
    "date": "1988-01-01",
    "no_urut": 1,
    "home": "1",
    "created_at": "2025-05-08T09:37:32.000000Z",
    "updated_at": "2025-10-23T09:33:39.000000Z"
  },
  {
    "id": 2,
    "id_departement": 1,
    "title": "1993 Akper Budi Luhur",
    "slug": "1993-akper-budiluhur",
    "description": "\u003Cp\u003EFondasi pertama diletakkan dengan berdirinya Akademi Keperawatan (Akper) Budi Luhur, menjawab kebutuhan tenaga perawat profesional.\u003C/p\u003E",
    "description_en": "\u003Cp\u003EThe foundation was laid with the establishment of Akper Budi Luhur, meeting the demand for professional nurses.\u003C/p\u003E",
    "image": "",
    "date": "1993-01-01",
    "no_urut": 2,
    "home": "1",
    "created_at": "2025-05-08T09:39:34.000000Z",
    "updated_at": "2025-10-24T03:08:19.000000Z"
  },
  {
    "id": 3,
    "id_departement": 1,
    "title": "1996 AAK Budi Luhur",
    "slug": "1996-aak-budiluhur",
    "description": "\u003Cp\u003EMerespons kebutuhan industri, Akademi Kebidanan/Kesehatan Budi Luhur didirikan, memperkuat posisi sebagai institusi kesehatan yang terpercaya.\u003C/p\u003E",
    "description_en": "\u003Cp\u003EResponding to industry needs, Midwifery Academy was founded, reinforcing our reputation as a trusted healthcare institution.\u003C/p\u003E",
    "image": "",
    "date": "1996-01-01",
    "no_urut": 3,
    "home": "1",
    "created_at": "2025-05-08T09:40:51.000000Z",
    "updated_at": "2025-10-24T03:08:35.000000Z"
  },
  {
    "id": 4,
    "id_departement": 1,
    "title": "2004 STIKes Budi Luhur",
    "slug": "2004-stikes-budiluhur",
    "description": "\u003Cp\u003EAkper dan Akes bersatu menjadi Sekolah Tinggi Ilmu Kesehatan (STIKes) Budi Luhur Cimahi dengan membuka program sarjana S1 Keperawatan.\u003C/p\u003E",
    "description_en": "\u003Cp\u003EMerging into STIKes Budi Luhur Cimahi and introducing the Bachelor of Nursing (S1) program.\u003C/p\u003E",
    "image": "",
    "date": "2004-01-01",
    "no_urut": 4,
    "home": "1",
    "created_at": "2025-05-08T09:41:40.000000Z",
    "updated_at": "2025-10-24T03:08:54.000000Z"
  },
  {
    "id": 7,
    "id_departement": 1,
    "title": "2021 STIKes Budi Luhur",
    "slug": "2021-ubudiluhur",
    "description": "\u003Cp\u003ESTIKes Budi Luhur Cimahi semakin berkembang dengan penguatan program studi Profesi Ners, D3 Kebidanan, dan S1 Kebidanan.\u003C/p\u003E",
    "description_en": "\u003Cp\u003EAdvancing further with the enhancement of Nurse Profession, D3 Midwifery, and Bachelor of Midwifery programs.\u003C/p\u003E",
    "image": "",
    "date": "2021-01-01",
    "no_urut": 7,
    "home": "1",
    "created_at": "2025-05-08T09:44:14.000000Z",
    "updated_at": "2025-10-24T03:09:23.000000Z"
  },
  {
    "id": 8,
    "id_departement": 1,
    "title": "2024 Profesi Bidan",
    "slug": "2024-profesi-bidan",
    "description": "\u003Cp\u003EPenambahan Program Studi Pendidikan Profesi Bidan untuk menghasilkan tenaga bidan profesional yang berdaya saing global.\u003C/p\u003E",
    "description_en": "\u003Cp\u003EInaugurating the Midwife Profession Degree to produce globally competitive healthcare practitioners.\u003C/p\u003E",
    "image": "",
    "date": "2024-01-01",
    "no_urut": 8,
    "home": "1",
    "created_at": "2025-05-08T09:45:14.000000Z",
    "updated_at": "2025-10-23T06:58:18.000000Z"
  }
]


const currentPage = ref(0);
const isMobile = ref(false);

const itemsPerPage = computed(() => isMobile.value ? 3 : 6);

const totalPages = computed(() => Math.ceil(data.length / itemsPerPage.value));

const paginatedData = computed(() => {
  const startIndex = currentPage.value * itemsPerPage.value;
  return data.slice(startIndex, startIndex + itemsPerPage.value);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
};

const isPrevDisabled = () => currentPage.value === 0;
const isNextDisabled = () => currentPage.value === totalPages.value - 1;

const getPaddingClass = (index: number) => {
  const paddingClasses = ["pt-0", "pt-[20px] pl-[30px] md:pl-0 md:pt-[80px] xl:pt-[120px]", "pt-[20px] pl-[60px] md:pl-0 md:pt-[120px] xl:pt-[240px]"];
  return paddingClasses[index % 3];
};

const checkIsMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

const handleResize = () => {
  const wasMobile = isMobile.value;
  checkIsMobile();

  if (wasMobile !== isMobile.value) {
    const maxPage = Math.ceil(data.length / itemsPerPage.value) - 1;
    if (currentPage.value > maxPage) {
      currentPage.value = maxPage >= 0 ? maxPage : 0;
    }
  }
};

onMounted(() => {
  checkIsMobile();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
    <div
      class="w-full flex flex-col justify-center items-center text-center md:text-left md:flex-row md:justify-between md:items-end">
      <div class="flex flex-col justify-center items-center text-center md:items-start md:w-fit">
        <Tag :title="langStore.currentLang === 'en' ? 'Our Journey' : 'Sejarah Singkat'" />
        <Title class="leading-relaxed" :title="langStore.currentLang === 'en' ? 'Our Milestones & <br/> Journey' : 'Jejak Langkah & <br/> Perjalanan Kami'" />
      </div>
      <div class="w-full md:w-[50%]">
        <Subtitle color="text-black"
          :text="langStore.currentLang === 'en' ? 'Retracing the inspiring journey of STIKes Budi Luhur Cimahi since inception: a story of commitment, excellence, and dedication to healthcare education.' : 'Menelusuri kembali perjalanan STIKes Budi Luhur Cimahi dari awal berdirinya; sebuah kisah tentang komitmen, pertumbuhan, dan dedikasi untuk pendidikan kesehatan Indonesia.'" />
      </div>
    </div>

    <!-- Dekstop & Tablet -->
    <div class="w-full hidden md:grid grid-cols-1 overflow-hidden">
      <Transition name="slide" mode="out-in" enter-active-class="transition-all duration-500 ease-out"
        leave-active-class="transition-all duration-300 ease-in" enter-from-class="opacity-0 transform translate-x-full"
        enter-to-class="opacity-100 transform translate-x-0" leave-from-class="opacity-100 transform translate-x-0"
        leave-to-class="opacity-0 transform -translate-x-full">
        <div :key="currentPage">
          <div class="grid grid-cols-3 gap-14">
            <div v-for="(item, index) in paginatedData.slice(0, 3)" :key="item.id"
              :class="['space-y-4', getPaddingClass(index)]">
              <div class="flex items-center gap-4">
                <h3 class="text-[40px] lg:text-[54px] xl:text-[68px] text-gstart font-medium">{{ new
                  Date(item.date).getFullYear() }}</h3>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <path
                      d="M69.2688 41.7684L46.7688 64.2684C46.2996 64.7375 45.6634 65.0011 45 65.0011C44.3366 65.0011 43.7004 64.7375 43.2312 64.2684C42.7621 63.7993 42.4986 63.1631 42.4986 62.4997C42.4986 61.8363 42.7621 61.2 43.2312 60.7309L61.4656 42.4997H12.5C11.837 42.4997 11.2011 42.2363 10.7322 41.7674C10.2634 41.2986 10 40.6627 10 39.9997C10 39.3366 10.2634 38.7008 10.7322 38.2319C11.2011 37.7631 11.837 37.4997 12.5 37.4997H61.4656L43.2312 19.2684C42.7621 18.7993 42.4986 18.1631 42.4986 17.4997C42.4986 16.8363 42.7621 16.2 43.2312 15.7309C43.7004 15.2618 44.3366 14.9983 45 14.9983C45.6634 14.9983 46.2996 15.2618 46.7688 15.7309L69.2688 38.2309C69.5012 38.4631 69.6856 38.7388 69.8114 39.0423C69.9372 39.3458 70.002 39.6711 70.002 39.9997C70.002 40.3282 69.9372 40.6535 69.8114 40.957C69.6856 41.2605 69.5012 41.5362 69.2688 41.7684Z"
                      fill="#005EB8" />
                  </svg>
                </div>
              </div>
              <div>
                <p class="text-base md:text-lg xl:text-[22px] text-netral" v-html="langStore.loc(item.description, item.description_en)"></p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-14 mt-0 xl:mt-14">
            <div v-for="(item, index) in paginatedData.slice(3, 6)" :key="item.id"
              :class="['space-y-4', getPaddingClass(index + 3)]">
              <div class="flex items-center gap-4">
                <h3 class="text-[40px] lg:text-[54px] xl:text-[68px] text-gstart font-medium">{{ new
                  Date(item.date).getFullYear() }}</h3>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <path
                      d="M69.2688 41.7684L46.7688 64.2684C46.2996 64.7375 45.6634 65.0011 45 65.0011C44.3366 65.0011 43.7004 64.7375 43.2312 64.2684C42.7621 63.7993 42.4986 63.1631 42.4986 62.4997C42.4986 61.8363 42.7621 61.2 43.2312 60.7309L61.4656 42.4997H12.5C11.837 42.4997 11.2011 42.2363 10.7322 41.7674C10.2634 41.2986 10 40.6627 10 39.9997C10 39.3366 10.2634 38.7008 10.7322 38.2319C11.2011 37.7631 11.837 37.4997 12.5 37.4997H61.4656L43.2312 19.2684C42.7621 18.7993 42.4986 18.1631 42.4986 17.4997C42.4986 16.8363 42.7621 16.2 43.2312 15.7309C43.7004 15.2618 44.3366 14.9983 45 14.9983C45.6634 14.9983 46.2996 15.2618 46.7688 15.7309L69.2688 38.2309C69.5012 38.4631 69.6856 38.7388 69.8114 39.0423C69.9372 39.3458 70.002 39.6711 70.002 39.9997C70.002 40.3282 69.9372 40.6535 69.8114 40.957C69.6856 41.2605 69.5012 41.5362 69.2688 41.7684Z"
                      fill="#005EB8" />
                  </svg>
                </div>
              </div>
              <div>
                <p class="text-base md:text-lg xl:text-[22px] text-netral" v-html="langStore.loc(item.description, item.description_en)"></p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Mobile -->
    <div class="w-full grid grid-cols-1 overflow-hidden md:hidden">
      <Transition name="slide" mode="out-in" enter-active-class="transition-all duration-500 ease-out"
        leave-active-class="transition-all duration-300 ease-in" enter-from-class="opacity-0 transform translate-x-full"
        enter-to-class="opacity-100 transform translate-x-0" leave-from-class="opacity-100 transform translate-x-0"
        leave-to-class="opacity-0 transform -translate-x-full">
        <div :key="currentPage">
          <div class="grid grid-cols-1 gap-0">
            <div v-for="(item, index) in paginatedData" :key="item.id" :class="['space-y-4', getPaddingClass(index)]">
              <div class="flex items-center gap-4">
                <h3 class="text-[40px] lg:text-[54px] xl:text-[68px] text-gstart font-medium">{{ new
                  Date(item.date).getFullYear() }}</h3>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <path
                      d="M69.2688 41.7684L46.7688 64.2684C46.2996 64.7375 45.6634 65.0011 45 65.0011C44.3366 65.0011 43.7004 64.7375 43.2312 64.2684C42.7621 63.7993 42.4986 63.1631 42.4986 62.4997C42.4986 61.8363 42.7621 61.2 43.2312 60.7309L61.4656 42.4997H12.5C11.837 42.4997 11.2011 42.2363 10.7322 41.7674C10.2634 41.2986 10 40.6627 10 39.9997C10 39.3366 10.2634 38.7008 10.7322 38.2319C11.2011 37.7631 11.837 37.4997 12.5 37.4997H61.4656L43.2312 19.2684C42.7621 18.7993 42.4986 18.1631 42.4986 17.4997C42.4986 16.8363 42.7621 16.2 43.2312 15.7309C43.7004 15.2618 44.3366 14.9983 45 14.9983C45.6634 14.9983 46.2996 15.2618 46.7688 15.7309L69.2688 38.2309C69.5012 38.4631 69.6856 38.7388 69.8114 39.0423C69.9372 39.3458 70.002 39.6711 70.002 39.9997C70.002 40.3282 69.9372 40.6535 69.8114 40.957C69.6856 41.2605 69.5012 41.5362 69.2688 41.7684Z"
                      fill="#005EB8" />
                  </svg>
                </div>
              </div>
              <div>
                <p class="text-base md:text-lg xl:text-[22px] text-netral" v-html="langStore.loc(item.description, item.description_en)"></p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <div class="w-fit ml-auto flex gap-4 z-10">
      <div @click="!isPrevDisabled() && prevPage()" :class="[
        'w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full border transition duration-500 flex items-center justify-center',
        isPrevDisabled()
          ? 'bg-transparent border-gray-300 cursor-not-allowed'
          : 'bg-transparent border-primary hover:bg-primary cursor-pointer'
      ]">
        <svg xmlns="http://www.w3.org/2000/svg" :class="[
          'h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 transition duration-300',
          isPrevDisabled() ? 'text-gray-400' : 'text-primary hover:text-white'
        ]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div @click="!isNextDisabled() && nextPage()" :class="[
        'w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full border transition duration-500 flex items-center justify-center',
        isNextDisabled()
          ? 'bg-transparent border-gray-300 cursor-not-allowed'
          : 'bg-transparent border-primary hover:bg-primary cursor-pointer'
      ]">
        <svg xmlns="http://www.w3.org/2000/svg" :class="[
          'h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 transition duration-300',
          isNextDisabled() ? 'text-gray-400' : 'text-primary hover:text-white'
        ]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </section>
</template>