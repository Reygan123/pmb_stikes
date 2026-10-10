<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { usePengumumanStore } from "@/stores/pengumuman";
import { getImageUrl } from "@/utils/imageUtils";
import { useLanguageStore } from "@/stores/language";

const pengumumanStore = usePengumumanStore();
const langStore = useLanguageStore();

const selectedCategory = ref("All");
const searchQuery = ref("");

const categories = computed(() => {
  if (langStore.currentLang === 'en') {
    return ["All", "PMB", "Academic", "Graduation", "General"];
  }
  return ["All", "PMB", "Akademik", "Kelulusan", "Umum"];
});

onMounted(async () => {
  await pengumumanStore.fetchPengumumans();
});

const handleSearch = (query: string) => {
  searchQuery.value = query;
};

defineExpose({
  handleSearch,
});

const selectCategory = (category: string) => {
  selectedCategory.value = category;
};

const filteredPengumuman = computed(() => {
  const list = pengumumanStore.pengumumans || [];
  return list.filter((item) => {
    let matchesCategory = selectedCategory.value === "All";
    if (!matchesCategory && item.category) {
      const cat = item.category.toLowerCase();
      const sel = selectedCategory.value.toLowerCase();
      matchesCategory = cat === sel || (sel === 'academic' && cat === 'akademik') || (sel === 'graduation' && cat === 'kelulusan') || (sel === 'general' && cat === 'umum');
    }

    const query = searchQuery.value.trim().toLowerCase();
    const matchesSearch =
      !query ||
      (item.title && item.title.toLowerCase().includes(query)) ||
      (item.content && item.content.toLowerCase().includes(query)) ||
      (item.location && item.location.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });
});

const formatDate = (dateStr: string | null | undefined) => {
  if (!dateStr) {
    return { dayName: "-", day: "-", monthName: "-", year: "-" };
  }
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    return { dayName: "-", day: "-", monthName: "-", year: "-" };
  }

  const isEn = langStore.currentLang === 'en';
  const daysId = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  const daysEn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsId = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
  const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const days = isEn ? daysEn : daysId;
  const months = isEn ? monthsEn : monthsId;

  const dayName = days[date.getDay()];
  const day = date.getDate().toString().padStart(2, "0");
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  return { dayName, day, monthName, year };
};

const getFileUrl = (file: string | null | undefined) => {
  if (!file) return "";
  if (file.startsWith("http://") || file.startsWith("https://")) {
    return file;
  }
  return getImageUrl(`files/${file}`);
};

const downloadFile = (file: string | null | undefined, title: string) => {
  const url = getFileUrl(file);
  if (!url) return;
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.download = `${title.replace(/[/\\?%*:|"<>]/g, "-")}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<template>
  <section
    class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col items-center gap-8 md:gap-12 lg:gap-16"
  >
    <div class="w-full h-fit flex flex-col items-center gap-8 md:gap-12 overflow-hidden">
      <!-- Category Tabs -->
      <div class="w-full flex flex-wrap justify-start items-center gap-2 md:gap-4">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          @click="selectCategory(cat)"
          :class="[
            'py-2 px-4 lg:py-3 lg:px-6 rounded-full font-medium transition-all duration-300 cursor-pointer text-sm md:text-base border',
            selectedCategory === cat
              ? 'bg-primary text-white border-primary shadow-sm'
              : 'bg-gray-100 text-gray-600 border-transparent hover:bg-gray-200',
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="pengumumanStore.loading" class="w-full py-16 flex flex-col items-center justify-center gap-4 text-gray-500">
        <div class="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p class="text-sm md:text-base">{{ langStore.t('pengumuman.loading') }}</p>
      </div>

      <!-- Announcement List -->
      <div v-else-if="filteredPengumuman.length > 0" class="w-full border-t border-gray-200 divide-y divide-gray-100">
        <div
          v-for="item in filteredPengumuman"
          :key="item.id"
          class="py-6 lg:py-8 flex flex-col gap-4 md:flex-row md:justify-between md:items-center hover:bg-blue-50/30 rounded-2xl px-2 md:px-4 transition-colors"
        >
          <div class="flex items-center gap-4 md:gap-6">
            <!-- Date Box -->
            <div
              class="py-3 px-4 md:py-4 md:px-6 rounded-2xl md:rounded-3xl space-y-1 text-center w-20 md:w-28 shrink-0 border border-primary/30 bg-primary/5 text-primary"
            >
              <h5 class="text-xs md:text-sm font-medium">
                {{ formatDate(item.start_date).dayName }}
              </h5>
              <h5 class="text-xl md:text-2xl lg:text-3xl font-bold">
                {{ formatDate(item.start_date).day }}
              </h5>
              <h5 class="text-xs md:text-sm font-medium">
                {{ formatDate(item.start_date).monthName }}
                {{ formatDate(item.start_date).year }}
              </h5>
            </div>

            <!-- Content -->
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                  {{ item.category || 'PMB' }}
                </span>
                <span v-if="item.location" class="text-xs text-gray-400">
                  • {{ item.location }}
                </span>
              </div>
              <h3 class="text-base md:text-lg lg:text-xl font-semibold text-gray-900 leading-snug">
                {{ langStore.loc(item.title, item.title_en) }}
              </h3>
              <p v-if="item.content && item.content !== item.title" class="text-sm text-gray-600 line-clamp-2">
                {{ langStore.loc(item.content, item.content_en) }}
              </p>
            </div>
          </div>

          <!-- Download Action -->
          <div class="flex items-center gap-3 shrink-0 self-end md:self-center">
            <button
              v-if="item.file"
              type="button"
              @click="downloadFile(item.file, item.title)"
              class="whitespace-nowrap py-2.5 px-5 rounded-full flex items-center gap-2 bg-primary text-white hover:bg-primary-700 transition shadow-sm cursor-pointer text-sm md:text-base font-semibold"
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
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>{{ langStore.t('pengumuman.download') }}</span>
            </button>
            <span v-else class="text-xs text-gray-400 italic">
              {{ langStore.t('pengumuman.no_attachment') }}
            </span>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="w-full py-16 text-center border-t border-gray-200">
        <div class="max-w-md mx-auto space-y-3">
          <div class="w-16 h-16 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-primary">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-gray-800">{{ langStore.t('pengumuman.empty_title') }}</h4>
          <p class="text-sm text-gray-500">
            {{ searchQuery ? (langStore.currentLang === 'en' ? 'No announcements matched your search term.' : 'Tidak ditemukan pengumuman dengan kata kunci tersebut.') : langStore.t('pengumuman.empty_desc') }}
          </p>
          <button
            v-if="searchQuery || selectedCategory !== 'All'"
            type="button"
            @click="selectedCategory = 'All'; searchQuery = ''"
            class="text-sm font-semibold text-primary hover:underline mt-2 inline-block cursor-pointer"
          >
            {{ langStore.t('common.reset_filter') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
