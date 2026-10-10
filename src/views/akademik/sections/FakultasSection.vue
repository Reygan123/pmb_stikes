<script setup lang="ts">
import Subtitle from '@/components/ui/Subtitle.vue';
import Tag from '@/components/ui/Tag.vue';
import Title from '@/components/ui/Title.vue';
import Button from '@/components/ui/Button.vue';
import { useRouter } from 'vue-router';
import { useLanguageStore } from '@/stores/language';
import { ref } from 'vue';

const router = useRouter();
const langStore = useLanguageStore();

const expandedFaculty = ref<string | null>('keperawatan');

const toggleFaculty = (faculty: string) => {
    expandedFaculty.value = expandedFaculty.value === faculty ? null : faculty;
};

const handleToFakultas = (slug: string) => {
    router.push(`/fakultas/${slug}`);
};

const handleToProdi = (slug: string) => {
    router.push(`/prodi/${slug}`);
};
</script>

<template>
    <section class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div class="w-full flex flex-col justify-center items-center text-center gap-4">
            <Tag :title="langStore.t('academics.tag')" />
            <Title :title="langStore.t('academics.title')" />
            <Subtitle :text="langStore.t('academics.subtitle')" />
        </div>

        <!-- Desktop Grid View (2 Faculties: Nursing & Midwifery) -->
        <div class="hidden lg:grid grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
            <!-- 1. Rumpun / Fakultas Keperawatan -->
            <div data-aos="fade-up" data-aos-duration="800"
                class="w-full h-full flex flex-col justify-between p-4 rounded-4xl border-2 border-gray-200/80 hover:border-primary/40 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl space-y-4 bg-white shadow-xs">
                <div @click="handleToFakultas('rumpun-ilmu-keperawatan')"
                    class="w-full h-[150px] px-6 flex justify-center items-center bg-gradient-to-br from-[#005EB8] to-[#004282] rounded-3xl relative cursor-pointer overflow-hidden shadow-sm hover:scale-[1.01] transition-transform duration-300 ease-out">
                    <div class="w-full h-full flex flex-col justify-center items-start text-white z-10">
                        <span class="text-xs uppercase tracking-wider text-blue-200 font-semibold">{{ langStore.t('academics.faculty') }}</span>
                        <h3 class="text-2xl font-bold mt-0.5">{{ langStore.t('academics.nursing_faculty') }}</h3>
                        <p class="text-xs text-blue-100/90 mt-1">{{ langStore.t('academics.nursing_dept') }}</p>
                    </div>

                    <div class="absolute right-4 opacity-20 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                </div>

                <div class="p-5 bg-gray-50/80 rounded-3xl space-y-3.5 flex-1 flex flex-col justify-center">
                    <div @click="handleToProdi('s1-keperawatan')"
                        class="cursor-pointer p-4 border border-gray-200/90 rounded-2xl bg-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-out active:scale-[0.98] shadow-2xs group">
                        <div class="flex justify-between items-center">
                            <p class="text-base font-semibold group-hover:text-white text-gray-800">{{ langStore.t('study_programs_list.s1_keperawatan') }}</p>
                            <span class="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-primary font-bold group-hover:bg-white/20 group-hover:text-white">S1</span>
                        </div>
                    </div>
                    <div @click="handleToProdi('profesi-ners')"
                        class="cursor-pointer p-4 border border-gray-200/90 rounded-2xl bg-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-out active:scale-[0.98] shadow-2xs group">
                        <div class="flex justify-between items-center">
                            <p class="text-base font-semibold group-hover:text-white text-gray-800">{{ langStore.t('study_programs_list.profesi_ners') }}</p>
                            <span class="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-primary font-bold group-hover:bg-white/20 group-hover:text-white">Profesi</span>
                        </div>
                    </div>
                    <div @click="handleToProdi('d3-keperawatan')"
                        class="cursor-pointer p-4 border border-gray-200/90 rounded-2xl bg-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-out active:scale-[0.98] shadow-2xs group">
                        <div class="flex justify-between items-center">
                            <p class="text-base font-semibold group-hover:text-white text-gray-800">{{ langStore.t('study_programs_list.d3_keperawatan') }}</p>
                            <span class="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-primary font-bold group-hover:bg-white/20 group-hover:text-white">D3</span>
                        </div>
                    </div>
                </div>

                <Button @click="handleToFakultas('rumpun-ilmu-keperawatan')" class="w-full" :text="langStore.t('common.read_more')" />
            </div>

            <!-- 2. Rumpun / Fakultas Kebidanan -->
            <div data-aos="fade-up" data-aos-duration="1000"
                class="w-full h-full flex flex-col justify-between p-4 rounded-4xl border-2 border-gray-200/80 hover:border-[#008080]/40 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl space-y-4 bg-white shadow-xs">
                <div @click="handleToFakultas('rumpun-ilmu-kebidanan')"
                    class="w-full h-[150px] px-6 flex justify-center items-center bg-gradient-to-br from-[#008080] to-[#005f5f] rounded-3xl relative cursor-pointer overflow-hidden shadow-sm hover:scale-[1.01] transition-transform duration-300 ease-out">
                    <div class="w-full h-full flex flex-col justify-center items-start text-white z-10">
                        <span class="text-xs uppercase tracking-wider text-teal-200 font-semibold">{{ langStore.t('academics.faculty') }}</span>
                        <h3 class="text-2xl font-bold mt-0.5">{{ langStore.t('academics.midwifery_faculty') }}</h3>
                        <p class="text-xs text-teal-100/90 mt-1">{{ langStore.t('academics.midwifery_dept') }}</p>
                    </div>

                    <div class="absolute right-4 opacity-20 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </div>
                </div>

                <div class="p-5 bg-gray-50/80 rounded-3xl space-y-3.5 flex-1 flex flex-col justify-center">
                    <div @click="handleToProdi('s1-kebidanan')"
                        class="cursor-pointer p-4 border border-gray-200/90 rounded-2xl bg-white hover:bg-[#008080] hover:text-white hover:border-[#008080] transition-all duration-300 ease-out active:scale-[0.98] shadow-2xs group">
                        <div class="flex justify-between items-center">
                            <p class="text-base font-semibold group-hover:text-white text-gray-800">{{ langStore.t('study_programs_list.s1_kebidanan') }}</p>
                            <span class="text-xs px-2.5 py-0.5 rounded-full bg-teal-50 text-[#008080] font-bold group-hover:bg-white/20 group-hover:text-white">S1</span>
                        </div>
                    </div>
                    <div @click="handleToProdi('profesi-bidan')"
                        class="cursor-pointer p-4 border border-gray-200/90 rounded-2xl bg-white hover:bg-[#008080] hover:text-white hover:border-[#008080] transition-all duration-300 ease-out active:scale-[0.98] shadow-2xs group">
                        <div class="flex justify-between items-center">
                            <p class="text-base font-semibold group-hover:text-white text-gray-800">{{ langStore.t('study_programs_list.profesi_bidan') }}</p>
                            <span class="text-xs px-2.5 py-0.5 rounded-full bg-teal-50 text-[#008080] font-bold group-hover:bg-white/20 group-hover:text-white">Profesi</span>
                        </div>
                    </div>
                    <div @click="handleToProdi('d3-kebidanan')"
                        class="cursor-pointer p-4 border border-gray-200/90 rounded-2xl bg-white hover:bg-[#008080] hover:text-white hover:border-[#008080] transition-all duration-300 ease-out active:scale-[0.98] shadow-2xs group">
                        <div class="flex justify-between items-center">
                            <p class="text-base font-semibold group-hover:text-white text-gray-800">{{ langStore.t('study_programs_list.d3_kebidanan') }}</p>
                            <span class="text-xs px-2.5 py-0.5 rounded-full bg-teal-50 text-[#008080] font-bold group-hover:bg-white/20 group-hover:text-white">D3</span>
                        </div>
                    </div>
                </div>

                <Button @click="handleToFakultas('rumpun-ilmu-kebidanan')" class="w-full bg-[#008080] hover:bg-[#006666] border-none text-white" :text="langStore.t('common.read_more')" />
            </div>
        </div>

        <!-- Mobile & Tablet Accordion View -->
        <div class="lg:hidden flex flex-col gap-4">
            <!-- 1. Keperawatan -->
            <div class="w-full rounded-3xl border-2 border-gray-200 overflow-hidden bg-white shadow-xs">
                <div class="p-4 bg-gradient-to-r from-[#005EB8] to-[#004282] text-white flex justify-between items-center cursor-pointer"
                    @click="toggleFaculty('keperawatan')">
                    <div>
                        <span class="text-xs uppercase text-blue-200 font-semibold">{{ langStore.t('academics.faculty') }}</span>
                        <h3 class="text-lg font-bold">{{ langStore.t('academics.nursing_faculty') }}</h3>
                    </div>
                    <span class="text-2xl font-bold transform transition-transform" :class="expandedFaculty === 'keperawatan' ? 'rotate-180' : ''">▾</span>
                </div>
                <div v-if="expandedFaculty === 'keperawatan'" class="p-4 bg-gray-50 space-y-3">
                    <div @click="handleToProdi('s1-keperawatan')" class="p-3 bg-white border border-gray-200 rounded-xl cursor-pointer flex justify-between items-center">
                        <p class="font-semibold text-gray-800 text-sm">{{ langStore.t('study_programs_list.s1_keperawatan') }}</p>
                        <span class="text-xs font-bold text-primary">S1</span>
                    </div>
                    <div @click="handleToProdi('profesi-ners')" class="p-3 bg-white border border-gray-200 rounded-xl cursor-pointer flex justify-between items-center">
                        <p class="font-semibold text-gray-800 text-sm">{{ langStore.t('study_programs_list.profesi_ners') }}</p>
                        <span class="text-xs font-bold text-primary">Profesi</span>
                    </div>
                    <div @click="handleToProdi('d3-keperawatan')" class="p-3 bg-white border border-gray-200 rounded-xl cursor-pointer flex justify-between items-center">
                        <p class="font-semibold text-gray-800 text-sm">{{ langStore.t('study_programs_list.d3_keperawatan') }}</p>
                        <span class="text-xs font-bold text-primary">D3</span>
                    </div>
                    <Button @click="handleToFakultas('rumpun-ilmu-keperawatan')" class="w-full mt-1" :text="langStore.t('common.read_more')" />
                </div>
            </div>

            <!-- 2. Kebidanan -->
            <div class="w-full rounded-3xl border-2 border-gray-200 overflow-hidden bg-white shadow-xs">
                <div class="p-4 bg-gradient-to-r from-[#008080] to-[#005f5f] text-white flex justify-between items-center cursor-pointer"
                    @click="toggleFaculty('kebidanan')">
                    <div>
                        <span class="text-xs uppercase text-teal-200 font-semibold">{{ langStore.t('academics.faculty') }}</span>
                        <h3 class="text-lg font-bold">{{ langStore.t('academics.midwifery_faculty') }}</h3>
                    </div>
                    <span class="text-2xl font-bold transform transition-transform" :class="expandedFaculty === 'kebidanan' ? 'rotate-180' : ''">▾</span>
                </div>
                <div v-if="expandedFaculty === 'kebidanan'" class="p-4 bg-gray-50 space-y-3">
                    <div @click="handleToProdi('s1-kebidanan')" class="p-3 bg-white border border-gray-200 rounded-xl cursor-pointer flex justify-between items-center">
                        <p class="font-semibold text-gray-800 text-sm">{{ langStore.t('study_programs_list.s1_kebidanan') }}</p>
                        <span class="text-xs font-bold text-[#008080]">S1</span>
                    </div>
                    <div @click="handleToProdi('profesi-bidan')" class="p-3 bg-white border border-gray-200 rounded-xl cursor-pointer flex justify-between items-center">
                        <p class="font-semibold text-gray-800 text-sm">{{ langStore.t('study_programs_list.profesi_bidan') }}</p>
                        <span class="text-xs font-bold text-[#008080]">Profesi</span>
                    </div>
                    <div @click="handleToProdi('d3-kebidanan')" class="p-3 bg-white border border-gray-200 rounded-xl cursor-pointer flex justify-between items-center">
                        <p class="font-semibold text-gray-800 text-sm">{{ langStore.t('study_programs_list.d3_kebidanan') }}</p>
                        <span class="text-xs font-bold text-[#008080]">D3</span>
                    </div>
                    <Button @click="handleToFakultas('rumpun-ilmu-kebidanan')" class="w-full bg-[#008080] hover:bg-[#006666] border-none text-white mt-1" :text="langStore.t('common.read_more')" />
                </div>
            </div>
        </div>
    </section>
</template>