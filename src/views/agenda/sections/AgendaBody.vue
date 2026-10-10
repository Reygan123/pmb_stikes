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
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

defineProps<{
    agenda: Agenda[],
    loading: boolean,
    error: string | null
}>()

const router = useRouter()

const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const isEn = langStore.currentLang === 'en';
    const days = isEn 
        ? ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        : ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    const months = isEn
        ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        : ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

    const dayName = days[date.getDay()];
    const day = date.getDate().toString().padStart(2, '0');
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();

    return { dayName, day, monthName, year };
}

const sendWhatsApp = (title: string, contact: string) => {
    const targetContact = contact || '6281221223456';
    const message = langStore.currentLang === 'en'
        ? encodeURIComponent(`Hello, I would like to inquire regarding the event: ${title}`)
        : encodeURIComponent(`Halo, saya ingin bertanya mengenai agenda ${title}`);
    window.open(`https://api.whatsapp.com/send?phone=${targetContact}&text=${message}`, '_blank');
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
                    <Tag title="Featured" />
                    <div class="">
                        <Title class="lg:leading-relaxed" :title="agenda[0]?.title" />
                        <Subtitle class="line-clamp-4" :text="agenda[0]?.content" />
                    </div>
                </div>
                <Button :text="langStore.t('common.contact_us')" @click="sendWhatsApp(agenda[0]?.title, agenda[0]?.contact)" />
            </div>
        </div>

        <div class="w-full h-fit flex flex-col items-center gap-12 overflow-hidden">
            <div class="w-full flex justify-start items-center gap-4">
                <div
                    class="py-2 px-3 lg:py-3 lg:px-6 rounded-full group bg-primary text-white font-medium transition-all duration-500 cursor-pointer">
                    <p class="text-sm md:text-base lg:text-lg">{{ langStore.currentLang === 'en' ? 'All Events' : 'Semua Agenda' }}</p>
                </div>
            </div>

            <div class="w-full border-t">
                <div v-for="(item, index) in agenda" :key="index" @click="navigateToDetail(item.slug)"
                    class="py-4 lg:py-8 flex justify-between items-center md:gap-6 cursor-pointer hover:bg-gray-50/80 rounded-2xl px-2 transition-colors">
                    <div class="py-3 px-2 rounded-2xl space-y-1 text-center w-fit border border-primary/20">
                        <h5 class="text-xs md:text-sm lg:text-base">{{ formatDate(item.start_date).dayName }}</h5>
                        <h5 class="text-lg md:text-xl lg:text-3xl font-bold">{{ formatDate(item.start_date).day }}</h5>
                        <h5 class="text-xs md:text-sm lg:text-base">{{ formatDate(item.start_date).monthName }} {{
                            formatDate(item.start_date).year }}</h5>
                    </div>

                    <div class="space-y-4 w-fit flex-1 px-4">
                        <div class="">
                            <h5 class="text-base md:text-lg lg:text-2xl font-bold flex items-center gap-4 text-gstart">{{ item.title }}</h5>
                            <p class="text-xs lg:text-sm text-gray-500">{{ item.location }}</p>
                        </div>
                        <p class="text-xs md:text-sm lg:text-base line-clamp-1 text-gray-600" v-html="item.content"></p>
                    </div>

                    <Button :text="langStore.t('common.contact_us')" @click.stop="sendWhatsApp(item.title, item.contact)" />
                </div>
            </div>
        </div>
    </section>
</template>