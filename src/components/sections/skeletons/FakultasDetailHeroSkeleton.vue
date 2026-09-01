<script setup lang="ts">
</script>

<template>
    <section class="w-full h-[60vh] md:h-full lg:h-[100vh] p-4 md:p-8 animate-pulse">
        <div class="w-full h-full flex flex-col justify-center items-start relative">
            <div class="absolute inset-0">
                <div class="w-full h-full bg-gray-300 rounded-4xl"></div>
            </div>
            <div class="hidden md:block space-y-8 relative z-10 p-10">
                <div class="xl:max-w-2/3 space-y-4">
                    <div class="h-10 w-3/4 bg-gray-300 rounded"></div>
                    <div class="h-6 w-full bg-gray-300 rounded"></div>
                    <div class="h-6 w-5/6 bg-gray-300 rounded"></div>
                </div>
                <div class="h-10 w-40 bg-gray-300 rounded"></div>
            </div>

            <div
                class="absolute w-full h-3/5 bottom-0 bg-gradient-to-t from-white via-white/90 to-transparent z-10 md:hidden">
            </div>
            <div
                class="absolute w-full bottom-4 z-20 h-fit flex flex-col justify-center items-center text-center gap-4 px-4 md:hidden">
                <div class="h-8 w-3/4 bg-gray-300 rounded"></div>
                <div class="h-6 w-full bg-gray-300 rounded"></div>
                <div class="h-10 w-32 bg-gray-300 rounded"></div>
            </div>
        </div>
    </section>
</template>
