<script setup lang="ts">
import { ref, computed } from 'vue';
import KegiatanSkeleton from '@/components/sections/skeletons/KegiatanSkeleton.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import EmptySection from '@/components/sections/EmptySection.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import type { Organization } from '@/core/types/organisasi';
import { getImageUrl } from '@/utils/imageUtils';
import { useRouter } from 'vue-router';
import Button from '@/components/ui/Button.vue';

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
            <Tag title="UKM & Organisasi" />
            <Title title="Kegiatan Kemahasiswaan" />
            <Subtitle text="Di Universitas BTH, kamu akan menemukan teman seperjuangan, mentor yang menginspirasi, dan komunitas yang akan menjadi keluarga keduamu." />

            <div class="flex justify-center items-center gap-4">
                <div v-for="category in categories" :key="category" @click="setActiveFilter(category || '')"
                    :class="[
                        'py-2 px-3 lg:py-3 lg:px-6 rounded-full group font-medium transition-all duration-500 cursor-pointer',
                        activeFilter === category ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 hover:bg-primary hover:text-white'
                    ]">
                    <p class="text-sm md:text-base lg:text-lg">{{ category === 'all' ? 'All' : category }}</p>
                </div>
            </div>
        </div>

        <!-- Tablet & Dekstop -->
        <div
            class="w-full h-full hidden md:flex flex-col md:flex-row items-center gap-4 md:gap-12 lg:gap-16 overflow-hidden">
            <div class="w-full h-full md:w-[45%] rounded-4xl overflow-hidden relative">
                <img :src="getImageUrl(`/organisasi/${filteredOrganisasi[activeIndex]?.image}`)"
                    :alt="filteredOrganisasi[activeIndex]?.title" class="w-full h-64 md:h-80 lg:h-96 object-cover">

                <div
                    class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-4xl">
                    <div class="h-fit p-4 text-white w-full">
                        <h3 class="text-base md:text-lg font-medium">{{ filteredOrganisasi[activeIndex]?.title }}</h3>
                    </div>
                </div>
            </div>

            <div class="w-full h-full md:w-[55%] grid grid-cols-1">
                <div v-for="(item, index) in filteredOrganisasi" :key="index" @click="setActiveItem(index)" :class="[
                    'py-3 lg:py-6 space-y-2 transition-all duration-500 cursor-pointer',
                    activeIndex === index ? 'text-gstart' : 'text-netral hover:text-gstart'
                ]">
                    <div class="w-full flex items-center justify-between gap-4">
                        <h4 class="text-base md:text-lg xl:text-[22px] font-medium" v-html="item.title"></h4>
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
                        <p class="text-sm" v-html="item.description"></p>
                    </div>
                </div>
            </div>

        </div>

        <!-- Mobile -->
        <div class="w-full h-full md:hidden">
            <div v-for="(item, index) in filteredOrganisasi" class="py-6 transition-all duartion-500 border-b border-[#A4A4A4]"
                @click="setActiveItem(index)"
                :class="[activeIndex === index ? 'text-gstart space-y-2' : 'text-[#A4A4A4] space-y-0']">
                <div class="w-full flex justify-between items-center">
                    <div class="">
                        <h3 class="text-base">{{ item.title }}</h3>
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
                    <p class="text-sm" v-html="item.description"></p>
                    <div class="w-full h-[200px] overflow-hidden rounded-4xl relative">
                        <img :src="getImageUrl(`/organisasi/${item.image}`)" :alt="item.title" loading="lazy"
                            class="w-full h-full object-cover">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-4xl">
                            <div class="h-fit p-4 text-white w-full">
                                <h3 class="text-base md:text-lg font-medium">{{ item.title }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Button class="w-fit mx-auto" @click="navigateToDetail" text="Selengkapnya" />
    </section>
</template>