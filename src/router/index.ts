import ApiService from "@/core/services/ApiService";
import { createRouter, type RouteRecordRaw } from "vue-router";
import { createWebHistory } from "vue-router";
import Beranda from "@/views/beranda/Beranda.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Pendaftaran Mahasiswa Baru (PMB) & Admisi',
        component: Beranda,
        meta: {
            pageTitle: 'Pendaftaran Mahasiswa Baru (PMB) & Admisi',
            metaTags: [
                {
                    name: 'description',
                    content: 'STIKes Budi Luhur Cimahi berkomitmen mencetak lulusan tenaga kesehatan yang profesional, kompeten, berakhlak mulia, dan siap bersaing di tingkat nasional maupun global.'
                },
                {
                    name: 'keywords',
                    content: 'PMB STIKes Budi Luhur, STIKes Budi Luhur Cimahi, Pendaftaran Mahasiswa Baru, Kuliah Kesehatan Cimahi, Program Studi STIKes'
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
            pageTitle: 'Daftar Program Studi',
            metaTags: [
                {
                    name: 'description',
                    content: 'Jelajahi berbagai Program Studi unggulan di STIKes Budi Luhur Cimahi. Temukan bidang ilmu kesehatan yang sesuai dengan minat dan karir masa depan Anda.'
                },
                {
                    name: 'keywords',
                    content: 'Program Studi STIKes Budi Luhur, Jurusan Kuliah Kesehatan, Pilihan Prodi, STIKes Cimahi'
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
            pageTitle: 'Detail Program Studi',
            metaTags: [
                {
                    name: 'description',
                    content: 'Informasi mendalam tentang program studi, dosen, dan prospek karir di STIKes Budi Luhur Cimahi.'
                },
                {
                    name: 'keywords',
                    content: 'STIKes Budi Luhur Cimahi, Info Program Studi, Prospek Karir Kesehatan'
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
                    content: 'Lihat kurikulum, keunggulan, dan peluang kerja dari Program Studi pilihan di STIKes Budi Luhur Cimahi.'
                },
                {
                    name: 'keywords',
                    content: 'Program Studi STIKes Budi Luhur, Kurikulum Kuliah, Prospek Kerja Tenaga Kesehatan'
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
                    content: 'Temukan semua jalur pendaftaran PMB STIKes Budi Luhur Cimahi, termasuk informasi jadwal, syarat, dan tanggal penting pendaftaran.'
                },
                {
                    name: 'keywords',
                    content: 'Jalur Pendaftaran STIKes Budi Luhur, Jadwal PMB, Syarat Pendaftaran Kuliah, Tanggal Penting PMB'
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
                    content: 'Informasi rinci mengenai salah satu jalur pendaftaran PMB STIKes Budi Luhur Cimahi, termasuk persyaratan khusus dan prosedur pendaftaran.'
                },
                {
                    name: 'keywords',
                    content: 'Syarat Pendaftaran STIKes, Prosedur PMB, Pendaftaran Kuliah STIKes Budi Luhur'
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
                    content: 'Ikuti perkembangan terbaru STIKes Budi Luhur Cimahi. Dapatkan berita, pengumuman, dan informasi penting seputar kampus dan PMB.'
                },
                {
                    name: 'keywords',
                    content: 'Berita STIKes Budi Luhur, Pengumuman PMB, Info Kampus Cimahi Terbaru'
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
                    content: 'Baca artikel lengkap dan informasi mendalam mengenai kegiatan, prestasi, atau pengumuman penting dari STIKes Budi Luhur Cimahi.'
                },
                {
                    name: 'keywords',
                    content: 'Berita Kampus Kesehatan, Artikel STIKes Budi Luhur, Informasi Detail Institusi'
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
                    content: 'Informasi lengkap tentang acara atau agenda penting yang akan datang di STIKes Budi Luhur Cimahi, termasuk tanggal, waktu, dan lokasi.'
                },
                {
                    name: 'keywords',
                    content: 'Jadwal Acara STIKes Budi Luhur, Event Kampus, Kegiatan Mahasiswa Kesehatan'
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
                    content: 'Jelajahi kalender akademik, kegiatan, dan acara penting lainnya yang diselenggarakan oleh STIKes Budi Luhur Cimahi.'
                },
                {
                    name: 'keywords',
                    content: 'Agenda STIKes Budi Luhur, Kalender Akademik, Acara Kampus'
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
                    content: 'Lihat berbagai fasilitas modern dan lengkap yang mendukung proses belajar dan pengembangan diri mahasiswa di STIKes Budi Luhur Cimahi.'
                },
                {
                    name: 'keywords',
                    content: 'Fasilitas STIKes Budi Luhur, Laboratorium Keperawatan Kebidanan, Perpustakaan, Sarana Prasarana'
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
    //                 content: 'Dengarkan kisah sukses dan pengalaman berharga dari alumni dan mahasiswa STIKes Budi Luhur Cimahi.'
    //             },
    //             {
    //                 name: 'keywords',
    //                 content: 'Testimoni STIKes Budi Luhur, Kisah Alumni, Pengalaman Mahasiswa'
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
            pageTitle: 'Tentang STIKes Budi Luhur Cimahi',
            metaTags: [
                {
                    name: 'description',
                    content: 'Bangun Masa Depan Gemilang di STIKes Budi Luhur Cimahi, Mencetak Tenaga Kesehatan Profesional, Inovatif, dan Berkarakter.'
                },
                {
                    name: 'keywords',
                    content: 'Visi Misi STIKes Budi Luhur, Sejarah Kampus, Profil STIKes Budi Luhur Cimahi'
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
                    content: 'Lihat berbagai kegiatan ekstrakurikuler, organisasi, dan event yang memperkaya pengalaman akademik dan non-akademik mahasiswa STIKes Budi Luhur Cimahi.'
                },
                {
                    name: 'keywords',
                    content: 'Kegiatan Kampus, UKM STIKes Budi Luhur, Organisasi Mahasiswa, Ekstrakurikuler'
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
                    content: 'Saksikan berbagai penghargaan dan prestasi yang telah diraih oleh mahasiswa dan civitas akademika STIKes Budi Luhur Cimahi di tingkat nasional maupun internasional.'
                },
                {
                    name: 'keywords',
                    content: 'Prestasi STIKes Budi Luhur, Penghargaan Mahasiswa, Kampus Kesehatan Berprestasi'
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
                    content: 'STIKes Budi Luhur Cimahi menyelenggarakan pendidikan tinggi kesehatan yang komprehensif, berbasis kompetensi dan nilai-nilai luhur kemanusiaan dengan kurikulum terkini dan fasilitas laboratorium terpadu.'
                },
                {
                    name: 'keywords',
                    content: 'Kurikulum STIKes Budi Luhur, Sistem Kuliah, Kalender Akademik STIKes'
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
            pageTitle: 'Sambutan Ketua STIKes',
            metaTags: [
                {
                    name: 'description',
                    content: 'Pesan dan sambutan dari Ketua/Pimpinan STIKes Budi Luhur Cimahi mengenai visi pendidikan kesehatan dan harapan bagi calon mahasiswa baru.'
                },
                {
                    name: 'keywords',
                    content: 'Sambutan Ketua STIKes Budi Luhur, Pesan Pimpinan Kampus, Visi Pendidikan STIKes'
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
                    content: 'Lihat status akreditasi institusi dan program studi di STIKes Budi Luhur Cimahi. Jaminan kualitas pendidikan untuk masa depan Anda.'
                },
                {
                    name: 'keywords',
                    content: 'Akreditasi STIKes Budi Luhur, Akreditasi Institusi, Akreditasi LAM-PTKes, Kualitas Pendidikan'
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
            pageTitle: 'Panduan PMB & Akreditasi STIKes Budi Luhur Cimahi',
            metaTags: [
                {
                    name: 'description',
                    content: 'Cek panduan penerimaan mahasiswa baru (PMB) dan status akreditasi Institusi & Program Studi STIKes Budi Luhur Cimahi terbaru. Wujudkan pendidikan berkualitas Anda di STIKes!'
                },
                {
                    name: 'keywords',
                    content: 'panduan pmb stikes, akreditasi stikes budi luhur, status prodi stikes, syarat pendaftaran stikes, kualitas pendidikan'
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
            pageTitle: 'Panduan Pembayaran Registrasi Ulang STIKes Budi Luhur Cimahi',
            metaTags: [
                {
                    name: 'description',
                    content: 'Cek panduan pembayaran registrasi ulang penerimaan mahasiswa baru (PMB) STIKes Budi Luhur Cimahi terbaru.'
                },
                {
                    name: 'keywords',
                    content: 'panduan pembayaran registrasi ulang, pmb stikes budi luhur, biaya registrasi stikes'
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
            pageTitle: 'Biaya Kuliah STIKes Budi Luhur Cimahi',
            metaTags: [
                {
                    name: 'description',
                    content: 'Lihat rincian lengkap biaya kuliah per program studi di STIKes Budi Luhur Cimahi. Investasi terjangkau untuk masa depan terbaik Anda!'
                },
                {
                    name: 'keywords',
                    content: 'biaya kuliah stikes budi luhur, rincian biaya prodi stikes, uang semester stikes, daftar biaya pmb stikes, kuliah kesehatan terjangkau'
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
            pageTitle: 'Pengumuman Kelulusan & Informasi PMB STIKes Budi Luhur Cimahi',
            metaTags: [
                {
                    name: 'description',
                    content: 'Dapatkan pengumuman resmi terbaru dari STIKes Budi Luhur Cimahi. Cek informasi penting mengenai jadwal akademik, kelulusan pendaftaran, kegiatan mahasiswa, hingga kebijakan kampus terbaru.'
                },
                {
                    name: 'keywords',
                    content: 'pengumuman STIKes, informasi kampus STIKes Budi Luhur, jadwal akademik stikes, berita stikes, kegiatan mahasiswa stikes'
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
    const appName = import.meta.env.VITE_APP_NAME || 'PMB STIKes Budi Luhur Cimahi';

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