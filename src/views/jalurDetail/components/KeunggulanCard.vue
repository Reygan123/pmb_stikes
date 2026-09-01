<script setup lang="ts">
defineProps<{
    icon: string,
    title: string,
    description: string,
}>()
</script>

<template>
    <div
        class="p-4 bg-[#F9F9F9] border border-primary/50 rounded-2xl md:rounded-4xl space-y-12 md:space-y-14 lg:space-y-16">
        <div class="w-8 md:w-12 h-8 md:h-12">
            <div v-html="icon"></div>
        </div>

        <div class="text-left space-y-2 xl:space-y-4">
            <h3 class="text-lg md:text-xl xl:text-2xl font-medium" v-html="title"></h3>
            <p class="text-sm xl:text-base" v-html="description"></p>
        </div>
    </div>
</template>