<script setup lang="ts">
import Subtitle from '@/components/ui/Subtitle.vue';
import Title from '@/components/ui/Title.vue';
import Image1 from '@/assets/img/panduan1.png'
import Image2 from '@/assets/img/panduan2.png'
import Image3 from '@/assets/img/panduan3.png'
import Image4 from '@/assets/img/panduan4.png'
import Image5 from '@/assets/img/panduan5.png'
import Image6 from '@/assets/img/panduan6.png'

const panduan = [
    {
        "tahap": "Pembuatan Akun Pendaftaran",
        "instruksi_umum": "Buka laman pendaftaran PMB Online di alamat admisi.universitas-bth.ac.id",
        "poin_penting": [
            "Klik tombol 'Daftar Sekarang'.",
            "Isi data diri Anda secara lengkap: Email AKTIF, akan terkirim PIN/Token AKTIF.",
            "Cek email untuk PIN & Lanjutkan daftar.",
            "Tolong jaga kerahasiaan data akun/token karena sudah diisi."
        ],
        "image": Image1
    },
    {
        "tahap": "Pengisian Formulir & Pilihan Program Studi",
        "instruksi_umum": "Lengkapi formulir pendaftaran, unggah foto, dan pilih program studi.",
        "poin_penting": [
            "Login ke akun PMB yang sudah kamu buat.",
            "Lengkapi data diri, data orang tua/wali, dan data asal sekolah.",
            "Pilih maksimal 2 Program Studi yang kamu minati.",
            "Cek dan konfirmasikan data utama."
        ],
        "image": Image2
    },
    {
        "tahap": "Pembayaran Biaya Pendaftaran",
        "instruksi_umum": "Lakukan pembayaran sesuai batas waktu yang sudah ditentukan.",
        "poin_penting": [
            "Masukkan kode pendaftaran/Nomor Virtual Account (VA) atau kode bayar di beberapa channel.",
            "Lakukan pembayaran melalui: BI-Banking, Transfer ATM, Teller Bank, dan lainnya.",
            "Simpan bukti pembayaranmu.",
            "Validasi akan terverifikasi otomatis dalam beberapa jam."
        ],
        "image": Image3
    },
    {
        "tahap": "Unggah Berkas Persyaratan",
        "instruksi_umum": "Unggah berkas persyaratan pendaftaran secara digital (softcopy) sesuai yang diminta.",
        "poin_penting": [
            "Masuk ke menu 'Upload Berkas' di akun PMB-mu.",
            "Unggah setiap file didownload sesuai kalibrasi, yang disediakan: Ijazah/Surat Ijazah, Salinan KTP, Foto, dan lain-lain.",
            "Pastikan dokumen yang diunggah valid dan terbaca jelas."
        ],
        "image": Image4
    },
    {
        "tahap": "Ujian Seleksi Masuk",
        "instruksi_umum": "Ikuti ujian seleksi masuk sesuai jadwal dan ketentuan yang berlaku.",
        "poin_penting": [
            "Unduh dan cetak Kartu Peserta Ujian Seleksi.",
            "Ikuti ujian sesuai jadwal yang sudah ditentukan.",
            "Untuk ujian online, cek perangkat/sarana media.",
            "Ikuti ujian sesuai petunjuk yang diberikan."
        ],
        "image": Image5
    },
    {
        "tahap": "Pengumuman Kelulusan",
        "instruksi_umum": "Akses hasil seleksi melalui akun PMB-mu sesuai jadwal yang tertera.",
        "poin_penting": [
            "Login ke akun PMB-mu pada tanggal pengumuman ditentukan.",
            "Cek status kelulusanmu pada menu 'Pengumuman'.",
            "Jika lulus, ikuti panduan proses daftar ulang."
        ],
        "image": Image6
    }
]

const proTips = [
    "Pastikan kamu menggunakan email dan nomor WhatsApp yang benar-benar aktif dan sering kamu cek. Semua notifikasi penting akan dikirimkan ke sana!",
    "Cek kembali semua data yang kamu masukkan sebelum menyimpan. Kesalahan penulisan nama atau tanggal lahir bisa menjadi kendala saat proses daftar ulang nanti.",
    "Lakukan pembayaran sebelum batas waktu yang ditentukan agar akunmu tidak hangus. Simpan bukti transfer hingga kamu dinyatakan lulus.",
    "Perhatikan format file (biasanya .JPG atau .PDF) dan ukuran maksimal file (tidak lebih dari 1MB). Jika file terlalu besar, kompres menggunakan tool online gratis.",
    "Persiapkan dirimu dengan baik. Untuk ujian online, pastikan koneksi internet stabil dan berada di tempat yang tenang agar bisa fokus.",
    "Apapun hasilnya, tetaplah bersemangat! Jika belum berhasil, jangan berkecil hati, mungkin masih ada kesempatan di gelombang pendaftaran berikutnya."
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