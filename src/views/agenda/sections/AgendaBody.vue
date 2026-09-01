<script setup lang="ts">
import EmptySection from '@/components/sections/EmptySection.vue';
import ErrorSection from '@/components/sections/ErrorSection.vue';
import AgendaBodySkeleton from '@/components/sections/skeletons/AgendaBodySkeleton.vue';
import Button from '@/components/ui/Button.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import type { Agenda } from '@/core/types/agenda';
import { getImageUrl } from '@/utils/imageUtils';
import { useRouter } from 'vue-router';

defineProps<{
    agenda: Agenda[],
    loading: boolean,
    error: string | null
}>()

const router = useRouter()

const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

    const dayName = days[date.getDay()];
    const day = date.getDate().toString().padStart(2, '0');
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();

    return { dayName, day, monthName, year };
}

const sendWhatsApp = (title: string, contact: string) => {
    const message = encodeURIComponent(`Halo, saya ingin bertanya mengenai agenda ${title}`);
    window.open(`https://api.whatsapp.com/send?phone=${contact}&text=${message}`, '_blank');
};

const navigateToDetail = (slug: string) => {
    router.push(`/agenda/${slug}`)
}
</script>

<template>
    <div v-if="loading">
        <AgendaBodySkeleton />
    </div>

    <div v-if="error">
        <ErrorSection />
    </div>

    <div v-if="loading === false && agenda?.length === 0">
        <EmptySection name="Agenda" />
    </div>

    <section v-if="!loading && !error && agenda?.length > 0"
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
        <div class="w-full h-full flex flex-col md:flex-row items-center gap-12"
            @click="navigateToDetail(agenda[0]?.slug)">
            <div class="w-full h-[50vh] md:w-[50%]">
                <img :src="getImageUrl(`/agendas/${agenda[0]?.image}`)" :alt="agenda[0]?.title" loading="lazy"
                    class="w-full h-full rounded-4xl object-cover">
            </div>
            <div class="w-full h-full md:w-[50%] space-y-6">
                <div class="w-full max-w-[80%] space-y-4">
                    <Tag title="Seminar" />
                    <div class="">
                        <Title class="lg:leading-relaxed" :title="agenda[0]?.title" />
                        <Subtitle class="line-clamp-4" :text="agenda[0]?.content" />
                    </div>
                </div>
                <Button text="Hubungi Kami" @click="sendWhatsApp(agenda[0]?.contact, agenda[0]?.title)" />
            </div>
        </div>

        <div class="w-full h-fit flex flex-col items-center gap-12 overflow-hidden">
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
                <div v-for="(item, index) in agenda" :key="index" @click="navigateToDetail(item.slug)"
                    class="py-4 lg:py-8 flex justify-between items-center md:gap-6">
                    <div class="py-3 px-2 rounded-2xl space-y-1 text-center w-fit">
                        <h5 class="text-xs md:text-sm lg:text-base">{{ formatDate(item.start_date).dayName }}</h5>
                        <h5 class="text-lg md:text-xl lg:text-3xl font-bold">{{ formatDate(item.start_date).day }}</h5>
                        <h5 class="text-xs md:text-sm lg:text-base">{{ formatDate(item.start_date).monthName }} {{
                            formatDate(item.start_date).year }}</h5>
                    </div>

                    <div class="space-y-4 w-fit">
                        <div class="">
                            <h5 class="text-base md:text-lg lg:text-2xl font-bold flex items-center gap-4">{{ item.title
                            }}
                            </h5>
                            <p class="text-xs lg:text-sm">{{ item.location }}</p>
                        </div>
                        <p class="text-xs md:text-sm lg:text-base line-clamp-1" v-html="item.content"></p>
                    </div>

                    <Button text="Hubungi Kami" @click="sendWhatsApp(item.contact, item.title)" />
                </div>
            </div>
        </div>
    </section>
</template>