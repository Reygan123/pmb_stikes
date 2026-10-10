<script setup lang="ts">
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import KeunggulanCard from '../components/KeunggulanCard.vue';
import type { Jalur } from '@/core/types/jalur';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import EmptySection from '@/components/sections/EmptySection.vue';
import JalurKeunggulanSkeleton from '@/components/sections/skeletons/JalurKeunggulanSkeleton.vue';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

defineProps<{
    jalur: Jalur | null,
    loading: boolean,
    error: string | null
}>();
</script>

<template>
    <div v-if="loading">
        <JalurKeunggulanSkeleton />
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && jalur === null">
        <EmptySection name="Keunggulan Jalur" />
    </div>

    <section v-if="!loading && !error && jalur !== null"
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col lg:flex-row lg:justify-center items-center gap-8 md:gap-12 lg:gap-16">
        <div class="w-full lg:w-[50%] h-full flex flex-col justify-center items-start gap-6">
            <div
                class="flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-left gap-3">
                <Tag :title="langStore.currentLang === 'en' ? 'Track Highlights' : 'Keunggulan'" />
                <Title :title="langStore.loc(jalur?.title2, jalur?.title2_en)" />
                <Subtitle color="text-[#5A5A59]" :text="langStore.loc(jalur?.description2, jalur?.description2_en)" />
            </div>
        </div>

        <div class="w-full lg:w-[50%] grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="w-full h-full flex justify-center items-center">
                <KeunggulanCard 
                    :title="langStore.currentLang === 'en' ? 'Fast & Efficient Process' : 'Proses Cepat & Efisien'"
                    :description="langStore.currentLang === 'en' ? 'Register, complete testing, and receive decision promptly. No unnecessary long waiting!' : 'Daftar, tes, dan terima hasil secara cepat. Tidak ada lagi menunggu berminggu-minggu!'"
                    icon='<svg xmlns="http://www.w3.org/2000/svg" width="36" height="40" viewBox="0 0 36 40" fill="none"> <path d="M17 23V15M35 9L31 5M13 1H21M17 39C8.16344 39 1 31.8366 1 23C1 14.1634 8.16344 7 17 7C25.8366 7 33 14.1634 33 23C33 31.8366 25.8366 39 17 39Z" stroke="#005EB8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>' />
            </div>
            <div class="w-full h-full space-y-6">
                <KeunggulanCard 
                    :title="langStore.currentLang === 'en' ? 'Result Certainty' : 'Kepastian Hasil'"
                    :description="langStore.currentLang === 'en' ? 'Clear passing thresholds and direct selection feedback to plan your education.' : 'Tidak perlu menunggu lama untuk mengetahui kelulusan Anda. Hasil langsung tersedia!'"
                    icon='<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"> <path d="M18 30L22 34L30 26M26 6.00174C25.809 6 25.5946 6 25.3494 6H16.4004C14.1602 6 13.0392 6 12.1836 6.43597C11.4309 6.81947 10.8195 7.43095 10.436 8.18359C10 9.03924 10 10.1602 10 12.4004V35.6004C10 37.8406 10 38.9601 10.436 39.8158C10.8195 40.5684 11.4309 41.181 12.1836 41.5645C13.0384 42 14.158 42 16.3939 42L31.6062 42C33.842 42 34.96 42 35.8148 41.5645C36.5674 41.181 37.181 40.5684 37.5645 39.8158C38 38.961 38 37.843 38 35.6072V18.6514C38 18.4059 37.9999 18.1912 37.9981 18M26 6.00174C26.5713 6.00694 26.9327 6.02769 27.2777 6.11052C27.6858 6.20851 28.0757 6.37053 28.4336 6.58984C28.8371 6.83713 29.1836 7.18364 29.875 7.875L36.126 14.126C36.8178 14.8178 37.1617 15.1627 37.4091 15.5664C37.6284 15.9243 37.7907 16.3145 37.8887 16.7227C37.9715 17.0675 37.9927 17.429 37.9981 18M26 6.00174V11.6C26 13.8402 26 14.9595 26.436 15.8152C26.8195 16.5678 27.4309 17.181 28.1836 17.5645C29.0384 18 30.158 18 32.3938 18H37.9981M37.9981 18H38.0004" stroke="#005EB8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' />
                <KeunggulanCard 
                    :title="langStore.currentLang === 'en' ? 'Open for General Applicants' : 'Terbuka untuk Umum'"
                    :description="langStore.currentLang === 'en' ? 'Open to all high school, vocational school, and Islamic senior high school graduates nationwide.' : 'Kesempatan bagi seluruh lulusan SMA/SMK/sederajat tanpa diskriminasi.'"
                    icon='<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"> <path d="M18 30V36C18 39.3137 15.3137 42 12 42C8.68629 42 6 39.3137 6 36C6 32.6863 8.68629 30 12 30H18ZM18 30H30M18 30V18M30 30V36C30 39.3137 32.6863 42 36 42C39.3137 42 42 39.3137 42 36C42 32.6863 39.3137 30 36 30H30ZM30 30V18M30 18H18M30 18V12C30 8.68629 32.6863 6 36 6C39.3137 6 42 8.68629 42 12C42 15.3137 39.3137 18 36 18H30ZM18 18V12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18H18Z" stroke="#005EB8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>' />
            </div>
        </div>
    </section>
</template>