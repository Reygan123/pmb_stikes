<script setup lang="ts">
import { ref, computed } from 'vue';
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

interface Fee {
  payment1: string;
  payment2: string;
}

interface StudyProgram {
  fakultasKey: string;
  fakultas: string;
  name: string;
  fees: Fee[];
}

const currentPage = ref(0);

const studyPrograms = computed<StudyProgram[]>(() => [
  // Rumpun Keperawatan
  {
    fakultasKey: 'keperawatan',
    fakultas: langStore.t('academics.nursing_dept'),
    name: langStore.t('study_programs_list.s1_keperawatan'),
    fees: [
      { payment1: "5.500.000", payment2: "3.500.000" },
      { payment1: "4.500.000", payment2: "3.500.000" },
      { payment1: "4.500.000", payment2: "3.500.000" },
      { payment1: "4.500.000", payment2: "3.500.000" },
      { payment1: "4.500.000", payment2: "3.500.000" },
      { payment1: "4.500.000", payment2: "3.500.000" },
      { payment1: "4.500.000", payment2: "3.500.000" },
      { payment1: "4.500.000", payment2: "3.500.000" }
    ]
  },
  {
    fakultasKey: 'keperawatan',
    fakultas: langStore.t('academics.nursing_dept'),
    name: langStore.t('study_programs_list.d3_keperawatan'),
    fees: [
      { payment1: "5.000.000", payment2: "3.250.000" },
      { payment1: "4.250.000", payment2: "3.250.000" },
      { payment1: "4.250.000", payment2: "3.250.000" },
      { payment1: "4.250.000", payment2: "3.250.000" },
      { payment1: "4.250.000", payment2: "3.250.000" },
      { payment1: "4.250.000", payment2: "3.250.000" }
    ]
  },
  {
    fakultasKey: 'keperawatan',
    fakultas: langStore.t('academics.nursing_dept'),
    name: langStore.t('study_programs_list.profesi_ners'),
    fees: [
      { payment1: "8.500.000", payment2: "6.500.000" },
      { payment1: "8.500.000", payment2: "6.500.000" }
    ]
  },

  // Rumpun Kebidanan
  {
    fakultasKey: 'kebidanan',
    fakultas: langStore.t('academics.midwifery_dept'),
    name: langStore.t('study_programs_list.s1_kebidanan'),
    fees: [
      { payment1: "5.500.000", payment2: "3.500.000" },
      { payment1: "4.500.000", payment2: "3.500.000" },
      { payment1: "4.500.000", payment2: "3.500.000" },
      { payment1: "4.500.000", payment2: "3.500.000" },
      { payment1: "4.500.000", payment2: "3.500.000" },
      { payment1: "4.500.000", payment2: "3.500.000" },
      { payment1: "4.500.000", payment2: "3.500.000" },
      { payment1: "4.500.000", payment2: "3.500.000" }
    ]
  },
  {
    fakultasKey: 'kebidanan',
    fakultas: langStore.t('academics.midwifery_dept'),
    name: langStore.t('study_programs_list.d3_kebidanan'),
    fees: [
      { payment1: "5.000.000", payment2: "3.250.000" },
      { payment1: "4.250.000", payment2: "3.250.000" },
      { payment1: "4.250.000", payment2: "3.250.000" },
      { payment1: "4.250.000", payment2: "3.250.000" },
      { payment1: "4.250.000", payment2: "3.250.000" },
      { payment1: "4.250.000", payment2: "3.250.000" }
    ]
  },
  {
    fakultasKey: 'kebidanan',
    fakultas: langStore.t('academics.midwifery_dept'),
    name: langStore.t('study_programs_list.profesi_bidan'),
    fees: [
      { payment1: "8.500.000", payment2: "6.500.000" },
      { payment1: "8.500.000", payment2: "6.500.000" }
    ]
  }
]);

const fakultasList = computed(() => {
  const grouped: { [key: string]: StudyProgram[] } = {};
  studyPrograms.value.forEach(program => {
    if (!grouped[program.fakultas]) {
      grouped[program.fakultas] = [];
    }
    grouped[program.fakultas].push(program);
  });
  return Object.keys(grouped).map(fakultas => ({
    name: fakultas,
    programs: grouped[fakultas]
  }));
});

const currentFakultas = computed(() => {
  return fakultasList.value[currentPage.value] || fakultasList.value[0];
});

const maxSemesters = computed(() => {
  if (!currentFakultas.value || !currentFakultas.value.programs) return 8;
  return Math.max(...currentFakultas.value.programs.map(p => p.fees.length));
});

const semesters = computed(() => {
  const termWord = langStore.t('biaya.term');
  return Array.from({ length: maxSemesters.value }, (_, i) => `${termWord} ${i + 1}`);
});

