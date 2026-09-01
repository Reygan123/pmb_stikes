<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
defineProps<{
    title: String,
    link: String
}>()

const baseUrl = import.meta.env.VITE_APP_CMS_URL;

const handleDownload = (link: String) => {
    if (!link) return;

    const downloadUrl = `${baseUrl}${link.toString().replace('/identities/', '/files/')}`;
    window.open(downloadUrl, '_blank');
}
</script>
<template>
    <div class="rounded-4xl border border-primary p-10 flex flex-col justify-center items-center text-center gap-4">
        <h3 class="text-xl lg:text-2xl font-semibold text-gstart">{{ title }}</h3>
        <Button text="Download" @click="handleDownload(link)" />
    </div>
</template>