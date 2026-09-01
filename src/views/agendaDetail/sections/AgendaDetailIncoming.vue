<script setup lang="ts">
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import type { Agenda } from '@/core/types/agenda';

defineProps<{
    agenda: Agenda[]
}>()
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 lg:gap-16">
        <div class="space-y-3">
            <Tag title="Agenda Mendatang" />
            <Title :title="agenda[0]?.title" />
        </div>

        <div class="w-full flex flex-col justify-center items-center lg:w-fit gap-6">
            <div class="text-center">
                <h4 class="text-xl lg:text-2xl text-[32px] text-gstart font-medium">{{ agenda[0]?.start_date }}</h4>
            </div>
            <div class="space-y-4">
                <div class="py-4 px-6 rounded-4xl border border-primary grid grid-cols-4">
                    <div class="px-4 border-r border-primary text-center">
                        <h5 class="text-xl lg:text-2xl text-[32px] font-bold">42</h5>
                        <p class="text-base">Hari</p>
                    </div>
                    <div class="px-4 border-r border-primary text-center">
                        <h5 class="text-xl lg:text-2xl text-[32px] font-bold">42</h5>
                        <p class="text-base">Jam</p>
                    </div>
                    <div class="px-4 border-r border-primary text-center">
                        <h5 class="text-xl lg:text-2xl text-[32px] font-bold">42</h5>
                        <p class="text-base">Menit</p>
                    </div>
                    <div class="px-4 text-center">
                        <h5 class="text-xl lg:text-2xl text-[32px] font-bold">42</h5>
                        <p class="text-base">Detik</p>
                    </div>
                </div>
                <!-- <div class="w-fit py-2 px-4 bg-primary rounded-full mx-auto">
                    <p class="text-white font-medium">64 Kuota</p>
                </div> -->
            </div>
        </div>
    </section>
</template>