<script setup lang="ts">
import Tag from '@/components/ui/Tag.vue';
import type { Post } from '@/core/types/post';
import { RouterLink } from 'vue-router';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

defineProps<{
    description: string
    berita: Post[]
}>()

const formatDate = (dateString: string | undefined): string => {
    return langStore.formatDate(dateString);
}
</script>

<template>
    <section
        class="p-4 md:pb-8 md:px-8  lg:pb-16 lg:pt-0 lg:px-24 flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-16">
        <div class="w-full md:w-[55%] lg:w-[65%] space-y-20">
            <div class="w-full">
                <p class="text-gstart leading-loose text-sm md:text-sm lg:text-base [&_a]:text-blue-600 [&_a]:underline [&_a]:font-medium [&_a:hover]:text-blue-800
                [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-2     
                [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-2  
                [&_li]:my-1" v-html="description">
                </p>
            </div>

            <div class="space-y-6 md:space-y-8 lg:space-y-10">
                <div class="flex flex-wrap items-center gap-4">
                    <p class="text-sm text-primary">#akademik</p>
                    <p class="text-sm text-primary">#kesehatan</p>
                    <p class="text-sm text-primary">#stikesbudiluhur</p>
                </div>

                <div class="w-full flex items-center gap-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M17.25 3H6.75C6.35218 3 5.97064 3.15804 5.68934 3.43934C5.40804 3.72064 5.25 4.10218 5.25 4.5V21C5.25007 21.1338 5.28595 21.2652 5.35393 21.3805C5.42191 21.4958 5.5195 21.5908 5.63659 21.6557C5.75367 21.7206 5.88598 21.7529 6.01978 21.7494C6.15358 21.7458 6.284 21.7066 6.3975 21.6356L12 18.1341L17.6034 21.6356C17.7169 21.7063 17.8472 21.7454 17.9809 21.7488C18.1146 21.7522 18.2467 21.7198 18.3636 21.655C18.4806 21.5902 18.5781 21.4953 18.646 21.3801C18.7139 21.2649 18.7498 21.1337 18.75 21V4.5C18.75 4.10218 18.592 3.72064 18.3107 3.43934C18.0294 3.15804 17.6478 3 17.25 3ZM17.25 19.6472L12.3966 16.6144C12.2774 16.5399 12.1396 16.5004 11.9991 16.5004C11.8585 16.5004 11.7208 16.5399 11.6016 16.6144L6.75 19.6472V4.5H17.25V19.6472Z"
                            fill="#005EB8" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M20.25 10.5001V19.5001C20.25 19.8979 20.092 20.2795 19.8107 20.5608C19.5294 20.8421 19.1478 21.0001 18.75 21.0001H5.25C4.85218 21.0001 4.47064 20.8421 4.18934 20.5608C3.90804 20.2795 3.75 19.8979 3.75 19.5001V10.5001C3.75 10.1023 3.90804 9.72075 4.18934 9.43944C4.47064 9.15814 4.85218 9.0001 5.25 9.0001H7.5C7.69891 9.0001 7.88968 9.07912 8.03033 9.21977C8.17098 9.36042 8.25 9.55119 8.25 9.7501C8.25 9.94901 8.17098 10.1398 8.03033 10.2804C7.88968 10.4211 7.69891 10.5001 7.5 10.5001H5.25V19.5001H18.75V10.5001H16.5C16.3011 10.5001 16.1103 10.4211 15.9697 10.2804C15.829 10.1398 15.75 9.94901 15.75 9.7501C15.75 9.55119 15.829 9.36042 15.9697 9.21977C16.1103 9.07912 16.3011 9.0001 16.5 9.0001H18.75C19.1478 9.0001 19.5294 9.15814 19.8107 9.43944C20.092 9.72075 20.25 10.1023 20.25 10.5001ZM8.78063 6.53073L11.25 4.06041V12.7501C11.25 12.949 11.329 13.1398 11.4697 13.2804C11.6103 13.4211 11.8011 13.5001 12 13.5001C12.1989 13.5001 12.3897 13.4211 12.5303 13.2804C12.671 13.1398 12.75 12.949 12.75 12.7501V4.06041L15.2194 6.53073C15.3601 6.67146 15.551 6.75052 15.75 6.75052C15.949 6.75052 16.1399 6.67146 16.2806 6.53073C16.4214 6.39 16.5004 6.19912 16.5004 6.0001C16.5004 5.80108 16.4214 5.61021 16.2806 5.46948L12.5306 1.71948C12.461 1.64974 12.3783 1.59443 12.2872 1.55668C12.1962 1.51894 12.0986 1.49951 12 1.49951C11.9014 1.49951 11.8038 1.51894 11.7128 1.55668C11.6217 1.59443 11.539 1.64974 11.4694 1.71948L7.71937 5.46948C7.57864 5.61021 7.49958 5.80108 7.49958 6.0001C7.49958 6.19912 7.57864 6.39 7.71938 6.53073C7.86011 6.67146 8.05098 6.75052 8.25 6.75052C8.44902 6.75052 8.63989 6.67146 8.78063 6.53073Z"
                            fill="#005EB8" />
                    </svg>
                </div>
            </div>
        </div>
        <div
            class="w-full md:w-[45%] lg:w-[35%] rounded-3xl md:rounded-4xl bg-gstart space-y-6 md:space-y-8 lg:space-y-10 p-6 md:p-8">
            <div class="w-full">
                <input type="text"
                    class="w-full py-3 px-4 border border-netral rounded-full text-sm lg:text-base text-white"
                    :placeholder="langStore.currentLang === 'en' ? 'Search...' : 'Cari...'">
            </div>

            <div class="space-y-4 lg:space-y-6">
                <h3
                    class="text-xl lg:text-2xl xl:text-[32px] font-medium text-left text-transparent bg-clip-text bg-gradient-to-b from-white to-[#999999]">
                    {{ langStore.currentLang === 'en' ? 'Categories' : 'Kategori' }}</h3>
                <div class="flex flex-wrap items-center gap-4">
                    <Tag color="text-primary" :title="langStore.currentLang === 'en' ? 'Academic' : 'Akademik'" />
                    <Tag color="text-primary" :title="langStore.currentLang === 'en' ? 'Research & Innovation' : 'Riset & Inovasi'" />
                    <Tag color="text-primary" :title="langStore.currentLang === 'en' ? 'Campus Life' : 'Seputar Kampus'" />
                </div>
            </div>

            <div class="space-y-4 lg:space-y-6">
                <h3
                    class="text-xl lg:text-2xl xl:text-[32px] font-medium text-left text-transparent bg-clip-text bg-gradient-to-b from-white to-[#999999]">
                    {{ langStore.currentLang === 'en' ? 'Latest News' : 'Berita Terbaru' }}</h3>
                <div class="space-y-8">
                    <RouterLink v-for="(item, index) in berita" :key="index" :to="`/berita/${item.slug}`"
                        class="block space-y-4 cursor-pointer">
                        <h4 class="text-sm md:text-base xl:text-lg font-medium text-white">{{ langStore.loc(item.title, item.title_en) }}</h4>
                        <div class="w-full flex justify-between items-center">
                            <Tag color="text-primary" :title="langStore.loc(item.category.name)" />
                            <p class="text-sm text-netral">{{ formatDate(item.pub_date) }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>

            <div class="space-y-4 lg:space-y-6">
                <h3
                    class="text-xl lg:text-2xl xl:text-[32px] font-medium text-left text-transparent bg-clip-text bg-gradient-to-b from-white to-[#999999]">
                    {{ langStore.currentLang === 'en' ? 'Popular Tags' : 'Tag Populer' }}</h3>
                <div class="">
                    <div class="py-4 border-b border-netral/30">
                        <p class="text-sm lg:text-base text-netral">#pmb</p>
                    </div>
                    <div class="py-4 border-b border-netral/30">
                        <p class="text-sm lg:text-base text-netral">#beasiswa</p>
                    </div>
                    <div class="py-4 border-b border-netral/30">
                        <p class="text-sm lg:text-base text-netral">#stikesbudiluhur</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>