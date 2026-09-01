<script setup lang="ts">
// import { useRouter } from 'vue-router';
import { ref, computed } from "vue";
import File from "@/assets/files/Format Pengumuman PSPPA Angkatan 14.pdf";
import File2 from "@/assets/files/Pengumuman PSPPA Jalur Mandiri Angkatan XIV.pdf";
import File3 from "@/assets/files/2627 SPMB-PMDK-Gel 1.pdf";
import File4 from "@/assets/files/Pengumuman S-2 Farmasi Angkatan I.pdf";
import File5 from "@/assets/files/0056 Pengumuman Hasil SPMB REG Gelombang 1.pdf";
import File6 from "@/assets/files/0082 Pengumuman SPMB RPL S1 Farmasi Gel 1 2627.pdf";
import File7 from "@/assets/files/Hasil Kelulusan Wawancara Beasiswa BTH Unggul Gel-1.pdf";
import File8 from "@/assets/files/0110 Pengumuman SPMB PMDK-Gel 2_2627.pdf";
import File9 from "@/assets/files/01111 Pengumuman SPMB Reg-Gel 2_2627.pdf";
import File10 from "@/assets/files/0112 Pengumuman SPMB BTH UNGGUL_2627 (2).pdf";
import File11 from "@/assets/files/2627-Pengumuman SPMB PMDK Gel 2 Tahap 2_2026.pdf";
import File12 from "@/assets/files/2627-Pengumuman SPMB Jalur PMDK Gel II Tahap III.pdf";
import File13 from "@/assets/files/2627-Pengumuman SPMB Jalur REG Gelombang II Tahap II.pdf";
// import File14 from '@/assets/files/001-Surat Rekomendasi Kelulusan Kelas Kerjasama.pdf'
import File15 from "@/assets/files/0184 Pengumuman SPMB PMDK Gel II Tahap IV_UBTH 2026.pdf";
import File16 from "@/assets/files/2627-PMDK-Gel 2 Tahap 5_2026.pdf";
import File17 from "@/assets/files/2627-Reg-Gel 2 Tahap 3_2026.pdf";
import File18 from "@/assets/files/2627-PMDK-Gel 2 Tahap 6_2026.pdf";
import File19 from "@/assets/files/2627-Reg-Gel 2 Tahap 4_2026.pdf";
import File20 from "@/assets/files/2627-PMDK-Gel 2 Tahap 7_2026.pdf";
import File21 from "@/assets/files/2627-Reg-Gel 2 Tahap 5_2026.pdf";
import File22 from "@/assets/files/SK PENERIMA BEASISWA BTH UNGGUL TA 26-27 BATCH 2.pdf";
import File23 from "@/assets/files/2627-PMDK-Gel 2 Tahap 8_2026.pdf";
import File24 from "@/assets/files/2627-Reg-Gel 2 Tahap 6_2026.pdf";
import File25 from "@/assets/files/2627-Pengumuman RPL S1 Farmasi Gel 2.pdf";
import File26 from "@/assets/files/2627-PMDK-Gel 2 Tahap 9_2026.pdf";
import File27 from "@/assets/files/2627-Reg-Gel 2 Tahap 7_Ubth 2026.pdf";
import File28 from "@/assets/files/2627-PMDK-Gel 2 Tahap 10_2026.pdf";
import File29 from "@/assets/files/2627-Pengumuman SPMB Jalur Prestasi PSPPA atau S2 Farmasi_UBTH 2026.pdf";
import File30 from "@/assets/files/SK Penerima Beasiswa BTH Unggul 26-27 BATCH 3.pdf";
import File31 from "@/assets/files/0274 Pengumuman PSPPA Reguler Angkatan 15+.pdf";
import File32 from "@/assets/files/0275 Pengumuman Hasil SPMB PSPPA Jalur Prestasi Angkatan 15.pdf";
import File33 from "@/assets/files/0276 Pengumuman Hasil SPMB Jalur PMDK Gel 2 Tahap 11.pdf";
import File34 from "@/assets/files/2627 0293 Pengumuman SPMB Jalur Reg Gelombang II Tahap IX.pdf";
import File35 from "@/assets/files/2627 0294 Pengumuman SPMB Jalur PMDK Gel II Tahap XII.pdf";
import File36 from "@/assets/files/2627-Reg-Gel 2 Tahap11_UBTH 2026.pdf";
import File37 from "@/assets/files/2627-PMDK-Gel 2 Tahap 14_UBTH 2026.pdf";
import File38 from "@/assets/files/2627-Reg-S2 Farmasi Angkatan II_2026.pdf";
import File39 from "@/assets/files/2627-Reg-Gel 3 Tahap1_UBTH 2026.pdf"
import File40 from '@/assets/files/2627-Pengumuman RPL S1 Farmasi Gel 3.pdf'
import File41 from '@/assets/files/2627-Pengumuman PSPPA Mandiri Angkatan 15_UBTH 2026.pdf'
import File42 from '@/assets/files/2627-Reg-Gel 3 Tahap 2_UBTH 2026.pdf'
import File43 from '@/assets/files/SK Peneriman Beasiswa BTH Unggul 26-27 gelombang 4.pdf'
import File44 from '@/assets/files/2627-Reg-Gel 3 Tahap 3_UBTH 2026.pdf'

