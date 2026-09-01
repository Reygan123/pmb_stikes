<script setup lang="ts">
import EmptySection from '@/components/sections/EmptySection.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import { getImageUrl } from '@/utils/imageUtils';

defineProps<{
    image: string,
    title: string,
    description: string,
    loading: boolean,
    error: string | null
}>()

const parseListItems = (htmlContent: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const listItems = doc.querySelectorAll('li');
    return Array.from(listItems).map(li => li.textContent || '');
};
</script>

<template>
    <div v-if="loading">
        <ProdiProspekSkeleton />
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && image === '' && title === '' && description === ''">
        <EmptySection name="Prospek Prodi" />
    </div>

    <section v-if="!loading && !error && image !== '' && title !== '' && description !== ''"
        class="p-6 lg:py-16 lg:px-24 flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        <div class="w-full md:w-[40%]">
            <img :src="getImageUrl(`programs/${image}`)" :alt="title"
                class="w-full h-[40vh] md:h-[40vh] lg:h-[50vh] object-cover object-top rounded-4xl">
        </div>

        <div class="w-full md:w-[60%] space-y-6 md:space-y-8">
            <div class="space-y-3">
                <Tag title="Prospek" />
                <div class="space-y-2">
                    <Title :title="title" />
                    <!-- <p class="text-xs md:text-sm lg:text-base font-light [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-2 [&_li]:my-1"
                        v-html="description">
                    </p> -->
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 lg:gap-6">
                <div v-for="item in parseListItems(description)" :key="item" class="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"
                        class="flex-shrink-0 mt-0.5">
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