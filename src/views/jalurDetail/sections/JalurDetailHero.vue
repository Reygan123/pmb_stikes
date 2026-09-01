<script setup lang="ts">
import EmptySection from '@/components/sections/EmptySection.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import JalurHeroSkeleton from '@/components/sections/skeletons/JalurHeroSkeleton.vue';
import Button from '@/components/ui/Button.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import type { Jalur } from '@/core/types/jalur';
import { useIdentityStore } from '@/stores/identity';
import { onMounted } from 'vue';

const identityStore = useIdentityStore()

onMounted(() => {
    identityStore.fetchIdentity()
})

defineProps<{
    jalur: Jalur | null,
    loading: boolean,
    error: string | null
}>();

const handleWhatsApp = (name: string) => {
    if (identityStore.identity[0]?.phone) {
        const message = encodeURIComponent(
            `Halo, saya ingin bertanya mengenai jalur ${name}`
        );
        window.location.href = `https://api.whatsapp.com/send?phone=${identityStore.identity[0]?.phone}&text=${message}`;
    } else {
        alert("Nomor WhatsApp admin tidak tersedia.");
    }
};
</script>

<template>
    <div v-if="loading">
        <JalurHeroSkeleton />
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && jalur === null">
        <EmptySection name="Hero Jalur" />
    </div>

    <section v-if="!loading && !error && jalur !== null"
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div class="flex flex-col justify-center items-center text-center gap-6">
            <h1 class="text-2xl md:text-4xl lg:text-[44px] xl:text-[56px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-gstart to-gend"
                v-html="jalur?.description">
            </h1>
            <Subtitle :text="jalur.content" />
            <div class="w-full flex justify-center items-center gap-3">
                <Button @click="handleWhatsApp(jalur.name)" border="border-1" border-color="border-[#0000001F]" bg-color="bg-white"
                    text-color="text-[#5B616D]" text="Hubungi Kami" />
                <Button onclick="window.open('http://pendaftaran.universitas-bth.ac.id/', '_blank')" :text="'Daftar Sekarang'" />
            </div>
        </div>
    </section>
</template>