import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'

import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'
import router from './router'

const head = createHead()

const app = createApp(App)

AOS.init({
  once: true, 
});

app.use(createPinia())
app.use(router)
app.use(head)

app.mount('#app')
