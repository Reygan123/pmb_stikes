<script setup lang="ts">
import 'swiper/swiper-bundle.css';

import Button from '@/components/ui/Button.vue';
import Title from '@/components/ui/Title.vue';
import Timeline from '../components/Timeline.vue';
import Tag from '@/components/ui/Tag.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import { useRouter } from 'vue-router';
import type { Jalur } from '@/core/types/jalur';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const router = useRouter()
const route = useRoute()

const navigateToDetail = () => {
    router.push('/jalur-dan-jadwal')
}

const navigateToBiaya = () => {
    router.push('/biaya')
}

const props = defineProps<{
    jalur: Jalur[]
}>();

const filteredJalur = computed(() => {
    const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug;

    if (slug === 's2-farmasi') {
        return props.jalur.filter(jalur => jalur.name.includes('Jalur Reguler'));
    }

    return props.jalur;
});
</script>

<template>
    <!-- Tablet & Desktop -->
    <div
        class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] flex flex-col md:flex-row justify-start items-start gap-8 md:gap-12 lg:gap-14 relative">
        <div class="w-full md:w-[50%] lg:w-[60%] space-y-4 lg:space-y-6 md:sticky md:top-20 lg:top-32">
            <Tag title="Pendaftaran Gelombang 2" />
            <Title :title="'Amankan Posisimu Lebih Awal'" />
            <Subtitle text="Saat sebagian calon mahasiswa masih mempertimbangkan pilihan, kesempatan terbaik sudah terbuka. Pendaftaran Gelombang 1 memberikan akses prioritas ke berbagai jalur penerimaan Universitas BTH, sehingga Anda dapat mempersiapkan langkah studi lebih awal dan lebih tenang." />
            <div class="flex items-center gap-4">
                <Button @click="navigateToDetail" text="Selengkapnya" />
                <Button @click="navigateToBiaya" bg-color="bg-primary/20" text-color="text-primary"
                        text="Rincian Biaya" />
            </div>
        </div>

        <Timeline :jalur="filteredJalur" />
    </div>
</template>

<style scoped>
.swiper-slide {
    height: auto;
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: auto !important;
}
</style>