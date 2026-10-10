<script setup lang="ts">
import Logo from '@/assets/logo/logo.png'
import LanguageSwitcher from './LanguageSwitcher.vue'
import { useLanguageStore } from '@/stores/language'

const langStore = useLanguageStore()

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
            <div class="flex flex-col gap-6 md:gap-8 max-w-xs">
                <img :src="Logo" alt="Logo STIKes Budi Luhur Cimahi" width="80" height="80" loading="lazy"
                    class="w-20 h-20 lg:w-24 lg:h-24 object-contain">
                <h2 class="text-sm md:text-sm lg:text-base font-medium">{{ langStore.t('common.motto') }}</h2>
                <div class="pt-2">
                    <LanguageSwitcher />
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 lg:gap-6">
                <div class="space-y-4 md:space-y-5 lg:space-y-6">
                    <h2 class="font-semibold text-sm lg:text-base">{{ langStore.t('common.navigation') }}</h2>
                    <div class="flex flex-col gap-2 lg:gap-4 font-light text-gray-500 text-sm lg:text-base">
                        <RouterLink to="/">{{ langStore.t('nav.home') }}</RouterLink>
                        <RouterLink to="/tentang">{{ langStore.t('nav.about') }}</RouterLink>
                        <RouterLink to="/jalur-dan-jadwal">{{ langStore.t('nav.tracks') }}</RouterLink>
                        <RouterLink to="/fakultas">{{ langStore.t('common.programs') }}</RouterLink>
                        <RouterLink to="/biaya">{{ langStore.t('nav.costs') }}</RouterLink>
                    </div>
                </div>
                <div class="space-y-4 md:space-y-5 lg:space-y-6">
                    <h2 class="font-semibold text-sm lg:text-base opacity-0">{{ langStore.t('common.navigation') }}</h2>
                    <div class="flex flex-col gap-2 lg:gap-4 font-light text-gray-500 text-sm lg:text-base">
                        <RouterLink to="/pengumuman">{{ langStore.t('nav.announcements') }}</RouterLink>
                        <RouterLink to="/akreditasi">{{ langStore.t('nav.accreditation') }}</RouterLink>
                        <RouterLink to="/fasilitas">{{ langStore.t('nav.facilities') }}</RouterLink>
                        <RouterLink to="/kegiatan">{{ langStore.t('nav.activities') }}</RouterLink>
                        <RouterLink to="/berita">{{ langStore.t('nav.news') }}</RouterLink>
                        <RouterLink to="/agenda">{{ langStore.t('nav.agenda') }}</RouterLink>
                    </div>
                </div>
                <div class="space-y-4 md:space-y-5 lg:space-y-6">
                    <h2 class="font-semibold text-sm lg:text-base">{{ langStore.t('common.programs') }}</h2>
                    <div class="flex flex-col gap-2 lg:gap-4 font-light text-gray-500 text-sm lg:text-base">
                        <RouterLink to="/fakultas">{{ langStore.loc('Rumpun Ilmu Keperawatan', 'Department of Nursing') }}</RouterLink>
                        <RouterLink to="/fakultas">{{ langStore.loc('Rumpun Ilmu Kebidanan', 'Department of Midwifery') }}</RouterLink>
                        <RouterLink to="/fakultas">{{ langStore.loc('Profesi Ners & Bidan', 'Professional Nurse & Midwife') }}</RouterLink>
                    </div>
                </div>
                <div class="space-y-4 md:space-y-5 lg:space-y-6">
                    <h2 class="font-semibold text-sm lg:text-base">{{ langStore.t('common.location') }}</h2>
                    <div class="flex flex-col gap-2 lg:gap-4 font-light text-gray-500 text-sm lg:text-base">
                        <a href="https://maps.app.goo.gl/ppptYEq4qmkfLuRF7" target="_blank">Jl. Kerkof No. 243 Leuwigajah,<br /> Kec. Cimahi Selatan, Kota Cimahi,<br /> Jawa Barat 40532</a>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M2 8L8.10764 12.6122L8.10967 12.6139C8.78785 13.1112 9.12714 13.36 9.49876 13.4561C9.82723 13.5411 10.1725 13.5411 10.501 13.4561C10.8729 13.3599 11.2132 13.1104 11.8926 12.6122L18 8M17.8002 7.03944L12.2012 2.55657C11.506 1.99995 11.1581 1.72174 10.7715 1.61126C10.4304 1.51378 10.0692 1.50861 9.72552 1.59661C9.33603 1.69634 8.98087 1.96473 8.27052 2.50188L2.26953 7.03967C1.8038 7.39184 1.57123 7.56804 1.40332 7.7906C1.2546 7.98772 1.14377 8.21065 1.07624 8.44817C1 8.71633 1 9.00832 1 9.59221V15.8001C1 16.9202 1 17.4805 1.21799 17.9083C1.40973 18.2847 1.71547 18.5904 2.0918 18.7822C2.5192 18.9999 3.07899 18.9999 4.19691 18.9999H15.8031C16.921 18.9999 17.48 18.9999 17.9074 18.7822C18.2837 18.5904 18.5905 18.2844 18.7822 17.9081C19 17.4807 19 16.9214 19 15.8035V9.52647C19 8.96932 19 8.68902 18.9287 8.4301C18.8651 8.19922 18.7595 7.98161 18.619 7.78768C18.4604 7.56876 18.2409 7.39227 17.8002 7.03944Z"
                                stroke="#F03C06" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h2 class="text-sm md:text-sm lg:text-base font-medium">pmb@stikesbudiluhur.ac.id</h2>
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

            <div class="w-full flex flex-col justify-center items-center gap-4">
                <img :src="Logo" alt="Logo STIKes Budi Luhur Cimahi" width="80" height="80" loading="lazy" class="w-20 lg:w-24 object-contain">
                <LanguageSwitcher />
            </div>

            <div class="w-full flex justify-around items-start gap-2 pt-2">
                <div class="flex flex-col gap-4">
                    <RouterLink to="/">{{ langStore.t('nav.home') }}</RouterLink>
                    <RouterLink to="/tentang">{{ langStore.t('nav.about') }}</RouterLink>
                    <RouterLink to="/jalur-dan-jadwal">{{ langStore.t('nav.tracks') }}</RouterLink>
                    <RouterLink to="/fakultas">{{ langStore.t('common.programs') }}</RouterLink>
                    <RouterLink to="/biaya">{{ langStore.t('nav.costs') }}</RouterLink>
                </div>
                <div class="flex flex-col gap-4">
                    <RouterLink to="/pengumuman">{{ langStore.t('nav.announcements') }}</RouterLink>
                    <RouterLink to="/akreditasi">{{ langStore.t('nav.accreditation') }}</RouterLink>
                    <RouterLink to="/fasilitas">{{ langStore.t('nav.facilities') }}</RouterLink>
                    <RouterLink to="/kegiatan">{{ langStore.t('nav.activities') }}</RouterLink>
                    <RouterLink to="/berita">{{ langStore.t('nav.news') }}</RouterLink>
                    <RouterLink to="/agenda">{{ langStore.t('nav.agenda') }}</RouterLink>
                </div>
            </div>
        </div>

        <div
            class="w-full pt-8 md:border-t border-gray-500 flex flex-col-reverse items-center gap-6 md:flex-row md:justify-between md:items-center">
            <p class="text-sm md:text-base lg:text-lg text-gray-500">© 2026 STIKes Budi Luhur Cimahi. {{ langStore.t('common.copyright') }}.</p>
            <div class="flex gap-4">
                <div @click="handleClick('https://www.youtube.com/@STIKesBudiLuhurCimahi')" class="p-2 md:p-4 rounded-full border border-gray-300 cursor-pointer" title="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                </div>

                <div @click="handleClick('https://www.facebook.com/STIKes-BUDI-LUHUR-CIMAHI-133049098766/')" class="p-2 md:p-4 rounded-full border border-gray-300 cursor-pointer" title="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12.0142 1.99902C6.49116 1.99902 2.01416 6.47602 2.01416 11.999C2.01416 16.814 5.45917 20.888 10.0152 21.804L10.0142 14.999H8.01416V11.999H10.0142V8.99902C10.0252 7.36502 11.3152 6.01802 13.0142 5.99902H16.0142V8.99902C16.0142 8.99902 14.3102 8.99902 14.0142 8.99902C13.4952 8.99802 13.0142 9.42902 13.0142 9.99902V11.999H16.0142L15.0142 14.999H13.0142L13.0212 21.961C18.0532 21.439 22.0142 17.169 22.0142 11.999C22.0142 6.47602 17.5372 1.99902 12.0142 1.99902Z"
                            fill="black" />
                    </svg>
                </div>

                <div @click="handleClick('https://www.instagram.com/stikesbudiluhurcimahi/')" class="p-2 md:p-4 rounded-full border border-gray-300 cursor-pointer" title="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C12.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
                            fill="black" />
                    </svg>
                </div>
            </div>
        </div>
    </footer>
</template>