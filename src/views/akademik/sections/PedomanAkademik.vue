<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import { ref, computed } from 'vue';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

const dropdownItems = computed(() => {
  const isEn = langStore.currentLang === 'en';
  return [
    {
      id: 1,
      title: isEn ? "Academic Regulations" : "Peraturan Akademik",
      description: isEn 
        ? "Official guidelines regarding academic policies, course credits (SKS), clinical practicum conversions, and student achievement recognition."
        : "Panduan resmi mengenai syarat dan prosedur konversi prestasi serta kegiatan mahasiswa (seperti magang, lomba, atau sertifikasi) menjadi nilai dan Satuan Kredit Semester (SKS).",
      downloadLink: "#"
    },
    {
      id: 2,
      title: isEn ? "Undergraduate Thesis & Final Project Guidelines" : "Pedoman Skripsi & Tugas Akhir",
      description: isEn
        ? "Comprehensive guidelines for drafting undergraduate nursing/midwifery theses and case reports from proposal to defense."
        : "Panduan lengkap untuk penyusunan skripsi mulai dari proposal hingga ujian akhir.",
      downloadLink: "#"
    },
    {
      id: 3,
      title: isEn ? "Academic Calendar 2025/2026" : "Kalender Akademik 2025/2026",
      description: isEn
        ? "Full schedule of academic activities, midterm and final examinations, and semester recesses."
        : "Jadwal lengkap kegiatan akademik termasuk UTS, UAS, dan libur semester.",
      downloadLink: "#"
    },
    {
      id: 4,
      title: isEn ? "Graduation & Swearing-In Ceremony Guide" : "Panduan Wisuda & Angkat Sumpah",
      description: isEn
        ? "Procedures, clearance requirements, and timeline for graduation and professional swearing-in ceremonies."
        : "Prosedur dan persyaratan untuk mengikuti wisuda dan angkat sumpah bagi mahasiswa yang telah menyelesaikan studi.",
      downloadLink: "#"
    },
    {
      id: 5,
      title: isEn ? "Scholarship & Financial Aid Guidelines" : "Pedoman Beasiswa",
      description: isEn
        ? "Information on government, institutional, and corporate scholarship categories, qualification criteria, and application protocols."
        : "Informasi mengenai jenis beasiswa, persyaratan, dan cara pendaftaran.",
      downloadLink: "#"
    }
  ];
});

const activeDropdown = ref<number | null>(1);

const toggleDropdown = (id: number) => {
  if (activeDropdown.value === id) {
    activeDropdown.value = null;
  } else {
    activeDropdown.value = id;
  }
};
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col md:flex-row gap-16">
        <div class="w-full md:w-[40%] space-y-3">
            <Tag :title="langStore.currentLang === 'en' ? 'Guidelines' : 'Dokumen Pedoman'" />
            <Title class="leading-relaxed" :title="langStore.currentLang === 'en' ? 'Academic Guidelines <br/> STIKes Budi Luhur Cimahi' : 'Pedoman Akademik <br/> STIKes Budi Luhur Cimahi'" />
            <Subtitle color="text-[#4A4A4A]" text="STIKes Budi Luhur Cimahi" />
        </div>
        <div class="w-full md:w-[60%] space-y-4">
            <div v-for="item in dropdownItems" :key="item.id" 
                 :class="activeDropdown === item.id ? 'bg-[#F6F6F6] rounded-3xl' : ''">
                
                <div 
                    :class="activeDropdown === item.id ? 
                        'w-full p-4 flex justify-between items-center bg-white border-2 border-[#F6F6F6] rounded-3xl cursor-pointer' : 
                        'w-full p-4 flex justify-between items-center bg-white rounded-3xl cursor-pointer'"
                    @click="toggleDropdown(item.id)">
                    
                    <h3 class="text-lg text-gstart font-medium">{{ item.title }}</h3>
                    <div class="w-10 h-10 rounded-full bg-[#F6F6F6] p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             class="transition-transform duration-300 ease-in-out">
                            <path d="M17 11L21 15M21 15L17 19M21 15H8C5.23858 15 3 12.7614 3 10C3 7.23858 5.23858 5 8 5H13" 
                                  stroke="#005EB8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>

                <div 
                    class="content-container transition-all duration-500 ease-in-out overflow-hidden"
                    :class="{
                        'max-h-96 opacity-100': activeDropdown === item.id,
                        'max-h-0 opacity-0': activeDropdown !== item.id
                    }"
                >
                    <div class="p-4 bg-[#F6F6F6] rounded-b-3xl space-y-6">
                        <p class="text-base text-gstart">{{ item.description }}</p>
                        <Button :text="langStore.currentLang === 'en' ? 'Download' : 'Unduh Dokumen'" />
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<style scoped>
.content-container {
  transition: max-height 0.5s ease-in-out, opacity 0.3s ease-in-out;
}

.transition-transform {
  transition: transform 0.3s ease-in-out;
}
</style>