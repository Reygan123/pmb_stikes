<!-- <script setup lang="ts">
import Subtitle from '@/components/ui/Subtitle.vue';
import Title from '@/components/ui/Title.vue';
import Image1 from '@/assets/img/panduan1.png';
import Image2 from '@/assets/img/panduan2.png';
import Image3 from '@/assets/img/panduan3.png';
import Image4 from '@/assets/img/panduan4.png';
import Image5 from '@/assets/img/panduan5.png';
import Image6 from '@/assets/img/panduan6.png';
import { computed } from 'vue';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

const panduan = computed(() => [
    {
        tahap: langStore.currentLang === 'en' ? '1. Account Registration' : '1. Pembuatan Akun Pendaftaran',
        instruksi_umum: langStore.currentLang === 'en'
            ? 'Open the online admission portal at stikesbudiluhurcimahi.ac.id'
            : 'Buka laman pendaftaran PMB Online di alamat stikesbudiluhurcimahi.ac.id',
        poin_penting: langStore.currentLang === 'en' ? [
            "Click the 'Register Now' button.",
            "Enter your personal details using an ACTIVE email.",
            "Check your email inbox for PIN and activation verification.",
            "Keep your login credentials secure."
        ] : [
            "Klik tombol 'Daftar Sekarang'.",
            "Isi data diri Anda secara lengkap: Email AKTIF untuk menerima PIN/Token.",
            "Cek email untuk PIN & Lanjutkan pendaftaran.",
            "Jaga kerahasiaan data akun dan token Anda."
        ],
        image: Image1
    },
    {
        tahap: langStore.currentLang === 'en' ? '2. Form Submission & Program Selection' : '2. Pengisian Formulir & Pilihan Program Studi',
        instruksi_umum: langStore.currentLang === 'en'
            ? 'Complete your profile, upload your photo, and select your desired health programs.'
            : 'Lengkapi formulir pendaftaran, unggah foto, dan pilih program studi.',
        poin_penting: langStore.currentLang === 'en' ? [
            "Log in to your PMB account.",
            "Fill in personal data, parent/guardian info, and previous school background.",
            "Select your prioritized study programs.",
            "Review and confirm your application details."
        ] : [
            "Login ke akun PMB yang sudah kamu buat.",
            "Lengkapi data diri, data orang tua/wali, dan data asal sekolah.",
            "Pilih Program Studi yang kamu minati.",
            "Cek dan konfirmasikan data utama pendaftaran."
        ],
        image: Image2
    },
    {
        tahap: langStore.currentLang === 'en' ? '3. Application Fee Payment' : '3. Pembayaran Biaya Pendaftaran',
        instruksi_umum: langStore.currentLang === 'en'
            ? 'Complete payment before the designated due date.'
            : 'Lakukan pembayaran sesuai batas waktu yang sudah ditentukan.',
        poin_penting: langStore.currentLang === 'en' ? [
            "Obtain your Virtual Account (VA) or payment code.",
            "Make payment via Mobile Banking, ATM Transfer, or Bank Teller.",
            "Save your payment proof / receipt.",
            "Payment verification is verified automatically."
        ] : [
            "Gunakan Nomor Virtual Account (VA) atau kode bayar yang tertera.",
            "Lakukan pembayaran melalui: M-Banking, Transfer ATM, atau Teller Bank.",
            "Simpan bukti pembayaran Anda.",
            "Pembayaran akan terverifikasi secara otomatis."
        ],
        image: Image3
    },
    {
        tahap: langStore.currentLang === 'en' ? '4. Required Document Upload' : '4. Unggah Berkas Persyaratan',
        instruksi_umum: langStore.currentLang === 'en'
            ? 'Upload required digital documents (PDF/JPG) clearly.'
            : 'Unggah berkas persyaratan pendaftaran secara digital (softcopy) sesuai yang diminta.',
        poin_penting: langStore.currentLang === 'en' ? [
            "Access the 'Upload Documents' menu in your portal.",
            "Upload Diploma/Graduation Certificate, Family Card, ID Card, and Photo.",
            "Ensure documents are valid, legible, and unblurred."
        ] : [
            "Masuk ke menu 'Upload Berkas' di akun PMB-mu.",
            "Unggah berkas persyaratan: Ijazah/SKL, Salinan KK/KTP, Pas Foto terbaru.",
            "Pastikan dokumen yang diunggah valid dan terbaca jelas."
        ],
        image: Image4
    },
    {
        tahap: langStore.currentLang === 'en' ? '5. Entrance Examination / Screening' : '5. Ujian Seleksi Masuk',
        instruksi_umum: langStore.currentLang === 'en'
            ? 'Participate in the entrance test according to your track guidelines.'
            : 'Ikuti ujian seleksi masuk sesuai jadwal dan ketentuan yang berlaku.',
        poin_penting: langStore.currentLang === 'en' ? [
            "Download and print your Exam Admission Card.",
            "Follow the test schedule and technical guidelines.",
            "Ensure stable internet connectivity for online testing."
        ] : [
            "Unduh dan cetak Kartu Peserta Ujian Seleksi.",
            "Ikuti ujian sesuai jadwal yang sudah ditentukan.",
            "Untuk ujian online, pastikan perangkat dan koneksi internet stabil."
        ],
        image: Image5
    },
    {
        tahap: langStore.currentLang === 'en' ? '6. Selection Results Announcement' : '6. Pengumuman Kelulusan',
        instruksi_umum: langStore.currentLang === 'en'
            ? 'Access your admission results directly on the portal.'
            : 'Akses hasil seleksi melalui akun PMB-mu sesuai jadwal yang tertera.',
        poin_penting: langStore.currentLang === 'en' ? [
            "Log in to the PMB portal on announcement day.",
            "Check your selection status in the 'Announcements' menu.",
            "If accepted, follow re-registration and enrollment instructions."
        ] : [
            "Login ke akun PMB-mu pada tanggal pengumuman ditentukan.",
            "Cek status kelulusanmu pada menu 'Pengumuman'.",
            "Jika lulus, lanjutkan dengan proses daftar ulang dan registrasi."
        ],
        image: Image6
    }
]);

