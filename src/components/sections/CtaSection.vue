<script setup lang="ts">
import Maskot from '@/assets/logo/maskot-bth.webp'
import Button from '../ui/Button.vue'
import { useIdentityStore } from '@/stores/identity';
import { onMounted } from 'vue';

const identityStore = useIdentityStore()

onMounted(() => {
    identityStore.fetchIdentity()
})

const handleWhatsApp = () => {
    if (identityStore.identity[0]?.phone) {
        const message = encodeURIComponent(
            "Halo, saya tertarik dengan program di Universitas BTH dan ingin mengetahui informasi lebih lanjut tentang jalur pendaftaran yang tersedia. Bisakah Anda membantu saya?"
        );
        window.location.href = `https://api.whatsapp.com/send?phone=${identityStore.identity[0]?.phone}&text=${message}`;
    } else {
        alert("Nomor WhatsApp admin tidak tersedia.");
    }
};
</script>

<template>
    <section class="py-8 md:px-16 md:py-12 lg:px-24 lg:py-16 w-full overflow-hidden">
        <div class="flex flex-col items-center relative">
            <div>
                <img :src="Maskot" alt="Maskot BTH University" loading="lazy"
                    class="w-64 h-64 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] object-contain">
            </div>

            <div class="px-4 flex flex-col items-center gap-6 md:gap-10 lg:gap-12">
                <div class="space-y-4 md:space-y-5 lg:space-y-6 text-center">
                    <h2 data-aos="fade-up-sm" data-aos-duration="1000"
                        class="text-[28px] md:text-[42px] lg:text-[52px] xl:text-[64px] font-medium leading-tight">
                        <span class="text-lg md:text-xl lg:text-2xl font-medium">Universitas BTH</span>
                        <br />
                        Transforming New
                        <br /> Generation
                    </h2>
                    <p class="lg:text-lg">Jangan ragu untuk mengambil langkah pertama menuju pendidikan tinggi yang berkualitas.<br/> Tim admisi Universitas BTH siap membantu proses pendaftaran dari awal hingga selesai.</p>
                </div>
                <div class="flex item-center gap-6">
                    <Button onclick="window.open('http://pendaftaran.universitas-bth.ac.id/', '_blank')"
                        :text="'Daftar Sekarang'" />
                    <Button @click="handleWhatsApp" border="border-1" border-color="border-[#0000001F]"
                        bg-color="bg-white" text-color="text-[#5B616D]" text="Hubungi Kami" class="shadow-sm" />
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