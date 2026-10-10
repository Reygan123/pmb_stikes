<script setup lang="ts">
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import { ref, computed, watch } from 'vue';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

const faqData = computed(() => [
    {
        idCategory: 'academic',
        category: langStore.currentLang === 'en' ? 'Admission & Academic Programs' : 'Pendaftaran & Akademik',
        items: [
            {
                id: 1,
                question: langStore.currentLang === 'en'
                    ? 'What study programs are available at STIKes Budi Luhur Cimahi?'
                    : 'Program Studi Apa Saja yang Tersedia di STIKes Budi Luhur Cimahi?',
                answer: langStore.currentLang === 'en'
                    ? 'STIKes Budi Luhur Cimahi offers leading health science programs: Bachelor of Nursing (S1), Nurse Professional Program, Diploma in Nursing (D3), Bachelor of Midwifery (S1), Diploma in Midwifery (D3), and Midwife Professional Program.'
                    : 'STIKes Budi Luhur Cimahi menyediakan program studi unggulan bidang kesehatan: S1 Keperawatan, Profesi Ners, D3 Keperawatan, S1 Kebidanan, D3 Kebidanan, dan Profesi Bidan.'
            },
            {
                id: 2,
                question: langStore.currentLang === 'en'
                    ? 'Are the study programs at STIKes Budi Luhur Cimahi accredited?'
                    : 'Apakah Program Studi di STIKes Budi Luhur Cimahi Sudah Terakreditasi?',
                answer: langStore.currentLang === 'en'
                    ? 'All academic programs at STIKes Budi Luhur Cimahi are accredited by BAN-PT and LAM-PTKes, guaranteeing high educational quality and standards.'
                    : 'Seluruh program studi di STIKes Budi Luhur Cimahi telah terakreditasi oleh BAN-PT dan LAM-PTKes sebagai jaminan mutu pendidikan kesehatan yang unggul.'
            },
            {
                id: 3,
                question: langStore.currentLang === 'en'
                    ? 'What is the learning model at STIKes Budi Luhur Cimahi?'
                    : 'Seperti Apa Model Pembelajaran di STIKes Budi Luhur Cimahi?',
                answer: langStore.currentLang === 'en'
                    ? 'Learning is competency-based, combining classroom theory, modern laboratory simulations, and direct clinical practice in partner hospitals.'
                    : 'Pembelajaran dirancang berbasis kompetensi kesehatan, mengombinasikan teori di kelas, praktik laboratorium modern, serta praktik klinik langsung di berbagai rumah sakit rekanan.'
            }
        ]
    },
    {
        idCategory: 'tuition',
        category: langStore.currentLang === 'en' ? 'Tuition & Scholarships' : 'Biaya Kuliah & Beasiswa',
        items: [
            {
                id: 4,
                question: langStore.currentLang === 'en'
                    ? 'How much is the tuition fee at STIKes Budi Luhur Cimahi?'
                    : 'Berapa Biaya Kuliah di STIKes Budi Luhur Cimahi?',
                answer: langStore.currentLang === 'en'
                    ? 'Tuition fees are structured according to the chosen study program, with affordable installment plans to support your educational journey.'
                    : 'Biaya kuliah disesuaikan dengan program studi pilihan, dengan kemudahan skema cicilan yang terjangkau untuk menunjang masa depan calon tenaga kesehatan.'
            },
            {
                id: 5,
                question: langStore.currentLang === 'en'
                    ? 'Are there scholarship opportunities available?'
                    : 'Apakah STIKes Budi Luhur Cimahi Menyediakan Program Beasiswa?',
                answer: langStore.currentLang === 'en'
                    ? 'Multiple scholarship opportunities are available, including academic achievement awards, talent scholarships, KIP Kuliah, and foundation partnerships.'
                    : 'Tersedia beragam program beasiswa, mulai dari beasiswa prestasi akademik, beasiswa minat bakat, KIP Kuliah, hingga beasiswa dari yayasan dan mitra institusi.'
            }
        ]
    },
    {
        idCategory: 'general',
        category: langStore.currentLang === 'en' ? 'Campus Location & Facilities' : 'Informasi Umum & Lokasi',
        items: [
            {
                id: 6,
                question: langStore.currentLang === 'en'
                    ? 'Where is STIKes Budi Luhur Cimahi located?'
                    : 'Di Mana Lokasi Kampus STIKes Budi Luhur Cimahi?',
                answer: langStore.currentLang === 'en'
                    ? 'The campus is located at Jl. Kerkof No. 243 Leuwigajah, South Cimahi, Cimahi City, West Java 40532.'
                    : 'STIKes Budi Luhur Cimahi berlokasi di Jl. Kerkof No. 243 Leuwigajah, Kec. Cimahi Selatan, Kota Cimahi, Jawa Barat 40532.'
            },
            {
                id: 7,
                question: langStore.currentLang === 'en'
                    ? 'What support facilities are provided on campus?'
                    : 'Apakah STIKes Budi Luhur Cimahi Menyediakan Fasilitas Pendukung?',
                answer: langStore.currentLang === 'en'
                    ? 'The campus is equipped with integrated nursing and midwifery laboratories, modern library, worship facilities, high-speed internet, and green study environments.'
                    : 'Kampus dilengkapi laboratorium keperawatan dan kebidanan terpadu, perpustakaan, sarana ibadah, koneksi internet, serta lingkungan belajar yang asri dan kondusif.'
            }
        ]
    }
]);

