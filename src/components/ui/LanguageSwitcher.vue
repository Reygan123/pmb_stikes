<script setup lang="ts">
import { useLanguageStore } from '@/stores/language';

const langStore = useLanguageStore();

defineProps<{
  size?: 'sm' | 'md';
  variant?: 'light' | 'dark' | 'glass';
}>();
</script>

<template>
  <div
    class="inline-flex items-center p-1 rounded-full border transition-all duration-300 shadow-xs select-none"
    :class="[
      variant === 'dark'
        ? 'bg-gray-800/90 border-gray-700 text-white'
        : 'bg-white/90 border-gray-200/80 backdrop-blur-md text-gray-700'
    ]"
    role="group"
    aria-label="Pilih Bahasa / Language Selector"
  >
    <button
      type="button"
      @click="langStore.setLanguage('id')"
      class="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ease-out active:scale-95 cursor-pointer"
      :class="[
        langStore.currentLang === 'id'
          ? 'bg-primary text-white shadow-xs scale-102'
          : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/60'
      ]"
      title="Bahasa Indonesia"
    >
      <span class="inline-block w-5 h-5 rounded-full overflow-hidden shadow-xs border border-white/20">
        <svg viewBox="0 0 640 480" class="w-full h-full object-cover">
          <g fill-rule="evenodd" stroke-width="1pt">
            <path fill="#e70011" d="M0 0h640v240H0z"/>
            <path fill="#ffffff" d="M0 240h640v240H0z"/>
          </g>
        </svg>
      </span>
      <!-- <span>ID</span> -->
    </button>

    <button
      type="button"
      @click="langStore.setLanguage('en')"
      class="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ease-out active:scale-95 cursor-pointer"
      :class="[
        langStore.currentLang === 'en'
          ? 'bg-primary text-white shadow-xs scale-102'
          : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/60'
      ]"
      title="English"
    >
      <span class="inline-block w-5 h-5 rounded-full overflow-hidden shadow-xs border border-white/20">
        <svg viewBox="0 0 640 480" class="w-full h-full object-cover">
          <path fill="#012169" d="M0 0h640v480H0z"/>
          <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-179L0 64V0h75z"/>
          <path fill="#C8102E" d="m424 288 216 159v33h-44L380 321l44-33zM640 0v10L449 152l32 31L640 24V0zM0 480v-10l191-143-32-31L0 456v24zM0 0l215 160-44 32L0 34V0z"/>
          <path fill="#FFF" d="M240 0h160v480H240zM0 160h640v160H0z"/>
          <path fill="#C8102E" d="M272 0h96v480h-96zM0 192h640v96H0z"/>
        </svg>
      </span>
      <!-- <span>EN</span> -->
    </button>
  </div>
</template>
