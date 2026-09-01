<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import type { Jalur } from '@/core/types/jalur';
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router';

const timelineRef = ref<HTMLElement>()
const scrollProgress = ref(0)
const itemVisibility = ref<number[]>([])

const router = useRouter()

const props = defineProps<{
    jalur: Jalur[]
}>()

const handleScroll = () => {
    if (!timelineRef.value) return

    const rect = timelineRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const isMobile = window.innerWidth < 768
    const elementTop = rect.top
    const elementHeight = rect.height

    const triggerPoint = isMobile ? windowHeight * 0.4 : windowHeight * 0.6

    let progress = 0

    if (elementTop <= triggerPoint) {
        const scrollDistance = triggerPoint - elementTop
        progress = Math.min(1, Math.max(0, scrollDistance / elementHeight))
    }

    scrollProgress.value = progress

    const items = timelineRef.value.querySelectorAll('.timeline-item')
    const stickyTop = isMobile ? windowHeight * 0.2 : windowHeight * 0.2

    items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect()
        const itemTop = itemRect.top

        if (itemTop <= stickyTop) {
            itemVisibility.value[index] = 0
        } else if (itemTop > stickyTop) {
            itemVisibility.value[index] = 1
        } else {
            const fadeRange = isMobile ? 1000 : 200
            const fadeProgress = (itemTop - (stickyTop)) / fadeRange
            itemVisibility.value[index] = Math.min(1, Math.max(0, fadeProgress))
        }
    })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
};

// const isJanuari2026OrEarlier = (startDate: string) => {
//     const date = new Date(startDate);
//     const targetDate = new Date('2026-01-31');
//     return date <= targetDate;
// }

// const isActivePeriod = (endDate: string, endTime: string) => {
//     const now = new Date();
//     const endDateTime = new Date(`${endDate}T${endTime}`);
//     return now <= endDateTime;
// }

const filteredJalur = computed(() => {
    return props.jalur.filter(item => {
        const startDate = new Date(item.start_date);
        const targetDate = new Date('2026-07-31');
        const now = new Date();
        const endDateTime = new Date(`${item.end_date}T${item.end_time}`);
        
        const isWithinPeriod = startDate <= targetDate;
        const isActive = now <= endDateTime;
        
        return isWithinPeriod && isActive;
    });
})

const handleNavigate = (slug: string) => {
    router.push(`/jalur/${slug}`)
}
</script>

