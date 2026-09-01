<script setup lang="ts">
defineProps({
    name: String,
    role: String,
    company: String,
    description: String,
    image: String
})
</script>

<template>
    <div class="w-full h-full p-8 flex flex-col justify-between gap-6 rounded-4xl border-2 border-primary">
        <div class="space-y-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M5 10H22V25.3L13.036 38H7.59L12.922 26H5V10ZM26 10H43V25.3L34.036 38H28.59L33.922 26H26V10Z"
                    fill="#E6E6E6" />
            </svg>
            <p class="text-lg text-left" v-html="description"></p>
        </div>

        <div class="flex items-center gap-4">
            <div>
                <img :src="image" :alt="name" class="w-12 h-12 rounded-full object-cover">
            </div>
            <div>
                <h5 class="text-base font-semibold">{{ name }}</h5>
                <p class="text-base">{{ role }}, <span>{{ company }}</span></p>
            </div>
        </div>
    </div>
</template>