<script setup lang="ts">
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

const props = defineProps<{
    jalur?: { slug?: string } | null
}>()

const timelineRef = ref<HTMLElement>()
const scrollProgress = ref(0)

const registrationSteps = [
    {
        id: 1,
        title: "Pembuatan Akun",
        description: "Kunjungi <span><a href='https://admisi.universitas-bth.ac.id/' target='_blank'>admisi.universitas-bth.ac.id</a></span>, klik Daftar Sekarang, lalu isi data awal menggunakan email dan WhatsApp aktif.",
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
]

const kipkSteps = [
    {
        id: 1,
        title: "Pendaftaran Akun KIP-K",
        description: "Daftar akun terlebih dahulu di laman resmi pemerintah: <span><a href='https://kip-kuliah.kemendikbud.go.id' target='_blank'>kip-kuliah.kemendikbud.go.id</a></span>.",
        image: Image7
    },
    {
        id: 2,
        title: "Masuk ke Sistem Admisi",
        description: "Masuk ke sistem admisi kampus melalui <span><a href='https://admisi.universitas-bth.ac.id' target='_blank'>admisi.universitas-bth.ac.id</a></span>.",
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
        description: "Tim seleksi UBTH akan memverifikasi data ekonomi dan kelayakan pendaftar.",
        image: Image8
    }
]

const steps = computed(() => {
    return props.jalur?.slug?.includes('kip') ? kipkSteps : registrationSteps
})

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
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
        <div class="w-full flex flex-col jusitfy-start items-start md:justify-center md:items-start gap-6">
            <div class="space-y-3">
                <Tag title="Tatacara Pendaftaran" />
                <Title title="Hanya dalam 5 Langkah Sederhana" />
                <Subtitle
                    text="Dari membuat akun hingga menerima hasil, inilah proses pendaftaran Anda yang cepat dan jelas." />
            </div>
        </div>

        <div class="w-full space-y-8 lg:space-y-10 relative" ref="timelineRef">
            <!-- Scroll Progress -->
            <div
                class="absolute left-10 md:left-1/2 md:-translate-x-1/2 w-[2px] h-full py-4 bg-primary/10 overflow-hidden">
                <div class="w-full bg-primary transition-all duration-300 ease-out"
                    :style="{ height: `${scrollProgress * 100}%` }"></div>
            </div>

            <div v-for="step in steps" :key="step.id"
                class="w-full h-fit lg:h-[240px] flex items-center gap-6 md:gap-0 relative z-10"
                :class="{ 'md:flex-row-reverse': step.id % 2 === 0 }">
                <div class="w-[40%] h-full rounded-3xl md:rounded-4xl overflow-hidden hidden md:block">
                    <img :src="step.image" :alt="`Langkah ${step.id} - ${step.title}`"
                        class="w-full h-full object-contain">
                </div>
                <div class="w-[20%] h-full flex justify-start items-start md:justify-center md:items-center">
                    <div class="w-20 h-20 rounded-full bg-[#FFE8D4] p-2">
                        <div class="w-16 h-16 bg-primary rounded-full flex justify-center items-center">
                            <h3 class="text-2xl font-medium text-white">{{ step.id.toString().padStart(2, '0') }}</h3>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-[40%] h-full flex flex-col justify-center items-center gap-4 md:gap-0">
                    <div class="w-full h-full rounded-3xl md:rounded-4xl overflow-hidden md:hidden">
                        <img :src="step.image" :alt="`Langkah ${step.id} - ${step.title}`"
                            class="w-full h-full object-contain">
                    </div>
                    <div class="text-left space-y-3">
                        <h4 class="text-lg md:text-lg lg:text-2xl font-medium text-[#514D4D]">{{ step.title }}</h4>
                        <p class="text-sm md:text-base lg:text-lg font-light text-netral [&_a]:text-primary [&_a]:font-medium"
                            v-html="step.description"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>