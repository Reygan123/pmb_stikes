<script setup lang="ts">
import EmptySection from '@/components/sections/EmptySection.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import type { Jalur } from '@/core/types/jalur';
import { getImageUrl } from '@/utils/imageUtils';

defineProps<{
    jalur: Jalur | null,
    loading: boolean,
    error: string | null
}>();

const parseListItems = (htmlContent: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const listItems = doc.querySelectorAll('li');
    return Array.from(listItems).map(li => li.textContent || '');
};
</script>

<template>
    <div v-if="loading">
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && jalur === null">
        <EmptySection name="Syarat Jalur" />
    </div>

    <section v-if="!loading && !error && jalur !== null"
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col md:flex-row md:jusitfy-center items-center gap-8 md:gap-12 lg:gap-16">
        <div class="w-full md:w-[40%] h-[30vh] md:h-[40vh] lg:h-[50vh] rounded-4xl overflow-hidden">
            <img :src="getImageUrl(`registration/${jalur.image3}`)" :alt="jalur.title3" loading="lazy" class="w-full h-full object-cover">
        </div>
        <div class="w-full md:w-[60%] h-full flex flex-col justify-center items-start gap-6">
            <div class="space-y-3">
                <Tag title="Persyaratan Pendaftaran" />
                <Title :title="jalur?.title3" />
            </div>
            <div class="space-y-2 md:space-y-3">
                <div v-for="item in parseListItems(jalur.description3)" :key="item" class="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" class="flex-shrink-0 mt-0.5">
                        <path
                            d="M15 10.5L11 14.5L9 12.5M12 21.5C7.02944 21.5 3 17.4706 3 12.5C3 7.52944 7.02944 3.5 12 3.5C16.9706 3.5 21 7.52944 21 12.5C21 17.4706 16.9706 21.5 12 21.5Z"
                            stroke="#F03C06" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p class="text-sm md:text-base lg:text-lg font-medium">{{ item }}</p>
                </div>
            </div>
        </div>
    </section>
</template>