<script setup lang="ts">
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import type { StatPrestasi } from '@/core/types/statPrestasi';
import Image from '@/assets/img/prestasi.webp'

defineProps<{
    statprestasi: StatPrestasi[],
    loading: boolean,
    error: string | null
}>();
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        <div class="w-full lg:w-[45%] space-y-8">
            <div class="flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-left gap-4 md:gap-6">
                <Tag title="Prestasi" />
                <Title title="Capaian Unggulan <br/> Universitas BTH" />
                <Subtitle
                    text="Kami bangga mempersembahkan pencapaian gemilang Universitas BTH, hasil kerja keras, dedikasi, dan semangat keluarga besar kami untuk selalu menjadi yang terbaik." />
            </div>

            <div class="w-full grid grid-cols-3 gap-6 md:gap-10 lg:gap-14">
                <div class="space-y-2 lg:space-y-4 text-center">
                    <h3 class="text-[32px] text-primary font-medium">{{ statprestasi[0]?.prestasis_count }}</h3>
                    <p class="text-sm md:text-base lg:text-lg">{{ statprestasi[0]?.name }}</p>
                </div>
                <div class="space-y-2 lg:space-y-4 text-center">
                    <h3 class="text-[32px] text-primary font-medium">{{ statprestasi[1]?.prestasis_count }}</h3>
                    <p class="text-sm md:text-base lg:text-lg">{{ statprestasi[1]?.name }}</p>
                </div>
                <div class="space-y-2 lg:space-y-4 text-center">
                    <h3 class="text-[32px] text-primary font-medium">{{ statprestasi[2]?.prestasis_count }}</h3>
                    <p class="text-sm md:text-base lg:text-lg">{{ statprestasi[2]?.name }}</p>
                </div>
            </div>
        </div>

        <div class="w-full lg:w-[55%] h-[50vh] md:h-[60vh] lg:h-[70vh] rounded-4xl overflow-hidden">
            <img :src="Image" alt="Prestasi Hero" loading="lazy" class="w-full h-full object-contain">
        </div>
    </section>
</template>