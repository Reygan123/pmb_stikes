<script setup lang="ts">
import type { Post } from '@/core/types/post';
import ArticleCard from '../ui/ArticleCard.vue';
import Button from '../ui/Button.vue';
import Subtitle from '../ui/Subtitle.vue';
import Tag from '../ui/Tag.vue';
import Title from '../ui/Title.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const navigateToDetail = () => {
    router.push('/berita')
}

defineProps<{
    berita: Post[],
    loading: boolean,
    error: string | null
}>()
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-16">
        <div class="w-full flex flex-col md:flex-row justify-center items-center md:justify-between md:items-center gap-4">
            <div class="flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-start gap-4">
                <Tag title="Berita" />
                <Title title="Berita dan Publikasi" />
                <Subtitle text="Artikel, berita, dan wawasan terkini dari civitas akademik BTH." />
            </div>
            <Button @click="navigateToDetail" text="Lihat Semua" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(item, index) in berita" :key="index">
                <ArticleCard :image="item.image" :link="'item.link'" :category="item.category.name" :date="item.pub_date"
                    :title="item.title" :slug="item.slug" />
            </div>
        </div>
    </section>
</template>