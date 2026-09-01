<script setup lang="ts">
import Button from '../ui/Button.vue';
import Subtitle from '../ui/Subtitle.vue';
import Title from '../ui/Title.vue';
import Image1 from '@/assets/img/gedung.webp'
import Image2 from '@/assets/img/bsc.webp'
import Banner from '@/assets/img/gel_2.webp'
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
        <div data-aos="fade-up-sm" data-aos-duration="1000"
            class="w-full text-center space-y-2 lg:space-y-4 hidden md:block">
            <h2 class="text-xl md:text-2xl lg:text-4xl xl:text-[44px] font-medium inline-flex gap-2 lg:gap-4">Institusi
                pendidikan tinggi
                <span>
                    <div class="w-20 h-12 lg:w-36 lg:h-14 rounded-full relative overflow-hidden"><img
                            :src="Image1"
                            alt="Gedung BTH" class="w-full h-full object-cover object-center"></div>
                </span>yang
            </h2>

            <h2 class="text-xl md:text-2xl lg:text-4xl xl:text-[44px] font-medium inline-flex gap-2 lg:gap-4">
                berdedikasi
                <span>
                    <div class="w-20 h-12 lg:w-36 lg:h-14 rounded-full relative overflow-hidden"><img
                            :src="Image2"
                            alt="BSC" class="w-full h-full object-cover object-center"></div>
                </span>menghasilkan lulusan unggul.
            </h2>

            <Subtitle text="Mentransformasi generasi baru menjadi lulusan yang kreatif, inovatif, dan berkarakter" />
        </div>

        <div class="space-y-2 text-center md:hidden">
            <Title title="Institusi pendidikan tinggi yang berdedikasi menghasilkan lulusan unggul." />
            <Subtitle text="Mentransformasi generasi baru menjadi lulusan yang kreatif, inovatif, dan berkarakter" />
        </div>

        <div class="w-full h-fit rounded-2xl md:rounded-4xl relative overflow-hidden">
            <div class="w-full h-fit">
                <img :src="Banner"
                    alt="Brosur" loading="lazy" class="w-full h-full object-cover object-left md:object-cover">
            </div>

            <div class="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

            <div
                class="absolute bottom-3 left-3 md:bottom-8 md:left-8 xl:bottom-16 xl:left-16 z-20 space-y-4 md:space-y-6">
                <!-- <div class="max-w-lg lg:max-w-xl space-y-1 md:space-y-2 lg:space-y-3 text-white">
                    <h3 class="text-base md:text-xl lg:text-2xl xl:text-[26px] font-medium">PENDAFTARAN MAHASISWA BARU
                        DIBUKA</h3>
                    <p class="text-xs md:text-base xl:text-lg">Manfaatkan Opsi Pendaftaran GRATIS & Layanan Cepat One
                        Day
                        Service untuk Tahun Ajaran 2026/2027.</p>
                </div> -->
                <Button onclick="window.open('http://pendaftaran.universitas-bth.ac.id/', '_blank')"
                    border="border-1" border-color="border-white" :text="'Daftar Sekarang'" />
            </div>
        </div>
    </section>
</template>