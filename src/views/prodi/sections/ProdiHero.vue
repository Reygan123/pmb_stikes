<script setup lang="ts">
import EmptySection from '@/components/sections/EmptySection.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import ProdiHeroSkeleton from '@/components/sections/skeletons/ProdiHeroSkeleton.vue';
import Button from '@/components/ui/Button.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

defineProps<{
    title: string,
    prodi: string,
    description: string,
    image: string,
    loading: boolean,
    error: string | null
}>()

const handleWhatsApp = (_prodiName: string) => {
};
</script>

<template>
    <div v-if="loading">
        <ProdiHeroSkeleton />
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && title === null">
        <EmptySection name="Prodi" />
    </div>

    <section v-if="!loading && !error && title !== null"
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col-reverse md:flex-col gap-8 md:gap-12 lg:gap-16">
        <div class="flex flex-col justify-center items-center text-center gap-6">
            <h1 class="text-2xl md:text-4xl lg:text-[44px] xl:text-[56px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-gstart to-gend"
                v-html="title">
            </h1>
            <Subtitle :text="description" />
            <div class="w-full flex justify-center items-center gap-3">
                <Button @click="handleWhatsApp(prodi)" border="border-1" border-color="border-[#0000001F]" bg-color="bg-white"
                    text-color="text-[#5B616D]" :text="langStore.t('common.contact_us')" />
                <Button  :text="langStore.t('hero.cta_register')" />
            </div>
        </div>

        <div class="w-full h-[300px] md:h-[360px] lg:h-[600px]">
            <div class="w-full h-full rounded-4xl overflow-hidden shadow-sm">
                <img :src="image" :alt="title" loading="lazy" class="w-full h-full object-cover object-[20%_20%]">
            </div>
        </div>
    </section>
</template>