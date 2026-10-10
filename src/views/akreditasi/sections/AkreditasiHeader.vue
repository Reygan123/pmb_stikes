<script setup lang="ts">
import Subtitle from '@/components/ui/Subtitle.vue';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col justify-center items-center text-center gap-4 lg:gap-6">
        <h1 data-aos="fade-up-sm" data-aos-duration="1000" class="text-2xl md:text-4xl lg:text-[44px] xl:text-[56px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-gstart to-gend">
            {{ langStore.currentLang === 'en' ? 'Quality Assurance &' : 'Jaminan Kualitas &' }}
            <br /> {{ langStore.currentLang === 'en' ? 'Educational Excellence' : 'Pendidikan Unggul' }}
        </h1>
        <Subtitle color="text-netral md:text-gstart"
            :text="langStore.currentLang === 'en'
                ? 'STIKes Budi Luhur Cimahi is dedicated to the highest standards of healthcare education, affirmed through official accreditations by BAN-PT and LAM-PTKes.'
                : 'STIKes Budi Luhur Cimahi berkomitmen pada standar mutu pendidikan kesehatan tertinggi, terbukti dengan status akreditasi resmi dari BAN-PT dan LAM-PTKes.'" />
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

<style scoped>
.scrolldown {
    --color: #005EB8;
    --sizeX: 30px;
    --sizeY: 50px;
    position: relative;
    width: var(--sizeX);
    height: var(--sizeY);
    margin-left: var(sizeX / 2);
    border: calc(var(--sizeX) / 10) solid var(--color);
    border-radius: 50px;
    box-sizing: border-box;
    margin-bottom: 16px;
    cursor: pointer;
}

.scrolldown::before {
    content: "";
    position: absolute;
    bottom: 30px;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: var(--color);
    border-radius: 100%;
    animation: scrolldown-anim 2s infinite;
    box-sizing: border-box;
}

@keyframes scrolldown-anim {
    0% {
        opacity: 0;
        height: 6px;
    }
    40% {
        opacity: 1;
        height: 10px;
    }
    80% {
        transform: translate(0, 20px);
        height: 10px;
        opacity: 0;
    }
    100% {
        height: 3px;
        opacity: 0;
    }
}

.chevrons {
    padding: 6px 0 0 0;
    margin-left: -3px;
    margin-top: 48px;
    width: 30px;
    text-align: center;
}

.chevrondown {
    margin-top: -6px;
    position: relative;
    border: solid var(--color);
    border-width: 0 3px 3px 0;
    display: inline-block;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
}
</style>