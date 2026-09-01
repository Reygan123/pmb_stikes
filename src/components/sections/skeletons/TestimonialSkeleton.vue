<template>
    <section class="px-0 py-4 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div class="flex flex-col justify-center items-center text-center gap-6 px-4 md:px-0">
            <div class="w-24 h-6 bg-gray-300 rounded animate-pulse"></div>
            
            <div class="w-full max-w-2xl space-y-2">
                <div class="w-full h-4 bg-gray-300 rounded animate-pulse"></div>
                <div class="w-3/4 h-4 bg-gray-300 rounded animate-pulse mx-auto"></div>
                <div class="w-1/2 h-4 bg-gray-300 rounded animate-pulse mx-auto"></div>
            </div>
        </div>

        <div class="w-full flex justify-between items-center gap-4">
            <div class="w-fit ml-auto hidden md:block">
                <div class="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-gray-300 animate-pulse"></div>
            </div>

            <div class="w-full hidden md:block md:w-[80%] h-[35vh] lg:h-[45vh] relative">
                <div class="w-full h-full items-end flex gap-4">
                    <div v-for="i in 3" :key="i" class="flex-1 min-w-0">
                        <div class="transition-all duration-500 ease-in-out w-full" :class="{
                            'h-[25vh] md:h-[15vh] lg:h-[25vh]': i !== 2,
                            'h-[35vh] md:h-[35vh] lg:h-[45vh]': i === 2
                        }">
                            <div class="w-full h-full rounded-4xl bg-gray-300 animate-pulse"></div>
                        </div>
                    </div>
                </div>

                <div class="space-y-1 text-center mt-2">
                    <div class="w-32 h-4 bg-gray-300 rounded animate-pulse mx-auto"></div>
                    <div class="w-24 h-3 bg-gray-300 rounded animate-pulse mx-auto"></div>
                </div>
            </div>

            <div class="w-full md:hidden md:w-[80%] h-[35vh] lg:h-[45vh] relative">
                <div class="w-full h-full items-end flex gap-4 px-8">
                    <div v-for="i in 1" :key="i" class="flex-1 min-w-0">
                        <div class="transition-all duration-500 ease-in-out w-full" :class="{
                            'h-[25vh] md:h-[15vh] lg:h-[25vh]': i !== 1,
                            'h-[35vh] md:h-[35vh] lg:h-[45vh]': i === 1
                        }">
                            <div class="w-full h-full rounded-4xl bg-gray-300 animate-pulse"></div>
                        </div>
                    </div>
                </div>

                <div class="space-y-1 text-center mt-2">
                    <div class="w-32 h-4 bg-gray-300 rounded animate-pulse mx-auto"></div>
                    <div class="w-24 h-3 bg-gray-300 rounded animate-pulse mx-auto"></div>
                </div>
            </div>

            <div class="w-fit mr-auto hidden md:block">
                <div class="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-gray-300 animate-pulse"></div>
            </div>
        </div>

        <div class="flex items-center gap-4 pt-10 md:hidden justify-center">
            <div class="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>
            <div class="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>