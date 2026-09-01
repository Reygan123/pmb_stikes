<script setup lang="ts">
import EmptySection from '@/components/sections/EmptySection.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import FakultasDetailHeroSkeleton from '@/components/sections/skeletons/FakultasDetailHeroSkeleton.vue';
import Button from '@/components/ui/Button.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import { getImageUrl } from '@/utils/imageUtils';
import { useRouter } from 'vue-router';

const router = useRouter()

defineProps<{
    image: string,
    title: string,
    description: string,
    loading: boolean,
    error: string | null
}>()

const navigateToJalur = () => {
    router.push('/jalur-dan-jadwal')
}
</script>

<template>
    <div v-if="loading">
        <FakultasDetailHeroSkeleton />
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && image === null && title === null && description === null">
        <EmptySection name="Hero Fakultas" />
    </div>

    <section v-if="!loading && !error && image !== null && title !== null && description !== null"
        class="w-full h-[75vh] md:h-full lg:h-[100vh] p-4 md:p-8">
        <div class="w-full h-full flex flex-col justify-center items-start relative">
            <div class="absolute inset-0 z-10 bg-gradient-to-r from-black/50 via-black/10 to-transparent rounded-4xl">
            </div>
            <div class="absolute inset-0">
                <img :src="getImageUrl(`/fakultas/${image}`)" :alt="title" loading="lazy"
                    class="w-full h-full object-cover rounded-4xl">
            </div>
            <div class="hidden md:block space-y-8 relative z-10 p-10">
                <div class="md:max-w-3/5 lg:max-w-3/4 xl:max-w-3/4 space-y-2 text-white">
                    <h1 data-aos="fade-up-sm" data-aos-duration="1000"
                        class="text-2xl md:text-4xl lg:text-[44px] xl:text-[56px] font-medium">{{ title }}</h1>
                    <Subtitle color="text-white" :text="description" />
                </div>
                <div class="flex items-center gap-4">
                    <Button onclick="window.open('http://pendaftaran.universitas-bth.ac.id/', '_blank')"
                        :text="'Daftar Sekarang'" />
                    <Button @click="navigateToJalur" bg-color="bg-primary/20" text-color="text-primary"
                        text="Cek Jalur & Jadwal" />
                </div>
            </div>

            <div
                class="absolute w-full h-3/5 bottom-0 bg-gradient-to-t from-white via-white/90 to-transparent z-10 md:hidden">
            </div>
            <div
                class="absolute w-full bottom-4 z-20 h-fit flex flex-col justify-center items-center text-center gap-4 px-4 md:hidden">
                <h1 class="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gstart to-gend">
                    {{ title }}</h1>
                <Subtitle color="text-gstart" :text="description" />
                <Button onclick="window.open('http://pendaftaran.universitas-bth.ac.id/', '_blank')"
                    :text="'Daftar Sekarang'" weight="font-normal" />
            </div>
        </div>
    </section>
</template>