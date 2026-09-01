<script setup lang="ts">
import Tag from '@/components/ui/Tag.vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    category: String,
    title: String,
    description: String,
    date: String,
    slug: String
})

const router = useRouter()

const navigateToDetail = () => {
    router.push(`/berita/${props.slug}`)
}
</script>

<template>
    <div @click="navigateToDetail" class="space-y-10 rounded-2xl md:rounded-4xl bg-gstart p-4 md:p-8 cursor-pointer">
        <div class="space-y-4">
            <Tag color="text-primary" :title="category" />
            <h3 class="text-base md:text-lg xl:text-[22px] line-clamp-2 text-left text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999999]"
                v-html="title"></h3>
            <p class="text-xs md:text-sm lg:text-base text-netral line-clamp-2" v-html="description"></p>
        </div>

        <p class="text-xs md:text-sm lg:text-base text-left text-netral">{{ date }}</p>
    </div>
</template>