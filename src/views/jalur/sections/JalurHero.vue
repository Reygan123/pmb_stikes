<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import type { Identity } from '@/core/types/identity';

const props = defineProps<{
    identity: Identity[]
}>()

const handleWhatsApp = () => {
  if (props.identity[0]?.phone) {
    const message = encodeURIComponent(
      "Halo, saya tertarik dengan program di Universitas BTH dan ingin mengetahui informasi lebih lanjut tentang jalur pendaftaran yang tersedia. Bisakah Anda membantu saya?"
    );
    window.location.href = `https://api.whatsapp.com/send?phone=${props.identity[0]?.phone}&text=${message}`;
  } else {
    alert("Nomor WhatsApp admin tidak tersedia.");
  }
};
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-16">
        <div class="flex flex-col justify-center items-center text-center gap-6">
            <h1 data-aos="fade-up-sm" data-aos-duration="1000"
                class="text-2xl md:text-4xl lg:text-[44px] xl:text-[56px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-gstart to-gend">
                Temukan Jalur Pendaftaran
                <br /> Terbaik untukmu
            </h1>
            <Subtitle
                text="Tersedia lebih dari 10 jalur pendaftaran, mencakup jalur prestasi, beasiswa, dan reguler, sebagai komitmen Universitas BTH dalam membuka peluang seluas-luasnya bagi talenta terbaik untuk bergabung dan berkembang." />
            <div class="w-full flex justify-center items-center gap-3">
                <Button @click="handleWhatsApp" border="border-1" border-color="border-[#0000001F]" bg-color="bg-white"
                    text-color="text-[#5B616D]" text="Hubungi Kami" class="shadow-sm" />
                <Button onclick="window.open('http://pendaftaran.universitas-bth.ac.id/', '_blank')" :text="'Daftar Sekarang'" />
            </div>
        </div>
    </section>
</template>