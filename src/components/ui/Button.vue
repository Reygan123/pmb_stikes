<script setup lang="ts">
defineProps({
    bgColor: String,
    border: String,
    borderColor: String,
    textColor: String,
    weight: String,
    text: String
})
</script>

<template>
    <button class="px-4 py-3 md:px-8 md:py-3 rounded-full text-sm md:text-sm lg:text-base xl:text-lg cursor-pointer transition-all duration-300 ease-out hover:opacity-95 hover:shadow-sm active:scale-[0.97] select-none"
        :class="[bgColor || 'bg-primary', textColor || 'text-white', weight || 'font-normal', border || 'border-none', borderColor || 'border-transparent']">
        {{ text }}
    </button>
</template>