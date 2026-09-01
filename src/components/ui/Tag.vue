<script setup lang="ts">
defineProps({
    title: String,
    color: String
})
</script>

<template>
    <div class="w-fit py-2 px-4 border border-primary rounded-full">
        <h3 class="text-[12px] md:text-xs" :class="[color || 'text-black']">{{ title }}</h3>
    </div>
</template>