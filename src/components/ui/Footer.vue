<script setup lang="ts">
import Logo from '@/assets/logo/logo-bth.webp'

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const handleClick = (url: string) => {
    window.open(url, '_blank');
};
</script>

<template>
    <footer class="px-4 pt-4 pb-32 md:px-6 md:pt-6 md:pb-32 lg:p-8 space-y-0 md:space-y-8">
        <!-- Tablet & Dekstop -->
        <div class="w-full hidden md:flex justify-between gap-4 md:gap-6 lg:gap-12">
            <div class="flex flex-col gap-6 md:gap-8">
                <img :src="Logo" alt="Logo BTH University" loading="lazy"
                    class="w-20 h-20 lg:w-24 lg:h-24 object-contain">
                <h2 class="text-sm md:text-sm lg:text-base font-medium">Transforming New Generation</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 lg:gap-6">
                <div class="space-y-4 md:space-y-5 lg:space-y-6">
                    <h2 class="font-semibold text-sm lg:text-base">Navigasi</h2>
                    <div class="flex flex-col gap-2 lg:gap-4 font-light text-gray-500 text-sm lg:text-base">
                        <RouterLink to="/">Beranda</RouterLink>
                        <RouterLink to="/tentang">Tentang</RouterLink>
                        <RouterLink to="/panduan">Panduan Pendaftaran</RouterLink>
                    <RouterLink to="/panduan-pembayaran-registrasi-ulang">Panduan Pembayaran Registrasi Ulang</RouterLink>
                        <RouterLink to="/jalur-dan-jadwal">Jalur & Jadwal</RouterLink>
                        <RouterLink to="/fakultas">Fakultas & Prodi</RouterLink>
                        <RouterLink to="/biaya">Biaya</RouterLink>
                    </div>
                </div>
                <div class="space-y-4 md:space-y-5 lg:space-y-6">
                    <h2 class="font-semibold text-sm lg:text-base opacity-0">Navigasi</h2>
                    <div class="flex flex-col gap-2 lg:gap-4 font-light text-gray-500 text-sm lg:text-base">
                        <RouterLink to="/pengumuman">Pengumuman</RouterLink>
                        <RouterLink to="/akreditasi">Akreditasi</RouterLink>
                        <RouterLink to="/fasilitas">Fasilitas</RouterLink>
                        <RouterLink to="/kegiatan">Kegiatan</RouterLink>
                        <RouterLink to="/berita">Berita</RouterLink>
                        <RouterLink to="/agenda">Agenda</RouterLink>
                    </div>
                </div>
                <div class="space-y-4 md:space-y-5 lg:space-y-6">
                    <h2 class="font-semibold text-sm lg:text-base">Fakultas</h2>
                    <div class="flex flex-col gap-2 lg:gap-4 font-light text-gray-500 text-sm lg:text-base">
                        <RouterLink to="/fakultas/fakultas-farmasi">Fakultas Farmasi</RouterLink>
                        <RouterLink to="/fakultas/fakultas-teknologi-dan-bisnis">Fakultas Teknologi dan
                            Bisnis</RouterLink>
                        <RouterLink to="/fakultas/fakultas-kesehatan">Fakultas Kesehatan</RouterLink>
                    </div>
                </div>
                <div class="space-y-4 md:space-y-5 lg:space-y-6">
                    <h2 class="font-semibold text-sm lg:text-base">Lokasi</h2>
                    <div class="flex flex-col gap-2 lg:gap-4 font-light text-gray-500 text-sm lg:text-base">
                        <a href="https://maps.app.goo.gl/qdeRRsHfbTNCuhRdA" target="_blank">Jl. Letjen Mashudi
                            No.20,<br /> Setiaratu, Kec. Cibeureum,<br /> Kab. Tasikmalaya, Jawa Barat 46196</a>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M2 8L8.10764 12.6122L8.10967 12.6139C8.78785 13.1112 9.12714 13.36 9.49876 13.4561C9.82723 13.5411 10.1725 13.5411 10.501 13.4561C10.8729 13.3599 11.2132 13.1104 11.8926 12.6122L18 8M17.8002 7.03944L12.2012 2.55657C11.506 1.99995 11.1581 1.72174 10.7715 1.61126C10.4304 1.51378 10.0692 1.50861 9.72552 1.59661C9.33603 1.69634 8.98087 1.96473 8.27052 2.50188L2.26953 7.03967C1.8038 7.39184 1.57123 7.56804 1.40332 7.7906C1.2546 7.98772 1.14377 8.21065 1.07624 8.44817C1 8.71633 1 9.00832 1 9.59221V15.8001C1 16.9202 1 17.4805 1.21799 17.9083C1.40973 18.2847 1.71547 18.5904 2.0918 18.7822C2.5192 18.9999 3.07899 18.9999 4.19691 18.9999H15.8031C16.921 18.9999 17.48 18.9999 17.9074 18.7822C18.2837 18.5904 18.5905 18.2844 18.7822 17.9081C19 17.4807 19 16.9214 19 15.8035V9.52647C19 8.96932 19 8.68902 18.9287 8.4301C18.8651 8.19922 18.7595 7.98161 18.619 7.78768C18.4604 7.56876 18.2409 7.39227 17.8002 7.03944Z"
                                stroke="#F03C06" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h2 class="text-sm md:text-sm lg:text-base font-medium">info-pmb@universitas-bth.ac.id</h2>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile -->
        <div class="flex md:hidden flex-col items-center gap-4 text-gstart">
            <div @click="scrollToTop" class="w-12 h-12 rounded-full bg-primary flex justify-center items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                    <path
                        d="M1.16671 14.68L6.50004 9.34668L11.8334 14.68M1.16671 6.68001L6.50004 1.34668L11.8334 6.68001"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>

            <div class="w-full flex flex-col justify-center items-center gap-6 md:gap-8">
                <img :src="Logo" alt="Logo BTH University" loading="lazy" class="w-20 lg:w-24 object-contain">
            </div>

            <div class="w-full flex justify-around items-start gap-2">
                <div class="flex flex-col gap-4">
                    <RouterLink to="/">Beranda</RouterLink>
                    <RouterLink to="/tentang">Tentang</RouterLink>
                    <RouterLink to="/panduan">Panduan Pendaftaran</RouterLink>
                    <RouterLink to="/panduan-pembayaran-registrasi-ulang">Panduan Pembayaran Registrasi Ulang</RouterLink>
                    <RouterLink to="/jalur-dan-jadwal">Jalur & Jadwal</RouterLink>
                    <RouterLink to="/fakultas">Fakultas & Prodi</RouterLink>
                    <RouterLink to="/biaya">Biaya</RouterLink>
                </div>
                <div class="flex flex-col gap-4">
                <RouterLink to="/pengumuman">Pengumuman</RouterLink>
                    <RouterLink to="/akreditasi">Akreditasi</RouterLink>
                    <RouterLink to="/fasilitas">Fasilitas</RouterLink>
                    <RouterLink to="/kegiatan">Kegiatan</RouterLink>
                    <RouterLink to="/berita">Berita</RouterLink>
                    <RouterLink to="/agenda">Agenda</RouterLink>
                </div>
            </div>
        </div>

        <div
            class="w-full pt-8 md:border-t border-gray-500 flex flex-col-reverse items-center gap-6 md:flex-row md:justify-between md:items-center">
            <p class="text-sm md:text-base lg:text-lg text-gray-500">© 2025</p>
            <div class="flex gap-4">
                <div @click="handleClick('https://x.com/BthTasikmalaya')" class="p-2 md:p-4 rounded-full border border-gray-300 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <mask id="mask0_21_312" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0"
                            width="24" height="24">
                            <path d="M24 0H0V24H24V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_21_312)">
                            <path
                                d="M16.6829 4.6875H19.1639L13.7437 10.8825L20.1202 19.3125H15.1274L11.2169 14.1998L6.74241 19.3125H4.25993L10.0574 12.6863L3.94043 4.6875H9.05991L12.5947 9.36075L16.6829 4.6875ZM15.8122 17.8275H17.1869L8.31291 6.0945H6.83766L15.8122 17.8275Z"
                                fill="black" />
                        </g>
                    </svg>
                </div>

                <div @click="handleClick('https://www.facebook.com/Universitas.BTH?locale=id_ID')" class="p-2 md:p-4 rounded-full border border-gray-300 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12.0142 1.99902C6.49116 1.99902 2.01416 6.47602 2.01416 11.999C2.01416 16.814 5.45917 20.888 10.0152 21.804L10.0142 14.999H8.01416V11.999H10.0142V8.99902C10.0252 7.36502 11.3152 6.01802 13.0142 5.99902H16.0142V8.99902C16.0142 8.99902 14.3102 8.99902 14.0142 8.99902C13.4952 8.99802 13.0142 9.42902 13.0142 9.99902V11.999H16.0142L15.0142 14.999H13.0142L13.0212 21.961C18.0532 21.439 22.0142 17.169 22.0142 11.999C22.0142 6.47602 17.5372 1.99902 12.0142 1.99902Z"
                            fill="black" />
                    </svg>
                </div>

                <div @click="handleClick('https://www.instagram.com/universitas.bth?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==')" class="p-2 md:p-4 rounded-full border border-gray-300 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
                            fill="black" />
                    </svg>
                </div>

                <div @click="handleClick('https://www.linkedin.com/company/universitas-bakti-tunas-husada/')" class="p-2 md:p-4 rounded-full border border-gray-300 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M17.14 2H6.85999C4.17999 2 2 4.18 2 6.86V17.14C2 19.82 4.17999 22 6.85999 22H17.14C19.82 22 22 19.82 22 17.14V6.86C22 4.18 19.82 2 17.14 2ZM8.92001 9.17C8.36001 9.17 7.89001 8.71 7.89001 8.15C7.89001 7.58 8.35 7.12 8.91 7.12H8.92001C9.49001 7.12 9.95001 7.58 9.95001 8.15C9.95001 8.71 9.49001 9.17 8.92001 9.17ZM9.64999 10.72V15.85C9.64999 16.27 9.31999 16.6 8.89999 16.6C8.48999 16.6 8.14999 16.27 8.14999 15.85V10.72C8.14999 10.3 8.48999 9.97 8.89999 9.97C9.31999 9.97 9.64999 10.3 9.64999 10.72ZM15.85 15.85C15.85 16.27 15.51 16.6 15.1 16.6C14.68 16.6 14.35 16.27 14.35 15.85V13.51C14.35 12.88 14.22 12.77 14.12 12.68C14 12.57 13.79 12.5 13.53 12.49C13.32 12.5 13.11 12.57 12.99 12.68C12.89 12.77 12.76 12.88 12.76 13.51V15.85C12.76 16.27 12.43 16.6 12.01 16.6C11.6 16.6 11.26 16.27 11.26 15.85V13.51C11.26 12.6 11.48 12.02 11.99 11.56C12.38 11.21 12.91 11.02 13.53 10.99C14.2 11.02 14.73 11.21 15.13 11.56C15.63 12.02 15.85 12.6 15.85 13.51V15.85Z"
                            fill="black" />
                    </svg>
                </div>
            </div>
        </div>
    </footer>
</template>