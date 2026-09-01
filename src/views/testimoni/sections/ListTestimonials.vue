<script setup lang="ts">
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import TestimonialCard from '../components/TestimonialCard.vue';

const data = [
    {
        image: 'https://i.pravatar.cc/150?img=1',
        name: 'Jonathan Doe',
        description: 'Pengalaman saya dengan layanan ini sangat luar biasa, timnya responsif dan profesional.',
        role: 'Software Engineer',
        company: 'Tech Corp',
        companyLogo: ''
    },
    {
        image: 'https://i.pravatar.cc/150?img=2',
        name: 'Amelia Putri',
        description: 'Sangat membantu dalam mengembangkan bisnis kami, rekomendasi yang tepat!',
        role: 'Marketing Manager',
        company: 'Creative Agency',
        companyLogo: ''
    },
    {
        image: 'https://i.pravatar.cc/150?img=3',
        name: 'Michael Tan',
        description: 'Prosesnya cepat, hasilnya memuaskan, dan supportnya luar biasa.',
        role: 'UI/UX Designer',
        company: 'Design Studio',
        companyLogo: ''
    },
    {
        image: 'https://i.pravatar.cc/150?img=4',
        name: 'Siti Aisyah',
        description: 'Saya sangat terbantu dengan sistem yang dibuat, memudahkan pekerjaan sehari-hari.',
        role: 'HR Specialist',
        company: 'Global Indonesia',
        companyLogo: ''
    },
    {
        image: 'https://i.pravatar.cc/150?img=5',
        name: 'Daniel Wijaya',
        description: 'User interface yang mudah digunakan, bahkan untuk pemula.',
        role: 'Product Owner',
        company: 'Startup Hub',
        companyLogo: ''
    },
    {
        image: 'https://i.pravatar.cc/150?img=6',
        name: 'Clara Anggraini',
        description: 'Layanan pelanggan yang ramah dan solutif, benar-benar profesional.',
        role: 'Customer Success',
        company: 'SaaS Solutions',
        companyLogo: ''
    },
    {
        image: 'https://i.pravatar.cc/150?img=7',
        name: 'Rizky Firmansyah',
        description: 'Saya kagum dengan dedikasi dan kualitas kerja tim ini.',
        role: 'Data Analyst',
        company: 'FinTech Global',
        companyLogo: ''
    },
];
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-16">
        <div class="w-full flex flex-col justify-center items-center gap-4">
            <Tag title="Testimonial" />
            <Title title="Testimoni Mahasiswa & Alumni" />
            <Subtitle class="text-center"
                text="Dengarkan langsung cerita dan pengalaman nyata dari mereka yang telah dan sedang <br/> menempuh pendidikan di Universitas BTH." />
        </div>

        <div class="grid grid-cols-2 gap-8">
            <div v-for="(item, index) in data" :key="index">
                <TestimonialCard :name="item.name" :description="item.description" :image="item.image" :role="item.role" :company="item.company" />
            </div>
        </div>
    </section>
</template>