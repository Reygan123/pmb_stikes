<script setup lang="ts">
import EmptySection from '@/components/sections/EmptySection.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import RecCardSkeleton from '@/components/sections/skeletons/RecCardSkeleton.vue';
import Title from '@/components/ui/Title.vue';
import type { Post } from '@/core/types/post';
import RecCard from '@/views/beranda/components/RecCard.vue';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

defineProps<{
    berita: Post[]
    loading: boolean,
    error: string | null
}>()

const formatDate = (dateString: string | undefined): string => {
    return langStore.formatDate(dateString);
}
</script>

<template>
    <div v-if="loading">
        <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
            <div class="w-full flex flex-col justify-center items-center gap-8">
                <div class="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
                <div class="w-full inline-flex justify-center items-center gap-4 overflow-scroll">
                    <div v-for="i in 4" :key="i" class="py-2 px-6 rounded-full bg-gray-200 h-10 w-24 animate-pulse"></div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-8 lg:gap-10 w-full">
                <div v-for="i in 2" :key="i">
                    <RecCardSkeleton />
                </div>
            </div>
        </section>
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && berita?.length === 0">
        <EmptySection name="Berita"/>
    </div>

    <section v-if="!loading && !error && berita?.length > 0" class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
        <Title :title="langStore.currentLang === 'en' ? 'Must-Read Articles' : 'Artikel Pilihan'" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            <div v-for="(item, index) in berita" :key="index">
                <RecCard :category="langStore.loc(item.category.name)" :title="langStore.loc(item.title, item.title_en)" :description="langStore.loc(item.description, item.description_en)"
                    :date="formatDate(item.pub_date)" :slug="item.slug"/>
            </div>
        </div>
    </section>
</template>