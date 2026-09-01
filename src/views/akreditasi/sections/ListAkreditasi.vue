<script setup lang="ts">
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import AkreditasiCard from '../components/AkreditasiCard.vue';
import type { Akreditasi } from '@/core/types/akreditasi';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import EmptySection from '@/components/sections/EmptySection.vue';
import ListAkreditasiSkeleton from '@/components/sections/skeletons/ListAkreditasiSkeleton.vue';
defineProps<{
    akreditasi: Akreditasi[],
    loading: boolean,
    error: string | null
}>();
</script>
<template>
    <div v-if="loading">
        <ListAkreditasiSkeleton />
    </div>
    <div v-if="error">
        <ErrorSection />
    </div>
    <div v-if="loading === false && akreditasi?.length === 0">
        <EmptySection name="Akreditasi" />
    </div>
    <section v-if="!loading && !error && akreditasi?.length > 0"
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div class="flex flex-col justify-center items-center text-center gap-4">
            <Tag title="Dokumen" />
            <Title title="Akreditasi" />
            <Subtitle text="Universitas Bakti Tunas Husada" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(item, index) in akreditasi" :key="index" data-aos="fade-up"
                :data-aos-duration="200 + (index * 200)">
                <AkreditasiCard :title="item.title" :link="item.file || ''" />
            </div>
        </div>
    </section>
</template>