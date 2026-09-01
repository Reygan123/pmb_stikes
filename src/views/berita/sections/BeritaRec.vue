<script setup lang="ts">
import EmptySection from '@/components/sections/EmptySection.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import RecCardSkeleton from '@/components/sections/skeletons/RecCardSkeleton.vue';
import Title from '@/components/ui/Title.vue';
import type { Post } from '@/core/types/post';
import RecCard from '@/views/beranda/components/RecCard.vue';

defineProps<{
    berita: Post[]
    loading: boolean,
    error: string | null
}>()

const formatDate = (dateString: string | undefined): string => {
    if (!dateString) return '';
    
    const parts = dateString.split('-');
    if (parts.length !== 3) return dateString;

    const [year, month, day] = parts;
    const monthNames = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const monthIndex = parseInt(month, 10) - 1;

    if (monthIndex < 0 || monthIndex > 11) return dateString;

    return `${day} ${monthNames[monthIndex]} ${year}`;
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
        <Title title="Must-Read Post" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            <div v-for="(item, index) in berita" :key="index">
                <RecCard :category="item.category.name" :title="item.title" :description="item.description"
                    :date="formatDate(item.pub_date)" :slug="item.slug"/>
            </div>
        </div>
    </section>
</template>