import ApiService from "@/core/services/ApiService";
import { createRouter, type RouteRecordRaw } from "vue-router";
import { createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Pendaftaran Mahasiswa Baru (PMB) & Admisi',
        component: () => import('@/views/beranda/Beranda.vue'),
        meta: {
            pageTitle: 'Pendaftaran Mahasiswa Baru (PMB) & Admisi',
            metaTags: [
                {
                    name: 'description',
                    content: 'Universitas BTH berkomitmen mencetak lulusan yang menguasai integrasi ilmu pengetahuan dan kecerdasan buatan untuk menjawab tantangan industri di tingkat global.'
                },
                {
                    name: 'keywords',
                    content: 'PMB BTH, Universitas BTH, Pendaftaran Mahasiswa Baru, Kuliah BTH, Fakultas BTH'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: 'Logo'
                }
            ]
        }
    },
    {
        path: '/fakultas',
        name: 'Fakultas',
        component: () => import('@/views/fakultas/Fakultas.vue'),
        meta: {
            pageTitle: 'Daftar Fakultas',
            metaTags: [
                {
                    name: 'description',
                    content: 'Jelajahi berbagai Fakultas unggulan di Universitas BTH. Temukan bidang ilmu yang sesuai dengan minat dan karir masa depan Anda.'
                },
                {
                    name: 'keywords',
                    content: 'Fakultas BTH, Program Studi BTH, Jurusan Kuliah, Pilihan Fakultas'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: 'Logo'
                }
            ]
        }
    },
    {
        path: '/fakultas/:slug',
        name: 'Fakultas Detail',
        component: () => import('@/views/fakultasDetail/FakultasDetail.vue'),
        meta: {
            pageTitle: 'Detail Fakultas',
            metaTags: [
                {
                    name: 'description',
                    content: 'Informasi mendalam tentang Fakultas, Program Studi, dosen, dan prospek karir di Universitas BTH.'
                },
                {
                    name: 'keywords',
                    content: 'Fakultas BTH, Info Program Studi, Prospek Karir'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: 'Logo'
                }
            ]
        }
    },
    {
        path: '/prodi/:slug',
        name: 'Prodi',
        component: () => import('@/views/prodi/Prodi.vue'),
        meta: {
            pageTitle: 'Detail Program Studi',
            metaTags: [
                {
                    name: 'description',
                    content: 'Lihat kurikulum, keunggulan, dan peluang kerja dari Program Studi pilihan di Universitas BTH.'
                },
                {
                    name: 'keywords',
                    content: 'Program Studi BTH, Kurikulum Kuliah, Prospek Kerja Lulusan'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: 'Logo'
                }
            ]
        }
    },
    {
        path: '/jalur-dan-jadwal',
        name: 'Jalur dan Jadwal',
        component: () => import('@/views/jalur/Jalur.vue'),
        meta: {
            pageTitle: 'Jalur dan Jadwal Pendaftaran',
            metaTags: [
                {
                    name: 'description',
                    content: 'Temukan semua jalur pendaftaran PMB Universitas BTH, termasuk informasi jadwal, syarat, dan tanggal penting pendaftaran.'
                },
                {
                    name: 'keywords',
                    content: 'Jalur Pendaftaran BTH, Jadwal PMB, Syarat Pendaftaran Kuliah, Tanggal Penting BTH'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: 'Logo'
                }
            ]
        }
    },
    {
        path: '/jalur/:slug',
        name: 'Jalur Detail',
        component: () => import('@/views/jalurDetail/JalurDetail.vue'),
        meta: {
            pageTitle: 'Detail Jalur Pendaftaran',
            metaTags: [
                {
                    name: 'description',
                    content: 'Informasi rinci mengenai salah satu jalur pendaftaran PMB Universitas BTH, termasuk persyaratan khusus dan prosedur pendaftaran.'
                },
                {
                    name: 'keywords',
                    content: 'Syarat Pendaftaran BTH, Prosedur PMB, Pendaftaran Kuliah'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: 'Logo'
                }
            ]
        }
    },
    {
        path: '/berita',
        name: 'Berita',
        component: () => import('@/views/berita/Berita.vue'),
        meta: {
            pageTitle: 'Berita Terbaru',
            metaTags: [
                {
                    name: 'description',
                    content: 'Ikuti perkembangan terbaru Universitas BTH. Dapatkan berita, pengumuman, dan informasi penting seputar kampus dan PMB.'
                },
                {
                    name: 'keywords',
                    content: 'Berita BTH, Pengumuman PMB, Info Kampus Terbaru'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: 'Logo'
                }
            ]
        }
    },
    {
        path: '/berita/:slug',
        name: 'Berita Detail',
        component: () => import('@/views/beritaDetail/BeritaDetail.vue'),
        meta: {
            pageTitle: 'Detail Berita',
            metaTags: [
                {
                    name: 'description',
                    content: 'Baca artikel lengkap dan informasi mendalam mengenai kegiatan, prestasi, atau pengumuman penting dari Universitas BTH.'
                },
                {
                    name: 'keywords',
                    content: 'Berita Kampus, Artikel BTH, Informasi Detail Universitas'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: 'Logo'
                }
            ]
        }
    },
    {
        path: '/agenda/:slug',
        name: 'Agenda Detail',
        component: () => import('@/views/agendaDetail/AgendaDetail.vue'),
        meta: {
            pageTitle: 'Detail Agenda',
            metaTags: [
                {
                    name: 'description',
                    content: 'Informasi lengkap tentang acara atau agenda penting yang akan datang di Universitas BTH, termasuk tanggal, waktu, dan lokasi.'
                },
                {
                    name: 'keywords',
                    content: 'Jadwal Acara BTH, Event Kampus, Kegiatan Mahasiswa'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: 'Logo'
                }
            ]
        }
    },
    {
        path: '/agenda',
        name: 'Agenda',
        component: () => import('@/views/agenda/Agenda.vue'),
        meta: {
            pageTitle: 'Daftar Agenda dan Acara',
            metaTags: [
                {
                    name: 'description',
                    content: 'Jelajahi kalender akademik, kegiatan, dan acara penting lainnya yang diselenggarakan oleh Universitas BTH.'
                },
                {
                    name: 'keywords',
                    content: 'Agenda BTH, Kalender Akademik, Acara Kampus'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: 'Logo'
                }
            ]
        }
    },
    {
        path: '/fasilitas',
        name: 'Fasilitas',
        component: () => import('@/views/fasilitas/Fasilitas.vue'),
        meta: {
            pageTitle: 'Fasilitas Kampus',
            metaTags: [
                {
                    name: 'description',
                    content: 'Lihat berbagai fasilitas modern dan lengkap yang mendukung proses belajar dan pengembangan diri mahasiswa di Universitas BTH.'
                },
                {
                    name: 'keywords',
                    content: 'Fasilitas BTH, Laboratorium Kampus, Perpustakaan BTH, Sarana Prasarana'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: 'Logo'
                }
            ]
        }
    },
    // {
    //     path: '/testimoni',
    //     name: 'Testimoni',
    //     component: () => import('@/views/testimoni/Testimonials.vue'),
    //     meta: {
    //         pageTitle: 'Testimoni Alumni & Mahasiswa',
    //         metaTags: [
    //             {
    //                 name: 'description',
    //                 content: 'Dengarkan kisah sukses dan pengalaman berharga dari alumni dan mahasiswa Universitas BTH.'
    //             },
    //             {
    //                 name: 'keywords',
    //                 content: 'Testimoni BTH, Kisah Alumni, Pengalaman Mahasiswa BTH'
    //             },
    //             {
    //                 property: 'og:type',
    //                 content: 'website'
    //             },
    //             {
    //                 property: 'og:image',
    //                 content: 'Logo'
    //             }
    //         ]
    //     }
    // },
    {
        path: '/tentang',
        name: 'Tentang',
        component: () => import('@/views/tentang/Tentang.vue'),
        meta: {
            pageTitle: 'Tentang Universitas BTH',
            metaTags: [
                {
                    name: 'description',
                    content: 'Bangun Masa Depan Gemilang Di Universitas Bakti Tunas Husada Mencetak Profesional yang Inovatif Berkarakter di Bidang Kesehatan, Teknologi, dan Bisnis.'
                },
                {
                    name: 'keywords',
                    content: 'Visi Misi BTH, Sejarah Kampus, Profil Universitas BTH'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: 'Logo'
                }
            ]
        }
    },
    {
        path: '/kegiatan',
        name: 'Kegiatan',
        component: () => import('@/views/kegiatan/Kegiatan.vue'),
        meta: {
            pageTitle: 'Kegiatan Mahasiswa',
            metaTags: [
                {
                    name: 'description',
                    content: 'Lihat berbagai kegiatan ekstrakurikuler, organisasi, dan event yang memperkaya pengalaman akademik dan non-akademik mahasiswa BTH.'
                },
                {
                    name: 'keywords',
                    content: 'Kegiatan Kampus, UKM BTH, Organisasi Mahasiswa, Ekstrakurikuler'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: 'Logo'
                }
            ]
        }
    },
    {
        path: '/prestasi',
        name: 'Prestasi',
        component: () => import('@/views/prestasi/Prestasi.vue'),
        meta: {
            pageTitle: 'Prestasi Kampus & Mahasiswa',
            metaTags: [
                {
                    name: 'description',
                    content: 'Saksikan berbagai penghargaan dan prestasi yang telah diraih oleh mahasiswa dan civitas akademika Universitas BTH di tingkat nasional maupun internasional.'
                },
                {
                    name: 'keywords',
                    content: 'Prestasi BTH, Penghargaan Mahasiswa, Kampus Berprestasi'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: 'Logo'
                }
            ]
        }
    },
    {
        path: '/akademik',
        name: 'Akademik',
        component: () => import('@/views/akademik/Akademik.vue'),
        meta: {
            pageTitle: 'Informasi Akademik',
            metaTags: [
                {
                    name: 'description',
                    content: 'Universitas BTH mengembangkan pendidikan berbasis Ekosistem Kolaborasi, di mana Fakultas Ilmu Kesehatan, Farmasi, serta Teknologi dan Bisnis bersinergi dalam satu lingkungan akademik. Pendekatan ini membiasakan mahasiswa bekerja dalam tim multidisiplin untuk menyelesaikan tantangan nyata, sejalan dengan komitmen kami terhadap pendidikan inovatif berstandar global.'
                },
                {
                    name: 'keywords',
                    content: 'Kurikulum BTH, Sistem Kuliah, Kalender Akademik BTH'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: 'Logo'
                }
            ]
        }
    },
    {
        path: '/sambutan',
        name: 'SambutanDetail',
        component: () => import('@/views/sambutanDetail/SambutanDetail.vue'),
        meta: {
            pageTitle: 'Sambutan Rektor/Pimpinan',
            metaTags: [
                {
                    name: 'description',
                    content: 'Pesan dan sambutan dari Rektor/Pimpinan Universitas BTH mengenai visi pendidikan dan harapan bagi calon mahasiswa baru.'
                },
                {
                    name: 'keywords',
                    content: 'Sambutan Rektor BTH, Pesan Pimpinan Kampus, Visi Pendidikan BTH'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: 'Logo'
                }
            ]
        }
    },
    {
        path: '/akreditasi',
        name: 'Akreditasi',
        component: () => import('@/views/akreditasi/Akreditasi.vue'),
        meta: {
            pageTitle: 'Informasi Akreditasi',
            metaTags: [
                {
                    name: 'description',
                    content: 'Lihat status akreditasi institusi dan program studi di Universitas BTH. Jaminan kualitas pendidikan untuk masa depan Anda.'
                },
                {
                    name: 'keywords',
                    content: 'Akreditasi BTH, Akreditasi Institusi, Akreditasi Prodi, Kualitas Pendidikan'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: 'Logo'
                }
            ]
        }
    },
    {
        path: '/panduan',
        name: 'Panduan',
        component: () => import('@/views/panduan/Panduan.vue'),
        meta: {
            pageTitle: 'Panduan PMB & Akreditasi Universitas BTH',
            metaTags: [
                {
                    name: 'description',
                    content: 'Cek panduan penerimaan mahasiswa baru (PMB) dan status akreditasi Institusi & Program Studi Universitas BTH terbaru. Wujudkan pendidikan berkualitas Anda di BTH!.'
                },
                {
                    name: 'keywords',
                    content: 'panduan pmb bth, akreditasi universitas bth, status prodi bth, syarat pendaftaran bth, kualitas pendidikan'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: 'Logo'
                }
            ]
        }
    },
    {
        path: '/panduan-pembayaran-registrasi-ulang',
        name: 'Panduan Pembayaran Registrasi Ulang',
        component: () => import('@/views/pembayaran/Pembayaran.vue'),
        meta: {
            pageTitle: 'Panduan PMB & Akreditasi Universitas BTH',
            metaTags: [
                {
                    name: 'description',
                    content: 'Cek panduan penerimaan mahasiswa baru (PMB) dan status akreditasi Institusi & Program Studi Universitas BTH terbaru. Wujudkan pendidikan berkualitas Anda di BTH!.'
                },
                {
                    name: 'keywords',
                    content: 'panduan pmb bth, akreditasi universitas bth, status prodi bth, syarat pendaftaran bth, kualitas pendidikan'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: 'Logo'
                }
            ]
        }
    },
    {
        path: '/biaya',
        name: 'Biaya',
        component: () => import('@/views/biaya/Biaya.vue'),
        meta: {
            pageTitle: 'Biaya Kuliah Universitas BTH 2024/2025',
            metaTags: [
                {
                    name: 'description',
                    content: 'Lihat rincian lengkap biaya kuliah per program studi dan institusi di Universitas BTH untuk tahun 2024/2025. Investasi terjangkau untuk masa depan terbaik Anda!.'
                },
                {
                    name: 'keywords',
                    content: 'biaya kuliah universitas bth, rincian biaya prodi bth, uang semester bth, daftar biaya pmb bth, kuliah terjangkau'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: 'Logo'
                }
            ]
        }
    },
    {
        path: '/pengumuman',
        name: 'Pengumuman',
        component: () => import('@/views/pengumuman/Pengumuman.vue'),
        meta: {
            pageTitle: 'Biaya Kuliah Universitas BTH 2024/2025',
            metaTags: [
                {
                    name: 'description',
                    content: 'Dapatkan pengumuman resmi terbaru dari Universitas BTH. Cek informasi penting mengenai jadwal akademik, pendaftaran, kegiatan mahasiswa, hingga kebijakan kampus terbaru.'
                },
                {
                    name: 'keywords',
                    content: 'pengumuman BTH, informasi kampus BTH, jadwal akademik BTH, berita BTH, kegiatan mahasiswa BTH'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: "Logo"
                }
            ]
        }
    },
    // {
    //     path: '/:pathMatch(.*)*',
    //     component: () => import('@/components/sections/404Section.vue'),
    //     meta: {
    //         pageTitle: 'Halaman Tidak Ditemukan'
    //     }
    // }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, _, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            };
        } else {
            return { top: 0, behavior: 'smooth' };
        }
    }
});

router.beforeEach((to, _, next) => {
    const appName = import.meta.env.VITE_APP_NAME || 'PMB Universitas BTH';

    document.title = to.meta.pageTitle
        ? `${to.meta.pageTitle} - ${appName}`
        : appName;

    const existingMeta = document.querySelectorAll(
        'meta[name="description"], meta[property^="og:"], meta[name^="twitter:"]'
    );
    existingMeta.forEach(meta => meta.remove());

    if (to.meta.metaTags) {
        const metaTags = to.meta.metaTags as Array<{
            name?: string;
            property?: string;
            content: string;
        }>;

        metaTags.forEach(tag => {
            const meta = document.createElement('meta');
            if (tag.name) meta.setAttribute('name', tag.name);
            if (tag.property) meta.setAttribute('property', tag.property);
            meta.setAttribute('content', tag.content);
            document.head.appendChild(meta);
        });
    }

    ApiService.setHeader();

    next();
});

export default router;