const activeCategoryIndex = ref(0);
const activeItemId = ref(1);

const activeCategory = computed(() => faqData.value[activeCategoryIndex.value] || faqData.value[0]);
const activeItems = computed(() => activeCategory.value.items);

watch(activeCategoryIndex, () => {
    if (activeItems.value.length > 0) {
        activeItemId.value = activeItems.value[0].id;
    }
});

const setActiveCategoryIndex = (index: number) => {
    activeCategoryIndex.value = index;
};

const setActiveItem = (itemId: number) => {
    activeItemId.value = itemId;
};
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        <div class="w-full md:w-[40%] flex flex-col justify-center items-start gap-4 md:border-r border-gray-200 pr-0 md:pr-8">
            <Tag :title="langStore.t('faq.tag')" />
            <Title :title="langStore.t('faq.title')" />
            <div class="w-full space-y-3 mt-2">
                <div 
                    v-for="(item, index) in faqData" 
                    :key="item.idCategory"
                    @click="setActiveCategoryIndex(index)"
                    class="py-3 px-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer font-medium text-sm md:text-base"
                    :class="[
                        activeCategoryIndex === index
                            ? 'bg-primary text-white border-primary shadow-xs'
                            : 'border-gray-200 text-gray-700 hover:bg-gray-100/70'
                    ]"
                >
                    <span>{{ item.category }}</span>
                    <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>

        <div class="w-full md:w-[60%] flex flex-col justify-center space-y-4">
            <div 
                v-for="item in activeItems" 
                :key="item.id"
                @click="setActiveItem(item.id)"
                class="p-4 md:p-5 rounded-2xl border transition-all duration-300 cursor-pointer"
                :class="[
                    activeItemId === item.id 
                        ? 'border-primary/40 bg-blue-50/20 shadow-xs' 
                        : 'border-gray-200 hover:border-gray-300'
                ]"
            >
                <div class="flex justify-between items-center gap-4">
                    <h4 class="font-bold text-gray-900 text-base md:text-lg">{{ item.question }}</h4>
                    <span 
                        class="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300"
                        :class="activeItemId === item.id ? 'bg-primary text-white rotate-180' : 'bg-gray-100 text-gray-500'"
                    >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </div>
                <div v-show="activeItemId === item.id" class="mt-3 pt-3 border-t border-gray-100 text-sm md:text-base text-gray-600 leading-relaxed">
                    {{ item.answer }}
                </div>
            </div>
        </div>
    </section>
</template>