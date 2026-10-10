export type Language = 'id' | 'en';

export const translations: Record<Language, Record<string, string>> = {
  id: {
    // Navigasi
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.faculty': 'Fakultas & Prodi',
    'nav.tracks': 'Jalur & Jadwal',
    'nav.achievements': 'Prestasi',
    'nav.facilities': 'Fasilitas',
    'nav.announcements': 'Pengumuman',
    'nav.register': 'Daftar',
    'nav.register_now': 'Daftar Sekarang',
    'nav.guide': 'Panduan Pendaftaran',
    'nav.payment_guide': 'Panduan Pembayaran',
    'nav.costs': 'Biaya Pendidikan',
    'nav.accreditation': 'Akreditasi',
    'nav.activities': 'Kegiatan',
    'nav.news': 'Berita',
    'nav.agenda': 'Agenda',

    // Umum / Common
    'common.learn_more': 'Pelajari Selengkapnya',
    'common.view_all': 'Lihat Semua',
    'common.view_details': 'Lihat Detail',
    'common.read_more': 'Selengkapnya',
    'common.contact_us': 'Hubungi Kami',
    'common.location': 'Lokasi Kampus',
    'common.quick_links': 'Tautan Cepat',
    'common.programs': 'Program Studi',
    'common.navigation': 'Navigasi',
    'common.copyright': 'Hak Cipta Dilindungi',
    'common.all_rights': 'Seluruh hak cipta dilindungi undang-undang.',
    'common.apply': 'Daftar Sekarang',
    'common.download_brochure': 'Unduh Brosur',
    'common.search': 'Cari...',
    'common.loading': 'Memuat data...',
    'common.degree': 'Jenjang',
    'common.accreditation_label': 'Akreditasi',
    'common.motto': 'Unggul, Mandiri, dan Berkarakter',
    'common.back': 'Kembali',
    'common.reset_filter': 'Reset Filter',
    'common.view_more': 'Lihat Selengkapnya',

    // Hero
    'hero.tag': 'PMB STIKes Budi Luhur Cimahi',
    'hero.title': 'Penerimaan Mahasiswa Baru STIKes Budi Luhur Cimahi',
    'hero.subtitle': 'Raih masa depan cemerlang di bidang kesehatan bersama STIKes Budi Luhur Cimahi. Lembaga pendidikan kesehatan unggul, berkarakter budi luhur, dan berdaya saing global.',
    'hero.cta_register': 'Daftar Sekarang',
    'hero.cta_tracks': 'Lihat Jalur Pendaftaran',
    'hero.wave_info': 'Pendaftaran Gelombang 2026/2027 Telah Dibuka!',
    'hero.wave_desc': 'Slot terbatas. Segera daftarkan diri Anda untuk menjadi tenaga kesehatan profesional.',

    // Academics / Fakultas & Program Studi
    'academics.tag': 'Temukan Arah Tujuanmu',
    'academics.title': 'Program Studi di STIKes Budi Luhur Cimahi',
    'academics.subtitle': 'STIKes Budi Luhur Cimahi menyediakan berbagai pilihan program studi bidang kesehatan unggulan, antara lain:',
    'academics.faculty': 'Fakultas',
    'academics.department': 'Rumpun Ilmu',
    'academics.nursing_faculty': 'Fakultas Keperawatan',
    'academics.nursing_dept': 'Rumpun Ilmu Keperawatan',
    'academics.midwifery_faculty': 'Fakultas Kebidanan',
    'academics.midwifery_dept': 'Rumpun Ilmu Kebidanan',
    'academics.career_center': 'Pusat Karier & Balai Bahasa',
    'academics.career_center_title': 'Pusat Karier Internasional & Balai Bahasa',
    'academics.career_center_desc': 'Penempatan kerja ke Jepang & Jerman, sertifikasi profesi internasional, serta pelatihan bahasa asing terpadu.',
    'academics.global_program': 'Program Penempatan Kerja Jepang & Jerman',
    'academics.language_center': 'Balai Bahasa & Sertifikasi Profesi',
    'academics.rpl_program': 'Program Rekognisi Pembelajaran Lampau (RPL)',

    // Program Studi List
    'study_programs_list.s1_keperawatan': 'S1 Keperawatan',
    'study_programs_list.profesi_ners': 'Profesi Ners',
    'study_programs_list.d3_keperawatan': 'D3 Keperawatan',
    'study_programs_list.s1_kebidanan': 'S1 Kebidanan (Pendidikan Bidan)',
    'study_programs_list.profesi_bidan': 'Profesi Bidan',
    'study_programs_list.d3_kebidanan': 'D3 Kebidanan',

    'prodi.tag': 'Program Studi',
    'prodi.title': 'Program Studi Pilihan Unggulan',
    'prodi.subtitle': 'Didukung kurikulum mutakhir, tenaga pengajar berpengalaman, dan laboratorium kesehatan berstandar internasional.',
    'prodi.nurse_s1': 'S1 Keperawatan',
    'prodi.ners': 'Profesi Ners',
    'prodi.nurse_d3': 'D3 Keperawatan',
    'prodi.midwife_s1': 'S1 Kebidanan (Pendidikan Bidan)',
    'prodi.midwife_d3': 'D3 Kebidanan',
    'prodi.midwife_prof': 'Profesi Bidan',
    'prodi.curriculum': 'Kurikulum & Pembelajaran',
    'prodi.career_prospect': 'Peluang Karier Lulusan',
    'prodi.facilities': 'Fasilitas Program Studi',
    'prodi.usp': 'Keunggulan Program Studi',

    // Jalur Pendaftaran
    'jalur.tag': 'Jalur Masuk',
    'jalur.title': 'Pilihan Jalur Pendaftaran PMB',
    'jalur.subtitle': 'STIKes Budi Luhur Cimahi menyediakan berbagai jalur pendaftaran yang dapat disesuaikan dengan latar belakang dan prestasi Anda.',
    'jalur.period': 'Periode Pendaftaran',
    'jalur.fee': 'Biaya Formulir',
    'jalur.cta': 'Daftar Jalur Ini',
    'jalur.early_bird': 'Amankan Posisimu Lebih Awal',
    'jalur.early_desc': 'Pendaftaran Gelombang memberikan akses prioritas ke berbagai jalur penerimaan STIKes Budi Luhur Cimahi, sehingga Anda dapat mempersiapkan langkah studi lebih awal dan tenang.',

    // Biaya Pendidikan
    'biaya.tag': 'Informasi Finansial',
    'biaya.title': 'Rincian Biaya Pendidikan',
    'biaya.subtitle': 'Investasi masa depan Anda dengan transparansi biaya pendidikan dan pilihan skema cicilan yang terjangkau di STIKes Budi Luhur Cimahi.',
    'biaya.term': 'Semester',
    'biaya.payment1': 'Pembayaran Tahap 1',
    'biaya.payment2': 'Pembayaran Tahap 2',
    'biaya.total': 'Total Biaya',
    'biaya.button': 'Rincian Biaya',

    // Panduan Pendaftaran
    'panduan.tag': 'Panduan Pendaftaran',
    'panduan.title': 'Langkah Mudah Mendaftar di STIKes Budi Luhur Cimahi',
    'panduan.subtitle': 'Ikuti tahapan pendaftaran mahasiswa baru dari awal pembuatan akun, pengisian berkas, hingga pengumuman kelulusan.',

    // Fasilitas
    'fasilitas.tag': 'Fasilitas Kampus',
    'fasilitas.title': 'Fasilitas Kampus & Laboratorium Terpadu',
    'fasilitas.subtitle': 'Fasilitas modern lengkap yang dirancang khusus untuk mendukung pengalaman praktikum dan riset klinis mahasiswa.',

    // Testimoni
    'testimoni.tag': 'Testimoni Alumni',
    'testimoni.title': 'Kisah Sukses Alumni STIKes Budi Luhur',
    'testimoni.subtitle': 'Para lulusan kami telah berkarier di rumah sakit pemerintah, swasta, dan institusi kesehatan terkemuka di dalam maupun luar negeri.',

    // Kemitraan
    'mitra.tag': 'Kemitraan Strategis',
    'mitra.title': 'Jejaring Rumah Sakit & Institusi Kerjasama',
    'mitra.subtitle': 'Bekerjasama dengan puluhan rumah sakit, dinas kesehatan, dan mitra internasional untuk penempatan praktik klinik dan kerja.',

    // FAQ
    'faq.tag': 'Pertanyaan Umum',
    'faq.title': 'Pertanyaan yang Sering Diajukan (FAQ)',
    'faq.subtitle': 'Temukan jawaban cepat atas pertanyaan seputar pendaftaran, biaya, dan perkuliahan di STIKes Budi Luhur Cimahi.',

    // Pengumuman
    'pengumuman.tag': 'Pengumuman Resmi',
    'pengumuman.title': 'PENGUMUMAN RESMI SPMB',
    'pengumuman.subtitle': 'Cari dan unduh pengumuman hasil seleksi, registrasi, dan agenda akademik STIKes Budi Luhur Cimahi.',
    'pengumuman.search_placeholder': 'Cari Pengumuman...',
    'pengumuman.download': 'Unduh File',
    'pengumuman.no_attachment': 'Tidak ada lampiran',
    'pengumuman.empty_title': 'Tidak Ada Pengumuman',
    'pengumuman.empty_desc': 'Belum ada pengumuman yang sesuai dengan kriteria pencarian Anda.',
    'pengumuman.loading': 'Memuat pengumuman terbaru...',

    // Berita & Agenda
    'berita.tag': 'Kabar Kampus',
    'berita.title': 'Berita & Informasi Terbaru',
    'berita.subtitle': 'Ikuti perkembangan terbaru, kisah inspiratif, dan pengumuman penting dari sivitas akademika STIKes Budi Luhur Cimahi.',
    'agenda.tag': 'Agenda Akademik',
    'agenda.title': 'Agenda & Jadwal Kegiatan',
    'agenda.subtitle': 'Jadwal kegiatan akademik, seminar kesehatan, dan agenda penting kampus.',

    // Tentang Kampus
    'about.tag': 'Tentang Kami',
    'about.title': 'Profil STIKes Budi Luhur Cimahi',
    'about.subtitle': 'Membangun generasi tenaga kesehatan yang berintegritas tinggi, religius, berakhlak mulia, dan berdaya saing internasional.',
    'sejarah.tag': 'Jejak Langkah',
    'sejarah.title': 'Sejarah Singkat STIKes Budi Luhur Cimahi',
    'sejarah.desc': 'Bermula dari Sekolah Perawat Kesehatan (SPK) pada tahun 1981 di bawah Yayasan Budi Luhur Cimahi, kini bertransformasi menjadi Sekolah Tinggi Ilmu Kesehatan unggulan.',
    'visi.title': 'Visi Institusi',
    'misi.title': 'Misi Institusi',

    // Prestasi
    'prestasi.tag': 'Prestasi Mahasiswa',
    'prestasi.title': 'Prestasi & Penghargaan Membanggakan',
    'prestasi.subtitle': 'Bukti dedikasi mahasiswa dan dosen STIKes Budi Luhur Cimahi dalam meraih prestasi di kancah regional, nasional, dan internasional.',

    // CTA
    'cta.title': 'Siap Menjadi Tenaga Kesehatan Profesional?',
    'cta.subtitle': 'Wujudkan cita-cita Anda di dunia kesehatan bersama STIKes Budi Luhur Cimahi. Pendaftaran online cepat, mudah, dan aman.',
    'cta.register': 'Daftar Sekarang',
    'cta.consult': 'Konsultasi via WhatsApp',
    // Mengapa & Keunggulan
    'mengapa.tag': 'Kenapa Memilih Kami',
    'mengapa.title': 'Keunggulan STIKes Budi Luhur Cimahi',
    'mengapa.subtitle': 'Komitmen kami mencetak lulusan tenaga kesehatan kompeten, humanis, berdaya saing global dengan fasilitas modern.',
    'mengapa.reason1_title': 'Akreditasi Terakreditasi Unggul & Baik Sekali',
    'mengapa.reason1_desc': 'Seluruh program studi telah terakreditasi LAM-PTKes dan BAN-PT dengan jaminan mutu akademik prima.',
    'mengapa.reason2_title': 'Peluang Karier Internasional ke Jepang & Jerman',
    'mengapa.reason2_desc': 'Program pembekalan bahasa dan penyaluran kerja langsung bagi perawat dan bidan ke rumah sakit luar negeri.',
    'mengapa.reason3_title': 'Rumah Sakit Pendidikan & Jejaring Klinik Luas',
    'mengapa.reason3_desc': 'Kerja sama erat dengan RS Pemerintah, RS Swasta terkemuka, Puskesmas, dan klinik di Jawa Barat serta nasional.',
    'mengapa.reason4_title': 'Laboratorium Terintegrasi Berstandar Modern',
    'mengapa.reason4_desc': 'Laboratorium simulasi keperawatan, kebidanan, OSCE, CBT, dan mini hospital untuk kesiapan praktik nyata.',

    // Statistik
    'stats.students': 'Mahasiswa Aktif',
    'stats.alumni': 'Alumni Terserap Kerja',
    'stats.partners': 'Rumah Sakit & Mitra',
    'stats.programs': 'Program Studi Pilihan',

    // Timeline Pendaftaran
    'timeline.tag': 'Alur Pendaftaran',
    'timeline.title': 'Tahapan Pendaftaran Mahasiswa Baru',
    'timeline.subtitle': 'Proses seleksi penerimaan mahasiswa baru yang transparan, mudah, dan terstruktur.',
    'timeline.step1': 'Pendaftaran Akun & Pengisian Biodata Online',
    'timeline.step2': 'Unggah Dokumen Persyaratan & Verifikasi',
    'timeline.step3': 'Uji Tulis / Tes Potensi Akademik & Wawancara',
    'timeline.step4': 'Pemeriksaan Kesehatan (Tes Kesehatan)',
    'timeline.step5': 'Pengumuman Kelulusan & Registrasi Ulang',

    // Detail Jalur
    'jalur_detail.syarat_title': 'Persyaratan Pendaftaran',
    'jalur_detail.langkah_title': 'Alur Pendaftaran',
    'jalur_detail.keunggulan_title': 'Keunggulan Jalur Ini',
    'jalur_detail.countdown_title': 'Batas Waktu Pendaftaran Gelombang',
    'jalur_detail.register_button': 'Daftar Jalur Ini Sekarang',

    // Detail Prodi
    'prodi_detail.hero_tag': 'Program Studi Pilihan',
    'prodi_detail.vision': 'Visi Program Studi',
    'prodi_detail.mission': 'Misi Program Studi',
    'prodi_detail.curriculum_title': 'Struktur Kurikulum',
    'prodi_detail.career_title': 'Prospek Karier & Peluang Kerja',
    'prodi_detail.usp_title': 'Keunggulan & Kekhasan Prodi',
    'prodi_detail.facility_title': 'Fasilitas Laboratorium Khusus',

    // Fasilitas Page
    'fasilitas_page.tag': 'Sarana & Prasarana',
    'fasilitas_page.title': 'Fasilitas Kampus STIKes Budi Luhur Cimahi',
    'fasilitas_page.subtitle': 'Menunjang kegiatan akademik, praktikum klinis, riset, dan pengembangan bakat mahasiswa.',
    'fasilitas_page.all': 'Semua Fasilitas',
    'fasilitas_page.lab': 'Laboratorium Medis',
    'fasilitas_page.campus': 'Gedung & Kelas',
    'fasilitas_page.public': 'Sarana Umum & Ibadah',

    // Prestasi Page
    'prestasi_page.tag': 'Galeri Juara',
    'prestasi_page.title': 'Prestasi Civitas Akademika',
    'prestasi_page.subtitle': 'Raihan prestasi membanggakan tingkat kota, provinsi, nasional hingga internasional.',
    'prestasi_page.all': 'Semua Prestasi',
    'prestasi_page.national': 'Nasional',
    'prestasi_page.international': 'Internasional',

    // Pembayaran Page
    'pembayaran_page.tag': 'Panduan Finansial',
    'pembayaran_page.title': 'Petunjuk Pembayaran & Registrasi Ulang',
    'pembayaran_page.subtitle': 'Informasi nomor rekening resmi, tata cara transfer bank, serta tahapan registrasi ulang.',
    'pembayaran_page.bank_title': 'Metode Pembayaran Resmi',
    'pembayaran_page.step_title': 'Tahapan Registrasi Ulang',
    'pembayaran_page.confirm_btn': 'Konfirmasi Pembayaran via CS',

    // Kontak & Footer
    'contact.address': 'Jl. Kerkof No. 243, Leuwigajah, Cimahi Selatan, Kota Cimahi, Jawa Barat 40532',
    'contact.phone': '(022) 667-4631',
    'contact.email': 'pmb@stikesbudiluhur.ac.id',
    'contact.wa': '0812-2122-3456',

  },

  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.faculty': 'Faculties & Programs',
    'nav.tracks': 'Tracks & Schedules',
    'nav.achievements': 'Achievements',
    'nav.facilities': 'Facilities',
    'nav.announcements': 'Announcements',
    'nav.register': 'Register',
    'nav.register_now': 'Register Now',
    'nav.guide': 'Admission Guide',
    'nav.payment_guide': 'Payment Guide',
    'nav.costs': 'Tuition & Fees',
    'nav.accreditation': 'Accreditation',
    'nav.activities': 'Activities',
    'nav.news': 'News',
    'nav.agenda': 'Agenda',

    // Common
    'common.learn_more': 'Learn More',
    'common.view_all': 'View All',
    'common.view_details': 'View Details',
    'common.read_more': 'Read More',
    'common.contact_us': 'Contact Us',
    'common.location': 'Campus Location',
    'common.quick_links': 'Quick Links',
    'common.programs': 'Study Programs',
    'common.navigation': 'Navigation',
    'common.copyright': 'All Rights Reserved',
    'common.all_rights': 'All rights reserved under applicable law.',
    'common.apply': 'Apply Now',
    'common.download_brochure': 'Download Brochure',
    'common.search': 'Search...',
    'common.loading': 'Loading data...',
    'common.degree': 'Degree Level',
    'common.accreditation_label': 'Accreditation',
    'common.motto': 'Excellence, Independence, and High Integrity',
    'common.back': 'Back',
    'common.reset_filter': 'Reset Filter',
    'common.view_more': 'View Details',

    // Hero
    'hero.tag': 'Admission STIKes Budi Luhur Cimahi',
    'hero.title': 'New Student Admission STIKes Budi Luhur Cimahi',
    'hero.subtitle': 'Achieve a brighter future in healthcare with STIKes Budi Luhur Cimahi. An outstanding, character-driven, and globally competitive health sciences institute.',
    'hero.cta_register': 'Register Now',
    'hero.cta_tracks': 'View Admission Tracks',
    'hero.wave_info': 'Academic Year 2026/2027 Admission is Now Open!',
    'hero.wave_desc': 'Limited slots available. Secure your future as a qualified professional healthcare provider.',

    // Academics / Faculty & Programs
    'academics.tag': 'Discover Your Path',
    'academics.title': 'Study Programs at STIKes Budi Luhur Cimahi',
    'academics.subtitle': 'STIKes Budi Luhur Cimahi provides diverse prominent healthcare academic programs, including:',
    'academics.faculty': 'Faculty',
    'academics.department': 'Department',
    'academics.nursing_faculty': 'Faculty of Nursing',
    'academics.nursing_dept': 'Department of Nursing',
    'academics.midwifery_faculty': 'Faculty of Midwifery',
    'academics.midwifery_dept': 'Department of Midwifery',
    'academics.career_center': 'Career Center & Language Center',
    'academics.career_center_title': 'International Career & Language Center',
    'academics.career_center_desc': 'Job placement in Japan & Germany, international certifications, and integrated foreign language training.',
    'academics.global_program': 'Japan & Germany Overseas Career Program',
    'academics.language_center': 'Language Center & Professional Certifications',
    'academics.rpl_program': 'Prior Learning Recognition (RPL) Program',

    // Program Studi List
    'study_programs_list.s1_keperawatan': 'Bachelor of Nursing (S1)',
    'study_programs_list.profesi_ners': 'Nurse Professional Program',
    'study_programs_list.d3_keperawatan': 'Diploma of Nursing (D3)',
    'study_programs_list.s1_kebidanan': 'Bachelor of Midwifery (S1)',
    'study_programs_list.profesi_bidan': 'Midwife Professional Program',
    'study_programs_list.d3_kebidanan': 'Diploma of Midwifery (D3)',

    'prodi.tag': 'Study Programs',
    'prodi.title': 'Featured Academic Programs',
    'prodi.subtitle': 'Empowered by contemporary curricula, experienced faculty, and health laboratories meeting international benchmarks.',
    'prodi.nurse_s1': 'Bachelor of Nursing (S1)',
    'prodi.ners': 'Professional Nursing (Ners)',
    'prodi.nurse_d3': 'Diploma in Nursing (D3)',
    'prodi.midwife_s1': 'Bachelor of Midwifery (S1)',
    'prodi.midwife_d3': 'Diploma in Midwifery (D3)',
    'prodi.midwife_prof': 'Professional Midwife',
    'prodi.curriculum': 'Curriculum & Learning',
    'prodi.career_prospect': 'Career Opportunities',
    'prodi.facilities': 'Program Facilities',
    'prodi.usp': 'Key Strengths & Advantages',

    // Admission Tracks
    'jalur.tag': 'Admission Tracks',
    'jalur.title': 'Admission Track Options',
    'jalur.subtitle': 'STIKes Budi Luhur Cimahi offers diverse admission tracks tailored to your academic background and achievements.',
    'jalur.period': 'Registration Period',
    'jalur.fee': 'Application Fee',
    'jalur.cta': 'Apply for This Track',
    'jalur.early_bird': 'Secure Your Spot Early',
    'jalur.early_desc': 'Early admission waves grant priority placement across admission tracks at STIKes Budi Luhur Cimahi, giving you peace of mind to prepare your studies.',

    // Tuition & Fees
    'biaya.tag': 'Financial Information',
    'biaya.title': 'Tuition & Fee Breakdown',
    'biaya.subtitle': 'Invest in your healthcare career with transparent tuition fees and affordable installment schemes at STIKes Budi Luhur Cimahi.',
    'biaya.term': 'Semester',
    'biaya.payment1': 'Phase 1 Payment',
    'biaya.payment2': 'Phase 2 Payment',
    'biaya.total': 'Total Fee',
    'biaya.button': 'Tuition Details',

    // Admission Guide
    'panduan.tag': 'Admission Guide',
    'panduan.title': 'Easy Steps to Apply at STIKes Budi Luhur Cimahi',
    'panduan.subtitle': 'Follow the step-by-step application process from creating an account, document submission, to selection announcement.',

    // Facilities
    'fasilitas.tag': 'Campus Facilities',
    'fasilitas.title': 'Integrated Campus & Laboratory Facilities',
    'fasilitas.subtitle': 'State-of-the-art facilities specifically designed to deliver optimal clinical practicum and academic experiences.',

    // Testimonials
    'testimoni.tag': 'Alumni Testimonials',
    'testimoni.title': 'Success Stories of Our Alumni',
    'testimoni.subtitle': 'Our graduates are actively serving in prominent public, private, and international healthcare institutions worldwide.',

    // Partnerships
    'mitra.tag': 'Strategic Partnerships',
    'mitra.title': 'Hospital & Institutional Network',
    'mitra.subtitle': 'Collaborating with dozens of leading hospitals, health agencies, and global partners for clinical internships and career placement.',

    // FAQ
    'faq.tag': 'General Questions',
    'faq.title': 'Frequently Asked Questions (FAQ)',
    'faq.subtitle': 'Find quick answers regarding admission guidelines, tuition fees, and academic life at STIKes Budi Luhur Cimahi.',

    // Announcements
    'pengumuman.tag': 'Official Announcements',
    'pengumuman.title': 'OFFICIAL ADMISSION ANNOUNCEMENTS',
    'pengumuman.subtitle': 'Check and download official selection results, registration notices, and academic schedules of STIKes Budi Luhur Cimahi.',
    'pengumuman.search_placeholder': 'Search Announcements...',
    'pengumuman.download': 'Download File',
    'pengumuman.no_attachment': 'No attachment',
    'pengumuman.empty_title': 'No Announcements Found',
    'pengumuman.empty_desc': 'There are currently no announcements matching your search criteria.',
    'pengumuman.loading': 'Loading latest announcements...',

    // News & Agenda
    'berita.tag': 'Campus News',
    'berita.title': 'Latest News & Articles',
    'berita.subtitle': 'Stay informed with the latest updates, inspiring stories, and campus notices from STIKes Budi Luhur Cimahi.',
    'agenda.tag': 'Academic Agenda',
    'agenda.title': 'Upcoming Events & Agenda',
    'agenda.subtitle': 'Schedule of upcoming academic activities, health seminars, and campus milestones.',

    // About Campus
    'about.tag': 'About Us',
    'about.title': 'STIKes Budi Luhur Cimahi Profile',
    'about.subtitle': 'Nurturing a new generation of healthcare professionals with high integrity, spiritual values, and global competitiveness.',
    'sejarah.tag': 'Milestones',
    'sejarah.title': 'A Brief History of STIKes Budi Luhur Cimahi',
    'sejarah.desc': 'Originating from the Nursing Health School (SPK) in 1981 under the Budi Luhur Cimahi Foundation, it has evolved into a premier institute of health sciences.',
    'visi.title': 'Institutional Vision',
    'misi.title': 'Institutional Mission',

    // Achievements
    'prestasi.tag': 'Student Achievements',
    'prestasi.title': 'Proud Achievements & Accolades',
    'prestasi.subtitle': 'Outstanding achievements of students and faculty of STIKes Budi Luhur Cimahi in regional, national, and international arenas.',

    // CTA
    'cta.title': 'Ready to Become a Professional Healthcare Provider?',
    'cta.subtitle': 'Realize your aspirations in health sciences with STIKes Budi Luhur Cimahi. Quick, simple, and secure online registration.',
    'cta.register': 'Register Now',
    'cta.consult': 'Consult via WhatsApp',
    // Mengapa & Keunggulan
    'mengapa.tag': 'Why Choose Us',
    'mengapa.title': 'Key Advantages of STIKes Budi Luhur Cimahi',
    'mengapa.subtitle': 'Our commitment to graduating competent, empathetic, and globally competitive healthcare professionals.',
    'mengapa.reason1_title': 'Excellent Accreditation Standards',
    'mengapa.reason1_desc': 'All study programs are fully accredited by LAM-PTKes and BAN-PT guaranteeing premier academic quality.',
    'mengapa.reason2_title': 'International Careers in Japan & Germany',
    'mengapa.reason2_desc': 'Dedicated language and orientation programs facilitating healthcare career placements overseas.',
    'mengapa.reason3_title': 'Extensive Teaching Hospital Network',
    'mengapa.reason3_desc': 'Close partnerships with top government hospitals, renowned private hospitals, and primary clinics across Indonesia.',
    'mengapa.reason4_title': 'State-of-the-Art Integrated Laboratories',
    'mengapa.reason4_desc': 'Nursing simulation labs, maternity labs, OSCE centers, CBT facilities, and a mini hospital environment.',

    // Statistik
    'stats.students': 'Active Students',
    'stats.alumni': 'Employed Alumni',
    'stats.partners': 'Hospital & Institutional Partners',
    'stats.programs': 'Featured Study Programs',

    // Timeline Pendaftaran
    'timeline.tag': 'Application Process',
    'timeline.title': 'Steps to Apply for New Students',
    'timeline.subtitle': 'A transparent, straightforward, and clearly structured student admission selection procedure.',
    'timeline.step1': 'Account Registration & Online Biodata Submission',
    'timeline.step2': 'Document Upload & Credential Verification',
    'timeline.step3': 'Academic Potential Test & Online/Offline Interview',
    'timeline.step4': 'Medical Check-up Examination',
    'timeline.step5': 'Admission Announcement & Re-registration',

    // Detail Jalur
    'jalur_detail.syarat_title': 'Application Requirements',
    'jalur_detail.langkah_title': 'Application Procedure',
    'jalur_detail.keunggulan_title': 'Track Key Advantages',
    'jalur_detail.countdown_title': 'Registration Wave Deadline',
    'jalur_detail.register_button': 'Apply for This Track Now',

    // Detail Prodi
    'prodi_detail.hero_tag': 'Academic Study Program',
    'prodi_detail.vision': 'Program Vision',
    'prodi_detail.mission': 'Program Mission',
    'prodi_detail.curriculum_title': 'Curriculum Structure',
    'prodi_detail.career_title': 'Career Prospects & Employment Horizons',
    'prodi_detail.usp_title': 'Distinctive Advantages',
    'prodi_detail.facility_title': 'Dedicated Specialty Laboratories',

    // Fasilitas Page
    'fasilitas_page.tag': 'Campus Infrastructure',
    'fasilitas_page.title': 'STIKes Budi Luhur Cimahi Campus Facilities',
    'fasilitas_page.subtitle': 'Fostering academic excellence, clinical practicum, research, and holistic student talents.',
    'fasilitas_page.all': 'All Facilities',
    'fasilitas_page.lab': 'Medical Laboratories',
    'fasilitas_page.campus': 'Buildings & Classrooms',
    'fasilitas_page.public': 'Public & Spiritual Facilities',

    // Prestasi Page
    'prestasi_page.tag': 'Hall of Fame',
    'prestasi_page.title': 'Academic & Student Achievements',
    'prestasi_page.subtitle': 'Honors and proud accomplishments across municipal, provincial, national, and international stages.',
    'prestasi_page.all': 'All Achievements',
    'prestasi_page.national': 'National',
    'prestasi_page.international': 'International',

    // Pembayaran Page
    'pembayaran_page.tag': 'Financial Instructions',
    'pembayaran_page.title': 'Payment Guide & Re-registration Procedures',
    'pembayaran_page.subtitle': 'Official university bank accounts, transfer instructions, and re-registration milestones.',
    'pembayaran_page.bank_title': 'Official Payment Channels',
    'pembayaran_page.step_title': 'Re-registration Steps',
    'pembayaran_page.confirm_btn': 'Confirm Payment via Support',

    // Kontak & Footer
    'contact.address': 'Jl. Kerkof No. 243, Leuwigajah, South Cimahi, Cimahi City, West Java 40532',
    'contact.phone': '+62 (22) 667-4631',
    'contact.email': 'pmb@stikesbudiluhur.ac.id',
    'contact.wa': '0812-2122-3456',

  }
};