// const router = useRouter()
const selectedCategory = ref("All");
const searchQuery = ref("");

interface AgendaItem {
  id: number;
  title: string;
  slug: string;
  category: "Akademik" | "Ujian" | "Ekstrakulikuler";
  start_date: string;
  location: string;
  content: string;
  contact: string;
  file: string;
}

const agenda: AgendaItem[] = [
  {
    id: 44,
    title:
      "Hasil SPMB Jalur Reguler Gelombang III Tahap III Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-reguler-gelombang-3-tahap-3-2627",
    category: "Akademik",
    start_date: "2026-08-28T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur Reguler Gelombang III Tahap III Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File44,
  },
  {
    id: 43,
    title:
      "PENERIMA BEASISWA BTH UNGGUL GELOMBANG 4 Universitas Bakti Tunas Husada TA 2026/2027",
    slug:
      "penerima-beasiswa-bth-unggul=gelombang-4-universitas-bakti-tunas-husada-tahun-akademik-2026-2027",
    category: "Akademik",
    start_date: "2026-08-24T08:00:00",
    location: "Universitas BTH",
    content:
      "Penerima Beasiswa BTH Unggul Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File43,
  },
  {
    id: 42,
    title:
      "Hasil SPMB Jalur Reguler Gelombang III Tahap II Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-reguler-gelombang-3-tahap-2-2627",
    category: "Akademik",
    start_date: "2026-08-21T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur Reguler Gelombang III Tahap II Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File42,
  },
  {
    id: 41,
    title:
      "Pengumuman PPSA Mandiri Angkatan 15 Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-ppsa-mandiri-angkatan-15-2627",
    category: "Akademik",
    start_date: "2026-08-15T08:00:00",
    location: "Universitas BTH",
    content:
      "Pengumuman PPSA Mandiri Angkatan 15 Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File41,
  },
{
    id: 40,
    title:
      "Pengumuman RPL S1 Farmasi Gel III Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-rpl-s1-farmasi-gel-3-2627",
    category: "Akademik",
    start_date: "2026-08-14T08:00:00",
    location: "Universitas BTH",
    content:
      "Pengumuman RPL S1 Farmasi Gel III Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File40,
  },
  {
    id: 39,
    title:
      "Hasil SPMB Jalur Reguler Gelombang III Tahap I Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-reguler-gelombang-3-tahap-1-2627",
    category: "Akademik",
    start_date: "2026-08-13T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur Reguler Gelombang III Tahap I Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File39,
  },
  {
    id: 38,
    title: "Pengumuman Hasil SPMB Jalur Reguler Angkatan II Program Studi S2 Farmasi",
    slug: "pengumuman-hasil-spmb-jalur-reguler-angkatan-ii-program-studi-s2-farmasi",
    category: "Akademik",
    start_date: "2026-08-12T08:00:00",
    location: "Universitas BTH",
    content:
      "Pengumuman Hasil SPMB Jalur Reguler Angkatan II Program Studi S2 Farmasi Fakultas Farmasi Universitas Bakti Tunas Husada Tahun Akademik 2026/2027.",
    contact: "6282115300668",
    file: File38,
  },
  {
    id: 37,
    title:
      "Hasil SPMB Jalur PMDK Gelombang II Tahap XIV Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-pmdk-gelombang-2-tahap-14-2627",
    category: "Akademik",
    start_date: "2026-08-07T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur PMDK Gelombang II Tahap XIV Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File37,
  },
  {
    id: 36,
    title:
      "Hasil SPMB Jalur Reguler Gelombang II Tahap XI Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-reguler-gelombang-2-tahap-11-2627",
    category: "Akademik",
    start_date: "2026-08-07T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur Reguler Gelombang II Tahap IX Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File36,
  },
  {
    id: 35,
    title:
      "Hasil SPMB Jalur PMDK Gelombang II Tahap XII Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-pmdk-gelombang-2-tahap-12-2627",
    category: "Akademik",
    start_date: "2026-07-27T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur PMDK Gelombang II Tahap XII Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File35,
  },
  {
    id: 34,
    title:
      "Hasil SPMB Jalur Reguler Gelombang II Tahap IX Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-reguler-gelombang-2-tahap-9-2627",
    category: "Akademik",
    start_date: "2026-07-27T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur Reguler Gelombang II Tahap IX Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File34,
  },
  {
    id: 33,
    title:
      "Hasil SPMB Jalur PMDK Gelombang II Tahap XI Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-pmdk-gelombang-2-tahap-11-2627",
    category: "Akademik",
    start_date: "2026-07-21T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur PMDK Gelombang II Tahap XI Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File33,
  },
  {
    id: 32,
    title:
      "Pengumuman SPMB Jalur Prestasi Angkatan XV Prodi Pendidikan Profesi Apoteker Fakultas Farmasi Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug:
      "pengumuman-spmb-jalur-prestasi-angkatan-xv-prodi-pendidikan-profesi-apoteker-fakultas-farmasi-universitas-bakti-tunas-husada-tahun-akademik-2026-2027",
    category: "Akademik",
    start_date: "2026-07-18T08:00:00",
    location: "Universitas BTH",
    content:
      "Pengumuman SPMB Jalur Prestasi Angkatan XV Prodi Pendidikan Profesi Apoteker Fakultas Farmasi Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File32,
  },
  {
    id: 31,
    title:
      "Pengumuman SPMB Jalur Reguler Angkatan XV Prodi Pendidikan Profesi Apoteker Fakultas Farmasi Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug:
      "pengumuman-spmb-jalur-reguler-angkatan-xv-prodi-pendidikan-profesi-apoteker-fakultas-farmasi-universitas-bakti-tunas-husada-tahun-akademik-2026-2027",
    category: "Akademik",
    start_date: "2026-07-18T08:00:00",
    location: "Universitas BTH",
    content:
      "Pengumuman SPMB Jalur Reguler Angkatan XV Prodi Pendidikan Profesi Apoteker Fakultas Farmasi Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File31,
  },
  {
    id: 30,
    title: "Pengumuman Penerima Beasiswa BTH Unggul Gelombang 3 Tahun Akademik 2026/2027",
    slug: "pengumuman-penerima-beasiswa-bth-unggul-gelombang-3-tahun-akademik-2026-2027",
    category: "Akademik",
    start_date: "2026-07-17T08:00:00",
    location: "Universitas BTH",
    content:
      "Pengumuman Penerima Beasiswa BTH Unggul Gelombang 3 Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File30,
  },
  {
    id: 29,
    title:
      "Pengumuman Penerima Jalur Prestasi Penerimaan Mahasiswa Baru Program Profesi Apoteker dan Program Magister Farmasi",
    slug:
      "pengumuman-penerima-jalur-prestasi-penerimaan-mahasiswa-baru-program-profesi-apoteker-dan-program-magister-farmasi",
    category: "Akademik",
    start_date: "2026-07-10T08:00:00",
    location: "Universitas BTH",
    content:
      "Pengumuman Penerima Jalur Prestasi Penerimaan Mahasiswa Baru Program Profesi Apoteker dan Program Magister Farmasi",
    contact: "6281234567890",
    file: File29,
  },
  {
    id: 28,
    title:
      "Hasil SPMB Jalur PMDK Gelombang II Tahap X Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-pmdk-gelombang-2-tahap-10-2627",
    category: "Akademik",
    start_date: "2026-07-10T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur PMDK Gelombang II Tahap X Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File28,
  },
  {
    id: 27,
    title:
      "Hasil SPMB Jalur Reguler Gelombang II Tahap VII Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-reguler-gelombang-2-tahap-7-2627",
    category: "Akademik",
    start_date: "2026-07-08T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur Reguler Gelombang II Tahap VII Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File27,
  },
  {
    id: 26,
    title:
      "Hasil SPMB Jalur PMDK Gelombang II Tahap IX Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-pmdk-gelombang-2-tahap-9-2627",
    category: "Akademik",
    start_date: "2026-07-03T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur PMDK Gelombang II Tahap IX Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File26,
  },
  {
    id: 25,
    title: "Pengumuman SPMB RPL S1 Farmasi Gel 2 2627",
    slug: "pengumuman-smpb-rpl-s1-farmasi-gel-2-2627",
    category: "Akademik",
    start_date: "2026-07-01T08:00:00",
    location: "Universitas BTH",
    content: "Pengumuman SPMB RPL S1 Farmasi Gel 2 2627.",
    contact: "6281234567890",
    file: File25,
  },
  {
    id: 24,
    title:
      "Hasil SPMB Jalur Reguler Gelombang II Tahap VI Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-reguler-gelombang-2-tahap-6-2627",
    category: "Akademik",
    start_date: "2026-06-29T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur Reguler Gelombang II Tahap VI Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File24,
  },
  {
    id: 23,
    title:
      "Hasil SPMB Jalur PMDK Gelombang II Tahap VIII Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-pmdk-gelombang-2-tahap-7-2627",
    category: "Akademik",
    start_date: "2026-06-27T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur PMDK Gelombang II Tahap VIII Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File23,
  },
  {
    id: 22,
    title:
      "Hasil SPMB Jalur BEASISWA BTH UNGGUL GELOMBANG 2 TAHAР 1 BATCH 2 Universitas Bakti Tunas Husada TA 2026/2027",
    slug:
      "hasil-spmb-bth-unggul=gelombang-2-tahap-1-batch-2-universitas-bakti-tunas-husada-tahun-akademik-2026-2027",
    category: "Akademik",
    start_date: "2026-06-25T08:00:00",
    location: "Universitas BTH",
    content:
      "Penerima Beasiswa BTH Unggul Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File22,
  },
  {
    id: 21,
    title:
      "Hasil SPMB Jalur PMDK Gelombang II Tahap VII Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-pmdk-gelombang-2-tahap-7-2627",
    category: "Akademik",
    start_date: "2026-06-19T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur PMDK Gelombang II Tahap VII Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File20,
  },
  {
    id: 20,
    title:
      "Hasil SPMB Jalur Reguler Gelombang II Tahap V Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-reguler-gelombang-2-tahap-5-2627",
    category: "Akademik",
    start_date: "2026-06-19T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur Reguler Gelombang II Tahap V Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File21,
  },
  {
    id: 19,
    title:
      "Hasil SPMB Jalur Reguler Gelombang II Tahap IV Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-reguler-gelombang-2-tahap-4-2627",
    category: "Akademik",
    start_date: "2026-06-15T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur Reguler Gelombang II Tahap IV Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File19,
  },
  {
    id: 18,
    title:
      "Hasil SPMB Jalur PMDK Gelombang II Tahap VI Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-pmdk-gelombang-2-tahap-6-2627",
    category: "Akademik",
    start_date: "2026-06-12T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur PMDK Gelombang II Tahap VI Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File18,
  },
  {
    id: 17,
    title:
      "Hasil SPMB Jalur Reguler Gelombang II Tahap III Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-reguler-gelombang-2-tahap-3-2627",
    category: "Akademik",
    start_date: "2026-06-05T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur Reguler Gelombang II Tahap III Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File17,
  },
  {
    id: 16,
    title:
      "Hasil SPMB Jalur PMDK Gelombang II Tahap V Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-pmdk-gelombang-2-tahap-5-2627",
    category: "Akademik",
    start_date: "2026-06-05T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur PMDK Gelombang II Tahap V Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File16,
  },
  {
    id: 15,
    title:
      "Hasil SPMB Jalur PMDK Gelombang II Tahap IV Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-pmdk-gelombang-2-tahap-4-2627",
    category: "Akademik",
    start_date: "2026-05-22T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur PMDK Gelombang II Tahap IV Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File15,
  },
  // {
  //     id: 14,
  //     title: 'Surat Rekomendasi Kelulusan Kelas Kerjasama',
  //     slug: 'surat-rekomendasi-kelulusan-kelas-kerjasama',
  //     category: 'Akademik',
  //     start_date: '2026-05-18T08:00:00',
  //     location: 'Universitas BTH',
  //     content: 'Surat Rekomendasi Kelulusan Kelas Kerjasama',
  //     contact: '6281234567890',
  //     file: File14
  // },
  {
    id: 13,
    title:
      "Hasil SPMB Jalur Reguler Gelombang II Tahap II Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-reguler-gelombang-2-tahap-2-2627",
    category: "Akademik",
    start_date: "2026-05-12T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur Reguler Gelombang II Tahap II Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File13,
  },
  {
    id: 12,
    title:
      "Hasil SPMB Jalur PMDK UNGGUL Gelombang II Tahap III Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-pmdk-unggul-gelombang-2-tahap-3-2627",
    category: "Akademik",
    start_date: "2026-05-12T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur PMDK UNGGUL Gelombang II Tahap III Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File12,
  },
  {
    id: 11,
    title:
      "Hasil SPMB Jalur PMDK UNGGUL Gelombang II Tahap II Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-pmdk-unggul-gelombang-2-2627",
    category: "Akademik",
    start_date: "2026-05-07T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur PMDK UNGGUL Gelombang II Tahap II Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File11,
  },
  {
    id: 10,
    title:
      "Hasil SPMB Jalur BTH UNGGUL Gelombang I  Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-bth-unggul-gelombang-1-2627",
    category: "Akademik",
    start_date: "2026-04-20T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur BTH UNGGUL Gelombang I  Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File10,
  },
  {
    id: 9,
    title:
      "Hasil SPMB Jalur Reguler Gelombang II Tahap 2 Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-mandiri-angkatan-xiv-2627",
    category: "Akademik",
    start_date: "2026-04-15T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB Jalur Reguler Gelombang II Tahap 2 Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File9,
  },
  {
    id: 8,
    title:
      "Hasil SPMB Jalur PMDK Gelombang II Tahap 2 Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-spmb-pmdk-gelombang-2-2627",
    category: "Akademik",
    start_date: "2026-04-15T08:00:00",
    location: "Universitas BTH",
    content:
      "Hasil SPMB PMDK Gelombang II Tahap 2 Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    contact: "6281234567890",
    file: File8,
  },
  {
    id: 7,
    title: "Hasil Kelulusan Wawancara Beasiswa BTH Unggul Gel-1",
    slug: "hasil-kelulusan-wawancara-beasiswa-bth-unggul-gel-1",
    category: "Akademik",
    start_date: "2026-03-30T08:00:00",
    location: "Universitas BTH",
    content: "Hasil Kelulusan Wawancara Beasiswa BTH Unggul Gel-1",
    contact: "6281234567890",
    file: File7,
  },
  {
    id: 6,
    title: "Pengumuman SPMB RPL S1 Farmasi Gel 1 2627",
    slug: "pengumuman-smpb-rpl-s1-farmasi-gel-1",
    category: "Akademik",
    start_date: "2026-03-17T08:00:00",
    location: "Universitas BTH",
    content: "Pengumuman SPMB RPL S1 Farmasi Gel 1 2627.",
    contact: "6281234567890",
    file: File6,
  },
  {
    id: 5,
    title: "Pengumuman SPMB REG Gelombang 1",
    slug: "pengumuman-smpb-reg-gelombang-1",
    category: "Akademik",
    start_date: "2026-02-24T08:00:00",
    location: "Universitas BTH",
    content: "Pengumuman SPMB REG Gelombang 1.",
    contact: "6281234567890",
    file: File5,
  },
  {
    id: 4,
    title: "Pengumuman S2 Farmasi Angkatan I",
    slug: "pengumuman-s2-farmasi-angkatan-1",
    category: "Akademik",
    start_date: "2026-02-12T08:00:00",
    location: "Universitas BTH",
    content: "Pengumuman S2 Farmasi Angkatan I.",
    contact: "6281234567890",
    file: File4,
  },
  {
    id: 3,
    title:
      "Hasil SPMB Jalur PMDK Gelombang I Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "hasil-spmb-pmdk-gelombang-1",
    category: "Akademik",
    start_date: "2026-02-04T08:00:00",
    location: "Aula Utama Kampus",
    content: "Hasil SPMB Jalur PMDK Gelombang 1.",
    contact: "6281234567890",
    file: File3,
  },
  {
    id: 2,
    title:
      "Hasil SPMB Jalur Mandiri Angkatan XIV Prodi Pendidikan Profesi Apoteker Fakultas Farmasi Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "hasil-spmb-jalur-mandiri-angkatan-xiv",
    category: "Akademik",
    start_date: "2026-01-15T08:00:00",
    location: "Aula Utama Kampus",
    content: "Hasil SPMB Jalur Mandiri Angkatan XIV.",
    contact: "6281234567890",
    file: File2,
  },
  {
    id: 1,
    title:
      "Hasil SPMB Jalur Reguler Angkatan XIV Prodi Pendidikan Profesi Apoteker Fakultas Farmasi Universitas Bakti Tunas Husada Tahun Akademik 2026/2027",
    slug: "pengumuman-awal-semester-genap",
    category: "Akademik",
    start_date: "2025-12-19T08:00:00",
    location: "Aula Utama Kampus",
    content:
      "Mahasiswa diwajibkan mengikuti kegiatan pembukaan semester genap secara langsung.",
    contact: "6281234567890",
    file: File,
  },
];

