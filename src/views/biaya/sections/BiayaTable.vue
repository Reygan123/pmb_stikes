<script setup lang="ts">
import { ref, computed } from 'vue';

interface Fee {
  payment1: string;
  payment2: string;
}

interface StudyProgram {
  fakultas: string;
  name: string;
  fees: Fee[];
}

const currentPage = ref(0);

const studyPrograms: StudyProgram[] = [
  {
    fakultas: "Ilmu Kesehatan",
    name: "Prodi DIII Keperawatan",
    fees: [
      { payment1: "7.150.000", payment2: "4.150.000" },
      { payment1: "7.150.000", payment2: "4.150.000" },
      { payment1: "7.150.000", payment2: "4.150.000" },
      { payment1: "4.150.000", payment2: "4.150.000" },
      { payment1: "4.150.000", payment2: "4.150.000" },
      { payment1: "4.150.000", payment2: "4.150.000" }
    ]
  },
  {
    fakultas: "Ilmu Kesehatan",
    name: "Prodi DIII Analis Kesehatan",
    fees: [
      { payment1: "7.150.000", payment2: "4.150.000" },
      { payment1: "7.150.000", payment2: "4.150.000" },
      { payment1: "7.150.000", payment2: "4.150.000" },
      { payment1: "4.150.000", payment2: "4.150.000" },
      { payment1: "4.150.000", payment2: "4.150.000" },
      { payment1: "4.150.000", payment2: "4.150.000" }
    ]
  },
  {
    fakultas: "Ilmu Kesehatan",
    name: "Prodi DIII Refraksi Optisi",
    fees: [
      { payment1: "7.100.000", payment2: "4.100.000" },
      { payment1: "7.100.000", payment2: "4.100.000" },
      { payment1: "7.100.000", payment2: "4.100.000" },
      { payment1: "4.100.000", payment2: "4.100.000" },
      { payment1: "4.100.000", payment2: "4.100.000" },
      { payment1: "4.100.000", payment2: "4.100.000" }
    ]
  },
  {
    fakultas: "Ilmu Kesehatan",
    name: "Prodi S1 Administrasi Rumah Sakit",
    fees: [
      { payment1: "4.750.000", payment2: "2.750.000" },
      { payment1: "4.750.000", payment2: "2.750.000" },
      { payment1: "4.750.000", payment2: "2.750.000" },
      { payment1: "2.750.000", payment2: "2.750.000" },
      { payment1: "2.750.000", payment2: "2.750.000" },
      { payment1: "2.750.000", payment2: "2.750.000" },
      { payment1: "2.750.000", payment2: "2.750.000" },
      { payment1: "2.750.000", payment2: "2.750.000" }
    ]
  },
  {
    fakultas: "Ilmu Kesehatan",
    name: "Prodi S1 Keperawatan",
    fees: [
      { payment1: "4.100.000", payment2: "3.350.000" },
      { payment1: "4.100.000", payment2: "3.350.000" },
      { payment1: "4.100.000", payment2: "3.350.000" },
      { payment1: "4.100.000", payment2: "3.350.000" },
      { payment1: "4.100.000", payment2: "3.350.000" },
      { payment1: "4.100.000", payment2: "3.350.000" },
      { payment1: "4.100.000", payment2: "3.350.000" },
      { payment1: "4.100.000", payment2: "3.350.000" }
    ]
  },
  {
    fakultas: "Farmasi",
    name: "Prodi S1 Farmasi",
    fees: [
      { payment1: "7.650.000", payment2: "3.650.000" },
      { payment1: "7.650.000", payment2: "3.650.000" },
      { payment1: "6.650.000", payment2: "3.650.000" },
      { payment1: "3.650.000", payment2: "3.650.000" },
      { payment1: "3.650.000", payment2: "3.650.000" },
      { payment1: "3.650.000", payment2: "3.650.000" },
      { payment1: "3.650.000", payment2: "3.650.000" },
      { payment1: "3.650.000", payment2: "3.650.000" }
    ]
  },
  {
    fakultas: "Farmasi",
    name: "Prodi Pendidikan Profesi Apoteker (PSPPA) - Alumni",
    fees: [
      { payment1: "20.750.000", payment2: "20.750.000" }
    ]
  },
  {
    fakultas: "Farmasi",
    name: "Prodi Pendidikan Profesi Apoteker (PSPPA) - Non Alumni",
    fees: [
      { payment1: "21.750.000", payment2: "21.750.000" }
    ]
  },
  {
    fakultas: "Farmasi",
    name: "RPL Farmasi",
    fees: [
      { payment1: "5.000.000", payment2: "2.500.000" },
      { payment1: "5.000.000", payment2: "2.500.000" },
      { payment1: "2.500.000", payment2: "2.500.000" }
    ]
  },
  {
    fakultas: "Teknologi dan Bisnis",
    name: "Prodi S1 Bisnis Digital",
    fees: [
      { payment1: "2.300.000", payment2: "1.400.000" },
      { payment1: "2.300.000", payment2: "1.400.000" },
      { payment1: "2.300.000", payment2: "1.400.000" },
      { payment1: "1.400.000", payment2: "1.400.000" },
      { payment1: "1.400.000", payment2: "1.400.000" },
      { payment1: "1.400.000", payment2: "1.400.000" },
      { payment1: "1.400.000", payment2: "1.400.000" },
      { payment1: "1.400.000", payment2: "1.400.000" }
    ]
  },
  {
    fakultas: "Teknologi dan Bisnis",
    name: "Prodi S1 Teknologi Pangan",
    fees: [
      { payment1: "2.550.000", payment2: "1.650.000" },
      { payment1: "2.550.000", payment2: "1.650.000" },
      { payment1: "2.550.000", payment2: "1.650.000" },
      { payment1: "1.650.000", payment2: "1.650.000" },
      { payment1: "1.650.000", payment2: "1.650.000" },
      { payment1: "1.650.000", payment2: "1.650.000" },
      { payment1: "1.650.000", payment2: "1.650.000" },
      { payment1: "1.650.000", payment2: "1.650.000" }
    ]
  },
  {
    fakultas: "Teknologi dan Bisnis",
    name: "Prodi S1 Kewirausahaan",
    fees: [
      { payment1: "2.300.000", payment2: "1.400.000" },
      { payment1: "2.300.000", payment2: "1.400.000" },
      { payment1: "2.300.000", payment2: "1.400.000" },
      { payment1: "1.400.000", payment2: "1.400.000" },
      { payment1: "1.400.000", payment2: "1.400.000" },
      { payment1: "1.400.000", payment2: "1.400.000" },
      { payment1: "1.400.000", payment2: "1.400.000" },
      { payment1: "1.400.000", payment2: "1.400.000" }
    ]
  },
  {
    fakultas: "Teknologi dan Bisnis",
    name: "Prodi S1 Sistem Informasi",
    fees: [
      { payment1: "2.500.000", payment2: "1.600.000" },
      { payment1: "2.500.000", payment2: "1.600.000" },
      { payment1: "2.500.000", payment2: "1.600.000" },
      { payment1: "1.600.000", payment2: "1.600.000" },
      { payment1: "1.600.000", payment2: "1.600.000" },
      { payment1: "1.600.000", payment2: "1.600.000" },
      { payment1: "1.600.000", payment2: "1.600.000" },
      { payment1: "1.600.000", payment2: "1.600.000" }
    ]
  }
];

