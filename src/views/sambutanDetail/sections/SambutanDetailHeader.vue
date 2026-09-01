<script setup lang="ts">
import Tag from '@/components/ui/Tag.vue';

defineProps<{
    tag: string
    img: string
    title: string,
    description: string
}>()
</script>

<template>
    <section class="p-4 md:p-8 lg:pt-16 lg:pb-6 lg:px-24 flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        <div class="w-full md:w-[40%] lg:w-[30%]">
            <img :src="img"
                :alt="title"
                class="w-full h-[45vh] md:h-[40vh] lg:h-[50vh] object-cover object-top rounded-4xl">
        </div>

        <div class="w-full md:w-[60%] lg:w-[70%] space-y-8">
            <div class="flex flex-col justify-center items-center md:justify-start md:items-start gap-4">
                <Tag :title="tag" />
                <div class="space-y-4">
                    <h1 class="text-center md:text-left text-2xl md:text-3xl lg:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gstart to-gend">
                        {{ title }}</h1>
                    <p class="text-sm md:text-base" v-html="description">
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>