<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { Fasilitas } from '@/core/types/prodi';
import { getImageUrl } from '@/utils/imageUtils';
import FasilitasSkeleton from '@/components/sections/skeletons/FasilitasSkeleton.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import EmptySection from '@/components/sections/EmptySection.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import Subtitle from '@/components/ui/Subtitle.vue';

defineProps<{
    fasilitas: Fasilitas[],
    loading: boolean,
    error: string | null
}>();

const router = useRouter()

const navigateToFasilitas = () => {
    router.push('/fasilitas')
}
</script>

<template>
    <div v-if="loading">
        <FasilitasSkeleton />
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
            <Title title="Sarana & Prasarana Pendidikan" />
            <Subtitle text="Rasakan pengalaman belajar yang didukung oleh teknologi terkini. Dari laboratorium canggih hingga ruang-ruang diskusi yang nyaman, semua kami siapkan untuk membantumu fokus meraih prestasi terbaik." />
        </div>

        <!-- Tablet & Dekstop -->
        <div class="w-full lg:flex flex-col justify-center items-center gap-14 hidden">
            <div class="w-full h-[40vh] flex justify-center items-center gap-4">
                <div data-aos="fade-up" data-aos-duration="1000"
                    class="w-full h-full grid grid-cols-5 gap-8 justify-center items-center">
                    <div
                        class="w-full h-[60%] relative rounded-xl overflow-hidden -skew-y-12 hover:skew-0 hover:-translate-y-2 transition-all duration-500">
                        <img :src="getImageUrl(`facilities/${fasilitas[0]?.image}` || '')"
                            :alt="fasilitas[0]?.title || ''" class="w-full h-full object-cover">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                            <div class="h-fit p-4 text-white w-full">
                                <h3 class="text-base md:text-lg font-medium">{{ fasilitas[0]?.title }}</h3>
                            </div>
                        </div>
                    </div>
                    <div
                        class="w-full h-[80%] relative rounded-xl overflow-hidden -skew-y-12 hover:skew-0 hover:-translate-y-2 transition-all duration-500">
                        <img :src="getImageUrl(`facilities/${fasilitas[1]?.image}` || '')"
                            :alt="fasilitas[1]?.title || ''" class="w-full h-full object-cover">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                            <div class="h-fit p-4 text-white w-full">
                                <h3 class="text-base md:text-lg font-medium">{{ fasilitas[1]?.title }}</h3>
                            </div>
                        </div>
                    </div>
                    <div
                        class="w-full h-full relative rounded-xl overflow-hidden mt-8 hover:mt-0 transition-all duration-500">
                        <img :src="getImageUrl(`facilities/${fasilitas[2]?.image}` || '')"
                            :alt="fasilitas[2]?.title || ''" class="w-full h-full rounded-xl object-cover">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                            <div class="h-fit p-4 text-white w-full">
                                <h3 class="text-base md:text-lg font-medium">{{ fasilitas[2]?.title }}</h3>
                            </div>
                        </div>
                    </div>
                    <div
                        class="w-full h-[80%] relative rounded-xl overflow-hidden skew-y-12 hover:skew-0 hover:-translate-y-2 transition-all duration-500">
                        <img :src="getImageUrl(`facilities/${fasilitas[3]?.image}` || '')"
                            :alt="fasilitas[3]?.title || ''" class="w-full h-full object-cover">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                            <div class="h-fit p-4 text-white w-full">
                                <h3 class="text-base md:text-lg font-medium">{{ fasilitas[3]?.title }}</h3>
                            </div>
                        </div>
                    </div>
                    <div
                        class="w-full h-[60%] relative rounded-xl overflow-hidden skew-y-12 hover:skew-0 hover:-translate-y-2 transition-all duration-500">
                        <img :src="getImageUrl(`facilities/${fasilitas[4]?.image}` || '')"
                            :alt="fasilitas[4]?.title || ''" class="w-full h-full object-cover">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-xl">
                            <div class="h-fit p-4 text-white w-full">
                                <h3 class="text-base md:text-lg font-medium">{{ fasilitas[4]?.title }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Button @click="navigateToFasilitas" text="Selengkapnya" />
        </div>

        <!-- Mobile -->
        <div data-aos="fade-up" data-aos-duration="1000" class="w-full space-y-4 lg:hidden">
            <div class="w-full h-[180px] grid grid-cols-2 gap-4">
                <div class="w-full h-full overflow-hidden relative">
                    <img :src="getImageUrl(`facilities/${fasilitas[0]?.image}` || '')" :alt="fasilitas[0]?.title || ''"
                        class="w-full h-full rounded-3xl object-cover">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-3xl">
                        <div class="h-fit p-4 text-white w-full">
                            <h3 class="text-base md:text-lg font-medium">{{ fasilitas[0]?.title }}</h3>
                        </div>
                    </div>
                </div>
                <div class="w-full h-full overflow-hidden relative">
                    <img :src="getImageUrl(`facilities/${fasilitas[1]?.image}` || '')" :alt="fasilitas[1]?.title || ''"
                        class="w-full h-full rounded-3xl object-cover">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-3xl">
                        <div class="h-fit p-4 text-white w-full">
                            <h3 class="text-base md:text-lg font-medium">{{ fasilitas[1]?.title }}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-[180px] flex items-center gap-4">
                <div class="w-[70%] h-full overflow-hidden relative">
                    <img :src="getImageUrl(`facilities/${fasilitas[2]?.image}` || '')" :alt="fasilitas[2]?.title || ''"
                        class="w-full h-full rounded-3xl object-cover">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-3xl">
                        <div class="h-fit p-4 text-white w-full">
                            <h3 class="text-base md:text-lg font-medium">{{ fasilitas[2]?.title }}</h3>
                        </div>
                    </div>
                </div>
                <div class="w-[30%] h-full bg-gstart overflow-hidden rounded-3xl relative" @click="navigateToFasilitas">
                    <div class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M7 17.0137L17 7.01367M17 7.01367H9M17 7.01367V15.0137" stroke="#F03C06"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div class="absolute p-4 bottom-0 text-white">
                        <p class="text-xs">Selengkapnya</p>
                    </div>
                </div>
            </div>
            <div class="w-full h-[180px] grid grid-cols-2 gap-4">
                <div class="w-full h-full overflow-hidden relative">
                    <img :src="getImageUrl(`facilities/${fasilitas[3]?.image}` || '')" :alt="fasilitas[3]?.title || ''"
                        class="w-full h-full rounded-3xl object-cover">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-3xl">
                        <div class="h-fit p-4 text-white w-full">
                            <h3 class="text-base md:text-lg font-medium">{{ fasilitas[3]?.title }}</h3>
                        </div>
                    </div>
                </div>
                <div class="w-full h-full overflow-hidden relative">
                    <img :src="getImageUrl(`facilities/${fasilitas[4]?.image}` || '')" :alt="fasilitas[4]?.title || ''"
                        class="w-full h-full rounded-3xl object-cover">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex justify-end items-end rounded-3xl">
                        <div class="h-fit p-4 text-white w-full">
                            <h3 class="text-base md:text-lg font-medium">{{ fasilitas[4]?.title }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>