const filteredAgenda = computed(() => {
  return agenda.filter((item) => {
    const matchesCategory =
      selectedCategory.value === "All" || item.category === selectedCategory.value;
    const matchesSearch =
      !searchQuery.value ||
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });
});

// const handleSearch = (query: string) => {
//     searchQuery.value = query
// }

const selectCategory = (category: string) => {
  selectedCategory.value = category;
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  const dayName = days[date.getDay()];
  const day = date.getDate().toString().padStart(2, "0");
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  return { dayName, day, monthName, year };
};

// const navigateToDetail = (slug: string) => {
//     router.push(`/agenda/${slug}`)
// }

const downloadFile = (fileUrl: string, fileName: string) => {
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<template>
  <section
    class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col items-center gap-8 md:gap-12 lg:gap-16"
  >
    <div class="w-full h-fit flex flex-col items-center gap-12 overflow-hidden">
      <div class="w-full flex justify-start items-center gap-4">
        <div
          @click="selectCategory('All')"
          :class="[
            'py-2 px-3 lg:py-3 lg:px-6 rounded-full group font-medium transition-all duration-500 cursor-pointer',
            selectedCategory === 'All'
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-gray-500 hover:bg-primary hover:text-white',
          ]"
        >
          <p class="text-sm md:text-base lg:text-lg">All</p>
        </div>
        <!-- <div @click="selectCategory('Akademik')"
                    :class="['py-2 px-3 lg:py-3 lg:px-6 rounded-full group font-medium transition-all duration-500 cursor-pointer',
                        selectedCategory === 'Akademik' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 hover:bg-primary hover:text-white']">
                    <p class="text-sm md:text-base lg:text-lg">Akademik</p>
                </div>
                <div @click="selectCategory('Ujian')"
                    :class="['py-2 px-3 lg:py-3 lg:px-6 rounded-full group font-medium transition-all duration-500 cursor-pointer',
                        selectedCategory === 'Ujian' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 hover:bg-primary hover:text-white']">
                    <p class="text-sm md:text-base lg:text-lg">Ujian</p>
                </div>
                <div @click="selectCategory('Ekstrakulikuler')"
                    :class="['py-2 px-3 lg:py-3 lg:px-6 rounded-full group font-medium transition-all duration-500 cursor-pointer',
                        selectedCategory === 'Ekstrakulikuler' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 hover:bg-primary hover:text-white']">
                    <p class="text-sm md:text-base lg:text-lg">Ekstrakulikuler</p>
                </div> -->
      </div>

      <div class="w-full border-t">
        <div
          v-for="(item, index) in filteredAgenda"
          :key="index"
          class="py-4 lg:py-8 flex flex-col gap-6 md:flex-row md:justify-between md:items-center md:gap-6"
        >
          <div class="flex items-center gap-4 md:gap-6">
            <div
              class="py-4 px-6 rounded-3xl space-y-1 text-center w-fit border border-primary"
            >
              <h5 class="text-xs md:text-sm lg:text-base">
                {{ formatDate(item.start_date).dayName }}
              </h5>
              <h5 class="text-lg md:text-xl lg:text-3xl font-bold">
                {{ formatDate(item.start_date).day }}
              </h5>
              <h5 class="text-xs md:text-sm lg:text-base">
                {{ formatDate(item.start_date).monthName }}
                {{ formatDate(item.start_date).year }}
              </h5>
            </div>

            <div class="space-y-4 w-fit">
              <div class="">
                <h5
                  class="text-base md:text-lg lg:text-2xl font-semibold flex items-center gap-4"
                >
                  {{ item.title }}
                </h5>
              </div>
            </div>
          </div>

          <div
            @click="downloadFile(item.file, 'Hasil SPMB' + '.pdf')"
            class="mx-auto md:m-0 w-fit whitespace-nowrap py-2 px-4 rounded-full flex items-center gap-2 bg-[#F8F8F8] cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
            >
              <path
                d="M8 10V16M8 16L11 14M8 16L5 14M9 1.00087C8.90451 1 8.79728 1 8.67471 1H4.2002C3.08009 1 2.51962 1 2.0918 1.21799C1.71547 1.40973 1.40973 1.71547 1.21799 2.0918C1 2.51962 1 3.08009 1 4.2002V15.8002C1 16.9203 1 17.4801 1.21799 17.9079C1.40973 18.2842 1.71547 18.5905 2.0918 18.7822C2.5192 19 3.07899 19 4.19691 19H11.8031C12.921 19 13.48 19 13.9074 18.7822C14.2837 18.5905 14.5905 18.2842 14.7822 17.9079C15 17.4805 15 16.9215 15 15.8036V7.32568C15 7.20296 15 7.09561 14.9991 7M9 1.00087C9.28564 1.00347 9.46634 1.01385 9.63884 1.05526C9.84291 1.10425 10.0379 1.18526 10.2168 1.29492C10.4186 1.41857 10.5918 1.59182 10.9375 1.9375L14.063 5.06298C14.4089 5.40889 14.5809 5.58136 14.7046 5.78319C14.8142 5.96214 14.8953 6.15726 14.9443 6.36133C14.9857 6.53376 14.9963 6.71451 14.9991 7M9 1.00087V3.8C9 4.9201 9 5.47977 9.21799 5.90759C9.40973 6.28392 9.71547 6.59048 10.0918 6.78223C10.5192 7 11.079 7 12.1969 7H14.9991M14.9991 7H15.0002"
                stroke="#081B36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="text-sm md:text-base lg:text-lg text-gstart font-semibold">
              Unduh Hasil
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