const fakultasList = computed(() => {
  const grouped: { [key: string]: StudyProgram[] } = {};
  studyPrograms.forEach(program => {
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

const currentFakultas = computed(() => fakultasList.value[currentPage.value]);

const maxSemesters = computed(() => {
  return Math.max(...currentFakultas.value.programs.map(p => p.fees.length));
});

const semesters = computed(() => {
  return Array.from({ length: maxSemesters.value }, (_, i) => `Semester ${i + 1}`);
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
    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <h2 class="text-lg font-semibold text-gray-900">Fakultas {{ currentFakultas.name }}</h2>
        <div class="flex gap-2">
          <button 
            @click="prevPage"
            class="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="currentPage === 0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button 
            @click="nextPage"
            class="p-2 rounded-full border border-orange-500 bg-orange-500 hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="currentPage === fakultasList.length - 1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="hidden lg:block overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="bg-gray-50 border-b border-gray-200">
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-700 w-64">
                Program Studi
              </th>
              <th v-for="(semester, idx) in semesters" :key="idx" colspan="2" class="px-6 py-3 text-center text-sm font-medium text-gray-700 border-l border-gray-200">
                {{ semester }}
              </th>
              <th class="px-6 py-3 text-center text-sm font-medium text-gray-700 border-l border-gray-200">
                Total
              </th>
            </tr>
            <tr class="bg-gray-50 border-b border-gray-200">
              <th class="px-6 py-3"></th>
              <template v-for="(_, semIdx) in semesters" :key="semIdx">
                <th class="px-6 py-3 text-center text-xs font-medium text-gray-600 border-l border-gray-200">
                  Pembayaran 1
                </th>
                <th class="px-6 py-3 text-center text-xs font-medium text-gray-600">
                  Pembayaran 2
                </th>
              </template>
              <th class="px-6 py-3 text-center text-xs font-medium text-gray-600 border-l border-gray-200">
                Keseluruhan
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(program, idx) in currentFakultas.programs" :key="idx" class="border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 text-sm font-medium text-gray-900">
                {{ program.name }}
              </td>
              <template v-for="(_, semIdx) in semesters" :key="semIdx">
                <td class="px-6 py-4 text-sm text-gray-700 text-center border-l border-gray-200">
                  {{ program.fees[semIdx]?.payment1 || '-' }}
                </td>
                <td class="px-6 py-4 text-sm text-gray-700 text-center">
                  {{ program.fees[semIdx]?.payment2 || '-' }}
                </td>
              </template>
              <td class="px-6 py-4 text-sm font-bold text-gray-900 text-center border-l border-gray-200 bg-gray-50">
                {{ calculateGrandTotal(program) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="lg:hidden overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="bg-gray-50 border-b border-gray-200">
              <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Program Studi
              </th>
              <th v-for="(semester, idx) in semesters" :key="idx" colspan="2" class="px-4 py-3 text-center text-sm font-medium text-gray-700 border-l border-gray-200">
                {{ semester }}
              </th>
              <th class="px-4 py-3 text-center text-sm font-medium text-gray-700 border-l border-gray-200">
                Total
              </th>
            </tr>
            <tr class="bg-gray-50 border-b border-gray-200">
              <th class="px-4 py-3"></th>
              <template v-for="(_, semIdx) in semesters" :key="semIdx">
                <th class="px-4 py-3 text-center text-xs font-medium text-gray-600 border-l border-gray-200">
                  Pembayaran 1
                </th>
                <th class="px-4 py-3 text-center text-xs font-medium text-gray-600">
                  Pembayaran 2
                </th>
              </template>
              <th class="px-4 py-3 text-center text-xs font-medium text-gray-600 border-l border-gray-200">
                Keseluruhan
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(program, idx) in currentFakultas.programs" :key="idx" class="border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <td class="px-4 py-4 text-sm font-medium text-gray-900">
                {{ program.name }}
              </td>
              <template v-for="(_, semIdx) in semesters" :key="semIdx">
                <td class="px-4 py-4 text-sm text-gray-700 text-center border-l border-gray-200">
                  {{ program.fees[semIdx]?.payment1 || '-' }}
                </td>
                <td class="px-4 py-4 text-sm text-gray-700 text-center">
                  {{ program.fees[semIdx]?.payment2 || '-' }}
                </td>
              </template>
              <td class="px-4 py-4 text-sm font-bold text-gray-900 text-center border-l border-gray-200 bg-gray-50">
                {{ calculateGrandTotal(program) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>