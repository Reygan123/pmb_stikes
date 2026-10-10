<!-- <script setup lang="ts">
import Subtitle from '@/components/ui/Subtitle.vue';
import Title from '@/components/ui/Title.vue';
import Image1 from '@/assets/img/panduan1.png'
import Image2 from '@/assets/img/regis1.png'
import Image3 from '@/assets/img/regis2.png'
import Image4 from '@/assets/img/regis4.png'
import { computed } from 'vue';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

const panduan = computed(() => {
    const isEn = langStore.currentLang === 'en';
    if (isEn) {
        return [
            {
                "tahap": "Log in to Admission Account",
                "instruksi_umum": "Sign in to your admission portal account to initiate the re-registration process.",
                "poin_penting": [
                    "Open the official STIKes Budi Luhur Cimahi admission portal.",
                    "Enter your registered email and password credentials.",
                ],
                "image": Image1
            },
            {
                "tahap": "Navigate to \"Re-Registration\" Menu",
                "instruksi_umum": "Go to the Re-Registration section to proceed with payment.",
                "poin_penting": [
                    "Click on the \"Re-Registration\" menu on the sidebar.",
                    "Click the \"Pay Now\" button to initiate registration fee payment.",
                ],
                "image": Image2
            },
            {
                "tahap": "Select Payment Channel",
                "instruksi_umum": "Choose your preferred Virtual Account (VA) or bank transfer method.",
                "poin_penting": [
                    "Select an available Virtual Account: BNI VA, Mandiri VA, BRIVA, BSI VA, BCA VA, Permata VA, or ATM Bersama.",
                    "Ensure payment is processed through matching mobile banking.",
                    "Click \"Proceed Payment\" to generate the unique Virtual Account number.",
                    "Save or copy the 16-digit Virtual Account code.",
                ],
                "image": Image3
            },
            {
                "tahap": "Automatic Payment Verification",
                "instruksi_umum": "Once payment is successfully completed, the system verifies your payment automatically.",
                "poin_penting": [
                    "STIKes Budi Luhur Cimahi payment gateway automatically verifies your transaction.",
                    "Your payment status will update to \"Success\".",
                    "You have officially completed new student re-registration.",
                ],
                "image": Image4
            }
        ];
    }

    return [
        {
            "tahap": "Login ke Akun Pendaftaran",
            "instruksi_umum": "Masuk ke akun pendaftaran kamu untuk memulai proses registrasi ulang.",
            "poin_penting": [
                "Buka website pendaftaran STIKes Budi Luhur Cimahi.",
                "Masukkan email dan password akun kamu.",
            ],
            "image": Image1
        },
        {
            "tahap": "Masuk ke Menu \"Daftar Ulang\"",
            "instruksi_umum": "Navigasi ke menu Daftar Ulang untuk melanjutkan pembayaran registrasi.",
            "poin_penting": [
                "Pilih menu \"Daftar Ulang\" di bagian kiri halaman.",
                "Klik tombol \"Bayarkan\" untuk melanjutkan pembayaran Registrasi.",
            ],
            "image": Image2
        },
        {
            "tahap": "Pilih Metode Pembayaran",
            "instruksi_umum": "Pilih metode pembayaran Virtual Account sesuai bank yang kamu gunakan.",
            "poin_penting": [
                "Pilih salah satu Virtual Account yang tersedia: BNI VA, Bank Artha Graha, ATM Bersama, BRIVA, Bank Neo/BNC, BSI VA, CIMB Niaga VA, Danamon VA, Mandiri VA, atau Permata VA.",
                "Pastikan pembayaran menggunakan m-banking yang sesuai dengan pilihan Virtual Account.",
                "Klik tombol \"Bayarkan\" di bagian kanan bawah untuk melanjutkan.",
                "Sistem akan menghasilkan nomor Virtual Account sesuai bank yang kamu pilih.",
            ],
            "image": Image3
        },
        {
            "tahap": "Tunggu Verifikasi Otomatis",
            "instruksi_umum": "Setelah pembayaran dilakukan, sistem akan memverifikasi secara otomatis.",
            "poin_penting": [
                "Sistem STIKes Budi Luhur Cimahi akan melakukan verifikasi otomatis.",
                "Status pembayaran akan berubah menjadi \"Success\".",
                "Kamu kini resmi menyelesaikan tahap pembayaran registrasi ulang PMB.",
            ],
            "image": Image4
        }
    ];
});

const proTips = computed(() => {
    const isEn = langStore.currentLang === 'en';
    if (isEn) {
        return [
            "Ensure you use the same admission credentials created during initial registration. Use 'Forgot Password' if you cannot access your account.",
            "Promptly complete payment before the designated wave expiration to preserve your admission slot.",
            "Ensure accurate Virtual Account destination number and transaction amount to prevent processing delays.",
            "Verification occurs automatically within minutes. Please store your receipt until the portal reflects 'Success'."
        ];
    }

    return [
        "Pastikan email dan password yang kamu gunakan adalah akun PMB yang sama saat pertama kali mendaftar. Jika lupa password, gunakan fitur 'Lupa Password' di halaman login.",
        "Segera selesaikan pembayaran setelah masuk ke menu Daftar Ulang agar tidak melewati batas waktu pembayaran yang telah ditentukan.",
        "Pastikan kamu menggunakan m-banking dari bank yang sama dengan Virtual Account yang dipilih untuk kelancaran transaksi.",
        "Verifikasi biasanya berlangsung otomatis dalam beberapa menit hingga beberapa jam. Simpan bukti pembayaran hingga status berubah menjadi 'Success'."
    ];
});
</script>

<template>
    <section
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col justify-center items-center text-center gap-8 md:gap-12 lg:gap-16">
        <div class="flex flex-col justify-center items-center text-center gap-4">
            <Title :title="langStore.currentLang === 'en' ? 'Re-registration Step-by-Step Payment Instructions' : 'Panduan Pembayaran Registrasi Ulang'" />
            <Subtitle
                :text="langStore.currentLang === 'en'
                    ? 'Follow these step-by-step instructions carefully to ensure your payment succeeds and your new student status is confirmed.'
                    : 'Ikuti panduan pembayaran registrasi ulang ini langkah demi langkah agar transaksimu berhasil dan status mahasiswamu segera terkonfirmasi.'" />
        </div>

        <div class="space-y-12">
            <div v-for="(item, index) in panduan" :key="index"
                class="w-full flex flex-col items-center gap-6"
                :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
                <div class="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-xs border border-gray-100">
                    <img :src="item.image" :alt="item.tahap" class="w-full h-auto object-cover">
                </div>

                <div class="w-full md:w-1/2 space-y-4 text-left">
                    <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                        {{ index + 1 }}
                    </div>
                    <h3 class="text-xl md:text-2xl font-bold text-gstart">{{ item.tahap }}</h3>
                    <p class="text-sm md:text-base text-gray-600">{{ item.instruksi_umum }}</p>
                    <ul class="list-disc list-inside space-y-2 text-sm text-gray-700">
                        <li v-for="(poin, pIdx) in item.poin_penting" :key="pIdx">{{ poin }}</li>
                    </ul>
                    <div class="p-3 bg-blue-50/80 rounded-xl border border-blue-100 text-xs text-blue-900">
                        <strong>{{ langStore.currentLang === 'en' ? 'Helpful Tip:' : 'Catatan Penting:' }}</strong> {{ proTips[index] }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template> -->

<script></script>

<template>
    
</template>