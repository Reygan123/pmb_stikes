import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { translations, type Language } from '@/utils/translations';
import { lookupTranslation } from '@/utils/contentTranslations';

export const useLanguageStore = defineStore('language', () => {
  const savedLang = (typeof window !== 'undefined' ? localStorage.getItem('pmb_language') : null) as Language | null;
  const currentLang = ref<Language>(savedLang === 'en' ? 'en' : 'id');

  const isEnglish = computed(() => currentLang.value === 'en');

  function syncGoogleTranslate(lang: Language) {
    if (typeof window === 'undefined') return;
    try {
      if (lang === 'en') {
        document.cookie = 'googtrans=/id/en; path=/;';
        document.cookie = 'googtrans=/id/en; path=/; domain=' + window.location.hostname;
      } else {
        document.cookie = 'googtrans=/id/id; path=/;';
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname;
      }
      const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event('change'));
      }
    } catch (_) {}
  }

  function setLanguage(lang: Language) {
    currentLang.value = lang;
    if (typeof window !== 'undefined') {
      localStorage.setItem('pmb_language', lang);
      document.documentElement.lang = lang;
      syncGoogleTranslate(lang);
    }
  }

  function toggleLanguage() {
    setLanguage(currentLang.value === 'id' ? 'en' : 'id');
  }

  function t(key: string, fallback?: string): string {
    const dict = translations[currentLang.value] || translations.id;
    if (dict && dict[key]) {
      return dict[key];
    }
    if (translations.id && translations.id[key]) {
      return translations.id[key];
    }
    return fallback || key;
  }

  function loc(idText?: string | null, enText?: string | null): string {
    if (currentLang.value === 'en') {
      if (enText && enText.trim() !== '') {
        return enText;
      }
      const lookedUp = lookupTranslation(idText);
      if (lookedUp) {
        return lookedUp;
      }
    }
    return idText || '';
  }

  function formatDate(dateString?: string | null): string {
    if (!dateString) return '';
    // Handle both YYYY-MM-DD and ISO string
    const cleanDate = dateString.split('T')[0];
    const parts = cleanDate.split('-');
    if (parts.length !== 3) return dateString;

    const [year, month, day] = parts;
    const monthNamesId = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    const monthNamesEn = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const monthIndex = parseInt(month, 10) - 1;
    if (monthIndex < 0 || monthIndex > 11) return dateString;

    const dayNum = parseInt(day, 10);
    if (currentLang.value === 'en') {
      return `${monthNamesEn[monthIndex]} ${dayNum}, ${year}`;
    }
    return `${dayNum} ${monthNamesId[monthIndex]} ${year}`;
  }

  return {
    currentLang,
    isEnglish,
    setLanguage,
    toggleLanguage,
    t,
    loc,
    formatDate,
  };
});
