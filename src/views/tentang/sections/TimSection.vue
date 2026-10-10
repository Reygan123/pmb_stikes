<script setup lang="ts">
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import TimCard from '../components/TimCard.vue';
import { getImageUrl } from '@/utils/imageUtils';
import { useLanguageStore } from '@/stores/language';
import { computed } from 'vue';

const langStore = useLanguageStore();

const data = computed(() => {
    const isEn = langStore.currentLang === 'en';
    return [
        {
            "id": 1,
            "id_departement": 4,
            "name": "Prof. Dr. Ruswanto, M.Si.",
            "title": isEn ? "HEAD OF INSTITUTION (KETUA)" : "KETUA STIKES",
            "email": "Ruswanto@example.com",
            "phone": "62811960193",
            "image": getImageUrl("ourteam-image/b5l74Hk5tJl9LKs8I6FlP37WD8P48JJWCY1RlvSF.jpg"),
            "yt": "@stikesbudiluhurcimahi"
        },
        {
            "id": 2,
            "id_departement": 1,
            "name": "Dr. Umy Mardiana Ramdan, M.Si.",
            "title": isEn ? "VICE HEAD I (ACADEMIC AFFAIRS)" : "WAKIL KETUA I BIDANG AKADEMIK",
            "email": "Umy@example.com",
            "phone": "62811960193",
            "image": getImageUrl("ourteam-image/gecyuote9CH7oYsw9E4gNYGMbY5XAW1Nexr9knlD.jpg"),
            "yt": "@stikesbudiluhurcimahi"
        },
        {
            "id": 3,
            "id_departement": 1,
            "name": "Diana Sri Zustika, M.Si",
            "title": isEn ? "VICE HEAD II (FINANCE & ADMIN)" : "WAKIL KETUA II BIDANG KEUANGAN & UMUM",
            "email": "Diana@gmail.com",
            "phone": "081234567890",
            "image": getImageUrl("ourteam-image/GFz7srb5dsvwtlE0vaW2pYzz2LuNalsB9cJ38K6S.jpg"),
            "yt": "@stikesbudiluhurcimahi"
        },
        {
            "id": 4,
            "id_departement": 1,
            "name": "Dr.Ns.Wawan Rismawan, S.kep,M.Sc",
            "title": isEn ? "VICE HEAD III (STUDENT & PARTNERSHIPS)" : "WAKIL KETUA III BIDANG KEMAHASISWAAN & KERJASAMA",
            "email": "Wawan@gmail.com",
            "phone": "081298765432",
            "image": getImageUrl("ourteam-image/6tK7YHKhki7q4ZsjNIosITniq0eUWh0Fwo49wkrq.jpg"),
            "yt": "@stikesbudiluhurcimahi"
        }
    ];
});
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div class="w-full flex flex-col justify-center items-center gap-4">
            <Tag :title="langStore.currentLang === 'en' ? 'Institutional Leadership' : 'Pimpinan Institusi'" />
            <Title :title="langStore.currentLang === 'en' ? 'Board of Leadership' : 'Pimpinan Institusi'" />
            <Subtitle class="text-center"
                :text="langStore.currentLang === 'en' 
                    ? 'Meet the executive leadership of STIKes Budi Luhur Cimahi dedicated to steering, advancing, and ensuring academic excellence.' 
                    : 'Mengenal jajaran pimpinan STIKes Budi Luhur Cimahi yang berdedikasi dalam mengelola, memajukan, dan menjaga mutu institusi.'" />
        </div>

        <div class="w-full flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            <div class="w-full md:w-[35%] hidden md:block">
                <Title :title="langStore.currentLang === 'en' ? 'Leadership <br/> STIKes Budi Luhur' : 'Pimpinan <br/> STIKes Budi Luhur'" />
            </div>
            <div class="w-full md:w-[65%] grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
                <div v-for="item in data" :key="item.id">
                    <TimCard :name="item.name" :role="item.title" :image="item.image"
                        :linked-in="item.yt" />
                </div>
            </div>
        </div>
    </section>
</template>