const calculateGrandTotal = (program: StudyProgram) => {
  return program.fees.reduce((total, fee) => {
    const p1 = parseInt(fee.payment1.replace(/\./g, ''));
    const p2 = parseInt(fee.payment2.replace(/\./g, ''));
    return total + p1 + p2;
  }, 0).toLocaleString('id-ID');
};

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < fakultasList.value.length - 1) {
    currentPage.value++;
  }
};
</script>

<template>
  <div class="w-full max-w-7xl mx-auto p-4">
    <div class="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
      <div class="flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-gray-50/60">
        <div>
          <span class="text-xs uppercase tracking-wider text-gray-500 font-semibold">{{ langStore.t('academics.department') }}</span>
          <h2 class="text-xl font-bold text-gray-900">{{ currentFakultas.name }}</h2>
        </div>
        <div class="flex items-center gap-2">
          <button 
            type="button"
            @click="prevPage"
            class="p-2.5 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            :disabled="currentPage === 0"
            title="Sebelumnya"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <span class="text-xs font-semibold text-gray-500 px-1">{{ currentPage + 1 }} / {{ fakultasList.length }}</span>
          <button 
            type="button"
            @click="nextPage"
            class="p-2.5 rounded-full border border-primary bg-primary hover:bg-primary-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            :disabled="currentPage === fakultasList.length - 1"
            title="Selanjutnya"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Desktop Table -->
      <div class="hidden lg:block overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-gray-200 bg-gray-100/60">
              <th rowspan="2" class="px-6 py-4 text-left font-bold text-gray-800 w-64 border-r border-gray-200">
                {{ langStore.t('common.programs') }}
              </th>
              <th 
                v-for="(semester, index) in semesters" 
                :key="index"
                colspan="2" 
                class="px-4 py-2.5 text-center font-semibold text-gray-700 border-r border-gray-200 last:border-r-0"
              >
                {{ semester }}
              </th>
              <th rowspan="2" class="px-6 py-4 text-center font-bold text-gray-900 bg-blue-50/50">
                {{ langStore.t('biaya.total') }}
              </th>
            </tr>
            <tr class="border-b border-gray-200 bg-gray-50">
              <template v-for="i in maxSemesters" :key="i">
                <th class="px-3 py-2 text-center text-xs font-medium text-gray-600 border-r border-gray-200">I</th>
                <th class="px-3 py-2 text-center text-xs font-medium text-gray-600 border-r border-gray-200">II</th>
              </template>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr 
              v-for="(program, index) in currentFakultas.programs" 
              :key="index"
              class="hover:bg-blue-50/30 transition-colors"
            >
              <td class="px-6 py-4 font-semibold text-gray-900 border-r border-gray-200">
                {{ program.name }}
              </td>
              <template v-for="i in maxSemesters" :key="i">
                <template v-if="program.fees[i - 1]">
                  <td class="px-3 py-3 text-center text-xs text-gray-700 border-r border-gray-200 whitespace-nowrap">
                    {{ program.fees[i - 1].payment1 }}
                  </td>
                  <td class="px-3 py-3 text-center text-xs text-gray-700 border-r border-gray-200 whitespace-nowrap">
                    {{ program.fees[i - 1].payment2 }}
                  </td>
                </template>
                <template v-else>
                  <td class="px-3 py-3 text-center text-gray-400 border-r border-gray-200">-</td>
                  <td class="px-3 py-3 text-center text-gray-400 border-r border-gray-200">-</td>
                </template>
              </template>
              <td class="px-6 py-4 text-center font-bold text-primary bg-blue-50/30 whitespace-nowrap">
                Rp {{ calculateGrandTotal(program) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Mobile & Tablet Cards -->
      <div class="lg:hidden divide-y divide-gray-200 p-4 space-y-4">
        <div 
          v-for="(program, index) in currentFakultas.programs" 
          :key="index"
          class="p-4 bg-gray-50/70 rounded-2xl border border-gray-200 space-y-3"
        >
          <div class="flex justify-between items-start gap-2">
            <h4 class="font-bold text-gray-900 text-base">{{ program.name }}</h4>
            <span class="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-bold whitespace-nowrap">
              Rp {{ calculateGrandTotal(program) }}
            </span>
          </div>

          <div class="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-gray-200">
            <div 
              v-for="(fee, feeIndex) in program.fees" 
              :key="feeIndex"
              class="bg-white p-2.5 rounded-xl border border-gray-100"
            >
              <p class="font-semibold text-gray-700">{{ langStore.t('biaya.term') }} {{ feeIndex + 1 }}</p>
              <p class="text-gray-500">I: Rp {{ fee.payment1 }}</p>
              <p class="text-gray-500">II: Rp {{ fee.payment2 }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>