const proTips = computed(() => langStore.currentLang === 'en' ? [
    "Make sure your email and WhatsApp number are active and frequently checked. Key notifications will be sent there!",
    "Carefully review all submitted information before saving. Correct names and birth dates avoid issues during enrollment.",
    "Complete payments before deadlines to keep your registration active. Keep receipts until you are fully enrolled.",
    "Check file formats (.JPG or .PDF) and sizes (under 2MB). Compress if necessary using standard tools.",
    "Prepare well for your entrance assessment and ensure a quiet space with steady internet.",
    "Stay positive! Keep in touch with the admissions team if you have any questions or require guidance."
] : [
    "Pastikan kamu menggunakan email dan nomor WhatsApp yang aktif dan sering dicek. Semua notifikasi penting akan dikirimkan ke sana!",
    "Cek kembali semua data sebelum disimpan. Penulisan nama dan tanggal lahir yang tepat mencegah kendala saat proses daftar ulang.",
    "Lakukan pembayaran sebelum batas waktu yang ditentukan agar akunmu tetap aktif. Simpan bukti transfer hingga dinyatakan lulus.",
    "Perhatikan format file (.JPG atau .PDF) dan ukuran maksimal file (kurang dari 2MB).",
    "Persiapkan dirimu dengan baik. Untuk ujian online, pastikan koneksi internet stabil dan berada di tempat yang tenang agar fokus.",
    "Tetap semangat! Hubungi tim PMB STIKes Budi Luhur jika memerlukan bantuan selama proses pendaftaran."
]);
</script>

<template>
    <section
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col justify-center items-center text-center gap-8 lg:gap-12">
        <div v-for="(item, index) in panduan" :key="index" class="w-full h-fit flex flex-col items-center gap-6 md:gap-8 lg:gap-16" :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
            <div class="w-full md:w-1/2 h-[300px] md:h-[400px] lg:h-[480px]">
                <img :src="item.image" :alt="item.tahap" class="w-full h-full object-contain">
            </div>

            <div class="w-full h-full md:w-1/2 space-y-4">
                <div class="w-full text-left space-y-2">
                    <Title :title="item.tahap" />
                    <Subtitle :text="item.instruksi_umum" />
                </div>
                <div class="grid grid-cols-1 gap-2.5 md:gap-3.5">
                    <div v-for="poin in item.poin_penting" :key="poin" class="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                            class="flex-shrink-0 mt-0.5 text-primary">
                            <path
                                d="M15 10.5L11 14.5L9 12.5M12 21.5C7.02944 21.5 3 17.4706 3 12.5C3 7.52944 7.02944 3.5 12 3.5C16.9706 3.5 21 7.52944 21 12.5C21 17.4706 16.9706 21.5 12 21.5Z"
                                stroke="#005EB8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="text-xs md:text-sm text-left font-medium text-gray-700">{{ poin }}</p>
                    </div>
                </div>
                <div class="text-xs md:text-sm text-gray-500 text-left space-y-1.5 p-3.5 bg-gray-50 rounded-2xl border border-gray-100">
                    <div class="flex items-center gap-2 font-bold text-primary">
                        <span>💡 Pro Tips</span>
                    </div>
                    <p class="leading-relaxed">{{ proTips[index] }}</p>
                </div>
            </div>
        </div>
    </section>
</template> -->

<script></script>
<template></template>