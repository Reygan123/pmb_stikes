<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import type { Identity } from '@/core/types/identity';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

const props = defineProps<{
    identity: Identity[]
}>()

const handleWhatsApp = () => {
  const phone = props.identity?.[0]?.phone || '6281221223456';
  const message = langStore.currentLang === 'en'
    ? encodeURIComponent("Hello, I am interested in STIKes Budi Luhur Cimahi admission tracks. Could you please provide further details?")
    : encodeURIComponent("Halo, saya tertarik dengan program di STIKes Budi Luhur Cimahi dan ingin mengetahui informasi lebih lanjut tentang jalur pendaftaran yang tersedia. Bisakah Anda membantu saya?");
  window.location.href = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
};
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-16">
        <div class="flex flex-col justify-center items-center text-center gap-6">
            <h1 data-aos="fade-up-sm" data-aos-duration="1000"
                class="text-2xl md:text-4xl lg:text-[44px] xl:text-[56px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-gstart to-gend">
                {{ langStore.currentLang === 'en' ? 'Find the Ideal Admission Track' : 'Temukan Jalur Pendaftaran' }}
                <br /> {{ langStore.currentLang === 'en' ? 'for Your Future' : 'Terbaik untukmu' }}
            </h1>
            <Subtitle
                :text="langStore.currentLang === 'en'
                    ? 'Explore diverse admission pathways including Regular, Merit-based, and Scholarships, demonstrating STIKes Budi Luhur Cimahi commitment to welcoming promising healthcare professionals.'
                    : 'Tersedia berbagai pilihan jalur pendaftaran, mencakup jalur reguler, PMDK, dan beasiswa, sebagai komitmen STIKes Budi Luhur Cimahi dalam membuka peluang seluas-luasnya bagi calon tenaga kesehatan.'" />
            <div class="w-full flex justify-center items-center gap-3">
                <Button @click="handleWhatsApp" border="border-1" border-color="border-[#0000001F]" bg-color="bg-white"
                    text-color="text-[#5B616D]" :text="langStore.t('common.contact_us')" class="shadow-sm" />
                <Button onclick="window.open('https://stikesbudiluhurcimahi.ac.id/', '_blank')" :text="langStore.t('hero.cta_register')" />
            </div>
        </div>
    </section>
</template>