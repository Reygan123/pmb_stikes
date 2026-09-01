<script setup lang="ts">
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import { ref } from 'vue';

const faqData = [
    {
        category: "FAQ Pendaftaran & Akademik Universitas BTH",
        items: [
            {
                id: 1,
                question: "Program Studi Apa Saja yang Tersedia di Universitas BTH?",
                answer: "Universitas BTH memiliki tiga fakultas utama: Fakultas Ilmu Kesehatan, Fakultas Farmasi, serta Fakultas Teknologi dan Bisnis, dengan beragam program studi unggulan yang relevan dengan kebutuhan masa kini."
            },
            {
                id: 2,
                question: "Apakah Program Studi di Universitas BTH Sudah Terakreditasi?",
                answer: "Seluruh program studi Universitas BTH telah terakreditasi oleh BAN-PT sebagai jaminan mutu pendidikan."
            },
            {
                id: 3,
                question: "Seperti Apa Model Pembelajaran di Universitas BTH?",
                answer: "Pembelajaran dirancang berbasis project, mengombinasikan teori di kelas, praktik laboratorium, serta pengalaman kerja lapangan secara langsung."
            },
            {
                id: 4,
                question: "Apa Keunggulan Kurikulum Universitas BTH?",
                answer: "Kurikulum disusun selaras dengan kebutuhan industri terkini, menekankan penguasaan keterampilan praktis sekaligus pengembangan soft skills."
            }
        ]
    },
    {
        category: "Biaya Kuliah & Beasiswa",
        items: [
            {
                id: 1,
                question: "Berapa Biaya Kuliah di Universitas BTH?",
                answer: "Biaya kuliah per semester disesuaikan dengan program studi, mulai dari Rp4.500.000 hingga Rp8.000.000."
            },
            {
                id: 2,
                question: "Apakah Universitas BTH Menyediakan Program Beasiswa?",
                answer: "Tersedia beragam program beasiswa, mulai dari beasiswa prestasi akademik, jalur olahraga, hingga beasiswa dari mitra industri sebagai dukungan bagi mahasiswa berprestasi."
            }
        ]
    },
    {
        category: "Informasi Umum",
        items: [
            {
                id: 1,
                question: "Di Mana Lokasi Kampus Universitas BTH?",
                answer: "Universitas BTH berlokasi di Jl. Letjen Mashudi No.20, Setiaratu, Kec. Cibeureum, Kab. Tasikmalaya, Jawa Barat 46196"
            },
            {
                id: 2,
                question: "Apakah Universitas BTH Menyediakan Asrama Mahasiswa?",
                answer: "Tersedia asrama mahasiswa berkapasitas hingga 500 orang, dilengkapi fasilitas internet, kantin, serta ruang belajar bersama untuk mendukung kenyamanan dan aktivitas akademik."
            }
        ]
    },
    {
        category: "Pendaftaran Mahasiswa Baru",
        items: [
            {
                id: 1,
                question: "Kapan Jadwal Pendaftaran Mahasiswa Baru Dibuka?",
                answer: "Pendaftaran mahasiswa baru Universitas BTH dibuka dalam tiga gelombang setiap tahun, yaitu Januari, April, dan Juli."
            },
            {
                id: 2,
                question: "Bagaimana Cara Mendaftar di Universitas BTH?",
                answer: "Pendaftaran dapat dilakukan secara online melalui website resmi atau langsung datang ke kampus untuk pendampingan langsung dari Tim PMB."
            }
        ]
    }
];

const activeCategory = ref(faqData[0].category);
const activeItems = ref(faqData[0].items);
const activeItemId = ref(faqData[0].items[0].id);

const setActiveCategory = (category: string) => {
  activeCategory.value = category;
  const selectedCategory = faqData.find(item => item.category === category);
  if (selectedCategory) {
    activeItems.value = selectedCategory.items;
    activeItemId.value = selectedCategory.items[0].id;
  }
};

const setActiveItem = (itemId: number) => {
  activeItemId.value = itemId;
};
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        <div class="w-full md:w-[40%] flex flex-col justify-center items-start gap-4 border-r border-netral/30">
            <Tag title="Faq" />
            <Title title="Pertanyaan yang Sering Diajukan" />
            <div class="w-full md:w-[80%] space-y-3">
                <div 
                    v-for="item in faqData" 
                    :key="item.category"
                    @click="setActiveCategory(item.category)"
                    class="py-3 px-4 rounded-2xl border border-netral/30 group transition-all duration-500 flex gap-2 items-center cursor-pointer"
                    :class="{
                        'bg-primary text-white': activeCategory === item.category,
                        'hover:bg-primary hover:text-white': activeCategory !== item.category
                    }"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                            d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
                            :stroke="activeCategory === item.category ? 'white' : 'currentColor'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M7.20055 6.72754L5.33305 8.59504C5.11555 8.81254 5.11555 9.18004 5.33305 9.39754L7.20055 11.265"
                            :stroke="activeCategory === item.category ? 'white' : 'currentColor'" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M10.8008 6.72754L12.668 8.59504C12.8858 8.81254 12.8858 9.18004 12.6683 9.39754L10.8008 11.265"
                            :stroke="activeCategory === item.category ? 'white' : 'currentColor'" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <h4 class="text-base lg:text-base">{{ item.category }}</h4>
                </div>
            </div>
        </div>

        <div class="w-full md:w-[60%] flex flex-col justify-center items-center gap-4">
            <div 
                v-for="(item, index) in activeItems" 
                :key="item.id"
                @click="setActiveItem(item.id)"
                class="w-full py-6 md:px-10 flex items-start gap-6 transition-all duration-300 cursor-pointer overflow-hidden"
                :class="{
                    'bg-[#F8F8F8] rounded-3xl': activeItemId === item.id,
                    'border-b border-netral/30': index !== activeItems.length - 1
                }"
            >
                <div class="w-7 h-7 py-1 px-2 text-white bg-primary flex justify-center items-center rounded-full shrink-0">
                    <p class="text-base">{{ index + 1 }}</p>
                </div>
                <div class="w-fit space-y-3">
                    <h5 class="text-base md:text-base lg:text-lg font-medium">{{ item.question }}</h5>
                    
                    <div 
                        class="answer-container transition-all duration-500 ease-in-out overflow-hidden"
                        :class="{
                            'max-h-40 opacity-100': activeItemId === item.id,
                            'max-h-0 opacity-0': activeItemId !== item.id
                        }"
                    >
                        <p class="text-xs lg:text-sm text-black/60 md:text-black/40 transition-all duration-300">{{ item.answer }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.answer-container {
  transition: max-height 0.5s ease-in-out, opacity 0.3s ease-in-out;
}
</style>