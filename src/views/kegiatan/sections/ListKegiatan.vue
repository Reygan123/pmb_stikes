<script setup lang="ts">
import EmptySection from '@/components/sections/EmptySection.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import ListKegiatanSkeleton from '@/components/sections/skeletons/ListKegiatanSkeleton.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import type { Organization } from '@/core/types/organisasi';
import { getImageUrl } from '@/utils/imageUtils';
import { ref, watch, computed } from 'vue';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

const props = defineProps<{
    organisasi: Organization[],
    loading: boolean,
    error: string | null
}>();

const activeCategory = ref<string>();
const activeOrganization = ref<Organization | null>(null);

const categories = computed(() => {
    const uniqueCategories = [...new Set(props.organisasi.map(item => item.kategori?.title))];
    return uniqueCategories;
});

const filteredOrganisasi = computed(() => {
    if (!activeCategory.value) return [];
    return props.organisasi.filter(item => item.kategori?.title === activeCategory.value);
});

const setActiveCategory = (category: string) => {
    activeCategory.value = category;
    const filtered = props.organisasi.filter(item => item.kategori?.title === category);
    if (filtered.length > 0) {
        activeOrganization.value = filtered[0];
    }
};

const setActiveOrganization = (fasilitas: Organization) => {
    activeOrganization.value = fasilitas;
};

watch(() => props.organisasi, (newOrganisasi) => {
    if (newOrganisasi?.length > 0 && !activeCategory.value) {
        const firstCategory = [...new Set(newOrganisasi.map(item => item.kategori?.title))][0];
        activeCategory.value = firstCategory;
        activeOrganization.value = newOrganisasi.find(item => item.kategori?.title === firstCategory) || null;
    }
}, { immediate: true });
</script>

<template>
    <div v-if="loading">
        <ListKegiatanSkeleton />
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && organisasi?.length === 0">
        <EmptySection name="List Kegiatan" />
    </div>

    <section v-if="!loading && !error && organisasi?.length > 0"
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div class="w-full flex flex-col justify-center items-center text-center gap-4">
            <Tag :title="langStore.currentLang === 'en' ? 'Student Activities' : 'Kegiatan'" />
            <Title :title="langStore.currentLang === 'en' ? 'Discover Your True Passion Here!' : 'Temukan Passion Anda di Sini!'" />
            <Subtitle class="text-center"
                :text="langStore.currentLang === 'en' 
                    ? 'Whatever your passions—arts, sports, entrepreneurship, or community healthcare service—STIKes Budi Luhur Cimahi provides the ideal platforms to flourish.' 
                    : 'Apapun minat Anda—seni, olahraga, kewirausahaan, atau kegiatan sosial—STIKes Budi Luhur Cimahi menyediakan wadah kegiatan mahasiswa yang tepat untuk Anda jelajahi.'" />
        </div>

        <div class="w-full space-y-8">
            <!-- Dekstop -->
            <div class="w-full hidden lg:flex justify-center items-center gap-4 overflow-x-auto pb-2">
                <div v-for="category in categories" :key="category"
                    class="py-2 px-3 lg:py-3 lg:px-6 rounded-full group flex-shrink-0 transition-all duration-500 cursor-pointer"
                    :class="activeCategory === category ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 hover:bg-primary hover:text-white'"
                    @click="setActiveCategory(category || 'All')">
                    <p class="text-sm md:text-base lg:text-lg">{{ langStore.loc(category) }}</p>
                </div>
            </div>

            <!-- Mobile -->
            <div class="w-full lg:hidden flex gap-4 overflow-x-auto pb-2">
                <div v-for="(organisasi, index) in organisasi" :key="index"
                    class="py-2 px-3 lg:py-3 lg:px-6 rounded-full group flex-shrink-0 transition-all duration-500 cursor-pointer"
                    :class="activeOrganization === organisasi ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 hover:bg-primary hover:text-white'"
                    @click="setActiveOrganization(organisasi || 'All')">
                    <p class="text-sm md:text-base lg:text-lg">{{ langStore.loc(organisasi.title, organisasi.title_en) }}</p>
                </div>
            </div>

            <div class="w-full h-full space-y-8">
                <div class="w-full h-[340px] lg:h-[420px] xl:h-[540px] hidden md:flex gap-8 md:gap-12 lg:gap-16">
                    <div class="w-[30%] xl:w-[20%] h-full flex flex-col justify-between gap-8 md:gap-12 lg:gap-20">
                        <div class="h-fit space-y-6">
                            <div v-for="item in filteredOrganisasi" :key="item.id"
                                class="cursor-pointer transition-all duration-300"
                                :class="activeOrganization?.id === item.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'"
                                @click="setActiveOrganization(item)">
                                <h4 class="text-sm md:text-base xl:text-lg font-medium">{{ langStore.loc(item.title, item.title_en) }}</h4>
                            </div>
                        </div>
                        <h4 class="text-sm md:text-base xl:text-lg font-medium">{{ langStore.loc(activeOrganization?.kategori?.title)
                            }}</h4>
                    </div>

                    <div class="w-full h-full grid grid-cols-2 gap-6">
                        <div class="w-full h-[340px] lg:h-[420px] xl:h-[540px] flex flex-col justify-between gap-6">
                            <div class="text-netral text-sm md:text-base lg:text-xl xl:text-xl">
                                 <p class="text-sm md:text-base lg:text-lg xl:text-xl"
                                     v-html="langStore.loc(activeOrganization?.description, activeOrganization?.description_en)">
                                 </p>
                            </div>
                            <div class="w-full h-fit rounded-4xl overflow-hidden">
                                <img :src="getImageUrl(`organisasi/${activeOrganization?.image}`)"
                                    :alt="activeOrganization?.title" class="w-full h-full object-cover">
                            </div>
                        </div>
                        <div class="w-full h-[340px] lg:h-[420px] xl:h-[540px] flex flex-col justify-between gap-6">
                            <div class="w-full h-fit rounded-4xl overflow-hidden">
                                <img :src="getImageUrl(`organisasi/${activeOrganization?.image}`)"
                                    :alt="activeOrganization?.title" class="w-full h-full object-cover">
                            </div>
                            <div class="w-full h-fit rounded-4xl overflow-hidden">
                                <img :src="getImageUrl(`organisasi/${activeOrganization?.image}`)"
                                    :alt="activeOrganization?.title" class="w-full h-full object-cover">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full h-full space-y-4 md:hidden">
                    <div class="space-y-2">
                        <h3 class="text-lg text-gstart font-medium">{{ langStore.loc(activeOrganization?.title, activeOrganization?.title_en) }}</h3>
                        <p class="text-sm text-black/40" v-html="langStore.loc(activeOrganization?.description, activeOrganization?.description_en)">
                        </p>
                    </div>

                    <div class="w-full space-y-4">
                        <div class="w-full grid grid-cols-2 gap-4">
                            <div class="w-full h-[180px] rounded-4xl overflow-hidden">
                                <img :src="getImageUrl(`organisasi/${activeOrganization?.image}`)"
                                    :alt="activeOrganization?.title" class="w-full h-full object-cover">
                            </div>
                            <div class="w-full h-[180px] rounded-4xl overflow-hidden">
                                <img :src="getImageUrl(`organisasi/${activeOrganization?.image}`)"
                                    :alt="activeOrganization?.title" class="w-full h-full object-cover">
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="w-full h-[180px] rounded-4xl overflow-hidden">
                                <img :src="getImageUrl(`organisasi/${activeOrganization?.image}`)"
                                    :alt="activeOrganization?.title" class="w-full h-full object-cover">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>