<template>
    <div class="w-full flex gap-4">
        <div class="flex flex-col gap-20 relative" ref="timelineRef">
            <div class="absolute left-7 lg:left-9 w-2 h-[90%] md:h-[90%] lg:h-[92%] py-4 bg-primary/10 overflow-hidden">
                <div class="w-full bg-primary transition-all duration-300 ease-out"
                    :style="{ height: `${scrollProgress * 100}%` }"></div>
            </div>

            <div v-for="(item, index) in filteredJalur" :key="item.id"
                class="w-full flex gap-4 relative z-10 timeline-item" :style="{
                    position: 'sticky',
                    top: 'clamp(10px, 12vh, 20vh)',
                    opacity: itemVisibility[index] !== undefined ? itemVisibility[index] : 1,
                    transition: 'opacity 0.5s ease-out'
                }">
                <div class="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary/50 flex justify-center items-center">
                    <div
                        class="w-14 h-14 lg:w-16 lg:h-16 bg-primary rounded-full text-white flex justify-center items-center">
                        <h3 class="text-2xl">{{ index + 1 }}</h3>
                    </div>
                </div>

                <div class="w-[80%] lg:w-[85%] space-y-4">
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                            <path
                                d="M24 6.63426V24.0136C24 24.4115 23.842 24.793 23.5607 25.0743C23.2794 25.3556 22.8978 25.5136 22.5 25.5136C22.1022 25.5136 21.7206 25.3556 21.4393 25.0743C21.158 24.793 21 24.4115 21 24.0136V6.63426L17.5613 10.0749C17.4219 10.2142 17.2564 10.3248 17.0743 10.4002C16.8923 10.4756 16.6971 10.5145 16.5 10.5145C16.102 10.5145 15.7202 10.3563 15.4387 10.0749C15.2994 9.93552 15.1888 9.77007 15.1134 9.58798C15.038 9.40589 14.9992 9.21072 14.9992 9.01363C14.9992 8.61559 15.1573 8.23384 15.4387 7.95238L21.4387 1.95238C21.5781 1.81292 21.7435 1.70228 21.9256 1.62679C22.1077 1.55131 22.3029 1.51245 22.5 1.51245C22.6971 1.51245 22.8923 1.55131 23.0744 1.62679C23.2565 1.70228 23.4219 1.81292 23.5613 1.95238L29.5613 7.95238C29.8427 8.23384 30.0008 8.61559 30.0008 9.01363C30.0008 9.41168 29.8427 9.79342 29.5613 10.0749C29.2798 10.3563 28.898 10.5145 28.5 10.5145C28.102 10.5145 27.7202 10.3563 27.4387 10.0749L24 6.63426ZM36 23.1924V18.0136C36 17.218 35.6839 16.4549 35.1213 15.8923C34.5587 15.3297 33.7956 15.0136 33 15.0136H30C29.6022 15.0136 29.2206 15.1717 28.9393 15.453C28.658 15.7343 28.5 16.1158 28.5 16.5136C28.5 16.9115 28.658 17.293 28.9393 17.5743C29.2206 17.8556 29.6022 18.0136 30 18.0136H33V33.0886C32.1055 32.1748 30.9082 31.6189 29.6329 31.5253C28.3575 31.4316 27.0919 31.8066 26.0734 32.5799C25.055 33.3533 24.3538 34.4717 24.1015 35.7253C23.8492 36.9789 24.0631 38.2815 24.7031 39.3886L24.7481 39.4599L28.9219 45.8349C29.1397 46.1678 29.4808 46.4006 29.8703 46.482C30.2597 46.5634 30.6655 46.4868 30.9984 46.2689C31.3314 46.0511 31.5641 45.71 31.6455 45.3206C31.7269 44.9311 31.6503 44.5253 31.4325 44.1924L27.2831 37.8568C26.989 37.3373 26.9132 36.7224 27.0725 36.1471C27.2318 35.5718 27.6131 35.0834 28.1325 34.7893C28.6519 34.4951 29.2669 34.4194 29.8422 34.5786C30.4174 34.7379 30.9059 35.1192 31.2 35.6386C31.2131 35.663 31.2281 35.6874 31.2431 35.7099L33.2456 38.768C33.4226 39.038 33.682 39.2436 33.9852 39.3544C34.2884 39.4652 34.6193 39.4752 34.9286 39.3829C35.2379 39.2907 35.5093 39.1011 35.7023 38.8424C35.8953 38.5837 35.9997 38.2696 36 37.9468V27.0136C37.4138 28.3224 38.543 29.9083 39.3172 31.6725C40.0914 33.4367 40.494 35.3414 40.5 37.268V45.0136C40.5 45.4115 40.658 45.793 40.9393 46.0743C41.2206 46.3556 41.6022 46.5136 42 46.5136C42.3978 46.5136 42.7794 46.3556 43.0607 46.0743C43.342 45.793 43.5 45.4115 43.5 45.0136V37.2605C43.4915 34.4818 42.8037 31.7474 41.4965 29.2954C40.1893 26.8434 38.3023 24.7482 36 23.1924ZM15 15.0136H12C11.2044 15.0136 10.4413 15.3297 9.87868 15.8923C9.31607 16.4549 9 17.218 9 18.0136V37.5136C9 37.9115 9.15804 38.293 9.43934 38.5743C9.72064 38.8556 10.1022 39.0136 10.5 39.0136C10.8978 39.0136 11.2794 38.8556 11.5607 38.5743C11.842 38.293 12 37.9115 12 37.5136V18.0136H15C15.3978 18.0136 15.7794 17.8556 16.0607 17.5743C16.342 17.293 16.5 16.9115 16.5 16.5136C16.5 16.1158 16.342 15.7343 16.0607 15.453C15.7794 15.1717 15.3978 15.0136 15 15.0136Z"
                                fill="#FF6321" />
                        </svg></div>
                    <h3 class="text-lg lg:text-2xl font-medium text-gstart">{{ item.name }}</h3>
                    <h4 class="text-sm lg:text-base font-normal">{{ formatDate(item.start_date) }} - {{
                        formatDate(item.end_date) }}</h4>
                    <h5 class="text-sm lg:text-base font-normal" v-html="item.content"></h5>
                    <Button @click="handleNavigate(item.slug)" text="Selengkapnya" />
                </div>
            </div>
        </div>
    </div>
</template>