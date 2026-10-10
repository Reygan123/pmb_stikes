<script setup lang="ts">
import EmptySection from '@/components/sections/EmptySection.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import ListPrestasiSkeleton from '@/components/sections/skeletons/ListPrestasiSkeleton.vue';
import type { Prestasi } from '@/core/types/prestasi';
import { getImageUrl } from '@/utils/imageUtils';
import { ref, watch } from 'vue'
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

const props = defineProps<{
    prestasi: Prestasi[],
    loading: boolean,
    error: string | null
}>()

const selectedPrestasi = ref<Prestasi | null>(null)

watch(() => props.prestasi, (newPrestasi) => {
    if (newPrestasi && newPrestasi.length > 0 && !selectedPrestasi.value) {
        selectedPrestasi.value = newPrestasi[0]
    }
}, { immediate: true })

const selectPrestasi = (prestasi: Prestasi) => {
    selectedPrestasi.value = prestasi
}

const groupByYear = (data: Prestasi[]) => {
    return data.reduce((acc, item) => {
        const year = new Date(item.tanggal).getFullYear().toString();
        if (!acc[year]) acc[year] = [];
        acc[year].push(item);
        return acc;
    }, {} as Record<string, Prestasi[]>);
}
</script>

<template>
    <div v-if="loading">
        <ListPrestasiSkeleton />
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && prestasi?.length === 0">
        <EmptySection name="Prestasi"/>
    </div>

    <section v-if="!loading && !error && prestasi?.length > 0" class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col md:flex-row gap-16 relative">
        <div class="w-full md:w-[45%] h-fit space-y-12 xl:space-y-16 hidden md:block sticky top-10 lg:top-32">
            <div class="w-full">
                <img :src="getImageUrl(`/prestasis/${selectedPrestasi?.image}` || '')" :alt="selectedPrestasi?.title"
                    class="w-full h-96 object-cover rounded-4xl">
            </div>
            <div class="space-y-2">
                <p class="text-lg lg:text-xl font-medium" v-html="langStore.loc(selectedPrestasi?.title, selectedPrestasi?.title_en)"></p>
                <h3 class="text-base">{{ langStore.loc(selectedPrestasi?.name, selectedPrestasi?.name_en) }}</h3>
            </div>
        </div>

        <div class="w-full md:w-[45%] hidden md:block">
            <template v-for="(yearGroup, year) in groupByYear(prestasi)" :key="year">
                <div :class="['w-full py-16 flex items-start gap-20',
                    Object.keys(groupByYear(prestasi)).indexOf(year) < Object.keys(groupByYear(prestasi)).length - 1 ? 'border-b border-black/20' : '']">
                    <div class="">
                        <p class="text-lg">{{ year }}</p>
                    </div>
                    <div class="w-full flex items-start gap-4">
                        <div class="space-y-10">
                            <div v-for="(prestasi, index) in yearGroup" :key="index"
                                class="flex gap-4 items-start text-netral group cursor-pointer"
                                @click="selectPrestasi(prestasi)">
                                <div class="space-y-3">
                                    <h3 class="text-lg">{{ langStore.loc(prestasi.name, prestasi.name_en) }}</h3>
                                    <h5 :class="[
                                        'text-xl xl:text-2xl font-semibold transition-all duration-500',
                                        selectedPrestasi?.title === prestasi.title
                                            ? 'text-gstart'
                                            : 'group-hover:text-gstart'
                                    ]">
                                        {{ langStore.loc(prestasi.title, prestasi.title_en) }}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>

        <div class="w-full md:hidden">
            <template v-for="(yearGroup, year) in groupByYear(prestasi)" :key="year">
                <div class="w-full flex items-start gap-4 py-14 border-b border-[#DCDCDC]">
                    <div class="w-fit">
                        <h3 class="text-base">{{ year }}</h3>
                    </div>

                    <div class="space-y-4 w-full">
                        <div v-for="(prestasi, index) in yearGroup" :key="index"
                            class="flex flex-col gap-4 text-netral group cursor-pointer" @click="selectPrestasi(prestasi)">
                            <div class="flex gap-4 items-start">
                                <div class="space-y-3">
                                    <h3 class="text-base">{{ langStore.loc(prestasi.name, prestasi.name_en) }}</h3>
                                    <h5 :class="[
                                        'text-lg font-semibold transition-all duration-500',
                                        selectedPrestasi?.title === prestasi.title
                                            ? 'text-gstart'
                                            : 'group-hover:text-gstart'
                                    ]">
                                        {{ langStore.loc(prestasi.title, prestasi.title_en) }}
                                    </h5>
                                </div>
                            </div>

                            <Transition name="slide-fade">
                                <div class="w-full space-y-4" v-if="selectedPrestasi?.title === prestasi.title">
                                    <div class="w-full">
                                        <img :src="getImageUrl(`/prestasis/${selectedPrestasi?.image}` || '')" :alt="selectedPrestasi?.title"
                                            class="w-full h-64 object-cover rounded-4xl">
                                    </div>
                                    <p class="text-sm" v-html="langStore.loc(selectedPrestasi?.title, selectedPrestasi?.title_en)"></p>
                                </div>
                            </Transition>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </section>
</template>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-fade-leave-active {
    transition: all 0.4s cubic-bezier(0.55, 0.06, 0.68, 0.19);
}

.slide-fade-enter-from {
    transform: translateY(30px);
    opacity: 0;
    max-height: 0;
    overflow: hidden;
}

.slide-fade-enter-to {
    transform: translateY(0);
    opacity: 1;
    max-height: 1000px;
}

.slide-fade-leave-from {
    transform: translateY(0);
    opacity: 1;
    max-height: 1000px;
}

.slide-fade-leave-to {
    transform: translateY(-15px);
    opacity: 0;
    max-height: 0;
    overflow: hidden;
}
</style>