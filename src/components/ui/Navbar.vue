<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { motion } from 'motion-v'
import Logo from '@/assets/logo/logo-bth.webp'
import Button from './Button.vue';

const router = useRouter()

defineProps({
    position: String
})

const isScrolled = ref(false)
const route = useRoute()
const activeTransform = ref<string>('')

const handleScroll = () => {
    isScrolled.value = window.scrollY > 0.1
}

watch(route, (_) => {
    activeTransform.value = ''

    setTimeout(() => {
        activeTransform.value = '-translate-y-2'
    }, 50)
}, { immediate: true })

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const mobileMenuItems = [
    {
        path: '/',
        label: 'Beranda',
        icon: `<path d="M21 17.9668V10.1503C21 8.93937 20.4604 7.7925 19.5301 7.02652L14.5301 2.90935C13.0577 1.69688 10.9423 1.69689 9.46986 2.90935L4.46986 7.02652C3.53964 7.7925 3 8.93937 3 10.1503V17.9668C3 20.1943 4.79086 22 7 22H17C19.2091 22 21 20.1943 21 17.9668Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
               <path d="M10 18H14" stroke="white" stroke-width="1.5" stroke-linecap="round" />`
    },
    {
        path: '/fakultas',
        label: 'Fakultas',
        icon: `<path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
               <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>`
    },
    {
        path: '/jalur-dan-jadwal',
        label: 'Jalur',
        icon: `<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
    },
    {
        path: '/fasilitas',
        label: 'Fasilitas',
        icon: `<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
    },
    // {
    //     path: '/pengumuman',
    //     label: 'Pengumuman',
    //     icon: `<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
    // },
]

const isActiveRoute = (path: string) => {
    return route.path === path
}

const desktopMenuItems = [
    { path: '/', label: 'Beranda' },
    { path: '/tentang', label: 'Tentang' },
    { path: '/fakultas', label: 'Fakultas' },
    { path: '/jalur-dan-jadwal', label: 'Jalur & Jadwal' },
    { path: '/prestasi', label: 'Prestasi' },
    { path: '/fasilitas', label: 'Fasilitas' },
    { path: '/pengumuman', label: 'Pengumuman' },
]

const navigateToHome = () => {
    router.push('/')
}
</script>

<template>
    <!-- Desktop -->
    <nav class="w-full top-0 z-50 transition-all duration-500 px-8 pt-8 hidden lg:block" :class="[
        position || 'sticky',
    ]">
        <div class="w-full h-full flex justify-around items-center transition-all duration-500 py-2"
            :class="[isScrolled ? 'bg-white/80 rounded-[32px] backdrop-blur-sm' : 'bg-transparent']">
            <div @click="navigateToHome" class="cursor-pointer">
                <img :src="Logo" alt="Logo BTH University" loading="lazy" class="w-12 h-20 object-contain">
            </div>

            <div class="flex justify-center items-center gap-10">
                <RouterLink v-for="item in desktopMenuItems" :key="item.path" :to="item.path"
                    class="lg:text-sm xl:text-base hover:text-gstart relative px-3 py-2 rounded-lg transition-colors duration-300"
                    :class="route.path === item.path ? 'text-gstart' : 'text-netral'">
                    {{ item.label }}
                    <motion.div v-if="route.path === item.path" layoutId="activeDesktopNavItem"
                        :initial="{ scaleY: 0, opacity: 0 }" :animate="{ scaleY: 1, opacity: 1 }"
                        :exit="{ scaleY: 0, opacity: 0 }" class="absolute inset-0 bg-black/5 rounded-lg z-[-1]" :style="{
                            originY: 'center'
                        }" :transition="{
                            type: 'spring',
                            bounce: 0.15,
                            duration: 0.5
                        }" />
                </RouterLink>
            </div>

            <div class="w-fit">
                <div class="flex items-center gap-2">
                    <a href="http://pendaftaran.universitas-bth.ac.id/" target="_blank">
                        <Button bg-color="bg-gstart" :text="'Daftar'" />
                    </a>
                    <div class="w-12 xl:w-14 h-12 xl:h-14 p-3 bg-gstart rounded-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 36 36" fill="none">
                            <path d="M10.5 25.5L25.5 10.5M25.5 10.5H13.5M25.5 10.5V22.5" stroke="white" stroke-width="3"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Mobile -->
    <nav class="w-full fixed bottom-0 px-4 py-2 z-50 lg:hidden">
        <div class="w-full grid grid-cols-4 gap-4 bg-white rounded-4xl shadow-md px-4 pb-4 relative">
            <RouterLink :to="item.path" v-for="item in mobileMenuItems" :key="item.path"
                class="flex flex-col justify-center items-center text-center gap-1 transition-all duration-500">
                <div class="w-11 h-11 rounded-full flex justify-center items-center transition-all duration-500" :class="[
                    isActiveRoute(item.path)
                        ? `bg-primary relative ${activeTransform}`
                        : 'bg-transparent hover:bg-primary relative translate-y-0'
                ]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                        class="w-6 h-6 transition-colors duration-500" :class="[
                            isActiveRoute(item.path) ? 'text-white' : 'text-black'
                        ]">
                        <g v-html="item.icon"></g>
                    </svg>
                </div>
                <p :to="item.path" class="text-xs font-light transition-colors duration-500" :class="[
                    isActiveRoute(item.path) ? 'text-primary' : 'text-black'
                ]">
                    {{ item.label }}
                </p>
            </RouterLink>
        </div>
    </nav>
</template>

<style scoped>
.curve {
    height: 20px;
    overflow: hidden;
    position: relative;
    width: 20px;
}

.concave {
    border-radius: 50%;
    box-shadow: -20px -20px white;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0;
    left: 0;
}

.curve-2 {
    height: 20px;
    overflow: hidden;
    position: relative;
    width: 20px;
}

.concave-2 {
    border-radius: 50%;
    box-shadow: -20px -20px white;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0;
    left: 0;
}

.curve-3 {
    height: 20px;
    overflow: hidden;
    position: relative;
    transform: rotateY(180deg);
    width: 20px;
}

.concave-3 {
    border-radius: 50%;
    box-shadow: -20px -20px white;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0;
    left: 0;
}

.curve-4 {
    height: 20px;
    overflow: hidden;
    position: relative;
    transform: rotateY(180deg);
    width: 20px;
}

.concave-4 {
    border-radius: 50%;
    box-shadow: -20px -20px white;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0;
    left: 0;
}
</style>