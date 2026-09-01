<script setup lang="ts">
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import TimCard from '../components/TimCard.vue';

const data = [
    {
        "id": 1,
        "id_departement": 4,
        "name": "Prof. Dr. Ruswanto, M.Si.",
        "title": "REKTOR",
        "email": "Ruswanto@example.com",
        "phone": "62811960193",
        "ig": "@BTH",
        "fb": "@BTH",
        "yt": "@BTH",
        "tiktok": "@BTH",
        "image": "https://cms-pmb.universitas-bth.ac.id/storage/ourteams/MfYDIQmFtbTzJjuNq7zw79F1fYm1NPqHKjE7Sqp5.png",
        "home": "1",
        "created_at": "2025-05-07T05:17:12.000000Z",
        "updated_at": "2025-09-27T07:17:52.000000Z"
    },
    {
        "id": 2,
        "id_departement": 1,
        "name": "Dr. Umy Mardiana Ramdan, M.Si.",
        "title": "WAKIL REKTOR BIDANG AKADEMIK DAN KEMAHASISWAAN",
        "email": "Umy@example.com",
        "phone": "62811960193",
        "ig": "@BTH",
        "fb": "@BTH",
        "yt": "@BTH",
        "tiktok": "@BTH",
        "image": "https://cms-pmb.universitas-bth.ac.id/storage/ourteams/hERvUvIQa3nl8jxvMNuXjGKlT9mzwsouRxbx8QhC.png",
        "home": "1",
        "created_at": "2025-05-07T06:07:14.000000Z",
        "updated_at": "2025-09-27T07:18:15.000000Z"
    },
    {
        "id": 3,
        "id_departement": 1,
        "name": "Diana Sri Zustika, M.Si",
        "title": "WAKIL REKTOR BIDANG KEUANGAN DAN UMUM",
        "email": "Diana@gmail.com",
        "phone": "081234567890",
        "ig": "@BTH",
        "fb": "@BTH",
        "yt": "@BTH",
        "tiktok": "@BTH",
        "image": "https://cms-pmb.universitas-bth.ac.id/storage/ourteams/AMwRmZ2JRLRfOkdWj0l3F7rUq41pBfc68bfDTpWp.png",
        "home": "1",
        "created_at": "2025-05-08T09:25:12.000000Z",
        "updated_at": "2025-09-27T07:18:31.000000Z"
    },
    {
        "id": 4,
        "id_departement": 1,
        "name": "Dr.Ns.Wawan Rismawan, S.kep,M.Sc",
        "title": "WAKIL REKTOR BIDANG SDM DAN KERJA SAMA",
        "email": "Wawan@gmail.com",
        "phone": "081298765432",
        "ig": "@BTH",
        "fb": "@BTH",
        "yt": "@BTH",
        "tiktok": "@BTH",
        "image": "https://cms-pmb.universitas-bth.ac.id/storage/ourteams/Ydy9SzwxjDjtdjlzGmQws0Een4SNbfIpJAmZxVUA.png",
        "home": "1",
        "created_at": "2025-05-08T09:26:11.000000Z",
        "updated_at": "2025-09-27T07:18:42.000000Z"
    }
]
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div class="w-full flex flex-col justify-center items-center gap-4">
            <Tag title="Team Leader" />
            <Title title="Pimpinan Universitas" />
            <Subtitle class="text-center"
                text="Mengenal jajaran pimpinan Universitas Bakti Tunas Husada yang berdedikasi dalam <br/> mengelola, memajukan, dan menjaga mutu institusi.s" />
        </div>

        <div class="w-full flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            <div class="w-full md:w-[35%] hidden md:block">
                <Title title="Pimpinan <br/> Universitas BTH" />
            </div>
            <div class="w-full md:w-[65%] grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div v-for="item in data">
                    <TimCard :name="item.name" :role="item.title" :image="item.image"
                        :linked-in="item.yt" />
                </div>
            </div>
        </div>
    </section>
</template>