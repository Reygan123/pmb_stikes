<script setup lang="ts">
import Logo from '@/assets/logo/logo.png'
import Button from '../ui/Button.vue'
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();
</script>

<template>
    <section class="py-8 md:px-16 md:py-12 lg:px-24 lg:py-16 w-full overflow-hidden">
        <div class="flex flex-col items-center relative py-8 md:py-12 lg:py-16">
            <div class="mb-4">
                <img :src="Logo" alt="Logo STIKes Budi Luhur Cimahi" width="176" height="176" loading="lazy"
                    class="w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 object-contain drop-shadow-md">
            </div>

            <div class="px-4 flex flex-col items-center gap-6 md:gap-10 lg:gap-12 relative z-10 max-w-4xl mx-auto">
                <div class="space-y-4 md:space-y-5 lg:space-y-6 text-center">
                    <h2 data-aos="fade-up-sm" data-aos-duration="1000"
                        class="text-[28px] md:text-[42px] lg:text-[52px] xl:text-[64px] font-medium leading-tight">
                        <span class="text-lg md:text-xl lg:text-2xl font-medium">STIKes Budi Luhur Cimahi</span>
                        <br />
                        {{ langStore.loc('Unggul, Mandiri, dan', 'Excellence, Independence, and') }}
                        <br /> {{ langStore.loc('Berkarakter', 'Character-Driven') }}
                    </h2>
                    <p class="lg:text-lg">
                        {{ langStore.loc(
                            'Jangan ragu untuk mengambil langkah pertama menuju pendidikan kesehatan yang berkualitas. Tim admisi STIKes Budi Luhur Cimahi siap membantu proses pendaftaran dari awal hingga selesai.',
                            'Do not hesitate to take the first step towards quality healthcare education. The STIKes Budi Luhur Cimahi admission team is ready to guide you from start to finish.'
                        ) }}
                    </p>
                </div>
                <div class="flex item-center gap-6">
                    <Button :text="langStore.t('cta.register')" />
                    <Button border="border-1" border-color="border-[#0000001F]"
                        bg-color="bg-white" text-color="text-[#5B616D]" :text="langStore.t('common.contact_us')" class="shadow-sm" />
                </div>
            </div>

            <div
                class="absolute w-[160%] md:w-full h-[80%] md:h-[80%] lg:h-[80%] xl:h-[92%] bottom-0 lg:bottom-8 xl:bottom-0 bg-primary -z-20 rounded-t-full">
            </div>
            <div
                class="absolute w-full h-3/12 md:h-2/5 bottom-0 -z-10 bg-gradient-to-t from-white via-white/45 to-transparent">
            </div>
            <div class="absolute w-full h-[15%] bottom-0 bg-gradient-to-t from-white via-white to-transparent -z-10">
            </div>
        </div>
        <div>

        </div>
    </section>
</template>