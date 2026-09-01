<script setup lang="ts">
import ArticleCard from '@/components/ui/ArticleCard.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import { usePostStore } from '@/stores/post';
import { onMounted } from 'vue';

const beritaStore = usePostStore()

onMounted(()=>{
    beritaStore.fetchPosts()
})
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-16">
        <div class="flex flex-col gap-4 justify-center items-center text-center">
            <Tag title="Berita" />
            <Title title="Publikasi dan Berita Institusional" />
            <Subtitle text="Artikel, berita, dan wawasan terkini dari civitas akademik BTH." />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(item, index) in beritaStore.posts.slice(3,6)" :key="index">
                <ArticleCard :image="item.image" :link="'item.link'" :category="item.category.name" :date="item.pub_date"
                    :title="item.title" :slug="item.slug" />
            </div>
        </div>
    </section>
</template>