<script setup lang="ts">
import 'swiper/swiper-bundle.css';

import Button from '@/components/ui/Button.vue';
import Title from '@/components/ui/Title.vue';
import Timeline from '../components/Timeline.vue';
import Tag from '@/components/ui/Tag.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import { useRouter } from 'vue-router';
import type { Jalur } from '@/core/types/jalur';
import { computed } from 'vue';
import { useLanguageStore } from '@/stores/language';

const router = useRouter();
const langStore = useLanguageStore();

const navigateToDetail = () => {
    router.push('/jalur-dan-jadwal');
};

const navigateToBiaya = () => {
    router.push('/biaya');
};

const props = defineProps<{
    jalur: Jalur[];
}>();

const filteredJalur = computed(() => {
    return props.jalur || [];
});
</script>

<template>
    <!-- Tablet & Desktop -->
    <div
        class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] flex flex-col md:flex-row justify-start items-start gap-8 md:gap-12 lg:gap-14 relative">
        <div class="w-full md:w-[50%] lg:w-[60%] space-y-4 lg:space-y-6 md:sticky md:top-20 lg:top-32">
            <Tag :title="langStore.t('jalur.tag')" />
            <Title :title="langStore.t('jalur.early_bird')" />
            <Subtitle :text="langStore.t('jalur.early_desc')" />
            <div class="flex items-center gap-4">
                <Button @click="navigateToDetail" :text="langStore.t('common.read_more')" />
                <Button @click="navigateToBiaya" bg-color="bg-primary/20" text-color="text-[#004e9a]" weight="font-medium"
                        :text="langStore.t('biaya.button')" />
            </div>
        </div>

        <Timeline :jalur="filteredJalur" />
    </div>
</template>

<style scoped>
.swiper-slide {
    width: auto !important;
}
</style>