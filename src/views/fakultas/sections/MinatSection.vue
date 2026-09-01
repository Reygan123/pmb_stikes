<script setup lang="ts">
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';

const data = [
  {
    title: "Fakultas Farmasi",
    description: "Mencetak Talenta Digital Yang Tidak Hanya Mahir Dalam Teknologi, Tetapi Juga Siap Menjadi Entrepreneur Dan Pemimpin Di Era Industri 4.0.",
    image: "https://picsum.photos/200/300?random=1",
  },
  {
    title: "Fakultas Teknologi Dan Bisnis",
    description:
      "Mencetak Talenta Digital Yang Tidak Hanya Mahir Dalam Teknologi, Tetapi Juga Siap Menjadi Entrepreneur Dan Pemimpin Di Era Industri 4.0.",
    image: "https://picsum.photos/200/300?random=1",
  },
  {
    title: "Fakultas Keperawatan",
    description: "Mencetak Talenta Digital Yang Tidak Hanya Mahir Dalam Teknologi, Tetapi Juga Siap Menjadi Entrepreneur Dan Pemimpin Di Era Industri 4.0.",
    image: "https://picsum.photos/200/300?random=1",
  },
];

</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-16">
        <div class="w-full flex flex-col justify-center items-center text-center gap-4">
            <Tag title="Fakultas" />
            <Title title="Pilih Minat, Tentukan Masa Depan" />
            <Subtitle text="Setiap fakultas dan program studi di Universitas BTH dirancang untuk mengubah passion Anda<br/> menjadi sebuah kompetensi profesional yang siap bersaing di dunia kerja."/>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div v-for="(item, index) in data" :key="index"
                class="w-full h-[32vh] md:h-[35vh] lg:h-[50vh] xl:h-[50vh] flex flex-col group relative">
                <div
                    class="relative bottom-0 z-10 w-full h-1/2 bg-white text-black rounded-[4px] md:rounded-[8px] lg:rounded-[16px] p-4  space-y-2 lg:space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-1/2 group-hover:translate-y-0 top-4">
                    <h3 class="font-light font-sora text-[16px] md:text-[18px] xl:text-[24px]">{{ item.title }}</h3>
                    <p class="text-[12px] md:text-[14px] xl:text-[16px] text-black/50">{{ item.description }}</p>
                </div>
                <div
                    class="absolute bottom-0 w-full transition-all duration-500 ease-in-out h-full group-hover:h-1/2 z-20">
                    <img :src="item.image" :alt="item.title" loading="lazy"
                        class="w-full h-full object-cover rounded-[16px] transition-all duration-500 ease-in-out transform scale-100">
                </div>

                <div
                    class="absolute top-4 right-4 opacity-100 group-hover:top-1/2 group-hover:opacity-0 transition-all duration-500 z-30 w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6l6 6-6 6" />
                    </svg>
                </div>

                <div
                    class="absolute bottom-4 left-4 right-4 opacity-100 group-hover:opacity-0 transition-all duration-500 z-30">
                    <h3 class="font-sora text-[16px] md:text-[18px] xl:text-[24px] text-white font-semibold">{{
                        item.title }}</h3>
                </div>
            </div>
        </div>
    </section>
</template>