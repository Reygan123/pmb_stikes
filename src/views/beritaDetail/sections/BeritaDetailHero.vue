<script setup lang="ts">
import Tag from '@/components/ui/Tag.vue';
import { getImageUrl } from '@/utils/imageUtils';
defineProps<{
    author: string
    category: string
    date: string
    title: string
    image: string
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
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div class="w-full flex flex-col justify-center items-center text-center gap-4">
            <div class="md:hidden">
                <Tag title="Akademik" />
            </div>
            <div class="w-full flex justify-center items-center gap-6 md:gap-8 lg:gap-11">
                <h4 class="text-sm md:text-base lg:text-lg xl:text-xl text-netral">{{ author }}</h4>
                <div class="hidden md:block">
                    <Tag :title="category" />
                </div>
                <h4 class="text-sm md:text-base lg:text-lg xl:text-xl text-netral">{{ formatDate(date) }}</h4>
            </div>
            <h1 class="text-gstart text-3xl lg:text-4xl xl:text-[38px] font-medium" v-html="title"></h1>
        </div>

        <div class="w-full h-[35vh] lg:h-[50vh]">
            <div class="w-full h-full">
                <img :src="getImageUrl(`/posts/${image}`)" :alt="title" loading="lazy"
                    class="w-full h-full rounded-4xl object-cover">
            </div>
        </div>
    </section>
</template>