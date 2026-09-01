<script setup lang="ts">
import Tag from '@/components/ui/Tag.vue';
import type { Post } from '@/core/types/post';
import { useRouter } from 'vue-router';

const props = defineProps<{
    description: string | ''
    berita: Post[]
}>()

const router = useRouter()

const navigateToBerita = () => {
    router.push(`/berita/${props.berita[0].slug}`)
}
</script>

<template>
    <section
        class="p-4 md:p-8 lg:pb-8 xl:pb-16 lg:px-24 flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-16">
        <div class="w-full md:w-[55%] lg:w-[65%] xl:w-[70%] space-y-20">
            <div class="w-full">
                <p class="text-gstart text-sm md:text-sm lg:text-base [&_a]:text-blue-600 [&_a]:underline [&_a]:font-medium [&_a:hover]:text-blue-800
                [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-2     
                [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-2  
                [&_li]:my-1" v-html="description">
                </p>
            </div>
        </div>

        <div
            class="w-full md:w-[45%] lg:w-[35%] xl:w-[30%] rounded-4xl bg-gstart space-y-6 md:space-y-8 lg:space-y-10 p-8">
            <div class="w-full">
                <input type="text" class="w-full py-3 px-4 border border-netral rounded-full text-base text-white"
                    placeholder="Cari">
            </div>

            <div class="space-y-3 lg:space-y-6">
                <h3
                    class="text-xl lg:text-2xl xl:text-[32px] font-medium text-left text-transparent bg-clip-text bg-gradient-to-b from-white to-[#999999]">
                    Berita Terbaru</h3>
                <div class="space-y-4 lg:space-y-8">
                    <div @click="navigateToBerita" class="space-y-4">
                        <h4 class="text-sm md:text-base xl:text-lg font-medium text-white">{{ berita[0]?.title }}</h4>
                        <div class="w-full flex justify-between items-center">
                            <Tag color="text-primary" :title="berita[0]?.category.name" />
                            <p class="text-sm text-netral">{{ berita[0]?.pub_date }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>