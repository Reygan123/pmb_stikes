3
<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/ui/Button.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import { useRouter } from 'vue-router';
import Subtitle from '@/components/ui/Subtitle.vue';

const router = useRouter()

const expandedFaculty = ref<string | null>(null);

const toggleFaculty = (facultyName: string) => {
    expandedFaculty.value = expandedFaculty.value === facultyName ? null : facultyName;
};

const handleToFakultas = (slug: string) => {
    router.push(`/fakultas/${slug}`)
}

const handleToProdi = (slug: string) => {
    router.push(`/prodi/${slug}`)
}
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-8 md:gap-0 lg:gap-0">
        <div
            class="w-full flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-left gap-3">
            <Tag title="Temukan Arah Tujuanmu" />
            <Title title="Fakultas dan Prodi di Universitas BTH" />
            <Subtitle class="md:max-w-[60%]"
                text="Universitas BTH menyediakan berbagai pilihan program studi dari beberapa fakultas unggulan, antara lain:" />
        </div>

        <!-- Desktop -->
        <div class="w-full lg:flex items-end gap-6 hidden">
            <div data-aos="fade-up" data-aos-duration="1000"
                class="w-full h-fit p-2 md:p-4 rounded-4xl border-2 border-[#E8E8E8] space-y-4">
                <div @click="handleToFakultas('fakultas-farmasi')"
                    class="w-full h-[140px] px-4 flex justify-center items-start bg-blue-500 rounded-3xl relative cursor-pointer">
                    <div class="w-full h-full flex flex-col justify-center items-start text-gstart">
                        <h4 class="text-base">Fakultas</h4>
                        <h5 class="text-2xl font-medium">Farmasi</h5>
                    </div>

                    <div class="absolute h-full w-fit right-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140"
                            fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M55.0148 24.3629C53.3581 28.2479 53.2239 33.2208 53.3902 37.9166H107.917C109.527 37.9166 110.851 39.2291 110.668 40.8275C109.545 50.642 102.796 59.182 92.9752 64.4437C93.2231 65.59 93.3339 66.7712 93.3339 67.967C93.3339 73.2725 89.3177 77.4608 85.0244 80.1208C82.1835 81.861 79.08 83.1305 75.8339 83.8804V77.8516C77.9856 77.2316 80.0446 76.3261 81.956 75.1595C85.6835 72.8525 87.5006 70.1925 87.5006 67.967C87.5006 67.6073 87.487 67.2612 87.4598 66.9287C83.0935 68.5533 78.3014 69.5887 73.2527 69.9008V93.3333H67.4194V69.9358C47.3002 68.95 31.1302 56.5191 29.3335 40.8275C29.1498 39.2291 30.471 37.9166 32.0839 37.9166H47.5539C47.3877 33.1537 47.4927 27.1308 49.6481 22.0762C50.8848 19.1741 52.8273 16.5054 55.811 14.592C58.786 12.6875 62.5689 11.6666 67.2531 11.6666C72.9902 11.6666 77.6569 13.7491 80.8331 15.7675C82.4285 16.7795 83.6769 17.7945 84.5373 18.5645C85.0082 18.9883 85.4616 19.431 85.8964 19.8916L85.9256 19.9208L85.9314 19.9325L85.9373 19.9354C85.9373 19.9354 85.9373 19.9412 83.7964 21.84L85.9402 19.9412C86.4369 20.5219 86.6859 21.2743 86.6337 22.0366C86.5815 22.7989 86.2321 23.5103 85.6609 24.0178C85.0896 24.5253 84.342 24.7883 83.5788 24.7503C82.8156 24.7123 82.0978 24.3763 81.5798 23.8145L81.5506 23.7825L81.3814 23.6075C81.1423 23.367 80.8962 23.1336 80.6435 22.9075C79.7244 22.0924 78.7423 21.3512 77.7064 20.6908C75.1398 19.0633 71.5552 17.5 67.2531 17.5C63.4148 17.5 60.7927 18.3283 58.961 19.5008C57.141 20.6675 55.8839 22.3212 55.0148 24.3629ZM35.8931 43.75C39.3202 54.7166 52.4219 64.1666 70.0006 64.1666C87.5794 64.1666 100.684 54.7166 104.108 43.75H35.8931Z"
                                fill="white" fill-opacity="0.5" />
                            <path
                                d="M46.668 122.5V128.333H93.3346V122.5H84.5292C86.4542 120.132 87.5013 117.148 87.5013 113.75C87.5013 109.244 85.658 105.467 82.3767 102.888C79.1684 100.371 74.8284 99.1667 70.0013 99.1667C65.6759 99.1667 61.8346 98.7875 59.1542 97.5946C57.868 97.0229 56.9755 96.3171 56.395 95.4887C55.8292 94.6808 55.418 93.5521 55.418 91.8721C55.418 90.1979 55.8263 89.0721 56.395 88.2612C56.9755 87.4329 57.868 86.7271 59.1542 86.1554C60.5455 85.5371 62.2459 85.1346 64.168 84.8954V79.0212C61.5605 79.3012 59.0055 79.8379 56.7859 80.8237C54.7909 81.7104 52.9505 83.0112 51.6146 84.9158C50.2671 86.8408 49.5846 89.1771 49.5846 91.875C49.5846 94.5729 50.2671 96.9092 51.6146 98.8342C52.9505 100.739 54.7938 102.04 56.7859 102.926C60.6651 104.65 65.5767 104.997 70.0013 104.997C73.9271 104.997 76.873 105.983 78.7717 107.476C80.5946 108.905 81.668 110.965 81.668 113.747C81.668 116.535 80.5946 118.592 78.7717 120.024C77.4388 121.071 75.5926 121.867 73.2534 122.249V110.833H67.42V122.5H46.668Z"
                                fill="white" fill-opacity="0.5" />
                        </svg>
                    </div>
                </div>

                <div class="p-4 bg-[#E8E8E8] rounded-3xl space-y-4">
                    <div @click="handleToProdi('s1-farmasi')"
                        class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white hover:bg-primary transition-all duration-500 hover:text-white">
                        <p class="text-base font-medium">S1 Farmasi</p>
                    </div>
                    <div @click="handleToProdi('s2-farmasi-magister')"
                        class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white hover:bg-primary transition-all duration-500 hover:text-white">
                        <p class="text-base font-medium">S2 Farmasi (Magister)</p>
                    </div>
                    <div @click="handleToProdi('profesi-apoteker')"
                        class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white hover:bg-primary transition-all duration-500 hover:text-white">
                        <p class="text-base font-medium">Profesi Apoteker</p>
                    </div>
                    <div @click="handleToProdi('s1-rekayasa-kosmetik')"
                        class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white hover:bg-primary transition-all duration-500 hover:text-white">
                        <p class="text-base font-medium">S1 Rekayasa Kosmetik</p>
                    </div>
                </div>

                <Button @click="handleToFakultas('fakultas-farmasi')" class="w-full" text="Selengkapnya" />
            </div>

            <div data-aos="fade-up" data-aos-duration="1000"
                class="w-full h-fit p-2 md:p-4 rounded-4xl border-2 border-[#E8E8E8] space-y-4">
                <div @click="handleToFakultas('fakultas-teknologi-dan-bisnis')"
                    class="w-full h-[140px] px-4 flex justify-center items-start bg-[#A8DD93] rounded-3xl relative cursor-pointer">
                    <div class="w-full max-w-1/2 mr-auto h-full flex flex-col justify-center items-start text-gstart">
                        <h4 class="text-base">Fakultas</h4>
                        <h5 class="text-2xl font-medium">Teknologi dan Bisnis</h5>
                    </div>

                    <div class="absolute h-full w-fit right-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140"
                            fill="none">
                            <path
                                d="M37.916 56.875V77.2917L58.3327 90.4167L78.7493 77.2917V56.875L58.3327 43.75L37.916 56.875ZM37.916 56.875L22.2418 41.8833M103.226 115.587L68.4127 83.9358M107.916 67.0833H78.7493M46.386 82.74L21.4777 109.311M95.1877 30.6892L73.686 53.62M26.2493 39.375L14.5827 46.6667L2.91602 39.375V27.7083L14.5827 20.4167L26.2493 27.7083V39.375ZM113.749 27.7083L102.083 35L90.416 27.7083V16.0417L102.083 8.75L113.749 16.0417V27.7083ZM26.2493 123.958L14.5827 131.25L2.91602 123.958V112.292L14.5827 105L26.2493 112.292V123.958ZM122.499 129.792L110.833 137.083L99.166 129.792V118.125L110.833 110.833L122.499 118.125V129.792ZM131.249 72.9167L119.583 80.2083L107.916 72.9167V61.25L119.583 53.9583L131.249 61.25V72.9167Z"
                                stroke="white" stroke-opacity="0.5" stroke-width="4" stroke-miterlimit="10"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>

                <div class="p-4 bg-[#E8E8E8] rounded-3xl space-y-4">
                    <div @click="handleToProdi('s1-sistem-informasi')"
                        class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white hover:bg-primary transition-all duration-500 hover:text-white">
                        <p class="text-base font-medium">S1 Sistem Informasi</p>
                    </div>
                    <div @click="handleToProdi('s1-bisnis-digital')"
                        class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white hover:bg-primary transition-all duration-500 hover:text-white">
                        <p class="text-base font-medium">S1 Bisnis Digital</p>
                    </div>
                    <div @click="handleToProdi('s1-teknologi-pangan')"
                        class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white hover:bg-primary transition-all duration-500 hover:text-white">
                        <p class="text-base font-medium">S1 Teknologi Pangan</p>
                    </div>
                    <div @click="handleToProdi('s1-kewirausahaan')"
                        class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white hover:bg-primary transition-all duration-500 hover:text-white">
                        <p class="text-base font-medium">S1 Kewirausahaan</p>
                    </div>
                </div>

                <Button @click="handleToFakultas('fakultas-teknologi-dan-bisnis')" class="w-full" text="Selengkapnya" />
            </div>

            <div data-aos="fade-up" data-aos-duration="1000"
                class="w-full h-fit p-2 md:p-4 rounded-4xl border-2 border-[#E8E8E8] space-y-4 cursor-pointer">
                <div @click="handleToFakultas('fakultas-kesehatan')" class="w-full h-[140px] px-4 flex justify-center items-start bg-[#FFB190] rounded-3xl relative">
                    <div class="w-full max-w-1/2 mr-auto h-full flex flex-col justify-center items-start text-gstart">
                        <h4 class="text-base">Fakultas</h4>
                        <h5 class="text-2xl font-medium">Kesehatan</h5>
                    </div>

                    <div class="absolute h-full w-fit right-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140"
                            fill="none">
                            <path
                                d="M50.5932 116.667V89.4075H23.334V50.7034H50.5932V23.3334H89.2973V50.7034H116.667V89.4075H89.2973V116.667H50.5932ZM56.4265 110.833H83.464V83.5742H110.834V56.5367H83.464V29.1667H56.4265V56.5367H29.1673V83.5742H56.4265V110.833Z"
                                fill="white" fill-opacity="0.5" />
                        </svg>
                    </div>
                </div>

                <div class="p-4 bg-[#E8E8E8] rounded-3xl space-y-4">
                    <div @click="handleToProdi('s1-administrasi-rumah-sakit')"
                        class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white hover:bg-primary transition-all duration-500 hover:text-white">
                        <p class="text-base font-medium">S1 Administrasi Rumah Sakit</p>
                    </div>
                    <div @click="handleToProdi('s1-keperawatan')"
                        class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white hover:bg-primary transition-all duration-500 hover:text-white">
                        <p class="text-base font-medium">S1 Keperawatan</p>
                    </div>
                    <div @click="handleToProdi('d3-keperawatan')"
                        class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white hover:bg-primary transition-all duration-500 hover:text-white">
                        <p class="text-base font-medium">D3 Keperawatan</p>
                    </div>
                    <div @click="handleToProdi('profesi-ners')"
                        class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white hover:bg-primary transition-all duration-500 hover:text-white">
                        <p class="text-base font-medium">Profesi Ners</p>
                    </div>
                    <div @click="handleToProdi('d3-analis-kesehatan-teknologi-laboratorium-medis')"
                        class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white hover:bg-primary transition-all duration-500 hover:text-white">
                        <p class="text-base font-medium">D3 Analis Kesehatan / Teknologi Laboratorium Medis</p>
                    </div>
                    <div @click="handleToProdi('d3-refraksi-optometri')"
                        class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white hover:bg-primary transition-all duration-500 hover:text-white">
                        <p class="text-base font-medium">D3 Refraksi Optisi / Optometri</p>
                    </div>
                    <div @click="handleToProdi('s1-gizi')"
                        class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white hover:bg-primary transition-all duration-500 hover:text-white">
                        <p class="text-base font-medium">S1 Gizi</p>
                    </div>
                </div>

                <Button @click="handleToFakultas('fakultas-kesehatan')" class="w-full" text="Selengkapnya" />
            </div>
        </div>

        <!-- Mobile & Tablet -->
        <div class="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <!-- Fakultas Farmasi -->
            <div class="w-full h-fit p-2 md:p-4 rounded-4xl border-2 border-[#E8E8E8]"
                :class="expandedFaculty === 'farmasi' ? 'space-y-4' : 'space-y-0'">
                <div class="w-full h-[140px] px-4 flex justify-center items-start bg-blue-500 rounded-3xl relative cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                    @click="toggleFaculty('farmasi')">
                    <div class="w-full h-full flex flex-col justify-center items-start text-gstart">
                        <h4 class="text-base">Fakultas</h4>
                        <h5 class="text-2xl font-medium">Farmasi</h5>
                        <div class="flex items-center gap-2 mt-1"
                            :class="expandedFaculty === 'farmasi' ? 'max-h-0 opacity-0' : 'max-h-96 opacity-100'">
                            <p class="text-xs md:text-sm">Lihat Selengkapnya</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none">
                                <path
                                    d="M11.9999 4H5.5249C5.39229 4 5.26512 3.94732 5.17135 3.85355C5.07758 3.75979 5.0249 3.63261 5.0249 3.5C5.0249 3.36739 5.07758 3.24021 5.17135 3.14645C5.26512 3.05268 5.39229 3 5.5249 3H12.4999C12.6325 3 12.7597 3.05268 12.8535 3.14645C12.9472 3.24021 12.9999 3.36739 12.9999 3.5V10.5C12.9999 10.6326 12.9472 10.7598 12.8535 10.8536C12.7597 10.9473 12.6325 11 12.4999 11C12.3673 11 12.2401 10.9473 12.1463 10.8536C12.0526 10.7598 11.9999 10.6326 11.9999 10.5V4Z"
                                    fill="#081B36" />
                                <path
                                    d="M12.1459 3.14614C12.2398 3.05226 12.3671 2.99951 12.4999 2.99951C12.6327 2.99951 12.76 3.05226 12.8539 3.14614C12.9478 3.24003 13.0005 3.36737 13.0005 3.50014C13.0005 3.63292 12.9478 3.76026 12.8539 3.85414L4.3539 12.3541C4.30741 12.4006 4.25222 12.4375 4.19148 12.4627C4.13074 12.4878 4.06564 12.5008 3.9999 12.5008C3.93416 12.5008 3.86906 12.4878 3.80832 12.4627C3.74758 12.4375 3.69239 12.4006 3.6459 12.3541C3.59941 12.3077 3.56254 12.2525 3.53738 12.1917C3.51222 12.131 3.49927 12.0659 3.49927 12.0001C3.49927 11.9344 3.51222 11.8693 3.53738 11.8086C3.56254 11.7478 3.59941 11.6926 3.6459 11.6461L12.1459 3.14614Z"
                                    fill="#081B36" />
                            </svg>
                        </div>
                    </div>

                    <div class="absolute h-full w-fit right-10 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140"
                            fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M55.0148 24.3629C53.3581 28.2479 53.2239 33.2208 53.3902 37.9166H107.917C109.527 37.9166 110.851 39.2291 110.668 40.8275C109.545 50.642 102.796 59.182 92.9752 64.4437C93.2231 65.59 93.3339 66.7712 93.3339 67.967C93.3339 73.2725 89.3177 77.4608 85.0244 80.1208C82.1835 81.861 79.08 83.1305 75.8339 83.8804V77.8516C77.9856 77.2316 80.0446 76.3261 81.956 75.1595C85.6835 72.8525 87.5006 70.1925 87.5006 67.967C87.5006 67.6073 87.487 67.2612 87.4598 66.9287C83.0935 68.5533 78.3014 69.5887 73.2527 69.9008V93.3333H67.4194V69.9358C47.3002 68.95 31.1302 56.5191 29.3335 40.8275C29.1498 39.2291 30.471 37.9166 32.0839 37.9166H47.5539C47.3877 33.1537 47.4927 27.1308 49.6481 22.0762C50.8848 19.1741 52.8273 16.5054 55.811 14.592C58.786 12.6875 62.5689 11.6666 67.2531 11.6666C72.9902 11.6666 77.6569 13.7491 80.8331 15.7675C82.4285 16.7795 83.6769 17.7945 84.5373 18.5645C85.0082 18.9883 85.4616 19.431 85.8964 19.8916L85.9256 19.9208L85.9314 19.9325L85.9373 19.9354C85.9373 19.9354 85.9373 19.9412 83.7964 21.84L85.9402 19.9412C86.4369 20.5219 86.6859 21.2743 86.6337 22.0366C86.5815 22.7989 86.2321 23.5103 85.6609 24.0178C85.0896 24.5253 84.342 24.7883 83.5788 24.7503C82.8156 24.7123 82.0978 24.3763 81.5798 23.8145L81.5506 23.7825L81.3814 23.6075C81.1423 23.367 80.8962 23.1336 80.6435 22.9075C79.7244 22.0924 78.7423 21.3512 77.7064 20.6908C75.1398 19.0633 71.5552 17.5 67.2531 17.5C63.4148 17.5 60.7927 18.3283 58.961 19.5008C57.141 20.6675 55.8839 22.3212 55.0148 24.3629ZM35.8931 43.75C39.3202 54.7166 52.4219 64.1666 70.0006 64.1666C87.5794 64.1666 100.684 54.7166 104.108 43.75H35.8931Z"
                                fill="white" fill-opacity="0.5" />
                            <path
                                d="M46.668 122.5V128.333H93.3346V122.5H84.5292C86.4542 120.132 87.5013 117.148 87.5013 113.75C87.5013 109.244 85.658 105.467 82.3767 102.888C79.1684 100.371 74.8284 99.1667 70.0013 99.1667C65.6759 99.1667 61.8346 98.7875 59.1542 97.5946C57.868 97.0229 56.9755 96.3171 56.395 95.4887C55.8292 94.6808 55.418 93.5521 55.418 91.8721C55.418 90.1979 55.8263 89.0721 56.395 88.2612C56.9755 87.4329 57.868 86.7271 59.1542 86.1554C60.5455 85.5371 62.2459 85.1346 64.168 84.8954V79.0212C61.5605 79.3012 59.0055 79.8379 56.7859 80.8237C54.7909 81.7104 52.9505 83.0112 51.6146 84.9158C50.2671 86.8408 49.5846 89.1771 49.5846 91.875C49.5846 94.5729 50.2671 96.9092 51.6146 98.8342C52.9505 100.739 54.7938 102.04 56.7859 102.926C60.6651 104.65 65.5767 104.997 70.0013 104.997C73.9271 104.997 76.873 105.983 78.7717 107.476C80.5946 108.905 81.668 110.965 81.668 113.747C81.668 116.535 80.5946 118.592 78.7717 120.024C77.4388 121.071 75.5926 121.867 73.2534 122.249V110.833H67.42V122.5H46.668Z"
                                fill="white" fill-opacity="0.5" />
                        </svg>
                    </div>
                </div>

                <!-- List Prodi Farmasi -->
                <div class="overflow-hidden transition-all duration-500 ease-in-out"
                    :class="expandedFaculty === 'farmasi' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'">
                    <div class="p-4 bg-[#E8E8E8] rounded-3xl space-y-4">
                        <div @click="handleToProdi('s1-farmasi')"
                            class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white transform transition-all duration-300 hover:scale-105">
                            <p class="text-base">S1 Farmasi</p>
                        </div>
                        <div @click="handleToProdi('s2-farmasi-magister')"
                            class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white transform transition-all duration-300 hover:scale-105">
                            <p class="text-base">S2 Farmasi (Magister)</p>
                        </div>
                        <div @click="handleToProdi('profesi-apoteker')"
                            class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white transform transition-all duration-300 hover:scale-105">
                            <p class="text-base">Profesi Apoteker</p>
                        </div>
                        <div @click="handleToProdi('s1-rekayasa-kosmetik')"
                        class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white hover:bg-primary transition-all duration-500 hover:text-white">
                        <p class="text-base font-medium">S1 Rekayasa Kosmetik</p>
                    </div>
                        <Button class="w-full" @click="handleToFakultas('fakultas-farmasi')" text="Selengkapnya" />
                    </div>
                </div>
            </div>

            <!-- Fakultas Teknologi dan Bisnis -->
            <div class="w-full h-fit p-2 md:p-4 rounded-4xl border-2 border-[#E8E8E8]"
                :class="expandedFaculty === 'teknologi-bisnis' ? 'space-y-4' : 'space-y-0'">
                <div class="w-full h-[140px] px-4 flex justify-center items-start bg-[#A8DD93] rounded-3xl relative cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                    @click="toggleFaculty('teknologi-bisnis')">
                    <div class="w-full max-w-3/5 mr-auto h-full flex flex-col justify-center items-start text-gstart">
                        <h4 class="text-base">Fakultas</h4>
                        <h5 class="text-2xl font-medium">Teknologi dan Bisnis</h5>
                        <div class="flex items-center gap-2 mt-1"
                            :class="expandedFaculty === 'teknologi-bisnis' ? 'max-h-0 opacity-0' : 'max-h-96 opacity-100'">
                            <p class="text-xs md:text-sm">Lihat Selengkapnya</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none">
                                <path
                                    d="M11.9999 4H5.5249C5.39229 4 5.26512 3.94732 5.17135 3.85355C5.07758 3.75979 5.0249 3.63261 5.0249 3.5C5.0249 3.36739 5.07758 3.24021 5.17135 3.14645C5.26512 3.05268 5.39229 3 5.5249 3H12.4999C12.6325 3 12.7597 3.05268 12.8535 3.14645C12.9472 3.24021 12.9999 3.36739 12.9999 3.5V10.5C12.9999 10.6326 12.9472 10.7598 12.8535 10.8536C12.7597 10.9473 12.6325 11 12.4999 11C12.3673 11 12.2401 10.9473 12.1463 10.8536C12.0526 10.7598 11.9999 10.6326 11.9999 10.5V4Z"
                                    fill="#081B36" />
                                <path
                                    d="M12.1459 3.14614C12.2398 3.05226 12.3671 2.99951 12.4999 2.99951C12.6327 2.99951 12.76 3.05226 12.8539 3.14614C12.9478 3.24003 13.0005 3.36737 13.0005 3.50014C13.0005 3.63292 12.9478 3.76026 12.8539 3.85414L4.3539 12.3541C4.30741 12.4006 4.25222 12.4375 4.19148 12.4627C4.13074 12.4878 4.06564 12.5008 3.9999 12.5008C3.93416 12.5008 3.86906 12.4878 3.80832 12.4627C3.74758 12.4375 3.69239 12.4006 3.6459 12.3541C3.59941 12.3077 3.56254 12.2525 3.53738 12.1917C3.51222 12.131 3.49927 12.0659 3.49927 12.0001C3.49927 11.9344 3.51222 11.8693 3.53738 11.8086C3.56254 11.7478 3.59941 11.6926 3.6459 11.6461L12.1459 3.14614Z"
                                    fill="#081B36" />
                            </svg>
                        </div>
                    </div>

                    <div class="absolute h-full w-fit right-10 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140"
                            fill="none">
                            <path
                                d="M37.916 56.875V77.2917L58.3327 90.4167L78.7493 77.2917V56.875L58.3327 43.75L37.916 56.875ZM37.916 56.875L22.2418 41.8833M103.226 115.587L68.4127 83.9358M107.916 67.0833H78.7493M46.386 82.74L21.4777 109.311M95.1877 30.6892L73.686 53.62M26.2493 39.375L14.5827 46.6667L2.91602 39.375V27.7083L14.5827 20.4167L26.2493 27.7083V39.375ZM113.749 27.7083L102.083 35L90.416 27.7083V16.0417L102.083 8.75L113.749 16.0417V27.7083ZM26.2493 123.958L14.5827 131.25L2.91602 123.958V112.292L14.5827 105L26.2493 112.292V123.958ZM122.499 129.792L110.833 137.083L99.166 129.792V118.125L110.833 110.833L122.499 118.125V129.792ZM131.249 72.9167L119.583 80.2083L107.916 72.9167V61.25L119.583 53.9583L131.249 61.25V72.9167Z"
                                stroke="white" stroke-opacity="0.5" stroke-width="4" stroke-miterlimit="10"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>

                <!-- List Prodi Teknologi dan Bisnis -->
                <div class="overflow-hidden transition-all duration-500 ease-in-out"
                    :class="expandedFaculty === 'teknologi-bisnis' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'">
                    <div class="p-4 bg-[#E8E8E8] rounded-3xl space-y-4">
                        <div @click="handleToProdi('s1-sistem-informasi')"
                            class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white transform transition-all duration-300 hover:scale-105">
                            <p class="text-base">S1 Sistem Informasi</p>
                        </div>
                        <div @click="handleToProdi('s1-bisnis-digital')"
                            class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white transform transition-all duration-300 hover:scale-105">
                            <p class="text-base">S1 Bisnis Digital</p>
                        </div>
                        <div @click="handleToProdi('s1-teknologi-pangan')"
                            class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white transform transition-all duration-300 hover:scale-105">
                            <p class="text-base">S1 Teknologi Pangan</p>
                        </div>
                        <div @click="handleToProdi('s1-kewirausahaan')"
                            class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white transform transition-all duration-300 hover:scale-105">
                            <p class="text-base">S1 Kewirausahaan</p>
                        </div>
                        <Button class="w-full" @click="handleToFakultas('fakultas-teknologi-dan-bisnis')"
                            text="Selengkapnya" />
                    </div>
                </div>
            </div>

            <!-- Fakultas Kesehatan -->
            <div class="w-full h-fit p-2 md:p-4 rounded-4xl border-2 border-[#E8E8E8]"
                :class="expandedFaculty === 'kesehatan' ? 'space-y-4' : 'space-y-0'">
                <div class="w-full h-[140px] px-4 flex justify-center items-start bg-[#FFB190] rounded-3xl relative cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                    @click="toggleFaculty('kesehatan')">
                    <div class="w-full max-w-3/5 mr-auto h-full flex flex-col justify-center items-start text-gstart">
                        <h4 class="text-base">Fakultas</h4>
                        <h5 class="text-2xl font-medium">Kesehatan</h5>
                        <div class="flex items-center gap-2 mt-1"
                            :class="expandedFaculty === 'kesehatan' ? 'max-h-0 opacity-0' : 'max-h-96 opacity-100'">
                            <p class="text-xs md:text-sm">Lihat Selengkapnya</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none">
                                <path
                                    d="M11.9999 4H5.5249C5.39229 4 5.26512 3.94732 5.17135 3.85355C5.07758 3.75979 5.0249 3.63261 5.0249 3.5C5.0249 3.36739 5.07758 3.24021 5.17135 3.14645C5.26512 3.05268 5.39229 3 5.5249 3H12.4999C12.6325 3 12.7597 3.05268 12.8535 3.14645C12.9472 3.24021 12.9999 3.36739 12.9999 3.5V10.5C12.9999 10.6326 12.9472 10.7598 12.8535 10.8536C12.7597 10.9473 12.6325 11 12.4999 11C12.3673 11 12.2401 10.9473 12.1463 10.8536C12.0526 10.7598 11.9999 10.6326 11.9999 10.5V4Z"
                                    fill="#081B36" />
                                <path
                                    d="M12.1459 3.14614C12.2398 3.05226 12.3671 2.99951 12.4999 2.99951C12.6327 2.99951 12.76 3.05226 12.8539 3.14614C12.9478 3.24003 13.0005 3.36737 13.0005 3.50014C13.0005 3.63292 12.9478 3.76026 12.8539 3.85414L4.3539 12.3541C4.30741 12.4006 4.25222 12.4375 4.19148 12.4627C4.13074 12.4878 4.06564 12.5008 3.9999 12.5008C3.93416 12.5008 3.86906 12.4878 3.80832 12.4627C3.74758 12.4375 3.69239 12.4006 3.6459 12.3541C3.59941 12.3077 3.56254 12.2525 3.53738 12.1917C3.51222 12.131 3.49927 12.0659 3.49927 12.0001C3.49927 11.9344 3.51222 11.8693 3.53738 11.8086C3.56254 11.7478 3.59941 11.6926 3.6459 11.6461L12.1459 3.14614Z"
                                    fill="#081B36" />
                            </svg>
                        </div>
                    </div>

                    <div class="absolute h-full w-fit right-10 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140"
                            fill="none">
                            <path
                                d="M50.5932 116.667V89.4075H23.334V50.7034H50.5932V23.3334H89.2973V50.7034H116.667V89.4075H89.2973V116.667H50.5932ZM56.4265 110.833H83.464V83.5742H110.834V56.5367H83.464V29.1667H56.4265V56.5367H29.1673V83.5742H56.4265V110.833Z"
                                fill="white" fill-opacity="0.5" />
                        </svg>
                    </div>
                </div>

                <!-- List Prodi Kesehatan -->
                <div class="overflow-hidden transition-all duration-500 ease-in-out"
                    :class="expandedFaculty === 'kesehatan' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'">
                    <div class="p-4 bg-[#E8E8E8] rounded-3xl space-y-4">
                        <div @click="handleToProdi('s1-administrasi-rumah-sakit')"
                            class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white transform transition-all duration-300 hover:scale-105">
                            <p class="text-base">S1 Administrasi Rumah Sakit</p>
                        </div>
                        <div @click="handleToProdi('s1-keperawatan')"
                            class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white transform transition-all duration-300 hover:scale-105">
                            <p class="text-base">S1 Keperawatan</p>
                        </div>
                        <div @click="handleToProdi('d3-keperawatan')"
                            class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white transform transition-all duration-300 hover:scale-105">
                            <p class="text-base">D3 Keperawatan</p>
                        </div>
                        <div @click="handleToProdi('profesi-ners')"
                            class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white transform transition-all duration-300 hover:scale-105">
                            <p class="text-base">Profesi Ners</p>
                        </div>
                        <div @click="handleToProdi('d3-analis-kesehatan-teknologi-laboratorium-medis')"
                            class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white transform transition-all duration-300 hover:scale-105">
                            <p class="text-base">D3 Analis Kesehatan / Teknologi Laboratorium Medis</p>
                        </div>
                        <div @click="handleToProdi('d3-refraksi-optometri')"
                            class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white transform transition-all duration-300 hover:scale-105">
                            <p class="text-base">D3 Refraksi Optisi / Optometri</p>
                        </div>
                        <div @click="handleToProdi('s1-gizi')"
                        class="cursor-pointer p-3 border border-gray-300 rounded-2xl bg-white transform transition-all duration-300 hover:scale-105">
                        <p class="text-base font-medium">S1 Gizi</p>
                    </div>
                        <Button class="w-full" @click="handleToFakultas('fakultas-kesehatan')" text="Selengkapnya" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>