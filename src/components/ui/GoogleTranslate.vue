<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: {
          new (options: {
            pageLanguage: string;
            includedLanguages: string;
            layout: number;
          }, elementId: string): void;
          InlineLayout: {
            SIMPLE: number;
          };
        };
      };
    };
  }
}

const currentLanguage = ref({
  code: 'ID',
  name: 'Indonesia'
});

const languageMap: Record<string, string> = {
  'ID': 'Indonesia',
  'EN': 'English',
  'ES': 'Español',
  'FR': 'Français',
  'DE': 'Deutsch',
  'JA': '日本語',
  'ZH-CN': '中文',
  'AR': 'العربية',
  'RU': 'Русский'
};

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  document.head.appendChild(script);

  window.googleTranslateElementInit = () => {
    new (window as any).google.translate.TranslateElement(
      {
        pageLanguage: 'id',
        includedLanguages: 'en,es,fr,de,ja,zh-CN,ar,ru',
        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE
      },
      'google_translate_element'
    );

    setTimeout(() => {
      setupLanguageChangeListener();
      checkCurrentLanguage();
      customizeDropdownStyles();
    }, 500);
  };
});

const customizeDropdownStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    /* Main dropdown container */
    .goog-te-menu2 {
      background: white !important;
      border-radius: 12px !important;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15) !important;
      border: none !important;
      padding: 8px 0 !important;
      min-width: 180px !important;
      margin-top: 8px !important;
      transform-origin: top right;
      overflow: hidden;
      animation: fadeInScale 0.2s ease-out !important;
    }
    
    /* Dropdown items */
    .goog-te-menu2-item {
      padding: 10px 20px !important;
      font-family: 'Inter', sans-serif !important;
      color: #334155 !important;
      font-size: 14px !important;
      font-weight: 500 !important;
      transition: all 0.2s ease !important;
      display: flex !important;
      align-items: center !important;
      gap: 10px !important;
      border-left: 3px solid transparent !important;
    }
    
    /* Hover state */
    .goog-te-menu2-item:hover {
      background: #f8fafc !important;
      color: #1e40af !important;
      border-left-color: #1e40af !important;
    }
    
    /* Selected item */
    .goog-te-menu2-item-selected {
      background: #f1f5f9 !important;
      color: #1e40af !important;
      font-weight: 600 !important;
    }
    
    /* Text elements inside items */
    .goog-te-menu2-item div,
    .goog-te-menu2-item span {
      color: inherit !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
    }
    
    /* Selected text */
    .goog-te-menu2-item-selected .text {
      color: #1e40af !important;
    }
    
    /* Dropdown arrow */
    .goog-te-menu2-item:after {
      content: none !important;
    }
    
    /* Language flag icons */
    .goog-te-menu2-item img {
      width: 20px !important;
      height: 14px !important;
      object-fit: cover !important;
      border-radius: 2px !important;
    }
    
    /* Divider between items */
    .goog-te-menu2-separator {
      margin: 6px 0 !important;
      height: 1px !important;
      background: #e2e8f0 !important;
    }
    
    /* Animation */
    @keyframes fadeInScale {
      0% {
        opacity: 0;
        transform: scale(0.95) translateY(-5px);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }
    
    /* Scrollbar styling for dropdown */
    .goog-te-menu2::-webkit-scrollbar {
      width: 6px !important;
    }
    
    .goog-te-menu2::-webkit-scrollbar-track {
      background: #f1f5f9 !important;
      border-radius: 3px !important;
    }
    
    .goog-te-menu2::-webkit-scrollbar-thumb {
      background: #cbd5e1 !important;
      border-radius: 3px !important;
    }
    
    .goog-te-menu2::-webkit-scrollbar-thumb:hover {
      background: #94a3b8 !important;
    }
  `;
  document.head.appendChild(style);
};

const checkCurrentLanguage = () => {
  const langCookie = document.cookie.match(/googtrans=([^;]+)/);
  if (langCookie) {
    const langCode = langCookie[1].split('/')[2].toUpperCase();
    updateLanguageDisplay(langCode);
  }
};

const updateLanguageDisplay = (langCode: string) => {
  currentLanguage.value = {
    code: langCode,
    name: languageMap[langCode] || languageMap['ID']
  };
};

const setupLanguageChangeListener = () => {
  // Listen for language changes via cookie
  const checkCookie = () => {
    const langCookie = document.cookie.match(/googtrans=([^;]+)/);
    if (langCookie) {
      const langCode = langCookie[1].split('/')[2].toUpperCase();
      if (langCode !== currentLanguage.value.code) {
        updateLanguageDisplay(langCode);
      }
    }
  };

  // Check every 300ms for changes
  const intervalId = setInterval(checkCookie, 300);

  // Also listen for DOM changes as fallback
  const observer = new MutationObserver(() => {
    const langElement = document.querySelector('.goog-te-menu-value span:first-child');
    if (langElement) {
      const langCode = langElement.textContent?.trim().toUpperCase() || 'ID';
      if (langCode !== currentLanguage.value.code) {
        updateLanguageDisplay(langCode);
      }
    }
  });

  const target = document.querySelector('.goog-te-menu-value');
  if (target) {
    observer.observe(target, { childList: true, subtree: true });
  }

  const gadget = document.querySelector('.goog-te-gadget');

  if (gadget) {
    const googleText = gadget.querySelector('span');
    if (googleText) googleText.style.display = 'none';
  }

  onUnmounted(() => {
    clearInterval(intervalId);
    observer.disconnect();
  });
};
</script>

<template>
  <div class="google-translate-container">
    <div id="google_translate_element"></div>
  </div>
</template>

<style scoped>
.google-translate-container {
  position: fixed;
  bottom: 100px;
  right: 30px;
  z-index: 9999;
  display: flex;
  justify-items: center;
  align-items: center;
  background: white;
  padding: 14px;
  border-radius: 9999px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.google-translate-container:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.goog-te-menu2 {
  animation: fadeInScale 0.2s ease-out !important;
}


@media (max-width: 768px) {
  .google-translate-container {
    bottom: 170px;
    right: 20px;
    padding: 12px;
  }
}

@media (max-width: 1080px) {
  .google-translate-container {
    bottom: 170px;
    right: 20px;
    padding: 12px;
  }
}
</style>