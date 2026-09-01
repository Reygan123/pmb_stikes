<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import Biaya from '@/assets/files/bkt bth.pdf'
import BiayaGizi from '@/assets/files/Balasan penetapan biaya kuliah prodi Gizi.pdf'
import BiayaKosmetik from '@/assets/files/Biaya Kuliah Prodi S1 Rekayasa Kosmetik.pdf'
</script>

<template>
    <section
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col justify-center items-center text-center gap-4 lg:gap-6">
        <h1 data-aos="fade-up-sm" data-aos-duration="1000"
            class="text-2xl md:text-4xl lg:text-[44px] xl:text-[56px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-gstart to-gend">
            Biaya Kuliah Universitas BTH
        </h1>
        <Subtitle color="text-netral md:text-gstart"
            text="Biaya terjangkau dengan kualitas pendidikan terbaik. <br/> Wujudkan impianmu bersama Universitas BTH!" />

        <div class="flex items-center gap-6">
<a :href="Biaya" download="Biaya Kuliah Universitas BTH.pdf">
            <Button text="Download Biaya Kuliah" />
        </a>

        <a :href="BiayaGizi" download="Balasan penetapan biaya kuliah prodi Gizi.pdf">
            <Button text="Download Biaya Prodi Gizi" />
        </a>

        <a :href="BiayaKosmetik" download="Biaya Kuliah Prodi S1 Rekayasa Kosmetik.pdf">
            <Button text="Download Biaya Prodi Kosmetik" />
        </a>
        </div>

        <div>
            <div class="scrolldown">
                <div class="chevrons">
                    <div class="chevrondown"></div>
                    <div class="chevrondown"></div>
                </div>
            </div>
        </div>
    </section>
</template>