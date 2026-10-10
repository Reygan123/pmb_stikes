<script setup lang="ts">
import Logo from '@/assets/logo/logo.png';
import Button from '@/components/ui/Button.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import type { Identity } from '@/core/types/identity';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

defineProps<{
    identity: Identity[]
}>();

const handleWhatsApp = () => {
};
</script>

<template>
    <section
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-6 lg:gap-12">
        <div class="w-fit">
            <img :src="Logo" alt="Logo STIKes Budi Luhur Cimahi"
                class="w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain drop-shadow-md">
        </div>
        <div class="w-fit flex flex-col items-center md:items-start space-y-6">
            <div class="space-y-2 flex flex-col items-center">
                <Tag :title="langStore.currentLang === 'en' ? 'Help Desk' : 'Bantuan'"/>
                <Title :title="langStore.currentLang === 'en' ? 'Need Assistance?' : 'Butuh Bantuan?'"/>
                <Subtitle :text="langStore.currentLang === 'en' ? 'Our admissions advisory team is always ready to guide you through any questions.' : 'Tim PMB kami selalu siap membantu jika kamu menemukan kendala'" />
            </div>
            <Button @click="handleWhatsApp" :text="langStore.currentLang === 'en' ? 'Chat with Admissions' : 'Tanya Admin'" />
        </div>
    </section>
</template>