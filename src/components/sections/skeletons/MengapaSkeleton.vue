<script setup lang="ts">
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col items-center gap-8 md:gap-12 lg:gap-16 animate-pulse">
        <div class="w-full flex flex-col gap-4">
            <div class="w-48 h-6 bg-gray-300 rounded-full"></div>
            <div class="w-80 h-8 bg-gray-300 rounded-lg"></div>
            <div class="w-96 h-4 bg-gray-300 rounded-lg"></div>
        </div>

        <div class="w-full h-full grid grid-cols-1 md:grid-cols-3 lg:px-16 xl:px-28 gap-6">
            <div v-for="n in 3" :key="n"
                class="w-full h-full p-6 flex flex-col justify-center items-center text-center gap-4 rounded-3xl bg-gray-100">
                <div class="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div class="space-y-2 w-full">
                    <div class="w-32 h-5 bg-gray-300 rounded-lg mx-auto"></div>
                    <div class="w-48 h-4 bg-gray-300 rounded-lg mx-auto"></div>
                </div>
            </div>
        </div>
    </section>
</template>
