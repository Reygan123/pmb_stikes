<script setup lang="ts">
import Tag from '@/components/ui/Tag.vue';
import { getImageUrl } from '@/utils/imageUtils';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

defineProps<{
    author: string
    category: string
    date: string
    title: string
    image: string
}>()

const formatDate = (dateString: string | undefined): string => {
    return langStore.formatDate(dateString);
}
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div class="w-full flex flex-col justify-center items-center text-center gap-4">
            <div class="md:hidden">
                <Tag :title="langStore.loc(category)" />
            </div>
            <div class="w-full flex justify-center items-center gap-6 md:gap-8 lg:gap-11">
                <h4 class="text-sm md:text-base lg:text-lg xl:text-xl text-netral">{{ author }}</h4>
                <div class="hidden md:block">
                    <Tag :title="langStore.loc(category)" />
                </div>
                <h4 class="text-sm md:text-base lg:text-lg xl:text-xl text-netral">{{ formatDate(date) }}</h4>
            </div>
            <h1 class="text-gstart text-3xl lg:text-4xl xl:text-[38px] font-medium" v-html="langStore.loc(title)"></h1>
        </div>

        <div class="w-full h-[35vh] lg:h-[50vh]">
            <div class="w-full h-full">
                <img :src="getImageUrl(`/posts/${image}`)" :alt="title" loading="lazy"
                    class="w-full h-full rounded-4xl object-cover">
            </div>
        </div>
    </section>
</template>