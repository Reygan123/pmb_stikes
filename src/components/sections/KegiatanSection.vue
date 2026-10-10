<script setup lang="ts">
import { computed, ref } from 'vue';
import Subtitle from '../ui/Subtitle.vue';
import Tag from '../ui/Tag.vue';
import Title from '../ui/Title.vue';
import type { Organization } from '@/core/types/organisasi';
import ErrorSection from './ErrorSection.vue';
import EmptySection from './EmptySection.vue';
import KegiatanSkeleton from './skeletons/KegiatanSkeleton.vue';
import { getImageUrl } from '@/utils/imageUtils';
import { useRouter } from 'vue-router';
import Button from '../ui/Button.vue';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

const router = useRouter()

const props = defineProps<{
    organisasi: Organization[],
    loading: boolean,
    error: string | null
}>();

const activeIndex = ref(0)
const activeFilter = ref('all')

const setActiveItem = (index: number) => {
    activeIndex.value = index
}

const setActiveFilter = (filter: string) => {
    activeFilter.value = filter
    activeIndex.value = 0
}

const categories = computed(() => {
    const uniqueCategories = [...new Set(props.organisasi.map(item => item.kategori?.title).filter(Boolean))]
    return ['all', ...uniqueCategories]
})

const filteredOrganisasi = computed(() => {
    if (activeFilter.value === 'all') {
        return props.organisasi
    }
    return props.organisasi.filter(item => item.kategori?.title === activeFilter.value)
})

const navigateToDetail = () => {
    router.push(`/kegiatan`)
}
</script>

<template>
    <div v-if="loading">
        <KegiatanSkeleton />
    </div>

    <div v-else-if="error">
        <ErrorSection />
    </div>

    <div v-else-if="loading === false && organisasi?.length === 0">
        <EmptySection name="Kegiatan" />
    </div>

    <section v-if="!loading && !error && organisasi?.length > 0"
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div class="flex flex-col justify-center items-center text-center gap-4">
            <Tag :title="langStore.currentLang === 'en' ? 'Student Clubs & Activities' : 'UKM & Organisasi'" />
            <Title :title="langStore.currentLang === 'en' ? 'Student Life & Campus Activities' : 'Kegiatan Kemahasiswaan'" />
            <Subtitle
                :text="langStore.currentLang === 'en' ? 'At STIKes Budi Luhur Cimahi, find supportive peers, inspiring mentors, and vibrant communities to enrich your student life.' : 'Di STIKes Budi Luhur Cimahi, kamu akan menemukan teman seperjuangan, mentor yang menginspirasi, dan komunitas yang akan menjadi keluarga keduamu.'" />

            <div class="flex justify-center items-center gap-4">
                <div v-for="category in categories" :key="category" @click="setActiveFilter(category || '')" :class="[
                    'py-2 px-3 lg:py-3 lg:px-6 rounded-full group font-medium transition-all duration-500 cursor-pointer',
                    activeFilter === category ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 hover:bg-primary hover:text-white'
                ]">
                    <p class="text-sm md:text-base lg:text-lg">{{ category === 'all' ? (langStore.currentLang === 'en' ? 'All' : 'Semua') : category }}</p>
                </div>
            </div>
        </div>

        <!-- Tablet & Dekstop -->
        <div
            class="w-full h-full hidden md:flex flex-col md:flex-row items-center gap-4 md:gap-12 lg:gap-16 overflow-hidden">
            <div class="w-full h-full md:w-[45%] rounded-4xl overflow-hidden relative">
                <img :src="getImageUrl(`/organisasi/${organisasi[activeIndex]?.image}`)"
                    :alt="organisasi[activeIndex]?.title" loading="lazy" decoding="async" width="400" height="320" class="w-full h-64 md:h-80 lg:h-96 object-cover">

                <div
                    class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-4xl">
                    <div class="h-fit p-4 text-white w-full">
                        <h3 class="text-base md:text-lg font-medium">{{ langStore.loc(organisasi[activeIndex]?.title, organisasi[activeIndex]?.title_en) }}</h3>
                    </div>
                </div>
            </div>

            <div class="w-full h-full md:w-[55%] grid grid-cols-1">
                <div v-for="(item, index) in filteredOrganisasi" :key="index" @click="setActiveItem(index)" :class="[
                    'py-3 lg:py-6 space-y-2 transition-all duration-500 cursor-pointer',
                    activeIndex === index ? 'text-gstart' : 'text-netral hover:text-gstart'
                ]">
                    <div class="w-full flex items-center justify-between gap-4">
                        <h4 class="text-base md:text-lg xl:text-[22px] font-medium" v-html="langStore.loc(item.title, item.title_en)"></h4>
                        <div :class="[activeIndex === index ? 'rotate-180 transition-all duration-500' : '']">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                fill="none">
                                <path d="M19 9.01367L12 16.0137L5 9.01367" stroke="#081B36" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>

                    <div class="space-y-6 transition-all duration-500"
                        :class="[activeIndex === index ? 'w-full h-fit opacity-100' : 'w-full h-0 opacity-0']">
                        <p class="text-sm" v-html="langStore.loc(item.description, item.description_en)"></p>
                    </div>
                </div>
            </div>

        </div>

        <!-- Mobile -->
        <div class="w-full h-full md:hidden">
            <div v-for="(item, index) in filteredOrganisasi" :key="index" class="py-6 transition-all duration-500 border-b border-gray-200"
                @click="setActiveItem(index)"
                :class="[activeIndex === index ? 'text-gstart space-y-2' : 'text-netral space-y-0']">
                <div class="w-full flex justify-between items-center">
                    <div class="">
                        <h3 class="text-base">{{ langStore.loc(item.title, item.title_en) }}</h3>
                    </div>
                    <div :class="[activeIndex === index ? 'rotate-180 transition-all duration-500' : '']">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M19 9.01367L12 16.0137L5 9.01367" stroke="#081B36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <div class="space-y-6 transition-all duration-500"
                    :class="[activeIndex === index ? 'w-full h-fit opacity-100' : 'w-full h-0 opacity-0']">
                    <p class="text-sm" v-html="langStore.loc(item.description, item.description_en)"></p>
                    <div class="w-full h-[200px] overflow-hidden rounded-4xl relative">
                        <img :src="getImageUrl(`/organisasi/${item.image}`)" :alt="item.title" loading="lazy"
                            class="w-full h-full object-cover">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-4xl">
                            <div class="h-fit p-4 text-white w-full">
                                <h3 class="text-base md:text-lg font-medium">{{ langStore.loc(item.title, item.title_en) }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Button class="w-fit mx-auto" @click="navigateToDetail" :text="langStore.t('common.read_more')" />
    </section>
</template>