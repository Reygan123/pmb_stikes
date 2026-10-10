<!-- <script setup lang="ts">
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import Image1 from '@/assets/img/langkah1.png'
import Image2 from '@/assets/img/langkah2.png'
import Image3 from '@/assets/img/langkah3.png'
import Image4 from '@/assets/img/langkah4.png'
import Image5 from '@/assets/img/langkah5.png'
import Image6 from '@/assets/img/langkah6.png'
import Image7 from '@/assets/img/kipk.png'
import Image8 from '@/assets/img/verif.png'
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

const props = defineProps<{
    jalur?: { slug?: string } | null
}>()

const timelineRef = ref<HTMLElement>()
const scrollProgress = ref(0)

const steps = computed(() => {
    const isEn = langStore.currentLang === 'en';
    const isKip = props.jalur?.slug?.includes('kip');

    if (isKip) {
        if (isEn) {
            return [
                {
                    id: 1,
                    title: "KIP-K Account Registration",
                    description: "First register your government KIP-K account at the official portal: <span><a href='https://kip-kuliah.kemendikbud.go.id' target='_blank'>kip-kuliah.kemendikbud.go.id</a></span>.",
                    image: Image7
                },
                {
                    id: 2,
                    title: "Access STIKes Admission Portal",
                    description: "Sign in to the campus admission portal at <span><a href='https://stikesbudiluhurcimahi.ac.id/' target='_blank'>stikesbudiluhurcimahi.ac.id</a></span>.",
                    image: Image1
                },
                {
                    id: 3,
                    title: "Select KIP-K Track",
                    description: "For applicants previously registered in other tracks (PMDK/ODS), application fee is automatically waived.",
                    image: Image3
                },
                {
                    id: 4,
                    title: "Complete Application Form",
                    description: "Fill out the required personal and academic information thoroughly in the admission system.",
                    image: Image4
                },
                {
                    id: 5,
                    title: "Document Verification",
                    description: "STIKes Budi Luhur Cimahi selection board verifies financial background and eligibility credentials.",
                    image: Image8
                }
            ];
        }

        return [
            {
                id: 1,
                title: "Pendaftaran Akun KIP-K",
                description: "Daftar akun terlebih dahulu di laman resmi pemerintah: <span><a href='https://kip-kuliah.kemendikbud.go.id' target='_blank'>kip-kuliah.kemendikbud.go.id</a></span>.",
                image: Image7
            },
            {
                id: 2,
                title: "Masuk ke Sistem Admisi",
                description: "Masuk ke sistem admisi kampus melalui <span><a href='https://stikesbudiluhurcimahi.ac.id/' target='_blank'>stikesbudiluhurcimahi.ac.id</a></span>.",
                image: Image1
            },
            {
                id: 3,
                title: "Pilih Jalur Masuk KIP-K",
                description: "Bagi pendaftar yang sebelumnya sudah sempat mendaftar di jalur lain seperti PMDK/ODS, biaya pendaftaran otomatis digratiskan.",
                image: Image3
            },
            {
                id: 4,
                title: "Lengkapi Proses Pendaftaran",
                description: "Lengkapi dan ikuti seluruh proses pendaftaran di sistem admisi sampai tuntas.",
                image: Image4
            },
            {
                id: 5,
                title: "Proses Verifikasi",
                description: "Tim seleksi STIKes Budi Luhur Cimahi akan memverifikasi data ekonomi dan kelayakan pendaftar.",
                image: Image8
            }
        ];
    }

    if (isEn) {
        return [
            {
                id: 1,
                title: "Account Creation",
                description: "Visit <span><a href='https://stikesbudiluhurcimahi.ac.id/' target='_blank'>stikesbudiluhurcimahi.ac.id</a></span>, click Register Now, and submit initial details using an active email and WhatsApp number.",
                image: Image1
            },
            {
                id: 2,
                title: "Complete Biodata & Select Study Program",
                description: "Complete your personal profile, guardian data, and prior school details. Then select up to two healthcare study programs with your priority order.",
                image: Image2
            },
            {
                id: 3,
                title: "Complete Application Payment",
                description: "Copy your designated Virtual Account code and complete payment via Mobile Banking, ATM, or teller. Keep your receipt for confirmation.",
                image: Image3
            },
            {
                id: 4,
                title: "Upload Required Credentials",
                description: "Navigate to Document Upload in your admission portal account and upload the necessary credentials.",
                image: Image4
            },
            {
                id: 5,
                title: "Admission Entrance Examination",
                description: "Check your test schedule and guidelines in the portal, then complete the examination according to instructions.",
                image: Image5
            },
            {
                id: 6,
                title: "Selection Decision Announcement",
                description: "Sign in to the admission portal on the announcement date to review your admission status on the dashboard.",
                image: Image6
            }
        ];
    }

    return [
        {
            id: 1,
            title: "Pembuatan Akun",
            description: "Kunjungi <span><a href='https://stikesbudiluhurcimahi.ac.id/' target='_blank'>stikesbudiluhurcimahi.ac.id</a></span>, klik Daftar Sekarang, lalu isi data awal menggunakan email dan WhatsApp aktif.",
            image: Image1
        },
        {
            id: 2,
            title: "Lengkapi Formulir dan Tentukan Program Studi Impian",
            description: "Lengkapi data diri, orang tua/wali, dan asal sekolah sesuai dokumen resmi. Selanjutnya, pilih hingga dua program studi dan tentukan urutan prioritas.",
            image: Image2
        },
        {
            id: 3,
            title: "Selesaikan Pembayaran",
            description: "Setelah data lengkap, salin kode VA dan lakukan pembayaran via M-Banking, ATM, atau teller. Simpan bukti hingga pembayaran terverifikasi otomatis.",
            image: Image3
        },
        {
            id: 4,
            title: "Unggah Berkas Persyaratan",
            description: "Masuk ke menu Upload Berkas di akun PMB, lalu unggah dokumen yang diminta sesuai kolom yang tersedia.",
            image: Image4
        },
        {
            id: 5,
            title: "Ujian Seleksi Masuk",
            description: "Setelah pembayaran terverifikasi, cek jadwal dan petunjuk ujian di akun PMB, lalu ikuti ujian sesuai instruksi.",
            image: Image5
        },
        {
            id: 6,
            title: "Pengumuman Kelulusan",
            description: "Login ke akun PMB pada tanggal pengumuman untuk melihat status kelulusan di halaman utama.",
            image: Image6
        }
    ];
});

