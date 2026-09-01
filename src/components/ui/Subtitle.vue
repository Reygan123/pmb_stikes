<script setup lang="ts">
defineProps({
    text: String,
    color: String
})
</script>

<template>
    <p class="text-sm md:text-base lg:text-lg" :class="[color || 'text-gstart']" v-html="text"></p>
</template>