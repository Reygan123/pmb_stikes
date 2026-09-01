<script setup lang="ts">
import Subtitle from '@/components/ui/Subtitle.vue';
import Title from '@/components/ui/Title.vue';
import Image1 from '@/assets/img/panduan1.png'
import Image2 from '@/assets/img/regis1.png'
import Image3 from '@/assets/img/regis2.png'
import Image4 from '@/assets/img/regis4.png'

const panduan = [
    {
        "tahap": "Login ke Akun Pendaftaran",
        "instruksi_umum": "Masuk ke akun pendaftaran kamu untuk memulai proses registrasi ulang.",
        "poin_penting": [
            "Buka website pendaftaran Universitas Bakti Tunas Husada.",
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
            "Sistem Universitas Bakti Tunas Husada akan melakukan verifikasi otomatis.",
            "Status pembayaran akan berubah menjadi \"Success\".",
            "Kamu kini resmi menyelesaikan tahap pembayaran registrasi ulang PMB.",
        ],
        "image": Image4
    }
]

const proTips = [
    "Pastikan email dan password yang kamu gunakan adalah akun PMB yang sama saat pertama kali mendaftar. Jika lupa password, gunakan fitur 'Lupa Password' di halaman login.",
    "Segera klik 'Bayarkan' setelah masuk ke menu Daftar Ulang agar tidak melewati batas waktu pembayaran yang telah ditentukan.",
    "Pastikan kamu menggunakan m-banking dari bank yang sama dengan Virtual Account yang dipilih. Jika salah bank, transaksi tidak akan berhasil.",
    "Verifikasi biasanya berlangsung otomatis dalam beberapa menit hingga beberapa jam. Simpan bukti pembayaran hingga status berubah menjadi 'Success'."
]
</script>

<template>
    <section
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col justify-center items-center text-center gap-4 lg:gap-6">
        <div v-for="(item, index) in panduan" :key="index" class="w-full h-fit flex flex-col items-center gap-6 md:gap-8 lg:gap-16" :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
            <div class="w-full md:w-1/2 h-[300px] md:h-[400px] lg:h-[500px]">
                <img :src="item.image" :alt="item.tahap" class="w-full h-full object-contain">
            </div>

            <div class="w-full h-full md:w-1/2 space-y-4">
                <div class="w-full text-left space-y-2">
                    <Title :title="item.tahap" />
                    <Subtitle :text="item.instruksi_umum" />
                </div>
                <div class="grid grid-cols-1 gap-2 md:gap-4">
                    <div v-for="poin in item.poin_penting" :key="poin" class="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"
                            class="flex-shrink-0 mt-0.5">
                            <path
                                d="M15 10.5L11 14.5L9 12.5M12 21.5C7.02944 21.5 3 17.4706 3 12.5C3 7.52944 7.02944 3.5 12 3.5C16.9706 3.5 21 7.52944 21 12.5C21 17.4706 16.9706 21.5 12 21.5Z"
                                stroke="#F03C06" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="text-xs md:text-sm text-left font-medium">{{ poin }}</p>
                    </div>
                </div>
                <div class="text-xs md:text-sm text-netral text-left space-y-2">
                    <div class="flex items-center gap-2">
                        <p>Pro Tips</p>
                    </div>
                    <p>{{ proTips[index] }}</p>
                </div>
            </div>
        </div>
    </section>
</template>