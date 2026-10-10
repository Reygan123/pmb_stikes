<script setup lang="ts">
import EmptySection from '@/components/sections/EmptySection.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import KalenderSkeleton from '@/components/sections/skeletons/KalenderSkeleton.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import type { Akademik } from '@/core/types/akademik';
import { computed, ref } from 'vue'
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

const props = defineProps<{
    akademik: Akademik[]
    loading: boolean,
    error: string | null
}>()

const currentDate = ref(new Date(2025, 8, 1))

const monthNamesId = [
    'JANUARI', 'FEBRUARI', 'MARET', 'APRIL', 'MEI', 'JUNI',
    'JULI', 'AGUSTUS', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DESEMBER'
]

const monthNamesEn = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
]

const monthNames = computed(() => langStore.currentLang === 'en' ? monthNamesEn : monthNamesId)

const events = computed(() => {
    if (!props.akademik || props.akademik.length === 0) return []
    
    return props.akademik.map(item => ({
        id: item.id,
        title: item.title,
        startDate: new Date(item.startDate),
        endDate: new Date(item.endDate),
        color: item.color || 'bg-primary'
    }))
})

const currentMonth = computed(() => monthNames.value[currentDate.value.getMonth()])
const currentYear = computed(() => currentDate.value.getFullYear())

const daysInMonth = computed(() => {
    const year = currentDate.value.getFullYear()
    const month = currentDate.value.getMonth()
    return new Date(year, month + 1, 0).getDate()
})

const dates = computed(() => {
    const days = []
    const totalDays = daysInMonth.value

    for (let i = 1; i <= totalDays; i++) {
        days.push(i)
    }

    return days
})

const cellWidth = computed(() => 150 / dates.value.length)

const currentMonthEvents = computed(() => {
    const year = currentDate.value.getFullYear()
    const month = currentDate.value.getMonth()

    return events.value.filter(event => {
        const eventStart = new Date(event.startDate)
        const eventEnd = new Date(event.endDate)
        const monthStart = new Date(year, month, 1)
        const monthEnd = new Date(year, month + 1, 1)

        return (eventStart <= monthEnd && eventEnd >= monthStart)
    })
})

const getEventStyle = (startCol: number, span: number, row: number) => {
    const left = (startCol - 1) * cellWidth.value
    const width = span * cellWidth.value
    const top = 20 + (row - 1) * 35

    return {
        left: `${left}%`,
        width: `${width}%`,
        top: `${top}px`,
        zIndex: 10
    }
}

const getEventPosition = (event: any) => {
    const year = currentDate.value.getFullYear()
    const month = currentDate.value.getMonth()
    const eventStart = new Date(event.startDate)
    const eventEnd = new Date(event.endDate)

    const startDate = Math.max(1, eventStart.getMonth() === month && eventStart.getFullYear() === year ? eventStart.getDate() : 1)
    const endDate = Math.min(dates.value.length, eventEnd.getMonth() === month && eventEnd.getFullYear() === year ? eventEnd.getDate() : dates.value.length)

    const span = endDate - startDate + 1

    return {
        startCol: startDate,
        span: span > 0 ? span : 1
    }
}

const previousMonth = () => {
    const newDate = new Date(currentDate.value)
    newDate.setMonth(newDate.getMonth() - 1)
    currentDate.value = newDate
}

const nextMonth = () => {
    const newDate = new Date(currentDate.value)
    newDate.setMonth(newDate.getMonth() + 1)
    currentDate.value = newDate
}
</script>

<template>
    <div v-if="loading">
        <KalenderSkeleton />
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && akademik === null">
        <EmptySection name="Kalender Akademik" />
    </div>

    <section v-if="!loading && !error && akademik !== null"
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-16">
        <div class="w-full flex flex-col justify-center items-center text-center gap-4">
            <Tag :title="langStore.currentLang === 'en' ? 'Calendar' : 'Kalender'" />
            <Title :title="langStore.currentLang === 'en' ? 'Academic Calendar 2025/2026' : 'Kalender Akademik 2025/2026'" />
            <Subtitle class="text-center"
                :text="langStore.currentLang === 'en' ? 'Official schedule guide for STIKes Budi Luhur Cimahi academic activities, exams, and holidays.' : 'Panduan resmi jadwal akademik STIKes Budi Luhur Cimahi, mencakup perkuliahan, ujian, dan hari libur.'" />
        </div>

        <div class="w-full bg-white border rounded-4xl overflow-hidden">
            <div class="flex items-center justify-between p-3 md:p-6">
                <div class="flex items-center gap-4">
                    <h1 class="text-base md:text-lg lg:text-xl font-semibold text-gray-800">{{ currentMonth }}</h1>
                    <div class="flex items-center gap-2">
                        <button @click="previousMonth" class="p-1 hover:bg-gray-100 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                fill="none">
                                <path
                                    d="M8.70694 12.293L4.41394 7.99997H13.9999V5.99997H4.41394L8.70694 1.70697L7.29294 0.292969L0.585938 6.99997L7.29294 13.707L8.70694 12.293Z"
                                    fill="black" />
                            </svg>
                        </button>
                        <button @click="nextMonth" class="p-1 hover:bg-gray-100 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M11.293 17.293L12.707 18.707L19.414 12L12.707 5.29297L11.293 6.70697L15.586 11H6V13H15.586L11.293 17.293Z"
                                    fill="black" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="text-base md:text-lg lg:text-xl font-semibold text-gray-800">{{ currentYear }}</div>
            </div>

            <!-- Dekstop -->
            <div class="relative overflow-x-auto">
                <div class="grid gap-0"
                    :style="`grid-template-columns: repeat(${dates.length}, minmax(120px, 1fr)); min-width: ${dates.length * 80}px;`">
                    <div v-for="date in dates" :key="date"
                        class="h-12 border-x border-t border-gray-200 flex items-center justify-center text-sm font-medium">
                        {{ date }}
                    </div>
                </div>

                <div class="relative grid gap-0"
                    :style="`grid-template-columns: repeat(${dates.length}, minmax(120px, 1fr)); min-width: ${dates.length * 80}px; min-height: 300px;`">
                    <div v-for="date in dates" :key="`cell-${date}`" class="border-x border-gray-200 bg-white"
                        style="height: 340px;">
                    </div>

                    <div v-for="(event, index) in currentMonthEvents" :key="event.id"
                        :class="`absolute ${event.color} text-white text-[10px] font-medium px-2 py-2 rounded-full flex items-center justify-center`"
                        :style="getEventStyle(getEventPosition(event).startCol, getEventPosition(event).span, index + 1)">
                        {{ event.title }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.grid-cols-14 {
    grid-template-columns: repeat(14, minmax(0, 1fr));
}

::-webkit-scrollbar {
    height: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>