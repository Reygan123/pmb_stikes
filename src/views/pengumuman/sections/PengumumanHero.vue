<script setup lang="ts">
import Logo from '@/assets/logo/logo.png';
import { ref } from 'vue';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();
const searchQuery = ref('');
const emit = defineEmits(['search']);

const handleSearch = () => {
    emit('search', searchQuery.value);
};
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col lg:items-center gap-6 md:gap-8 lg:gap-10 h-full w-full md:max-w-4xl lg:max-w-[80%] xl:max-w-[70%] mx-auto">
        <div class="w-fit flex flex-col-reverse items-center md:flex-row md:justify-between md:items-center gap-6 md:gap-12">
            <div class="w-full text-center md:text-left space-y-3">
                <h1 data-aos="fade-up-sm" data-aos-duration="1000"
                    class="text-2xl md:text-4xl lg:text-[44px] xl:text-[56px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-gstart to-gend uppercase">
                    {{ langStore.t('nav.announcements') }}
                </h1>
                <p class="text-sm md:text-base lg:text-lg font-medium text-gstart">
                    {{ langStore.currentLang === 'en' 
                        ? 'Stay up-to-date with official admission selection results and key academic notices.'
                        : 'Baca informasi terbaru di sini agar kamu tidak melewatkan hal penting terkait seleksi SPMB dan aktivitas akademik.' }}
                </p>
            </div>
            <div class="shrink-0">
                <img :src="Logo" alt="Logo STIKes Budi Luhur Cimahi" class="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-sm">
            </div>
        </div>
        <div class="w-full flex items-center gap-4 bg-gray-100 p-3 rounded-full border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                    d="M13 13L19 19M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z"
                    stroke="#081B36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <input v-model="searchQuery" @input="handleSearch" type="text" :placeholder="langStore.t('pengumuman.search_placeholder')" class="w-full focus:outline-0 bg-transparent text-sm md:text-base">
        </div>
    </section>
</template>