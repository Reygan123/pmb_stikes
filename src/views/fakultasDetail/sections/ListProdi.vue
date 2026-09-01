<script setup lang="ts">
import Tag from '@/components/ui/Tag.vue';
import ProdiCard from '../components/ProdiCard.vue';
import type { Departement } from '@/core/types/fakultas';
import EmptySection from '@/components/sections/EmptySection.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import { getImageUrl } from '@/utils/imageUtils';
import ListProdiSkeleton from '@/components/sections/skeletons/ListProdiSkeleton.vue';
import Title from '@/components/ui/Title.vue';
import { useRouter } from 'vue-router';

defineProps<{
    title: string,
    fakultas: string,
    prodi: Departement[],
    loading: boolean,
    error: string | null
}>()

const router = useRouter()

const navigateToDetailProdi = (slug: string) => {
    router.push(`/prodi/${slug}`)
}
</script>

<template>
    <div v-if="loading">
        <ListProdiSkeleton />
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && prodi?.length === 0">
        <EmptySection name="Prodi"/>
    </div>

    <section v-if="!loading && !error && prodi?.length > 0" class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col items-center gap-8 md:gap-8 lg:gap-6">
        <div class="w-full h-full hidden md:flex items-center gap-6">
            <div class="w-[25%] lg:w-[40%] h-full flex flex-col justify-center items-start gap-4">
                <Tag title="Program Studi" />
                <Title :title="title" />
                <!-- <h2
                    class="text-base md:text-lg lg:text-[22px] text-transparent bg-clip-text bg-gradient-to-r from-gstart to-gend font-medium">
                    {{ title }}</h2> -->
            </div>
            <div class="w-[75%] lg:w-[60%] grid grid-cols-3 gap-6">
                <div class="w-full h-[280px] rounded-4xl bg-gstart p-4 flex justify-end items-end relative">
                    <div class="absolute left-1/2 w-52 object-contain">
                        <svg xmlns="http://www.w3.org/2000/svg" width="116" height="194" viewBox="0 0 116 194"
                            fill="none">
                            <path
                                d="M72.2757 166.667V127.725H33.334V72.4334H72.2757V33.3334H127.567V72.4334H166.667V127.725H127.567V166.667H72.2757ZM80.609 158.333H119.234V119.392H158.334V80.7667H119.234V41.6667H80.609V80.7667H41.6673V119.392H80.609V158.333Z"
                                fill="white" fill-opacity="0.05" />
                        </svg>
                    </div>
                    <h4 class="text-left text-white font-medium text-xl">{{ fakultas }}</h4>
                </div>
                <div v-for="(item, index) in prodi.slice(0,2)" :key="index">
                    <ProdiCard :id="index + 1" :title="item.program_name" :slug="item.slug" :image="getImageUrl(`programs/${item.image1}`)" />
                </div>
            </div>
        </div>
        <div class="w-full h-full hidden md:flex items-center gap-6">
            <div class="w-full h-full inline-flex gap-6">
                <div class="w-full" v-for="(item, index) in prodi.slice(2,7)" :key="index">
                    <ProdiCard :id="index + 3" :title="item.program_name" :slug="item.slug" :image="getImageUrl(`programs/${item.image1}`)" />
                </div>
            </div>
            <div class="w-[20%] h-fit flex justify-end items-end-safe mt-auto gap-4">
                <a href="https://pendaftaran.universitas-bth.ac.id/" target="_blank" class="text-base md:text-lg lg:text-[22px] text-gstart text-right underline">
                    Mulai Karirmu <br /> Disini</a>
            </div>
        </div>

        <!-- Mobile & Destop -->
        <div class="space-y-8 md:hidden">
            <div class="w-full h-full flex flex-col justify-center items-start gap-4">
                <Tag title="Program Studi" />
                <h2
                    class="text-2xl md:text-3xl lg:text-[22px] text-transparent bg-clip-text bg-gradient-to-r from-gstart to-gend font-medium">
                    Mulai perjalanan Anda menjadi ahli yang siap bersaing.</h2>
            </div>

            <div class="p-4 bg-[#E8E8E8] rounded-3xl space-y-4">
                <div class="p-4 border border-gray-300 rounded-3xl bg-gstart relative">
                    <p class="text-base text-white">{{ fakultas }}</p>
                    <div class="absolute right-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="99" height="59" viewBox="0 0 99 59" fill="none">
                            <path
                                d="M29.1221 82.5V53.8779H0.5V13.2385H29.1221V-15.5H69.7615V13.2385H98.5V53.8779H69.7615V82.5H29.1221ZM35.2471 76.375H63.6365V47.7529H92.375V19.3635H63.6365V-9.375H35.2471V19.3635H6.625V47.7529H35.2471V76.375Z"
                                fill="white" fill-opacity="0.05" />
                        </svg>
                    </div>
                </div>
                <div v-for="item in prodi" @click="navigateToDetailProdi(item.slug)" class="p-3 border border-gray-300 rounded-2xl bg-white">
                    <p class="text-sm text-gstart">{{ item.program_name }}</p>
                </div>
            </div>
        </div>
    </section>
</template>