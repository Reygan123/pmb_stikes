<script setup lang="ts">
import { useRouter } from 'vue-router';
import Button from '../ui/Button.vue';
import Tag from '../ui/Tag.vue';
import Title from '../ui/Title.vue';
import AboutSectionSkeleton from './skeletons/AboutSectionSkeleton.vue';
import Subtitle from '../ui/Subtitle.vue';
import { ref } from 'vue';

const props = defineProps<{
    loading: boolean,
    error: string | null
    img: string
    tag: string
    title: string
    description: string
    subtitle?: string
    video: string
    status?: string
}>()

const router = useRouter()

const navigateToDetail = () => {
    const data = [
        props.tag, props.img, props.title, props.description
    ]

    localStorage.setItem('sambutanData', JSON.stringify(data))
    router.push('/tentang')
}

const playingVideo = ref<string | null>(null)

const handleVideoOpen = (videoId?: string) => {
    if (videoId) {
        playingVideo.value = videoId
    }
}

const handleVideoClose = () => {
    playingVideo.value = null
}

const handleVideoContainerClick = (e: MouseEvent) => {
    e.stopPropagation()
}
</script>

<template>
    <div v-if="loading">
        <AboutSectionSkeleton />
    </div>

    <section v-if="!loading"
        class="p-6 lg:py-16 lg:px-24 flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        <div class="w-full md:w-[40%] relative cursor-pointer group" @click="handleVideoOpen(video)">
            <img :src="img" :alt="tag"
                class="w-full h-[300px] md:h-[420px] lg:h-[560px] object-cover object-top rounded-4xl transition-transform duration-300">

            <div
                class="absolute inset-0 bg-black/30 group-hover:bg-black/50 flex justify-center items-center transition-all duration-300 rounded-4xl">
                <div
                    class="bg-white/50 w-14 h-14 rounded-full flex justify-center items-center transition-transform duration-200 group-hover:scale-115">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 12 14" fill="none">
                        <path
                            d="M0.000441885 1.68551C0.000441855 0.967269 0.777968 0.518367 1.39999 0.87749L10.6042 6.19153C11.2262 6.55066 11.2262 7.44847 10.6042 7.80759L1.39999 13.1216C0.777972 13.4808 0.00044236 13.0318 0.00044233 12.3136L0.000441885 1.68551Z"
                            fill="white" />
                    </svg>
                </div>
            </div>
        </div>

        <div class="w-full md:w-[60%] space-y-6 md:space-y-8">
            <div class="space-y-3">
                <Tag :title="tag" />
                <div class="space-y-2">
                    <Title :title="title" />
                    <Subtitle color="text-black" class="font-semibold" v-if="subtitle" :text="subtitle" />
                    <p class="text-xs md:text-sm lg:text-base font-light" v-html="description"></p>
                </div>
            </div>

            <div class="flex justify-center md:justify-start" :class="[status || 'block']">
                <Button @click="navigateToDetail" text="Selengkapnya" />
            </div>
        </div>
    </section>

    <Teleport to="body">
        <Transition enter-active-class="transition-opacity duration-200"
            leave-active-class="transition-opacity duration-200" enter-from-class="opacity-0"
            leave-to-class="opacity-0">
            <div v-if="playingVideo" class="fixed inset-0 flex items-center justify-center bg-black/80 z-[100]"
                @click="handleVideoClose">
                <Transition enter-active-class="transition-all duration-200"
                    leave-active-class="transition-all duration-200" enter-from-class="scale-90 opacity-0"
                    leave-to-class="scale-90 opacity-0">
                    <div v-if="playingVideo" class="relative w-[90%] md:w-[70%] lg:w-[50%] aspect-video"
                        @click="handleVideoContainerClick">
                        <button
                            class="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full cursor-pointer z-10"
                            @click="handleVideoClose" aria-label="Close video">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <iframe width="100%" height="100%"
                            :src="`https://www.youtube-nocookie.com/embed/${playingVideo}?autoplay=0`"
                            title="About University Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen class="rounded-xl md:rounded-2xl lg:rounded-4xl border-2 border-white"
                            loading="lazy" />
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>