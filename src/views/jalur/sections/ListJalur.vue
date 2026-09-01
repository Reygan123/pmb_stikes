<script setup lang="ts">
import type { Jalur } from '@/core/types/jalur';
import JalurCard from '../components/JalurCard.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import EmptySection from '@/components/sections/EmptySection.vue';
import JalurCardSkeleton from '@/components/sections/skeletons/JalurCardSkeleton.vue';
import type { Identity } from '@/core/types/identity';
// import JalurInactiveCard from '../components/JalurInactiveCard.vue';

defineProps<{
    loading: boolean,
    error: string | null,
    jalur: Jalur[]
    identity: Identity[]
}>()

const isActivePeriod = (endDate: string, endTime: string) => {
    const now = new Date();
    const endDateTime = new Date(`${endDate}T${endTime}`);
    return now <= endDateTime;
}

const getSortedJalurs = (jalurs: Jalur[]) => {
    if (!jalurs.length) return [];

    const activeJalurs = jalurs
        .filter(item => isActivePeriod(item.end_date, item.end_time))
        .sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime());

    const inactiveJalurs = jalurs
        .filter(item => !isActivePeriod(item.end_date, item.end_time))
        .sort((a, b) => new Date(b.end_date).getTime() - new Date(a.end_date).getTime());

    return [...activeJalurs, ...inactiveJalurs];
}
</script>

<template>
    <div v-if="loading"
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <JalurCardSkeleton v-for="i in 6" :key="i" />
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && jalur?.length === 0">
        <EmptySection name="Jalur" />
    </div>

    <section v-if="!loading && !error && jalur?.length > 0"
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div v-for="(item, index) in getSortedJalurs(jalur)" :key="index" data-aos="fade-up" data-aos-duration="1000"
            :data-aos-delay="index * 100">
            <JalurCard v-if="isActivePeriod(item.end_date, item.end_time)" 
                :title="item.name" 
                :slug="item.slug"
                :phone="identity[0]?.phone" 
                :description="item.description" 
                :start="item.start_date"
                :end="item.end_date" />
            <!-- <JalurInactiveCard v-else 
                :title="item.name" 
                :slug="item.slug" 
                :phone="identity[0]?.phone"
                :description="item.description" 
                :start="item.start_date" 
                :end="item.end_date" /> -->
        </div>
    </section>
</template>