<script setup lang="ts">
import Maskot from '@/assets/vector/maskot-bantuan.webp'
import Button from '@/components/ui/Button.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
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
    <section
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col md:flex-row justify-center items-center text-center gap-4 lg:gap-6">
        <div class="w-fit">
            <img :src="Maskot" alt="Maskot BTH"
                class="w-64 h-64 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] object-contain">
        </div>
        <div class="w-fit flex flex-col items-center md:items-start space-y-6">
            <div class="space-y-2 flex flex-col items-center md:items-start">
                <Tag title="Bantuan"/>
                <Title title="Butuh Bantuan?"/>
                <Subtitle text="Tim PMB kami selalu siap membantu jika kamu menemukan kendala" />
            </div>
            <Button @click="handleWhatsApp" text="Tanya Admin" />
        </div>
    </section>
</template>