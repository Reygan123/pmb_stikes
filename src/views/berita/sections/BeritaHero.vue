<script setup lang="ts">
import EmptySection from '@/components/sections/EmptySection.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import Button from '@/components/ui/Button.vue';
import Tag from '@/components/ui/Tag.vue';
import { getImageUrl } from '@/utils/imageUtils';
import BeritaHeroSkeleton from '@/components/sections/skeletons/BeritaHeroSkeleton.vue';
import { useRouter } from 'vue-router';
import type { Post } from '@/core/types/post';
import { computed } from 'vue';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

const props = defineProps<{
    berita: Post[],
    loading: boolean,
    error: string | null
}>()

const router = useRouter()

const today = new Date();
const todayString = today.toISOString().split('T')[0];

const latestBerita = computed(() => {
    if (!props.berita || props.berita.length === 0) return null;
    
    const validBerita = props.berita.filter(item => {
        if (!item.pub_date) return false;
        return item.pub_date <= todayString;
    });

    if (validBerita.length === 0) return null;
    
    return validBerita.sort((a, b) => {
        return new Date(b.pub_date).getTime() - new Date(a.pub_date).getTime();
    })[0];
});

const navigateToDetail = () => {
    if (latestBerita.value) {
        router.push(`berita/${latestBerita.value.slug}`)
    }
}

const formatDate = (dateString: string | undefined): string => {
    return langStore.formatDate(dateString);
}
</script>

<template>
    <div v-if="loading">
        <BeritaHeroSkeleton />
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && !latestBerita">
        <EmptySection name="Berita"/>
    </div>

    <section v-if="!loading && !error && latestBerita" class="px-4 py-8 md:p-8 lg:py-16 lg:px-24">
        <div
            class="w-full md:h-[42vh] lg:h-[55vh] xl:h-[50vh] bg-gstart rounded-4xl flex flex-col md:flex-row justify-center items-center text-center gap-6 md:gap-8 lg:gap-10 p-4 md:p-8">
            <div class="w-full h-[240px] md:h-full md:w-[60%]">
                <img :src="getImageUrl(`/posts/${latestBerita.image}`)" :alt="latestBerita.title"
                    class="w-full h-full rounded-3xl object-cover">
            </div>

            <div class="w-full h-full md:w-[40%] flex flex-col justify-between items-start gap-4">
                <div class="space-y-6">
                    <Tag color="text-primary" :title="langStore.loc(latestBerita.category.name)" />
                    <div class="space-y-4">
                        <h3
                            class="line-clamp-2 text-lg md:text-lg lg:text-xl xl:text-2xl font-medium text-left text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999999]">
                            {{ langStore.loc(latestBerita.title, latestBerita.title_en) }}
                        </h3>

                        <div class="flex items-center gap-4">
                            <div>
                                <img :src="getImageUrl(`/posts/${latestBerita.image}`)" alt="" class="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover">
                            </div>
                            <div>
                                <p class="text-sm lg:text-base text-white">Admin • {{ formatDate(latestBerita.pub_date) }}</p>
                            </div>
                        </div>

                        <p class="text-sm md:text-sm lg:text-base xl:text-xl line-clamp-4 text-left text-[#BDBDBD]"
                            v-html="latestBerita.description"></p>
                    </div>
                </div>
                <Button @click="navigateToDetail" :text="langStore.t('common.read_more')" />
            </div>
        </div>
    </section>
</template>