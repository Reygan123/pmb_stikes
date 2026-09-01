<script setup lang="ts">
import { useRouter } from 'vue-router';
import Tag from './Tag.vue';
import { getImageUrl } from '@/utils/imageUtils';

const props = defineProps({
    image: String,
    link: String,
    category: String,
    date: String,
    title: String,
    slug: String
})

const router = useRouter()

const navigateToDetail = () => {
    router.push(`/berita/${props.slug}`)
}

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

const formattedDate = formatDate(props.date)
</script>

<template>
    <div @click="navigateToDetail" class="w-full space-y-4 lg:space-y-8 cursor-pointer">
        <div class="w-full relative">
            <div
                class="absolute bottom-4 right-4 py-3 px-6 bg-white rounded-full cursor-pointer flex items-center gap-2">
                <p class="text-sm md:text-base lg:text-lg">Read More</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M14.3408 4.72419C13.9482 4.40396 13.3691 4.42683 13.0029 4.79254C12.6368 5.15864 12.6143 5.73766 12.9346 6.13044L13.0029 6.20661L17.7969 11.0006H4C3.44772 11.0006 3 11.4483 3 12.0006C3.00017 12.5527 3.44782 13.0006 4 13.0006H17.7949L13.0029 17.7925C12.6124 18.1831 12.6124 18.8161 13.0029 19.2066C13.3935 19.5971 14.0265 19.5971 14.417 19.2066L20.5635 13.0601L20.666 12.9459C21.1141 12.396 21.1143 11.603 20.666 11.0533L20.5635 10.939L14.417 4.79254L14.3408 4.72419Z"
                        fill="#0A0C11" />
                </svg>
            </div>
            <div>
                <img :src="getImageUrl(`/posts/${image}`)" loading="lazy" :alt="title" class="w-full h-[240px] md:h-[240px] lg:h-[320px] xl:h-[360px] rounded-4xl object-cover">
            </div>
        </div>

        <div class="w-full space-y-3 lg:space-y-6">
            <div class="w-full flex justify-between items-center">
                <Tag color="text-primary" :title="category" />
                <p class="text-xs md:text-sm lg:text-base text-netral">{{ formattedDate }}</p>
            </div>
            <h3 class="text-base lg:text-lg font-medium" v-html="title"></h3>
        </div>
    </div>
</template>