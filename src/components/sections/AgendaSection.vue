<script setup lang="ts">
import Button from '../ui/Button.vue';
import Subtitle from '../ui/Subtitle.vue';
import Tag from '../ui/Tag.vue';
import Title from '../ui/Title.vue';
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div class="flex flex-col justify-center items-center gap-4">
            <Tag title="Agenda" />
            <Title title="Agenda STIKes Budi Luhur" />
            <Subtitle text="Jadwal seminar, lokakarya, dan berbagai kegiatan akademik universitas." />
        </div>

        <div class="w-full h-fit flex flex-col items-center gap-4 md:gap-8 lg:gap-12 overflow-hidden">
            <div class="w-full flex justify-start items-center gap-4">
                <div
                    class="py-2 px-3 lg:py-3 lg:px-6 rounded-full group bg-gray-100 text-gray-500 font-medium hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
                    <p class="text-sm md:text-base lg:text-lg">All</p>
                </div>
                <div
                    class="py-2 px-3 lg:py-3 lg:px-6 rounded-full group bg-gray-100 text-gray-500 font-medium hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
                    <p class="text-sm md:text-base lg:text-lg">Seminar</p>
                </div>
                <div
                    class="py-2 px-3 lg:py-3 lg:px-6 rounded-full group bg-gray-100 text-gray-500 font-medium hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
                    <p class="text-sm md:text-base lg:text-lg">Workshop</p>
                </div>
                <div
                    class="py-2 px-3 lg:py-3 lg:px-6 rounded-full group bg-gray-100 text-gray-500 font-medium hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
                    <p class="text-sm md:text-base lg:text-lg">Pelatihan</p>
                </div>
            </div>

            <div class="w-full border-t">
                <div class="py-4 lg:py-8 flex justify-between items-center md:gap-6">
                    <div class="py-3 px-2 rounded-2xl space-y-1 text-center w-fit">
                        <h5 class="text-xs md:text-sm lg:text-base">Fri</h5>
                        <h5 class="text-lg md:text-xl lg:text-3xl font-bold">09</h5>
                        <h5 class="text-xs md:text-sm lg:text-base">Feb 2024</h5>
                    </div>

                    <div class="space-y-4 w-fit">
                        <div class="">
                            <h5 class="text-base md:text-lg lg:text-2xl font-bold flex items-center gap-4">Acara di STIKes Budi Luhur
                                <span class="px-2 py-1 lg:px-4 lg:py-2 text-xs md:text-sm font-medium bg-red-500 text-white rounded-full">Sold
                                    Out</span></h5>
                            <p class="text-xs lg:text-sm">Bandung</p>
                        </div>
                        <p class="text-xs md:text-sm lg:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque numquam
                            corrupti dicta, nulla soluta eum velit incidunt optio ullam!</p>
                    </div>

                    <Button text="Hubungi Kami" />
                </div>
            </div>
        </div>
    </section>
</template>