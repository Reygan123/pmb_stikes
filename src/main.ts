import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'

import AOS from 'aos'

import App from './App.vue'
import router from './router'
import { useLanguageStore } from './stores/language'

const head = createHead()
const app = createApp(App)
const pinia = createPinia()

AOS.init({
  once: true,
  duration: 600,
  easing: 'ease-out-cubic',
  offset: 40,
});

app.use(pinia)
app.use(router)
app.use(head)

const langStore = useLanguageStore()
app.config.globalProperties.$t = (key: string, fallback?: string) => langStore.t(key, fallback)
app.config.globalProperties.$lang = langStore
app.provide('langStore', langStore)
app.provide('t', (key: string, fallback?: string) => langStore.t(key, fallback))

app.mount('#app')
