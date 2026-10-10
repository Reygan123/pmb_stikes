<script setup lang="ts">
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import TestimonialCard from '../components/TestimonialCard.vue';
import { useLanguageStore } from '@/stores/language';
import { computed } from 'vue';

const langStore = useLanguageStore();

const data = computed(() => {
    const isEn = langStore.currentLang === 'en';
    return [
        {
            image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80',
            name: 'Ns. Siti Rahmawati, S.Kep',
            description: isEn 
                ? 'The clinical practicum and hospital rotations provided at STIKes Budi Luhur Cimahi gave me the exact confidence and technical skill needed to excel immediately as an ICU nurse.'
                : 'Pengalaman praktik klinik di berbagai rumah sakit mitra terkemuka memberikan saya bekal klinis dan kepercayaan diri tinggi saat mulai bekerja.',
            role: isEn ? 'ICU Specialist Nurse' : 'Perawat Spesialis ICU',
            company: 'RS Hasan Sadikin Bandung',
            companyLogo: ''
        },
        {
            image: 'https://images.unsplash.com/photo-1594824813583-93d3b7617b80?auto=format&fit=crop&w=300&q=80',
            name: 'Bdn. Dewi Lestari, S.Keb',
            description: isEn
                ? 'Lecturers were genuinely supportive and modern lab facilities ensured our midwifery training met both national and international clinical expectations.'
                : 'Dosen-dosen sangat membimbing, dan laboratorium kebidanan yang lengkap membuat kami mahir dalam manajemen asuhan kebidanan mandiri.',
            role: isEn ? 'Independent Midwife Practitioner' : 'Praktisi Bidan Mandiri',
            company: 'Klinik Bersalin Budi Asih',
            companyLogo: ''
        },
        {
            image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80',
            name: 'Ahmad Fauzi, S.Kep., Ners',
            description: isEn
                ? 'Through the International Career Center, I was guided step-by-step through Japanese language training and placed as a healthcare nurse in Tokyo.'
                : 'Berkat Budi Luhur Migrant Center dan Balai Bahasa, saya terbimbing tuntas belajar bahasa Jepang hingga lolos penempatan kerja perawat di Tokyo.',
            role: isEn ? 'Healthcare Nurse in Japan' : 'Perawat Profesional di Jepang',
            company: 'Tokyo Medical Group, Japan',
            companyLogo: ''
        },
        {
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
            name: 'Rina Marlina, A.Md.Keb',
            description: isEn
                ? 'A warm campus atmosphere combined with high ethical discipline shaped both my clinical skills and compassionate mindset toward patients.'
                : 'Suasana kampus yang kekeluargaan dan disiplin tinggi membentuk karakter kami menjadi tenaga kesehatan yang humanis dan beretika mulia.',
            role: isEn ? 'Community Health Midwife' : 'Bidan Pelaksana',
            company: 'Puskesmas Kota Cimahi',
            companyLogo: ''
        }
    ];
});
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-16">
        <div class="w-full flex flex-col justify-center items-center gap-4 text-center">
            <Tag :title="langStore.currentLang === 'en' ? 'Testimonials' : 'Testimoni'" />
            <Title :title="langStore.currentLang === 'en' ? 'Student & Alumni Testimonials' : 'Testimoni Mahasiswa & Alumni'" />
            <Subtitle class="text-center"
                :text="langStore.currentLang === 'en' 
                    ? 'Hear firsthand experiences and authentic stories from those who have studied and succeeded with STIKes Budi Luhur Cimahi.' 
                    : 'Dengarkan langsung cerita dan pengalaman nyata dari mereka yang telah dan sedang menempuh pendidikan di STIKes Budi Luhur Cimahi.'" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="(item, index) in data" :key="index">
                <TestimonialCard :name="item.name" :description="item.description" :image="item.image" :role="item.role" :company="item.company" />
            </div>
        </div>
    </section>
</template>