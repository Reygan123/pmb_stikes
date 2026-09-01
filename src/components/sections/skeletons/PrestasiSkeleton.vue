<script setup lang="ts">
</script>

<template>
    <section class="px-0 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-16 animate-pulse">
        <div class="w-full flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div
                class="flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-left gap-3">
                <div class="w-24 h-6 bg-gray-300 rounded-full"></div>
                <div class="w-64 h-8 bg-gray-300 rounded-lg"></div>
                <div class="md:hidden w-72 h-4 bg-gray-300 rounded-lg"></div>
                <div class="w-32 h-10 bg-gray-300 rounded-lg"></div>
            </div>

            <div class="max-w-sm hidden md:block">
                <div class="w-72 h-4 bg-gray-300 rounded-lg"></div>
            </div>
        </div>

        <div class="h-[40vh] md:h-[35vh] lg:h-[45vh] relative w-full">
            <div class="absolute right-0 bottom-[45%] lg:bottom-3/5 hidden md:flex gap-4 z-10">
                <div class="w-8 h-8 lg:w-12 lg:h-12 bg-gray-300 rounded-full"></div>
                <div class="w-8 h-8 lg:w-12 lg:h-12 bg-gray-300 rounded-full"></div>
            </div>

            <div class="w-full h-full flex gap-4">
                <div v-for="n in 4" :key="n" class="flex-1 h-full overflow-hidden rounded-4xl bg-gray-300"></div>
            </div>
        </div>
    </section>
</template>