const handleScroll = () => {
    if (!timelineRef.value) return

    const rect = timelineRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const elementTop = rect.top
    const elementHeight = rect.height

    const triggerPoint = windowHeight * 0.6

    let progress = 0

    if (elementTop <= triggerPoint) {
        const scrollDistance = triggerPoint - elementTop
        progress = Math.min(1, Math.max(0, scrollDistance / elementHeight))
    }

    scrollProgress.value = progress
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div class="w-full flex flex-col justify-center items-center text-center gap-4">
            <Tag :title="langStore.currentLang === 'en' ? 'Admission Process' : 'Langkah Pendaftaran'" />
            <Title :title="langStore.currentLang === 'en' ? 'Sequential Application Steps' : 'Langkah Pendaftaran'" />
            <Subtitle
                :text="langStore.currentLang === 'en' 
                    ? 'Follow these steps sequentially to complete your admission application successfully.' 
                    : 'Ikuti langkah-langkah di bawah ini untuk menyelesaikan proses pendaftaran.'" />
        </div>

        <div class="relative flex" ref="timelineRef">
            <div class="w-1 md:w-2 bg-gray-200 absolute left-4 md:left-6 top-0 bottom-0 overflow-hidden">
                <div class="bg-primary w-full transition-all duration-300 ease-out"
                    :style="{ height: `${scrollProgress * 100}%` }"></div>
            </div>

            <div class="flex flex-col gap-10 md:gap-14 w-full pl-10 md:pl-16">
                <div v-for="step in steps" :key="step.id"
                    class="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
                    <div class="w-full md:w-1/2 space-y-3">
                        <div class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                            {{ step.id }}
                        </div>
                        <h3 class="text-lg md:text-xl font-bold text-gstart">{{ step.title }}</h3>
                        <p class="text-sm md:text-base text-gray-600 leading-relaxed" v-html="step.description"></p>
                    </div>

                    <div class="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xs border border-gray-100">
                        <img :src="step.image" :alt="step.title" class="w-full h-auto object-cover">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template> -->

<script>
</script>
<template>
    
</template>