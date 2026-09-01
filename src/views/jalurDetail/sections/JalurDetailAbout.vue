<script setup lang="ts">
import EmptySection from '@/components/sections/EmptySection.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import JalurAboutSkeleton from '@/components/sections/skeletons/JalurAboutSkeleton.vue';
import Button from '@/components/ui/Button.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import type { Jalur } from '@/core/types/jalur';
import { getImageUrl } from '@/utils/imageUtils';

defineProps<{
    jalur: Jalur | null,
    loading: boolean,
    error: string | null
}>();
</script>

<template>
    <div v-if="loading">
        <JalurAboutSkeleton />
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && jalur === null">
        <EmptySection name="Tentang Jalur" />
    </div>

    <section v-if="!loading && !error && jalur !== null"
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col md:flex-row md:jusitfy-center items-center gap-8 md:gap-12 lg:gap-16">
        <div class="w-full md:w-[40%] h-fit md:h-[40vh] lg:h-[60vh] rounded-4xl overflow-hidden">
            <img :src="getImageUrl(`registration/${jalur?.image1}`)" :alt="jalur?.title1"
                class="w-full h-full object-contain md:object-cover">
        </div>
        <div class="w-full md:w-[60%] h-full flex flex-col justify-center items-start gap-6">
            <div class="space-y-3">
                <Tag :title="'Jalur'" />
                <div class="space-y-2">
                    <Title :title="jalur?.title1" />
                    <Subtitle color="text-[#5A5A59]" :text="jalur?.description1" />
                </div>
            </div>
            <div class="w-full flex justify-center md:justify-start">
                <Button onclick="window.open('http://pendaftaran.universitas-bth.ac.id/', '_blank')" :text="'Daftar Sekarang'" />
            </div>
        </div>
    </section>
</template>