<script setup lang="ts">
import EmptySection from '@/components/sections/EmptySection.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import ListFasilitasSkeleton from '@/components/sections/skeletons/ListFasilitasSkeleton.vue';
// import Button from '@/components/ui/Button.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import type { Fasilitas } from '@/core/types/fasilitas';
import { getImageUrl } from '@/utils/imageUtils';
import { ref } from 'vue';

defineProps<{
    fasilitas: Fasilitas[]
    loading: boolean,
    error: string | null
}>()

const activeFasilitas = ref<Fasilitas | null>(null);

const setActiveFasilitas = (fasilitas: Fasilitas) => {
    activeFasilitas.value = fasilitas;
};
</script>

<template>
    <div v-if="loading">
        <ListFasilitasSkeleton />
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && fasilitas?.length === 0">
        <EmptySection name="Fasilitas" />
    </div>

    <section v-if="!loading && !error && fasilitas?.length > 0"
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div class="flex flex-col justify-center items-center text-center gap-4">
            <Tag title="Fasilitas" />
            <Title title="Lingkungan Belajar Modern dan Mendukung" />
            <Subtitle class="text-center"
                text="Fasilitas unggulan yang mendukung keberhasilan akademik dan kegiatan non-akademik." />
        </div>

        <div
            class="w-full h-full flex flex-col md:flex-row justify-start items-start gap-6 md:gap-10 lg:gap-14 md:px-10 lg:px-12 relative">
            <!-- Dekstop -->
            <div
                class="w-full md:w-fit hidden md:flex md:flex-col md:justify-start md:items-center gap-4 overflow-x-auto pb-2">
                <div class="md:w-full md:text-center py-2 px-3 lg:py-3 lg:px-6 rounded-full group flex-shrink-0 transition-all duration-500 cursor-pointer"
                    :class="!activeFasilitas ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 hover:bg-primary hover:text-white'"
                    @click="activeFasilitas = null">
                    <p class="text-sm md:text-base xl:text-lg">All</p>
                </div>

                <div v-for="item in fasilitas" :key="item.id"
                    class="md:w-full md:text-center py-2 px-3 lg:py-3 lg:px-6 rounded-full group flex-shrink-0 transition-all duration-500 cursor-pointer"
                    :class="activeFasilitas?.id === item.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 hover:bg-primary hover:text-white'"
                    @click="setActiveFasilitas(item)">
                    <p class="text-sm md:text-base xl:text-lg">{{ item.title }}</p>
                </div>
            </div>

            <!-- Mobile -->
            <div class="w-full flex md:hidden justify-start items-center gap-4 overflow-x-auto pb-2">
                <div class="py-2 px-3 lg:py-3 lg:px-6 rounded-full group flex-shrink-0 transition-all duration-500 cursor-pointer"
                    :class="!activeFasilitas ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 hover:bg-primary hover:text-white'"
                    @click="activeFasilitas = null">
                    <p class="text-sm md:text-base lg:text-lg">All</p>
                </div>

                <div v-for="item in fasilitas" :key="item.id"
                    class="py-2 px-3 lg:py-3 lg:px-6 rounded-full group flex-shrink-0 transition-all duration-500 cursor-pointer"
                    :class="activeFasilitas?.id === item.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 hover:bg-primary hover:text-white'"
                    @click="setActiveFasilitas(item)">
                    <p class="text-sm md:text-base lg:text-lg">{{ item.title }}</p>
                </div>
            </div>

            <div v-if="!activeFasilitas" class="w-full sticky top-32">
                <!-- Dekstop -->
                <div class="w-full h-full hidden lg:grid grid-cols-2 gap-10 overflow-hidden">
                    <div class="w-full h-56 md:h-72 lg:h-96 rounded-4xl overflow-hidden relative">
                        <img :src="getImageUrl(`facilities/${fasilitas[0]?.image1}`)" :alt="fasilitas[0]?.title"
                            class="w-full h-full object-cover">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                            <div class="h-fit p-4 text-white w-full">
                                <h3 class="text-base md:text-lg font-medium">{{ fasilitas[0]?.title }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-56 md:h-72 lg:h-96 rounded-4xl overflow-hidden relative">
                        <img :src="getImageUrl(`facilities/${fasilitas[1]?.image1}`)" :alt="fasilitas[1]?.title"
                            class="w-full h-full object-cover">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                            <div class="h-fit p-4 text-white w-full">
                                <h3 class="text-base md:text-lg font-medium">{{ fasilitas[1]?.title }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-56 md:h-72 lg:h-96 rounded-4xl overflow-hidden relative">
                        <img :src="getImageUrl(`facilities/${fasilitas[2]?.image1}`)" :alt="fasilitas[2]?.title"
                            class="w-full h-full object-cover">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                            <div class="h-fit p-4 text-white w-full">
                                <h3 class="text-base md:text-lg font-medium">{{ fasilitas[2]?.title }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-56 md:h-72 lg:h-96 rounded-4xl overflow-hidden relative">
                        <img :src="getImageUrl(`facilities/${fasilitas[3]?.image1}`)" :alt="fasilitas[3]?.title"
                            class="w-full h-full object-cover">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                            <div class="h-fit p-4 text-white w-full">
                                <h3 class="text-base md:text-lg font-medium">{{ fasilitas[3]?.title }}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile & Tablet -->
                <div class="w-full space-y-4 md:space-y-6 lg:hidden">
                    <div class="w-full h-[180px] grid grid-cols-2 gap-4 md:gap-6">
                        <div class="w-full h-full overflow-hidden relative">
                            <img :src="getImageUrl(`facilities/${fasilitas[0]?.image1}`)" :alt="fasilitas[0]?.title"
                                class="w-full h-full rounded-3xl object-cover">
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                                <div class="h-fit p-4 text-white w-full">
                                    <h3 class="text-base md:text-lg font-medium">{{ fasilitas[0]?.title }}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="w-full h-full overflow-hidden relative">
                            <img :src="getImageUrl(`facilities/${fasilitas[1]?.image1}`)" :alt="fasilitas[1]?.title"
                                class="w-full h-full rounded-3xl object-cover">
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                                <div class="h-fit p-4 text-white w-full">
                                    <h3 class="text-base md:text-lg font-medium">{{ fasilitas[1]?.title }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-[180px] grid grid-cols-1 gap-4 md:gap-6">
                        <div class="w-full h-full overflow-hidden relative">
                            <img :src="getImageUrl(`facilities/${fasilitas[2]?.image1}`)" :alt="fasilitas[2]?.title"
                                class="w-full h-full rounded-3xl object-cover">
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                                <div class="h-fit p-4 text-white w-full">
                                    <h3 class="text-base md:text-lg font-medium">{{ fasilitas[2]?.title }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-[180px] flex items-center gap-4 md:gap-6">
                        <div class="w-[70%] h-full overflow-hidden relative">
                            <img :src="getImageUrl(`facilities/${fasilitas[3]?.image1}`)" :alt="fasilitas[3]?.title"
                                class="w-full h-full rounded-3xl object-cover">

                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                                <div class="h-fit p-4 text-white w-full">
                                    <h3 class="text-base md:text-lg font-medium">{{ fasilitas[3]?.title }}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="w-[30%] h-full bg-gstart overflow-hidden rounded-3xl relative" @click="">
                            <div
                                class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                    fill="none">
                                    <path d="M7 17.0137L17 7.01367M17 7.01367H9M17 7.01367V15.0137" stroke="#F03C06"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="absolute bottom-4 left-4 text-white">
                                <p class="text-xs">Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else class="w-full sticky top-32">
                <!-- Dekstop -->
                <div class="w-full h-full hidden lg:grid grid-cols-2 gap-10 overflow-hidden">
                    <div class="w-full h-56 md:h-72 lg:h-96 rounded-4xl overflow-hidden relative">
                        <img :src="getImageUrl(`facilities/${activeFasilitas.image1}`)" :alt="activeFasilitas.title"
                            class="w-full h-full object-cover">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                            <div class="h-fit p-4 text-white w-full">
                                <h3 class="text-base md:text-lg font-medium">{{ activeFasilitas.title }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-56 md:h-72 lg:h-96 rounded-4xl overflow-hidden relative">
                        <img :src="getImageUrl(`facilities/${activeFasilitas.image2}`)" :alt="activeFasilitas.title"
                            class="w-full h-full object-cover">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                            <div class="h-fit p-4 text-white w-full">
                                <h3 class="text-base md:text-lg font-medium">{{ activeFasilitas.title }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-56 md:h-72 lg:h-96 rounded-4xl overflow-hidden relative">
                        <img :src="getImageUrl(`facilities/${activeFasilitas.image3}`)" :alt="activeFasilitas.title"
                            class="w-full h-full object-cover">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                            <div class="h-fit p-4 text-white w-full">
                                <h3 class="text-base md:text-lg font-medium">{{ activeFasilitas.title }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-56 md:h-72 lg:h-96 rounded-4xl overflow-hidden relative">
                        <img :src="getImageUrl(`facilities/${activeFasilitas.image4}`)" :alt="activeFasilitas.title"
                            class="w-full h-full object-cover">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                            <div class="h-fit p-4 text-white w-full">
                                <h3 class="text-base md:text-lg font-medium">{{ activeFasilitas.title }}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile & Tablet -->
                <div class="w-full space-y-4 md:space-y-6 lg:hidden">
                    <div class="w-full h-[180px] grid grid-cols-2 gap-4 md:gap-6">
                        <div class="w-full h-full overflow-hidden relative">
                            <img :src="getImageUrl(`/facilities/${activeFasilitas.image1}`)"
                                :alt="activeFasilitas.title" class="w-full h-full rounded-3xl object-cover">
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                                <div class="h-fit p-4 text-white w-full">
                                    <h3 class="text-base md:text-lg font-medium">{{ activeFasilitas.title }}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="w-full h-full overflow-hidden relative">
                            <img :src="getImageUrl(`/facilities/${activeFasilitas.image1}`)"
                                :alt="activeFasilitas.title" class="w-full h-full rounded-3xl object-cover">
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                                <div class="h-fit p-4 text-white w-full">
                                    <h3 class="text-base md:text-lg font-medium">{{ activeFasilitas.title }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-[180px] grid grid-cols-1 gap-4 md:gap-6">
                        <div class="w-full h-full overflow-hidden relative">
                            <img :src="getImageUrl(`/facilities/${activeFasilitas.image1}`)"
                                :alt="activeFasilitas.title" class="w-full h-full rounded-3xl object-cover">
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                                <div class="h-fit p-4 text-white w-full">
                                    <h3 class="text-base md:text-lg font-medium">{{ activeFasilitas.title }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-[180px] flex items-center gap-4 md:gap-6">
                        <div class="w-[70%] h-full overflow-hidden relative">
                            <img :src="getImageUrl(`/facilities/${activeFasilitas.image1}`)"
                                :alt="activeFasilitas.title" class="w-full h-full rounded-3xl object-cover">

                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                                <div class="h-fit p-4 text-white w-full">
                                    <h3 class="text-base md:text-lg font-medium">{{ activeFasilitas.title }}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="w-[30%] h-full bg-gstart overflow-hidden rounded-3xl relative" @click="">
                            <div
                                class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                    fill="none">
                                    <path d="M7 17.0137L17 7.01367M17 7.01367H9M17 7.01367V15.0137" stroke="#F03C06"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="absolute bottom-4 left-4 text-white">
                                <p class="text-xs">Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="w-full hidden lg:flex justify-between items-center">
                <div class="space-y-4">
                    <h4 class="text-xl font-bold">Gambar Lainnya</h4>
                    <p class="text-base">54 Foto, 5 Video</p>
                </div>

                <Button text="Lihat Selengkapnya" />
            </div> -->
        </div>
    </section>
</template>